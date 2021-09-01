/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/modules/navbar.js":
/*!**************************************!*\
  !*** ./src/assets/modules/navbar.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
function navbar() {
  var label = document.querySelector('#navbar');
  var ul = document.querySelector('#list');
  label.addEventListener('click', function () {
    ul.classList.toggle('menu-on');
    label.classList.toggle('image-menu');
    handleNavbarAuthentications(label);

    if (ul.classList.contains('menu-on')) {
      handleLinksNavbar(ul, label);
    }
  });
}

function handleNavbarAuthentications(label) {
  if (label.classList.contains('image-menu')) {
    var img = label.querySelector('img');
    img.src = './src/assets/public/close.svg';
    document.body.style.overflow = 'hidden';
  } else {
    var _img = label.querySelector('img');

    _img.src = './src/assets/public/menu.svg';
    document.body.style.overflow = '';
  }
}

function handleLinksNavbar(ul, label) {
  var links = document.querySelectorAll('header>nav>ul>li>a');
  links.forEach(function (value) {
    value.addEventListener('click', function () {
      var img = label.querySelector('img');
      ul.classList.remove('menu-on');
      label.classList.remove('image-menu');
      img.src = './src/assets/public/menu.svg';
      document.body.style.overflow = '';
    });
  });
}

;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 100%;\n  padding: 1.5rem 1.5rem 1.5rem 0.7rem;\n  background: var(--blue);\n  position: fixed;\n}\nheader h2 {\n  display: flex;\n  align-items: center;\n  letter-spacing: 0.4rem;\n  font-size: 1.5rem;\n  font-family: \"Rum Raisin\", sans-serif;\n}\nheader h2 img {\n  height: 3.125rem;\n  width: 3.125rem;\n  margin-right: 1rem;\n}\nheader nav {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 40%;\n}\nheader nav label {\n  font-size: 0;\n  display: none;\n}\nheader nav label img {\n  max-width: 2rem;\n}\nheader nav ul {\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n}\nheader nav ul li {\n  list-style: none;\n}\nheader nav ul li a {\n  font-size: 1.2rem;\n  text-decoration: underline;\n  text-transform: capitalize;\n}\n\n.menu-on {\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n  height: 100vh;\n  width: 100vw;\n  top: 0;\n  left: 0;\n  background: var(--blue);\n  position: absolute;\n  overflow-y: none;\n  transition: 0.5s;\n}\n.menu-on li a {\n  display: block;\n  font-size: 1.5rem;\n  transition: 0.5s;\n  padding: 0.3rem 0.7rem;\n}\n.menu-on li a:hover {\n  background: #020225;\n  border-radius: 1rem;\n  opacity: 50%;\n  box-shadow: 0 0 10px 10px #020225;\n}\n\n.image-menu {\n  position: absolute;\n}\n\nmain {\n  background: var(--black);\n  padding-top: 6.125rem;\n}\nmain .paragraphs {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5rem;\n}\nmain .paragraphs p {\n  max-width: 31.25rem;\n  font-size: 1.25rem;\n}\nmain .paragraphs p a {\n  color: var(--red);\n}\nmain .image {\n  width: 100%;\n  text-align: center;\n}\nmain .image img {\n  max-width: 34.375rem;\n}\nmain #donates {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  margin-top: 3rem;\n  margin-bottom: 3rem;\n}\nmain .input-button {\n  display: flex;\n  align-items: center;\n  padding: 3rem 1.5rem;\n}\nmain .input-button input {\n  width: 70%;\n  padding: 1.5rem 2.5rem 1.5rem 1rem;\n  border-radius: 2rem 0 0 2rem;\n  border-bottom: 2px solid var(--blue2);\n  border-left: 2px solid var(--blue2);\n  border-top: 2px solid var(--blue2);\n  border-right: none;\n  color: var(--black);\n  font-size: 1.1rem;\n}\nmain .input-button input::placeholder {\n  color: var(--black);\n  font-size: 1.075rem;\n  opacity: 50%;\n}\nmain .input-button button {\n  width: 30%;\n  padding: 1.5rem;\n  border-radius: 0 2rem 2rem 0;\n  border-bottom: 2px solid var(--blue2);\n  border-right: 2px solid var(--blue2);\n  border-top: 2px solid var(--blue2);\n  border-left: none;\n  background: var(--blue);\n  font-size: 1.2rem;\n  cursor: pointer;\n  transition: 0.3s;\n}\nmain .input-button button:hover {\n  box-shadow: 0 0 10px var(--blue);\n  opacity: 80%;\n}\nmain .table {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\nmain table {\n  border: 1px solid var(--white);\n  border-radius: 1rem;\n  margin: 0 0 2rem 0;\n}\nmain table tr:nth-of-type(2) td {\n  font-size: 1.25rem;\n  font-weight: bold;\n}\nmain table tr th {\n  font-size: 1.5rem;\n  font-weight: bold;\n  padding: 1rem;\n  border-bottom: 1px solid var(--white);\n}\nmain table tr td {\n  padding: 1rem 4rem;\n  text-align: center;\n}\n\nfooter {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 30vh;\n  padding: 1rem 3rem;\n}\nfooter div {\n  display: flex;\n  text-align: center;\n  flex-direction: column;\n  justify-content: space-evenly;\n  height: 100%;\n}\nfooter div h4 {\n  font-size: 1.25rem;\n  color: var(--black);\n}\nfooter div a {\n  font-size: 1rem;\n  color: var(--black);\n}\n\n@media (max-width: 1230px) {\n  html {\n    font-size: 93.75%;\n  }\n\n  header nav {\n    width: 45%;\n  }\n}\n@media (max-width: 1130px) {\n  article.paragraphs {\n    flex-direction: column;\n    padding: 0 2rem 3rem 2rem;\n  }\n  article.paragraphs p {\n    padding: 3rem 0 1rem 0;\n    text-align: center;\n  }\n\n  div.image img {\n    max-width: 33rem;\n  }\n}\n@media (max-width: 850px) {\n  header {\n    position: static;\n  }\n  header nav {\n    justify-content: flex-end;\n  }\n  header nav label {\n    display: block;\n  }\n  header nav ul li a {\n    display: none;\n  }\n\n  main {\n    padding: 0;\n  }\n}\n@media (max-width: 640px) {\n  footer {\n    height: 25vh;\n  }\n  footer div h4 {\n    font-size: 1.25rem;\n    color: var(--black);\n  }\n  footer div a {\n    font-size: 1rem;\n    color: var(--black);\n  }\n}\n@media (max-width: 540px) {\n  div.image img {\n    max-width: 26rem;\n  }\n}\n@media (max-width: 520px) {\n  footer div h4 {\n    font-size: 1.15rem;\n    color: var(--black);\n  }\n  footer div a {\n    font-size: 0.9rem;\n    color: var(--black);\n  }\n}\n@media (max-width: 480px) {\n  html {\n    font-size: 87.5%;\n  }\n}\n@media (max-width: 450px) {\n  html {\n    font-size: 81.25%;\n  }\n}\n@media (max-width: 420px) {\n  footer {\n    height: 20vh;\n    padding: 0.75rem 1rem;\n  }\n  footer div {\n    text-align: left;\n  }\n}\n@media (max-width: 375px) {\n  html {\n    font-size: 75%;\n  }\n}\n@media (max-width: 330px) {\n  main div.image img {\n    max-width: 21rem;\n  }\n  main div.input-button input {\n    padding: 1rem 0 1rem 0.75rem;\n    border-radius: 1.5rem 0 0 1.5rem;\n  }\n  main div.input-button button {\n    padding: 1rem;\n    border-radius: 0 1.5rem 1.5rem 0;\n  }\n\n  footer {\n    flex-direction: column;\n    justify-content: space-evenly;\n    align-items: center;\n  }\n  footer div {\n    flex-direction: row;\n    align-items: center;\n    justify-content: space-between;\n    width: 100%;\n  }\n}\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n  text-decoration: none;\n  outline: none;\n  font-family: \"Poppins\", sans-serif;\n  color: var(--white);\n}\n\n:root {\n  --white: #f1f1f1;\n  --blue: #080746;\n  --blue2: #06053a;\n  --black: #212121;\n  --red: #FF6366;\n}\n\n/*# sourceMappingURL=style.css.map */\n", "",{"version":3,"sources":["webpack://./src/assets/css/modules/_header.scss","webpack://./src/assets/css/style.css","webpack://./src/assets/css/modules/_main.scss","webpack://./src/assets/css/modules/_footer.scss","webpack://./src/assets/css/modules/_mediaQueries.scss","webpack://./src/assets/css/style.scss"],"names":[],"mappings":"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","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
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
/*!***********************!*\
  !*** ./src/script.js ***!
  \***********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _assets_modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/modules/navbar.js */ "./src/assets/modules/navbar.js");


(0,_assets_modules_navbar_js__WEBPACK_IMPORTED_MODULE_1__.navbar)();
var button = document.querySelector('#button');
var input = document.querySelector('.input-button>input');
button.addEventListener('click', function () {
  if (!input.value) {
    return alert('Digite seu tipo sanguíneo!');
  }

  handleBloodType(input.value.toUpperCase());
  input.value = '';
  input.focus();
});
input.addEventListener('keypress', function (event) {
  var key = event.keyCode;

  if (key === 13) {
    if (!input.value) {
      return alert('Digite seu tipo sanguíneo!');
    }

    handleBloodType(input.value.toUpperCase());
    input.value = '';
    input.focus();
  }
});

function handleBloodType(bloodType) {
  var types = ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'];
  var type;
  types.forEach(function (value) {
    if (value === bloodType) {
      type = value;
    }
  });
  if (!type) return alert('Tipo sanguíneo inválido!');
  createTable(type);
}

function createTable(type) {
  document.querySelector('.table').innerHTML = '';
  var table = document.createElement('table');

  if (type === 'A+') {
    var th = document.createElement('th');
    var td = document.createElement('td');
    th.innerHTML = "Sangue ".concat(type);
    td.innerHTML = "\n            Doa para: AB+ e A+ <br><br>\n            Recebe de: A+, A-, O+ e O-\n        ";
    var array = [th, td];

    for (var _i = 0, _array = array; _i < _array.length; _i++) {
      var elements = _array[_i];
      var tr = document.createElement('tr');
      tr.appendChild(elements);
      table.appendChild(tr);
    }

    var div = document.querySelector('div.table');
    div.appendChild(table);
  }

  if (type === 'A-') {
    var _th = document.createElement('th');

    var _td = document.createElement('td');

    _th.innerHTML = "Sangue ".concat(type);
    _td.innerHTML = "\n            Doa para: A+, A-, AB+ e AB- <br><br>\n            Recebe de: A- e O-\n        ";
    var _array2 = [_th, _td];

    for (var _i2 = 0, _array3 = _array2; _i2 < _array3.length; _i2++) {
      var _elements = _array3[_i2];

      var _tr = document.createElement('tr');

      _tr.appendChild(_elements);

      table.appendChild(_tr);
    }

    var _div = document.querySelector('div.table');

    _div.appendChild(table);
  }

  if (type === 'B+') {
    var _th2 = document.createElement('th');

    var _td2 = document.createElement('td');

    _th2.innerHTML = "Sangue ".concat(type);
    _td2.innerHTML = "\n            Doa para: B+ e AB+ <br><br>\n            Recebe de: B+, B-, O+ e O- \n        ";
    var _array4 = [_th2, _td2];

    for (var _i3 = 0, _array5 = _array4; _i3 < _array5.length; _i3++) {
      var _elements2 = _array5[_i3];

      var _tr2 = document.createElement('tr');

      _tr2.appendChild(_elements2);

      table.appendChild(_tr2);
    }

    var _div2 = document.querySelector('div.table');

    _div2.appendChild(table);
  }

  if (type === 'B-') {
    var _th3 = document.createElement('th');

    var _td3 = document.createElement('td');

    _th3.innerHTML = "Sangue ".concat(type);
    _td3.innerHTML = "\n        Doa para: B+, B-, AB+ e AB- <br><br>\n        Recebe de: B- e O-\n        ";
    var _array6 = [_th3, _td3];

    for (var _i4 = 0, _array7 = _array6; _i4 < _array7.length; _i4++) {
      var _elements3 = _array7[_i4];

      var _tr3 = document.createElement('tr');

      _tr3.appendChild(_elements3);

      table.appendChild(_tr3);
    }

    var _div3 = document.querySelector('div.table');

    _div3.appendChild(table);
  }

  if (type === 'O+') {
    var _th4 = document.createElement('th');

    var _td4 = document.createElement('td');

    _th4.innerHTML = "Sangue ".concat(type);
    _td4.innerHTML = "\n            Doa para: A+, B+, O+ e AB+ <br><br>\n            Recebe de: O+ e O-\n        ";
    var _array8 = [_th4, _td4];

    for (var _i5 = 0, _array9 = _array8; _i5 < _array9.length; _i5++) {
      var _elements4 = _array9[_i5];

      var _tr4 = document.createElement('tr');

      _tr4.appendChild(_elements4);

      table.appendChild(_tr4);
    }

    var _div4 = document.querySelector('div.table');

    _div4.appendChild(table);
  }

  if (type === 'O-') {
    var _th5 = document.createElement('th');

    var _td5 = document.createElement('td');

    _th5.innerHTML = "Sangue ".concat(type);
    _td5.innerHTML = "\n            Doa para: A+, B+, O+, AB+, A-, B-, O- e AB- (todos)<br><br>\n            Recebe de: O-\n        ";
    var _array10 = [_th5, _td5];

    for (var _i6 = 0, _array11 = _array10; _i6 < _array11.length; _i6++) {
      var _elements5 = _array11[_i6];

      var _tr5 = document.createElement('tr');

      _tr5.appendChild(_elements5);

      table.appendChild(_tr5);
    }

    var _div5 = document.querySelector('div.table');

    _div5.appendChild(table);
  }

  if (type === 'AB+') {
    var _th6 = document.createElement('th');

    var _td6 = document.createElement('td');

    _th6.innerHTML = "Sangue ".concat(type);
    _td6.innerHTML = "\n            Doa para: AB+ <br><br>\n            Recebe de: A+, B+, O+, AB+, A-, B-, O- e AB- (todos)\n        ";
    var _array12 = [_th6, _td6];

    for (var _i7 = 0, _array13 = _array12; _i7 < _array13.length; _i7++) {
      var _elements6 = _array13[_i7];

      var _tr6 = document.createElement('tr');

      _tr6.appendChild(_elements6);

      table.appendChild(_tr6);
    }

    var _div6 = document.querySelector('div.table');

    _div6.appendChild(table);
  }

  if (type === 'AB-') {
    var _th7 = document.createElement('th');

    var _td7 = document.createElement('td');

    _th7.innerHTML = "Sangue ".concat(type);
    _td7.innerHTML = "\n            Doa para: AB+ e AB- <br>\n            Recebe de: A-, B-, O- e AB-\n        ";
    var _array14 = [_th7, _td7];

    for (var _i8 = 0, _array15 = _array14; _i8 < _array15.length; _i8++) {
      var _elements7 = _array15[_i8];

      var _tr7 = document.createElement('tr');

      _tr7.appendChild(_elements7);

      table.appendChild(_tr7);
    }

    var _div7 = document.querySelector('div.table');

    _div7.appendChild(table);
  }
}
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map