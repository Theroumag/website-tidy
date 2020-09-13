// ==UserScript==
// @name         Debloat GuidedHacking forum
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  De-bloat the guidedhacking forum page
// @author       You
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @match        http*://guidedhacking.com/threads/*
// @match        http*://guidedhacking.com/forums/*
// @run-at       document-end
// @grant        none
// ==/UserScript==

jQuery('#fullwidth_slider').remove()
jQuery('center')[0].remove()
jQuery('.js-bottomFixTarget').remove()
jQuery('.Xenuyari-Govde').remove()
// Happens to match only ads
jQuery('center').remove()
