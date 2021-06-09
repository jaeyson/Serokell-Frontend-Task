/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/border.scss":
/*!*************************!*\
  !*** ./src/border.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/breakpoints.scss":
/*!******************************!*\
  !*** ./src/breakpoints.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/color.scss":
/*!************************!*\
  !*** ./src/color.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/components.scss":
/*!*****************************!*\
  !*** ./src/components.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/layout.scss":
/*!*************************!*\
  !*** ./src/layout.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/position.scss":
/*!***************************!*\
  !*** ./src/position.scss ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/reset.scss":
/*!************************!*\
  !*** ./src/reset.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/spacing.scss":
/*!**************************!*\
  !*** ./src/spacing.scss ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/typography.scss":
/*!*****************************!*\
  !*** ./src/typography.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/width.scss":
/*!************************!*\
  !*** ./src/width.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _border_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./border.scss */ "./src/border.scss");
/* harmony import */ var _breakpoints_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./breakpoints.scss */ "./src/breakpoints.scss");
/* harmony import */ var _color_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color.scss */ "./src/color.scss");
/* harmony import */ var _components_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components.scss */ "./src/components.scss");
/* harmony import */ var _layout_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.scss */ "./src/layout.scss");
/* harmony import */ var _position_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./position.scss */ "./src/position.scss");
/* harmony import */ var _reset_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reset.scss */ "./src/reset.scss");
/* harmony import */ var _spacing_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./spacing.scss */ "./src/spacing.scss");
/* harmony import */ var _typography_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./typography.scss */ "./src/typography.scss");
/* harmony import */ var _width_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./width.scss */ "./src/width.scss");











const $ = x => document.querySelector(x);

const ready = (fn) => {
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
};

ready(() => {
  window.addEventListener('scroll', () => {
    const header = $('header').style;
    const scrolledHeight = $('html').scrollTop;

    if (scrolledHeight > 100) {
      header.background = '#000000';
    } else {
      header.background = 'transparent';
    }
  });

  const toggleMobileButton = () => {
    $('.nav-mobile').classList.toggle('flex');
    $('.close').classList.toggle('hidden');
    $('.toggle').classList.toggle('hidden');
  };

  ['.toggle', '.close'].forEach(el => {
    $(el).addEventListener('click', () => {
      return toggleMobileButton();
    });
  });

  document.querySelectorAll('.nav-mobile-link').forEach(el => {
    el.addEventListener('click', () => {
      return toggleMobileButton();
    });
  });

  $('form.form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    let data = {
      "Name":    $('#name').value,
      "Email":   $('#email').value,
      "Message": $('#message').value,
    };

    console.table(data);
    $('form.form').reset();
  });

});

})();

/******/ })()
;
//# sourceMappingURL=main.js.map