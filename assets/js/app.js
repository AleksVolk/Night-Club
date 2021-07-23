/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/assets/js/burger-menu.js":
/*!**************************************!*\
  !*** ./src/assets/js/burger-menu.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$(document).ready(function(){\r\n    \r\n    $('.header_burger').click(function(event){\r\n        $('.header_burger, .mobile-nav').toggleClass('is-open');\r\n        $('body').toggleClass('no-scroll');\r\n    });\r\n  \r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/burger-menu.js?");

/***/ }),

/***/ "./src/assets/js/filtres.js":
/*!**********************************!*\
  !*** ./src/assets/js/filtres.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n    $(document).ready(function(){\r\n            let stopMe = true;\r\n\r\n            const btnFilterMain = document.querySelector('#btn-filter-main');\r\n            const btnFilterBar = document.querySelector('#btn-filter-bar');\r\n            const filterListMain = document.querySelector('#filter-list-main');\r\n            const filterListBar = document.querySelector('#filter-list-bar');\r\n            const filterTagsMain = document.querySelector('#tags-main');\r\n          \r\n           // const filterTagsBar = document.querySelector('#tags-bar');\r\n\r\n            btnFilterMain.addEventListener('click', ()=>{\r\n                filterListMain.classList.toggle('menu_filters-toggle-list-active');\r\n                btnFilterMain.classList.toggle('btn-filters-active');\r\n                \r\n            });\r\n            \r\n            btnFilterBar.addEventListener('click', ()=>{\r\n                filterListBar.classList.toggle('menu_filters-toggle-list-active');\r\n                btnFilterBar.classList.toggle('btn-filters-active');\r\n            });\r\n            function addFilterDish(){\r\n                const listDishes = document.querySelectorAll('[data-dish]');\r\n            \r\n                listDishes.forEach(function(e){\r\n                    e.addEventListener('click', function(){\r\n                        if(!e.classList.contains('menu_filters-toggle-list_item-active')){\r\n                            e.classList.add('menu_filters-toggle-list_item-active');\r\n                            let dishNumber = e.getAttribute('data-dish');\r\n                            let dishName = e.textContent;\r\n                            const dishesTags = document.querySelectorAll('[data-number]');\r\n                            \r\n                            dishesTags.forEach(function(item){\r\n                            \r\n                            let activeTag = item.getAttribute('data-number');\r\n                                if(activeTag === dishNumber){\r\n                                   \r\n                                    let tag = `<li class=\"menu_filters-toggle-tags_item\">${dishName}<span class=\"menu_filters-tags_item-close\"></span></li>`;\r\n                                    item.insertAdjacentHTML('afterbegin', tag);    \r\n                                    const filterCloses = document.querySelectorAll('.menu_filters-tags_item-close');\r\n                                    filterCloses.forEach(function(cross){\r\n                           \r\n                                         cross.addEventListener('click', function(){\r\n                                             cross.parentNode.remove();\r\n                                             e.classList.remove('menu_filters-toggle-list_item-active');\r\n                                         });\r\n                                     });  \r\n                                }; \r\n                            });\r\n                        }else{  \r\n                            e.classList.remove('menu_filters-toggle-list_item-active');\r\n                            let dishNumber = e.getAttribute('data-dish');\r\n                            const dishesTags = document.querySelectorAll('[data-number]');\r\n        \r\n                            dishesTags.forEach(function(item){\r\n                            \r\n                            let activeTag = item.getAttribute('data-number');\r\n                                if(activeTag === dishNumber){\r\n                                    item.innerHTML = '';\r\n                                    }; \r\n                                });\r\n                                \r\n                            };\r\n                            \r\n                        });\r\n                        \r\n                       \r\n                       \r\n                });\r\n            };\r\n\r\n            function addFilterDrink(){\r\n                const listDrinks = document.querySelectorAll('[data-drink]');\r\n            \r\n                listDrinks.forEach(function(e){\r\n                    e.addEventListener('click', function(){\r\n                        if(!e.classList.contains('menu_filters-toggle-list_item-active')){\r\n                            e.classList.add('menu_filters-toggle-list_item-active');\r\n                            let dishNumber = e.getAttribute('data-drink');\r\n                            let dishName = e.textContent;\r\n                            const drinksTags = document.querySelectorAll('[data-count]');\r\n                            \r\n                            drinksTags.forEach(function(item){\r\n                            \r\n                            let activeTag = item.getAttribute('data-count');\r\n                                if(activeTag === dishNumber){\r\n                                   \r\n                                    let tag = `<li class=\"menu_filters-toggle-tags_item\">${dishName}<span class=\"menu_filters-tags_item-close\"></span></li>`;\r\n                                    item.insertAdjacentHTML('afterbegin', tag);\r\n                                  \r\n                                    const filterCloses = document.querySelectorAll('.menu_filters-tags_item-close');\r\n                                    filterCloses.forEach((cross)=>{\r\n                                        cross.addEventListener('click', function(){\r\n                                            cross.parentNode.remove();\r\n                                            e.classList.remove('menu_filters-toggle-list_item-active');\r\n                                        });\r\n                                    });\r\n                                }; \r\n                            });\r\n                        }else{  \r\n                            e.classList.remove('menu_filters-toggle-list_item-active');\r\n                            let dishNumber = e.getAttribute('data-drink');\r\n                            const drinksTags = document.querySelectorAll('[data-count]');\r\n        \r\n                            drinksTags.forEach(function(item){\r\n                            \r\n                            let activeTag = item.getAttribute('data-count');\r\n                                if(activeTag === dishNumber){\r\n                                    item.innerHTML = '';\r\n                                }; \r\n                            });\r\n                            };\r\n                        });\r\n                });\r\n            };\r\n                \r\n            \r\n            \r\n        \r\n         $(window).on('resize', function() {\r\n                if ($(window).width() > 992) {\r\n                    //addFilterDish();\r\n                }else{\r\n                   // stopMe = false;\r\n                }; \r\n          });\r\n          addFilterDish();\r\n          addFilterDrink();\r\n             \r\n        \r\n\r\n\r\n        \r\n\r\n        function filterDishes(){\r\n            let filter = $(\"[data-filter]\");\r\n            filter.on('click', function(e){\r\n                e.preventDefault();\r\n               let cat = $(this).data('filter');\r\n    \r\n               console.log(cat);\r\n    \r\n               \r\n    \r\n               if(cat == 'Все'){\r\n                $(\"[data-cat]\").removeClass('hide');\r\n                $('.show-more').removeClass('hide');\r\n                }else{\r\n                    $('.show-more').addClass('hide');\r\n                $(\"[data-cat]\").each(function(){\r\n                    let activeCat = $(this).data('cat');\r\n        \r\n        \r\n                    if(activeCat != cat){\r\n                        $(this).addClass('hide');\r\n                    }else{\r\n                        $(this).removeClass('hide');\r\n                    }\r\n        \r\n                    //console.log(activeCat);\r\n                });\r\n                };\r\n            });\r\n        };\r\n        filterDishes();\r\n      \r\n    });\r\n\r\n/*\r\n\r\n\r\nconst filterCloses = document.querySelectorAll('.menu_filters-tags_item-close');\r\n                                    filterCloses.forEach((cross)=>{\r\n                                        cross.addEventListener('click', function(){\r\n                                            console.log(cross.parentNode)\r\n                                            cross.parentNode.remove();\r\n            \r\n                                           \r\n                                           // e.classList.remove('menu_filters-toggle-list_item-active');\r\n                                            \r\n\r\n                                        });\r\n                                    });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n const listDishes = document.querySelectorAll('[data-dish]');\r\n            //console.log(listChildren)\r\n            listDishes.forEach(function(e){\r\n                e.addEventListener('click', function(){\r\n                    e.classList.add('menu_filters-toggle-list_item-active');\r\n                    let dishNumber = e.getAttribute('data-dish');\r\n                    let dishName = e.textContent;\r\n                    console.log(dishNumber)\r\n                    //console.log(dishName)\r\n\r\n                    const dishesTags = document.querySelectorAll('[data-number]');\r\n\r\n                    dishesTags.forEach(function(item){\r\n                        let activeTag = item.getAttribute('data-number');\r\n                        //console.log(activeTag);\r\n                        if(activeTag === dishNumber){\r\n                            let tag = `<li class=\"menu_filters-toggle-tags_item\">${dishName}<span class=\"menu_filters-tags_item-close\"></span></li>`;\r\n                            item.insertAdjacentHTML('afterbegin', tag);\r\n\r\n                            const filterCloses = document.querySelectorAll('.menu_filters-tags_item-close');\r\n                    \r\n                            filterCloses.forEach((cross)=>{\r\n                                cross.addEventListener('click', function(){\r\n                                    cross.parentNode.remove();\r\n                                   e.classList.remove('menu_filters-toggle-list_item-active');\r\n                                });\r\n                            });\r\n                            if(e.classList.contains('menu_filters-toggle-list_item-active')){\r\n                                e.addEventListener('click', function(){\r\n                                    e.classList.remove('menu_filters-toggle-list_item-active');\r\n                                    item.remove();\r\n                                });\r\n                            }else{\r\n                               \r\n                            }\r\n                        };\r\n                        \r\n                    });\r\n                    \r\n                });\r\n            });\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nfilterListItems.forEach((event)=>{\r\n    \r\n        event.addEventListener('click', (event)=>{\r\n\r\n            const activeItem = event.currentTarget;\r\n           \r\n\r\n            activeItem.classList.toggle('menu_filters-list_item-active');\r\n\r\n            let tagContent = event.currentTarget.innerHTML;\r\n            const tag = `<li class=\"menu_filters-tags_item\">${tagContent}<span class=\"menu_filters-tags_item-close\"></span></li>`;\r\n           \r\n            filterTags.insertAdjacentHTML('beforeend', tag);\r\n            \r\n            const filterCloses = document.querySelectorAll('.menu_filters-tags_item-close');\r\n\r\n            filterCloses.forEach((cross)=>{\r\n                cross.addEventListener('click', ()=>{\r\n                    closeTag(cross);\r\n                   \r\n\r\n                });\r\n            });\r\n          \r\n            function closeTag(tag){\r\n                tag.parentNode.remove();\r\n                activeItem.classList.remove('menu_filters-list_item-active');\r\n                console.log(activeItem)\r\n               // if(activeItems > 1){\r\n                //    console.log('о да!')\r\n               // }\r\n            };\r\n        });\r\n\r\n});*/\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/filtres.js?");

/***/ }),

/***/ "./src/assets/js/fixed-header.js":
/*!***************************************!*\
  !*** ./src/assets/js/fixed-header.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$(document).ready(function(){\r\n\r\n    let headerContentH = $(\"#headline-content\").innerHeight();\r\n    let interiorContentH = $(\"#interior\").innerHeight();\r\n    let photosItemContentH = $(\"#photoreports-item\").innerHeight();\r\n    let menuContentH = $(\"#slider-news\").innerHeight();\r\n    let header = $(\"#header\");\r\n    let scrollOffset = $(window).scrollTop(); \r\n\r\n    checkScroll(scrollOffset);\r\n    $(window).on(\"scroll\", function(){\r\n        scrollOffset = $(this).scrollTop();\r\n        checkScroll(scrollOffset);\r\n    });\r\n\r\n    function checkScroll(){ \r\n        if(scrollOffset >= headerContentH ){\r\n        header.addClass(\"header-fixed\");\r\n            }\r\n        else if(scrollOffset >= interiorContentH ){\r\n            header.addClass(\"header-fixed\");\r\n        }\r\n        else if(scrollOffset >= photosItemContentH){\r\n            header.addClass(\"header-fixed\");\r\n        }else if(scrollOffset >= menuContentH){\r\n            header.addClass(\"header-fixed\");\r\n        }\r\n        else{\r\n        header.removeClass(\"header-fixed\");\r\n        }\r\n    }\r\n    \r\n});\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/fixed-header.js?");

/***/ }),

/***/ "./src/assets/js/gallery.js":
/*!**********************************!*\
  !*** ./src/assets/js/gallery.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n\r\n$(document).ready(function(){\r\n  $(\".interior_images\").magnificPopup({\r\n    delegate: \"a\",\r\n    type: \"image\",\r\n    gallery: {\r\n      enabled: true\r\n    }\r\n  });\r\n  \r\n  $(\".photo-cards\").magnificPopup({\r\n    delegate: \"a\",\r\n    type: \"image\",\r\n    gallery: {\r\n      enabled: true\r\n    }\r\n  });\r\n  \r\n  $(\".photo-cards-1\").magnificPopup({\r\n    delegate: \"a\",\r\n    type: \"image\",\r\n    gallery: {\r\n      enabled: true\r\n    }\r\n  });\r\n  \r\n  $(\".photo-cards-2\").magnificPopup({\r\n    delegate: \"a\",\r\n    type: \"image\",\r\n    gallery: {\r\n      enabled: true\r\n    }\r\n  });\r\n  \r\n  $(\".photo-cards-3\").magnificPopup({\r\n    delegate: \"a\",\r\n    type: \"image\",\r\n    gallery: {\r\n      enabled: true\r\n    }\r\n      });\r\n\r\n});\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/gallery.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n$(document).ready(function(){\r\n    //Получаем значение data-modal\r\nconst modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal_close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\n\r\n\r\nmodalBtn.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let $this = event.currentTarget;                            // Обрабабатываем какую именно кнопку нажали\r\n        let modalId = $this.getAttribute('data-modal');                                                           \r\n        let modal = document.getElementById(modalId); \r\n                                                                    //Получаем html элемент через id привязанный к data-modal\r\n        let modalContent = modal.querySelector('.modal_content');\r\n        modalContent.addEventListener('click', event =>{\r\n            event.stopPropagation();                                //Убираем дочерние элементы modal_content из списка для осуществления события\r\n        }); \r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(function(){\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        }, 1);\r\n    });\r\n});\r\n\r\n//Закртытие окна\r\nfunction closeModal(currentModal){\r\n    let modalContent = currentModal.querySelector('.modal_content');\r\n    modalContent.removeAttribute('style');\r\n    setTimeout(function(){\r\n        currentModal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    }, 200);\r\n   \r\n}\r\n\r\n//Через крестик\r\nmodalClose.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\n//Через касание по экрану\r\nmodal.forEach(item =>{\r\n    item.addEventListener('click', event =>{\r\n        let currentModal = event.currentTarget;\r\n        closeModal(currentModal);\r\n    });\r\n});\r\n\r\n  });\r\n\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/show-more.js":
/*!************************************!*\
  !*** ./src/assets/js/show-more.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n   $(document).ready(function(){\r\n    const moreProductsBtn = document.querySelector('#show-more-dishes');\r\n\r\n    moreProductsBtn.addEventListener('click', (e)=>{\r\n    console.log(\"Ура! Все получилось!\");\r\n    getProducts(e.target);\r\n    });\r\n\r\nasync function getProducts(button){\r\n    if(!button.classList.contains('_hold')){\r\n        button.classList.add('_hold');\r\n        const file = \"assets/json/products.json\";\r\n        let response = await fetch(file, {\r\n            method: \"GET\"\r\n        });\r\n        if(response.ok){\r\n            let result = await response.json();\r\n            loadProducts(result);\r\n            button.classList.remove('_hold');\r\n            button.remove();\r\n        }else{\r\n            alert(\"Ошибка\");\r\n        };\r\n    };\r\n};\r\n\r\n\r\nfunction loadProducts(data){\r\n    const menuDishes = document.querySelector('.menu_dishes--dishes');\r\n    data.products.forEach(item =>{\r\n        const productId = item.id;\r\n        const productUrl = item.url;\r\n        const productImg = item.image;\r\n        const productName = item.title;\r\n        const productKcal = item.kcal;\r\n        const productNutr = item.nutr;\r\n        const productPrice = item.price;\r\n        const productCat = item.cat;\r\n\r\n\r\n        let card = `\r\n            <a href=\"#${productUrl}\" class=\"menu_dishes-card\" data-pid=\"${productId}\" data-cat=\"${productCat}\">\r\n            <div class=\"menu_dishes-card_img\"><img src=\"${productImg}\" alt=\"\"></div>\r\n            <div class=\"menu_dishes-card_info\">\r\n                <div class=\"menu_dishes-card_name\">${productName}</div>\r\n                <div class=\"menu_dishes-card_kcal\">\r\n               \r\n                    <span><b>Ккал</b>: ${productNutr}</span>\r\n                    <span><b>БЖУ</b>:  ${productKcal}</span>\r\n                </div>\r\n                <div class=\"menu_dishes-card_more\">\r\n                    <div class=\"menu_dishes-card_price\"><b>${productPrice}</b>/100<span>г</span>.</div>\r\n                    <button class=\"btn btn-red menu_dishes-card_btn\">Подробнее</button>\r\n                </div>\r\n            </div>\r\n            </a>\r\n        `\r\n        let cardOpen = `\r\n        <div class=\"menu_dishes-card--open\" id=\"${productUrl}\">\r\n        <div class=\"menu_dishes-card_img menu_dishes-card_img--open\"><img src=\"${productImg}\" alt=\"\"></div>\r\n        <div class=\"menu_dishes-card_info menu_dishes-card_info--open\">\r\n            <div class=\"menu_dishes-card_name menu_dishes-card_name--open\">${productName}</div>\r\n            <div class=\"menu_dishes-card_kcal menu_dishes-card_kcal--open\">\r\n                <span><b>Ккал</b>: ${productNutr}</span>\r\n                <span><b>БЖУ</b>: ${productKcal}</span>\r\n            </div>\r\n           <div class=\"menu_dishes-card_description\">\r\n                Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции\r\n                обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.\r\n                Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности\r\n                представляет собой интересный эксперимент проверки форм развития.\r\n            </div>\r\n            <div class=\"menu_dishes-card_price menu_dishes-card_price--open\"><b>${productPrice}</b>/100<span>г</span>.</div>\r\n            <ul class=\"menu_dishes-card_filters\">\r\n                <li class=\"menu_dishes-card_filters-item vegan\">${productCat}</li>\r\n                <li class=\"menu_dishes-card_filters-item\">Выбор шефа</li>\r\n                <li class=\"menu_dishes-card_filters-item\">Популярное</li>\r\n                <li class=\"menu_dishes-card_filters-item\">Блюда до 400₽</li>\r\n            </ul>\r\n        </div>\r\n        <button class=\"btn menu_dishes-card_close\"></button>\r\n</div>  \r\n        `\r\n\r\n        menuDishes.insertAdjacentHTML('beforeend', card);\r\n        menuDishes.insertAdjacentHTML('beforeend', cardOpen);\r\n\r\n        $('.menu_dishes-card').click(function(e){\r\n            e.preventDefault();\r\n    \r\n            $('.menu_dishes-card--open').removeClass('menu_dishes-card--open-active');\r\n            $($(this).attr('href')).addClass('menu_dishes-card--open-active');\r\n        });\r\n    \r\n        $('.menu_dishes-card_close').click(()=>{\r\n            $('.menu_dishes-card--open').removeClass('menu_dishes-card--open-active');\r\n        });\r\n        });\r\n    };\r\n\r\n\r\n\r\nconst moreDrinksBtn = document.querySelector('#show-more-drinks');\r\n\r\n    moreDrinksBtn.addEventListener('click', (e)=>{\r\n    console.log(\"Ура! Все получилось!\");\r\n    getDrinks(e.target);\r\n    });\r\n\r\nasync function getDrinks(button){\r\n        if(!button.classList.contains('_hold')){\r\n            button.classList.add('_hold');\r\n            const file = \"assets/json/products.json\";\r\n            let response = await fetch(file, {\r\n                method: \"GET\"\r\n            });\r\n            if(response.ok){\r\n                let result = await response.json();\r\n                loadDrinks(result);\r\n                button.classList.remove('_hold');\r\n                button.remove();\r\n            }else{\r\n                alert(\"Ошибка\");\r\n            };\r\n        };\r\n    };\r\nfunction loadDrinks(data){\r\n    const menuDrinks = document.querySelector('.menu_dishes--drinks');\r\n    data.drinks.forEach(item =>{\r\n        const productId = item.id;\r\n        const productUrl = item.url;\r\n        const productImg = item.image;\r\n        const productName = item.title;\r\n        const productComposition = item.composition;\r\n        const productPrice = item.price;\r\n        const productCat = item.cat;\r\n\r\n\r\n        let drink = `\r\n            \r\n            <a href=\"#${productUrl}\" class=\"menu_dishes-card\" data-cat=\"${productCat}\">\r\n                <div class=\"menu_dishes-card_img\"><img src=\"${productImg}\" alt=\"\"></div>\r\n                    <div class=\"menu_dishes-card_info menu_dishes-card_info--bar\">\r\n                        <div class=\"menu_dishes-card_name menu_dishes-card_name--bar\">${productName}</div>\r\n                        <div class=\"menu_dishes-card_kcal menu_dishes-card_kcal--bar\">\r\n                               ${productComposition}\r\n                        </div>\r\n                        <div class=\"menu_dishes-card_more\">\r\n                            <div class=\"menu_dishes-card_price\"><b>${productPrice}</b>/100<span>г</span>.</div>\r\n                            <button class=\"btn btn-red menu_dishes-card_btn\">Подробнее</button>\r\n                        </div>\r\n                    </div>\r\n            </a>\r\n        \r\n        `;\r\n        let drinkOpen = `\r\n        <div class=\"menu_dishes-card--open\" id=\"${productUrl}\">\r\n        <div class=\"menu_dishes-card_img menu_dishes-card_img--open\"><img src=\"${productImg}\" alt=\"\"></div>\r\n        <div class=\"menu_dishes-card_info menu_dishes-card_info--open\">\r\n            <div class=\"menu_dishes-card_name menu_dishes-card_name--open\">${productName}</div>\r\n            <div class=\"menu_dishes-card_kcal menu_dishes-card_kcal--open\">\r\n            ${productComposition}\r\n            </div>\r\n           <div class=\"menu_dishes-card_description\">\r\n                Идейные соображения высшего порядка, а также начало повседневной работы по формированию позиции\r\n                обеспечивает широкому кругу (специалистов) участие в формировании систем массового участия.\r\n                Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности\r\n                представляет собой интересный эксперимент проверки форм развития.\r\n            </div>\r\n            <div class=\"menu_dishes-card_price menu_dishes-card_price--open\"><b>${productPrice}</b>/100<span>г</span>.</div>\r\n            <ul class=\"menu_dishes-card_filters\">\r\n                <li class=\"menu_dishes-card_filters-item\">Популярные коктейли</li>\r\n            </ul>\r\n        </div>\r\n        <button class=\"btn menu_dishes-card_close\"></button>\r\n</div>  \r\n        `\r\n\r\n        menuDrinks.insertAdjacentHTML('beforeend', drink);\r\n        menuDrinks.insertAdjacentHTML('beforeend', drinkOpen);\r\n\r\n        $('.menu_dishes-card').click(function(e){\r\n            e.preventDefault();\r\n    \r\n            $('.menu_dishes-card--open').removeClass('menu_dishes-card--open-active');\r\n            $($(this).attr('href')).addClass('menu_dishes-card--open-active');\r\n        });\r\n    \r\n        $('.menu_dishes-card_close').click(()=>{\r\n            $('.menu_dishes-card--open').removeClass('menu_dishes-card--open-active');\r\n        });\r\n        });\r\n    }\r\n\r\n\r\n});\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/show-more.js?");

/***/ }),

/***/ "./src/assets/js/slider.js":
/*!*********************************!*\
  !*** ./src/assets/js/slider.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("$(document).ready(function(){\r\n    \r\n    $('#aboutUs-slider').slick({\r\n        dots:true,\r\n        autoplay: true,\r\n    });\r\n\r\n    $('#news-promo-slider').slick({\r\n\r\n        dots: true,\r\n        autoplay: true,\r\n        slidesToShow: 4,\r\n        responsive:[\r\n            {\r\n                breakpoint: 1200,\r\n                settings:{\r\n                    arrows: false,\r\n                    dots: false,\r\n                    autoplay:false,\r\n                    slidesToShow: 3.5,\r\n                    initialSlide: 1.5\r\n\r\n                    /*\r\n                     Это забавно, но slidesToShow нужно обязательно указывать после autoplay.\r\n                     А дробный intialSlide решает проблему перескролла, но есть ошибка в консоли))\r\n                    */\r\n                    }\r\n                },{\r\n                    breakpoint:576,\r\n                    settings:{\r\n                        arrows:false,\r\n                        dots: false,\r\n                        autoplay:false,\r\n                        slidesToShow: 3.5,\r\n                        initialSlide:1.5\r\n                  }\r\n                }\r\n            ]\r\n        });\r\n    });  \n\n//# sourceURL=webpack:///./src/assets/js/slider.js?");

/***/ }),

/***/ "./src/assets/js/tabs.js":
/*!*******************************!*\
  !*** ./src/assets/js/tabs.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\r\n    $(document).ready(function(){\r\n\r\n        $('.menu_nav-item').click(function(e){\r\n            e.preventDefault();\r\n    \r\n            $('.menu_nav-item').removeClass('menu_nav-item--active');\r\n            $('.menu_cards-item').removeClass('menu_cards-item--active');\r\n    \r\n            $(this).addClass('menu_nav-item--active');\r\n            $($(this).attr('href')).addClass('menu_cards-item--active');\r\n        });\r\n    \r\n        $('.menu_nav-item:first').click();\r\n    \r\n        \r\n       \r\n        \r\n        $('.menu_dishes-card').click(function(e){\r\n            e.preventDefault();\r\n    \r\n            $('.menu_dishes-card--open').removeClass('menu_dishes-card--open-active');\r\n            $($(this).attr('href')).addClass('menu_dishes-card--open-active');\r\n        });\r\n    \r\n        $('.menu_dishes-card_close').click(()=>{\r\n            $('.menu_dishes-card--open').removeClass('menu_dishes-card--open-active');\r\n        });\r\n    });\r\n   \r\n\r\n\n\n//# sourceURL=webpack:///./src/assets/js/tabs.js?");

/***/ }),

/***/ 0:
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** multi ./src/assets/js/burger-menu.js ./src/assets/js/filtres.js ./src/assets/js/fixed-header.js ./src/assets/js/gallery.js ./src/assets/js/modal.js ./src/assets/js/show-more.js ./src/assets/js/slider.js ./src/assets/js/tabs.js ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\burger-menu.js */\"./src/assets/js/burger-menu.js\");\n__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\filtres.js */\"./src/assets/js/filtres.js\");\n__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\fixed-header.js */\"./src/assets/js/fixed-header.js\");\n__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\gallery.js */\"./src/assets/js/gallery.js\");\n__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\modal.js */\"./src/assets/js/modal.js\");\n__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\show-more.js */\"./src/assets/js/show-more.js\");\n__webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\slider.js */\"./src/assets/js/slider.js\");\nmodule.exports = __webpack_require__(/*! I:\\WEB\\Works for Portfolio\\Потрачено Night Club\\src\\assets\\js\\tabs.js */\"./src/assets/js/tabs.js\");\n\n\n//# sourceURL=webpack:///multi_./src/assets/js/burger-menu.js_./src/assets/js/filtres.js_./src/assets/js/fixed-header.js_./src/assets/js/gallery.js_./src/assets/js/modal.js_./src/assets/js/show-more.js_./src/assets/js/slider.js_./src/assets/js/tabs.js?");

/***/ })

/******/ });