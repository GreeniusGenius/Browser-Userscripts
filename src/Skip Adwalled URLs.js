// ==UserScript ==
// @name         Skip Adwalled URLs
// @namespace    https://github.com/GreeniusGenius
// @downloadURL  https://github.com/GreeniusGenius/Browser-Userscripts/raw/master/src/Skip%20Adwalled%20URLs.js
// @author       Ryan Green
// @version      1.0.0
// @description  Redirects shortened advert and tracking URLs via adbypass.org to the expanded URL form, useful when DNS adblockers like PiHole and browser based blockers like Ublock Origin block URL shorteners. This version is a lot less complicated than the original author's version.
// @match        *://*linkvertise.com/*
// @match        *://*linkvertise.net/*
// @match        *://*link-to.net/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://linkvertise.com/search*
// @exclude      *://linkvertise.com/login*
// @exclude      *://linkvertise.com/profile*
// @exclude      *://blog.linkvertise.com
// @exclude      *://blog.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/vendor/*
// @exclude      *://publisher.linkvertise.com/*
// @exclude      *://link-mutation.linkvertise.com/*
// @exclude      *://linkvertise.com/assets/external/thinksuggest*
// @icon https://www.google.com/s2/favicons?sz=64&domain=adbypass.org
// @grant CC BY-NC 4.0 (https://creativecommons.org/licenses/by-nc/4.0/) - Based upon Bypass.city Team's Linkvertise Bypass Script
// @license
// ==/UserScript==

 var ping1 = () => {
     try {
         const data = jsonFetch(
             "https://bypass.city/.well-known/ping.json",
             {
                 method: "GET",
                 headers: {
                     "Content-Type": "application/json"
                 }
             }
         );
         return true;
     } catch (e) {
         return false;
     }
 };

 var ping2 = () => {
     try {
         const data = jsonFetch(
             "https://adbypass.org/.well-known/ping.json",
             {
                 method: "GET",
                 headers: {
                     "Content-Type": "application/json"
                 }
             }
         );
         return true;
     } catch (e) {
         return false;
     }
 };

 if (ping1 === true) {
     (function () {
         'use strict';
         window.location = "https://bypass.city/bypass?bypass=" + window.location;
     })()
 }
 else if (ping2 === true) {
     (function() {
    'use strict';
    window.location = "https://adbypass.org/bypass?bypass=" + window.location;
    })()
}
else {
    // Do a whole lot of nothing
    // None of these sites are reachable so ....
}


