parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"WgT8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;const e="https://pixabay.com/api/",t="22993210-edd192b19fd9d2ee0b0d8e9c4";function o(o,a){return fetch(`${e}?image_type=photo&orientation=horizontal&q=${o}&page=${a}&per_page=12&key=${t}`).then(e=>e.json())}var a=o;exports.default=a;
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=t(require("./apiService"));function t(e){return e&&e.__esModule?e:{default:e}}const n={container:document.querySelector(".container"),gallery:document.querySelector(".gallery"),searchBtn:void 0,searchForm:void 0,loadMoreBtn:void 0};let a=1,l="";function r(){n.container.insertAdjacentHTML("afterbegin",'\n  <form class="search" >\n    <input class="search__input" type="text" name="query" autocomplete="off" placeholder="Enter word" />\n    <button type="submit" class="search__btn">Search</button>\n   </form>')}function o(t){t.preventDefault(),l=t.currentTarget.elements.query.value.trim(),t.currentTarget.elements.query.value="",a=1,l&&(n.gallery.childNodes.length&&(n.gallery.innerHTML="",n.loadMoreBtn.remove()),(0,e.default)(l,a).then(e=>s(e)).then(i).catch(e=>console.log(e)))}function s({hits:e}){const t=e.map(({webformatURL:e,likes:t,views:n,comments:l,downloads:r,tags:o},s)=>`\n      <li class="gallery__item" data-page='${a}'>\n        <div class="gallery__img-wrapper">\n          <img  class="gallery__img" src="${e}" alt="${o}" />\n        </div>\n        <div class="gallery__stats-wrapper">\n          <p class="gallery__stats">\n            <i class="material-icons">thumb_up</i>\n            ${t}\n          </p>\n          <p class="gallery__stats">\n            <i class="material-icons">visibility</i>\n            ${n}\n          </p>\n          <p class="gallery__stats">\n            <i class="material-icons">comment</i>\n            ${l}\n          </p>\n          <p class="gallery__stats">\n            <i class="material-icons">cloud_download</i>\n            ${r}\n          </p>\n        </div>\n      </li>`).join(" ");n.gallery.insertAdjacentHTML("beforeend",t)}function c(t){a+=1,(0,e.default)(l,a).then(e=>s(e)).then(u).catch(e=>console.log(e))}function i(){n.gallery.insertAdjacentHTML("afterend",'<button class="load-more-button">Load more</button>'),n.loadMoreBtn=document.querySelector(".load-more-button"),n.loadMoreBtn.addEventListener("click",c)}function u(){let e=document.querySelector(`[data-page='${a}']`);e.scrollIntoView({block:"start",behavior:"smooth"}),console.log("newImages = ",e)}r(),n.searchForm=document.querySelector(".search"),n.searchForm.addEventListener("submit",o);
},{"./apiService":"WgT8"}]},{},["Focm"], null)
//# sourceMappingURL=/julia/src.fba0d4e4.js.map