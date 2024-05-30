// ==UserScript==
// @name         Redirect Paywalled Sites to Archive.Today
// @namespace    https://github.com/GreeniusGenius
// @version      1.0.0
// @description  Redirects NYTimes, WSJ etc. to archive.today (also .is, .ph etc.) so there is no paywall!!
// @author       Mokshsinghji via https://gist.github.com/mokshsinghji/fea83081c00c1ed8693faed33bf2c531
// @author       Modified by Ryan Green
// @match        https://www.nytimes.com/*
// @match        https://nytimes.com/*
// @exclude      https://www.nytimes.com/puzzles/*
// @exclude      https://nytimes.com/puzzles/*
// @exclude      https://www.nytimes.com/games/*
// @match        https://www.haaretz.com/*
// @match        https://www.wsj.com/*
// @match        https://wsj.com/*
// @match        https://www.ft.com/content/*
// @match        https://ft.com/content/*
// @match        https://www.thetimes.co.uk/article/*
// @match        https://thetimes.co.uk/article/*
// @match        https://www.spectator.co.uk/article/*
// @match        https://spectator.co.uk/article/*
// @match        https://www.motorsportmagazine.com/articles/*
// @match        https://www.newscientist.com/article/mg*
// @match        https://www.motorsport.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=archive.today
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    window.location = "https://archive.today/" + window.location;
    // Your code here...
})()