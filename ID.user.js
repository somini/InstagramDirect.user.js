// ==UserScript==
// @name        Instagram Photo Redirector
// @namespace   somini
// @description Just show me the photo!
// @include     http://instagram.com/p/*
// @version     1.0
// @run-at      document-start
// @grant       none
// ==/UserScript==

var url = document.head.querySelector('meta[property="og:image"]').content
window.location = url;
