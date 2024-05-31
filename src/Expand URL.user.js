// ==UserScript ==
// @name         Expand Shortened URL
// @namespace    https://github.com/GreeniusGenius
// @downloadURL  https://github.com/GreeniusGenius/Browser-Userscripts/raw/master/src/Expand%20URL.user.js
// @author       Ryan Green
// @version      1.0.0
// @description  Redirects shortened tracking URLs via Expandurl.net to the expanded URL form, useful when DNS adblockers like PiHole and browser based blockers like Ublock Origin block URL shorteners.
// @match        https://go.flx1.com/click?id=*
// @match        https://tidd.ly/*
// @match        https://bit.ly/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=expandurl.net
// @grant none
// ==/UserScript==

(function() {
    'use strict';
    window.location = "https://www.expandurl.net/ext/?url=" + window.location;
    // Your code here...
})()