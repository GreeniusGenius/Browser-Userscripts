// ==UserScript==
// @match       https://userscripts.org/*
// @match       http://userscripts.org/*
// @name        Userscripts.org to Userscripts-MIRROR.org
// @exclude     https://userscripts-mirror.org/*
// @exclude     http://userscripts-mirror.org/*
// @namespace   us.greeni.UserscriptsToMirror
// @author      n-scripts via https://userscripts-mirror.org/scripts/review/487275, greeniusgenius
// @version     2.0
// @grant       none
// ==/UserScript==
/*
The purpose of the simple rewrite of the script, whilst using the existing regex is to improve performance and improve security.
The script I based this upon, runs on all web pages, and refactors any links out to userscripts.org to the mirror site.
This script takes the different approach of refactoring the URL once on userscripts.org, which means it only runs when it needs to.
 */

const userscriptOrgRegEx = (/https?:\/\/userscripts\.org/)
const userscriptMirrorURL = ("http://userscripts-mirror.org")

if (window.location.href.match(userscriptOrgRegEx)){
    window.location.href = window.location.href.replace(userscriptOrgRegEx, userscriptMirrorURL);
}

