// ==UserScript==
// @name         bilibili删除推荐列表
// @description  删除bilibili视频播放界面左边的推荐视频
// @match        *://*.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// @versioni     1.0
// ==/UserScript==

(function() {
    'use strict';
    
    let recList;
    let recButton;
    let recListDisplay = 'none'
    let recButtonDisplay = 'none'
    
    function do() {
        {
            const elements = document.getElementsByClassName("rec-list")
            if (elements.length == 1) {
                elements.forEach(element_ => {
                    recList = element_;
                    
                });
            }
        }
        {
            const elements = document.getElementsByClassName("rec-footer")
            if (elements.length == 1) {
                elements.forEach(element_ => {
                    recButton = element_;
                 
                });
                
            }
        }
        recList.style.display = recListDisplay;
        recButton.style.display = recButtonDisplay;
    }
    
    /*
    function checkElementsPeriodically() {
        doHide();
        setTimeout(checkElementsPeriodically, 500);
    }
    */
    do()
})();
