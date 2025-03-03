// ==UserScript==
// @name         youtube删除推荐列表
// @description  删除youtube视频播放界面左边的推荐视频
// @match        *://www.youtube.com/watch?*
// @grant        none
// @version      1.0
// ==/UserScript==

(function() {
    'use strict';
    function a() {
        let sidebar
        {
            let father = document.getElementById("secondary-inner")
            if(father == null) {
                setTimeout(a, 500)
                return
            }
            for (var i = 0; i < father.children.length; i++) {
                const thisElement = father.children[i]
                if(thisElement.id == 'related') {
                    sidebar = thisElement
                }
            }
        }
        sidebar.style.display = 'none'
    }
    a();
})()