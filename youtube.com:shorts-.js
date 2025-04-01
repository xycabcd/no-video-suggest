// ==UserScript==
// @name         Block Youtube Shorts
// @description  Jump back to where you are from when you open youtube.com/shorts
// @match        *://www.youtube.com/shorts/*
// @grant        none
// @version      1.0
// ==/UserScript==

(function() {
    'use strict';
    function a() {
        window.history.back();
        setTimeout(a,500);
    }
    a();
})();
