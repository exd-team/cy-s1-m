// ==UserScript==
// @name         S1-M-H
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.speedtest.net/
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @run-at       document-start
// @grant        none
// ==/UserScript==

window.addEventListener("DOMContentLoaded",function(){!function(){"use strict";var e,t,i;let d=/^https?:\/\/www\.speedtest\.net\/result\/\d+$/;function n(){var t=document.querySelector("#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.main-view > div > div.result-area.result-area-test > div > div > div.result-container-speed.result-container-speed-active > div:nth-child(4) > div > div > div.pure-u-1-2.u-c.eot-info-test > div:nth-child(3) > div.result-label.js-data-isp"),i=document.querySelector("#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.main-view > div > div.result-area.result-area-test > div > div > div.result-container-speed.result-container-speed-active > div:nth-child(4) > div > div > div.pure-u-1-2.u-c.eot-info-test > div:nth-child(3) > div.result-data.js-data-ip");t.textContent="Cyta",i.textContent="212.31.126.209",e=window.location.href}t=setInterval(function e(){console.log("Started script");let i=document.querySelector("#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.main-view > div > div.result-area.result-area-connection > div > div.pure-u-5-12.u-c.result-item-container-align-right > div > div.ispComponent > div > div.result-label"),d=document.querySelector("#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.main-view > div > div.result-area.result-area-connection > div > div.pure-u-5-12.u-c.result-item-container-align-right > div > div.ispComponent > div > div.result-data");i&&d&&(i.textContent="Cyta",d.textContent="212.31.126.209",clearInterval(t))},-500);let v=document.querySelector("#container > div > div.main-content > div > div > div > div.pure-u-custom-speedtest > div.speedtest-container.main-row > div.start-button > a > span.start-text");v.addEventListener("click",function(){i=setInterval(n,500),d.test(e)&&clearInterval(i)})}()});
