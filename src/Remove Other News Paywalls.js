// ==UserScript==
// @name         Redirect New Civil Engineer to 12ft.io
// @namespace    https://github.com/GreeniusGenius
// @downloadURL  https://github.com/GreeniusGenius/Browser-Userscripts/raw/master/src/Remove%20Other%20News%20Paywalls.js
// @version      1.0.0
// @description  Redirects Motorsport to 12ft.io so there is no paywall!!
// @author       Mokshsinghji via https://gist.github.com/mokshsinghji/fea83081c00c1ed8693faed33bf2c531
// @author       Modified by Ryan Green
// @match        https://www.newcivilengineer.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=newcivilengineer.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location = "https://12ft.io/" + window.location;
    // Your code here...
})()