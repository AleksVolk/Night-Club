!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){n(1),n(2),n(3),n(4),n(5),n(6),n(7),n(8),e.exports=n(9)},function(e,t){$(document).ready((function(){document.querySelector(".header_burger")&&$(".header_burger").click((function(e){$(".header_burger, .mobile-nav").toggleClass("is-open"),$("body").toggleClass("no-scroll")}))}))},function(e,t){$(document).ready((function(){var e=document.querySelector("#btn-filter-main"),t=document.querySelector("#btn-filter-bar"),n=document.querySelector("#filter-list-main"),s=document.querySelector("#filter-list-bar");e.addEventListener("click",(function(){n.classList.toggle("menu_filters-toggle-list-active"),e.classList.toggle("btn-filters-active")})),t.addEventListener("click",(function(){s.classList.toggle("menu_filters-toggle-list-active"),t.classList.toggle("btn-filters-active")})),$(window).on("load resize",(function(){$(window).width()>992&&(!function(){for(var e=document.querySelectorAll("[data-dish]"),t=function(t){e[t].addEventListener("click",(function(){var n=this;if(this.classList.contains("menu_filters-toggle-list_item-active")){this.classList.remove("menu_filters-toggle-list_item-active");for(var s=this.getAttribute("data-dish"),a=document.querySelectorAll("[data-number]"),i=0;i<a.length;i++){a[i].getAttribute("data-number")===s&&(a[i].innerHTML="")}}else!function(){n.classList.add("menu_filters-toggle-list_item-active");for(var s=n.getAttribute("data-dish"),a=n.textContent,i=document.querySelectorAll("[data-number]"),c=0;c<i.length;c++){i[c].getAttribute("data-number")===s&&function(){var n='<li class="menu_filters-toggle-tags_item">'.concat(a,'<span class="menu_filters-tags_item-close"></span></li>');i[c].insertAdjacentHTML("afterbegin",n);for(var r=document.querySelectorAll(".menu_filters-tags_item-close"),o=function(n){r[n].addEventListener("click",(function(){var a=r[n].parentNode.parentNode.getAttribute("data-number");r[n].parentNode.remove(),a===s&&e[t].classList.remove("menu_filters-toggle-list_item-active")}))},d=0;d<r.length;d++)o(d)}()}}()}))},n=0;n<e.length;n++)t(n)}(),document.querySelectorAll("[data-drink]").forEach((function(e){e.addEventListener("click",(function(){if(e.classList.contains("menu_filters-toggle-list_item-active")){e.classList.remove("menu_filters-toggle-list_item-active");var t=e.getAttribute("data-drink");document.querySelectorAll("[data-count]").forEach((function(e){e.getAttribute("data-count")===t&&(e.innerHTML="")}))}else{e.classList.add("menu_filters-toggle-list_item-active");var n=e.getAttribute("data-drink"),s=e.textContent;document.querySelectorAll("[data-count]").forEach((function(t){if(t.getAttribute("data-count")===n){var a='<li class="menu_filters-toggle-tags_item">'.concat(s,'<span class="menu_filters-tags_item-close"></span></li>');t.insertAdjacentHTML("afterbegin",a),document.querySelectorAll(".menu_filters-tags_item-close").forEach((function(t){t.addEventListener("click",(function(){t.parentNode.remove(),e.classList.remove("menu_filters-toggle-list_item-active")}))}))}}))}}))})))})),$("[data-filter]").on("click",(function(e){e.preventDefault();var t=$(this).data("filter");"Все"==t?($("[data-cat]").removeClass("hide"),$(".show-more").removeClass("hide")):($(".show-more").addClass("hide"),$("[data-cat]").each((function(){$(this).data("cat")!=t?$(this).addClass("hide"):$(this).removeClass("hide")})))}))}))},function(e,t){$(document).ready((function(){var e=$("#headline-content").innerHeight(),t=$("#interior").innerHeight(),n=$("#photoreports-item").innerHeight(),s=$("#slider-news").innerHeight(),a=$("#header"),i=$(window).scrollTop();function c(){i>=e||i>=t||i>=n||i>=s?a.addClass("header-fixed"):a.removeClass("header-fixed")}c(),$(window).on("scroll",(function(){i=$(this).scrollTop(),c()}))}))},function(e,t){$(document).ready((function(){$(".interior_images").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".photo-cards").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".photo-cards-1").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".photo-cards-2").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}}),$(".photo-cards-3").magnificPopup({delegate:"a",type:"image",gallery:{enabled:!0}})}))},function(e,t,n){"use strict";var s=document.querySelectorAll("img[data-src], source[data-srcset]"),a=document.querySelector("._load-map"),i=document.documentElement.clientHeight,c=[];function r(){var e=c.findIndex((function(e){return pageYOffset>e-i-800}));e>=0&&(s[e].dataset.src?(s[e].src=s[e].dataset.src,s[e].removeAttribute("data-src")):s[e].dataset.srcset&&(s[e].srcset=s[e].dataset.srcset,s[e].removeAttribute("data-srcset")),delete c[e])}s.length>0&&s.forEach((function(e){(e.dataset.src||e.dataset.srcset)&&(c.push(e.getBoundingClientRect().top+pageYOffset),r())})),window.addEventListener("scroll",(function(){document.querySelectorAll("img[data-src], source[data-srcset]").length>0&&r(),a.classList.contains("_loaded")||function(){var e=a.getBoundingClientRect().top+pageYOffset;if(pageYOffset>e-i){var t=a.dataset.map;t&&(a.insertAdjacentHTML("afterbegin",'<iframe src="'.concat(t,'" width="500" height="400" frameborder="0"></iframe>')),a.classList.add("_loaded"))}}()}))},function(e,t){$(document).ready((function(){var e=document.querySelectorAll("[data-modal]"),t=document.body,n=document.querySelectorAll(".modal_close"),s=document.querySelectorAll(".modal");function a(e){e.querySelector(".modal_content").removeAttribute("style"),setTimeout((function(){e.classList.remove("show"),t.classList.remove("no-scroll")}),200)}e.forEach((function(e){e.addEventListener("click",(function(e){var n=e.currentTarget.getAttribute("data-modal"),s=document.getElementById(n),a=s.querySelector(".modal_content");a.addEventListener("click",(function(e){e.stopPropagation()})),s.classList.add("show"),t.classList.add("no-scroll"),setTimeout((function(){a.style.transform="none",a.style.opacity="1"}),1)}))})),n.forEach((function(e){e.addEventListener("click",(function(e){a(e.currentTarget.closest(".modal"))}))})),s.forEach((function(e){e.addEventListener("click",(function(e){a(e.currentTarget)}))}))}))},function(e,t){function n(e,t,n,s,a,i,c){try{var r=e[i](c),o=r.value}catch(e){return void n(e)}r.done?t(o):Promise.resolve(o).then(s,a)}function s(e){return function(){var t=this,s=arguments;return new Promise((function(a,i){var c=e.apply(t,s);function r(e){n(c,a,i,r,o,"next",e)}function o(e){n(c,a,i,r,o,"throw",e)}r(void 0)}))}}$(document).ready((function(){function e(){return(e=s(regeneratorRuntime.mark((function e(n){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n.classList.contains("_hold")){e.next=17;break}return n.classList.add("_hold"),"assets/json/products.json",e.next=5,fetch("assets/json/products.json",{method:"GET"});case 5:if(!(s=e.sent).ok){e.next=15;break}return e.next=9,s.json();case 9:t(e.sent),n.classList.remove("_hold"),n.remove(),e.next=16;break;case 15:alert("Ошибка");case 16:case 17:case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function t(e){var t=document.querySelector(".menu_dishes--dishes");e.products.forEach((function(e){var n=e.id,s=e.url,a=e.image,i=e.title,c=e.kcal,r=e.nutr,o=e.price,d=e.cat,l='\n            <a href="#'.concat(s,'" class="menu_dishes-card" data-pid="').concat(n,'" data-cat="').concat(d,'">\n            <div class="menu_dishes-card_img"><img src="').concat(a,'" alt=""></div>\n            <div class="menu_dishes-card_info">\n                <div class="menu_dishes-card_name">').concat(i,'</div>\n                <div class="menu_dishes-card_kcal">\n               \n                    <span><b>Ккал</b>: ').concat(r,"</span>\n                    <span><b>БЖУ</b>:  ").concat(c,'</span>\n                </div>\n                <div class="menu_dishes-card_more">\n                    <div class="menu_dishes-card_price"><b>').concat(o,'</b>/100<span>г</span>.</div>\n                    <button class="btn btn-red menu_dishes-card_btn">Подробнее</button>\n                </div>\n            </div>\n            </a>\n        '),u='\n        <div class="menu_dishes-card--open" id="'.concat(s,'">\n        <div class="menu_dishes-card_img menu_dishes-card_img--open"><img src="').concat(a,'" alt=""></div>\n        <div class="menu_dishes-card_info menu_dishes-card_info--open">\n            <div class="menu_dishes-card_name menu_dishes-card_name--open">').concat(i,'</div>\n            <div class="menu_dishes-card_kcal menu_dishes-card_kcal--open">\n                <span><b>Ккал</b>: ').concat(r,"</span>\n                <span><b>БЖУ</b>: ").concat(c,'</span>\n            </div>\n           <div class="menu_dishes-card_description">\n                Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции\n                обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.\n                Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности\n                представляет собой интересный эксперимент проверки форм развития.\n            </div>\n            <div class="menu_dishes-card_price menu_dishes-card_price--open"><b>').concat(o,'</b>/100<span>г</span>.</div>\n            <ul class="menu_dishes-card_filters">\n                <li class="menu_dishes-card_filters-item vegan">').concat(d,'</li>\n                <li class="menu_dishes-card_filters-item">Выбор шефа</li>\n                <li class="menu_dishes-card_filters-item">Популярное</li>\n                <li class="menu_dishes-card_filters-item">Блюда до 400₽</li>\n            </ul>\n        </div>\n        <button class="btn menu_dishes-card_close"></button>\n</div>  \n        ');t.insertAdjacentHTML("beforeend",l),t.insertAdjacentHTML("beforeend",u),$(".menu_dishes-card").click((function(e){e.preventDefault(),$(".menu_dishes-card--open").removeClass("menu_dishes-card--open-active"),$($(this).attr("href")).addClass("menu_dishes-card--open-active")})),$(".menu_dishes-card_close").click((function(){$(".menu_dishes-card--open").removeClass("menu_dishes-card--open-active")}))}))}function n(){return(n=s(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.classList.contains("_hold")){e.next=17;break}return t.classList.add("_hold"),"assets/json/products.json",e.next=5,fetch("assets/json/products.json",{method:"GET"});case 5:if(!(n=e.sent).ok){e.next=15;break}return e.next=9,n.json();case 9:a(e.sent),t.classList.remove("_hold"),t.remove(),e.next=16;break;case 15:alert("Ошибка");case 16:case 17:case 18:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(e){var t=document.querySelector(".menu_dishes--drinks");e.drinks.forEach((function(e){e.id;var n=e.url,s=e.image,a=e.title,i=e.composition,c=e.price,r=e.cat,o='\n            \n            <a href="#'.concat(n,'" class="menu_dishes-card" data-cat="').concat(r,'">\n                <div class="menu_dishes-card_img"><img src="').concat(s,'" alt=""></div>\n                    <div class="menu_dishes-card_info menu_dishes-card_info--bar">\n                        <div class="menu_dishes-card_name menu_dishes-card_name--bar">').concat(a,'</div>\n                        <div class="menu_dishes-card_kcal menu_dishes-card_kcal--bar">\n                               ').concat(i,'\n                        </div>\n                        <div class="menu_dishes-card_more">\n                            <div class="menu_dishes-card_price"><b>').concat(c,'</b>/100<span>г</span>.</div>\n                            <button class="btn btn-red menu_dishes-card_btn">Подробнее</button>\n                        </div>\n                    </div>\n            </a>\n        \n        '),d='\n        <div class="menu_dishes-card--open" id="'.concat(n,'">\n        <div class="menu_dishes-card_img menu_dishes-card_img--open"><img src="').concat(s,'" alt=""></div>\n        <div class="menu_dishes-card_info menu_dishes-card_info--open">\n            <div class="menu_dishes-card_name menu_dishes-card_name--open">').concat(a,'</div>\n            <div class="menu_dishes-card_kcal menu_dishes-card_kcal--open">\n            ').concat(i,'\n            </div>\n           <div class="menu_dishes-card_description">\n                Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции\n                обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.\n                Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности\n                представляет собой интересный эксперимент проверки форм развития.\n            </div>\n            <div class="menu_dishes-card_price menu_dishes-card_price--open"><b>').concat(c,'</b>/100<span>г</span>.</div>\n            <ul class="menu_dishes-card_filters">\n                <li class="menu_dishes-card_filters-item">Популярные коктейли</li>\n            </ul>\n        </div>\n        <button class="btn menu_dishes-card_close"></button>\n</div>  \n        ');t.insertAdjacentHTML("beforeend",o),t.insertAdjacentHTML("beforeend",d),$(".menu_dishes-card").click((function(e){e.preventDefault(),$(".menu_dishes-card--open").removeClass("menu_dishes-card--open-active"),$($(this).attr("href")).addClass("menu_dishes-card--open-active")})),$(".menu_dishes-card_close").click((function(){$(".menu_dishes-card--open").removeClass("menu_dishes-card--open-active")}))}))}document.querySelector("#show-more-dishes").addEventListener("click",(function(t){console.log("Ура! Все получилось!"),function(t){e.apply(this,arguments)}(t.target)})),document.querySelector("#show-more-drinks").addEventListener("click",(function(e){console.log("Ура! Все получилось!"),function(e){n.apply(this,arguments)}(e.target)}))}))},function(e,t){$(document).ready((function(){document.querySelector("#aboutUs-slider")&&$("#aboutUs-slider").slick({dots:!0,autoplay:!0}),document.querySelector("#news-promo-slider")&&$("#news-promo-slider").slick({dots:!0,autoplay:!0,slidesToShow:4,responsive:[{breakpoint:1200,settings:{arrows:!1,dots:!1,autoplay:!1,slidesToShow:3.5,initialSlide:1.5}},{breakpoint:576,settings:{arrows:!1,dots:!1,autoplay:!1,slidesToShow:3.5,initialSlide:1.5}}]})}))},function(e,t){$(document).ready((function(){$(".menu_nav-item").click((function(e){e.preventDefault(),$(".menu_nav-item").removeClass("menu_nav-item--active"),$(".menu_cards-item").removeClass("menu_cards-item--active"),$(this).addClass("menu_nav-item--active"),$($(this).attr("href")).addClass("menu_cards-item--active")})),$(".menu_nav-item:first").click(),$(".menu_dishes-card").click((function(e){e.preventDefault(),$(".menu_dishes-card--open").removeClass("menu_dishes-card--open-active"),$($(this).attr("href")).addClass("menu_dishes-card--open-active")})),$(".menu_dishes-card_close").click((function(){$(".menu_dishes-card--open").removeClass("menu_dishes-card--open-active")}))}))}]);