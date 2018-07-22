// ==UserScript==
// @name         强制使用https
// @name:en  	Visit with https by force
// @version      0.1 Beta
// @description  在includes里添加网站，然后在访问这些网站时就会自动变成https
// @description:en Type the URL into 'inclide', and it will change 'http'to 'https' when you Visit the website
// @author       Care L.
// @namespace	https://weibo.com/CareKun
// @grant       GM_xmlhttpRequest
// @icon        https://tva1.sinaimg.cn/crop.821.0.853.853.180/ed8fdad3jw8esdwbbj7xtj21hc0xce0v.jpg
// @include		*://weibo.com/*
// @include		*://acg.tv/*
// @include		*://*.bilibili.com/*
// @include		*://www.pixiv.net/*
// @include		*://www.pixivision.net/*
// @include		*://static.hdslb.com/*
// @include		*://github.com/*
// @include		*://www.acfun.cn/*
// @connect     i.pximg.net
// @connect     i1.pixiv.net
// @connect     i2.pixiv.net
// @connect     i3.pixiv.net
// @connect     i4.pixiv.net
// @connect     i5.pixiv.net
// @connect     imgaz.pixiv.net

// @exclude     *://*.163.com/*
// ==/UserScript==
/* 
*@author: 	智能P Care L.
*@E-mail: 	careluu@foxmail.com
 */

if (window.location.protocol =="http:"){
    window.location.href = window.location.href.replace("http","https");
}
