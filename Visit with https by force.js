// ==UserScript==
// @name         ǿ��ʹ��https
// @name:en  	Visit with https by force
// @version      0.1 Beta
// @description  ��includes�������վ��Ȼ���ڷ�����Щ��վʱ�ͻ��Զ����https
// @description:en Type the URL into 'inclide', and it will change 'http'to 'https' when you bisit thede website
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
// ==/UserScript==
/* 
*@author: 	����P Care L.
*@E-mail: 	careluu@foxmail.com
 */

if (window.location.protocol =="http:"){
    window.location.href = window.location.href.replace("http","https");
}