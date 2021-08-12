/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/Roboto-Regular.ttf */ "./src/assets/Roboto-Regular.ttf");
/* harmony import */ var _assets_STIXTwoText_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/STIXTwoText-VariableFont_wght.ttf */ "./src/assets/STIXTwoText-VariableFont_wght.ttf");
/* harmony import */ var _assets_LibreFranklin_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/LibreFranklin-VariableFont_wght.ttf */ "./src/assets/LibreFranklin-VariableFont_wght.ttf");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_STIXTwoText_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_4__);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_assets_LibreFranklin_VariableFont_wght_ttf__WEBPACK_IMPORTED_MODULE_5__);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: 'Roboto';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'STIXTwo';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'LibreFranklin';\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 2fr 7fr 1fr;\n  height: 1000px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  opacity: 0.5;\n}\n\nheader {\n  grid-column: 1/1;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  background-color: gray;\n}\n\n.footer-grid {\n  grid-column: 1/2;\n  grid-row: 3/4;\n  background-color: gray;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  padding-left: 2em;\n}\n\n.listContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  list-style-type: none;\n}\n\n.listContainer li {\n  padding: 20px;\n}\n\n.item-image {\n  width: 300px;\n  height: 210px;\n}\n\n.comments-button {\n  width: 100%;\n}\n\n.item-title {\n  display: flex;\n  justify-content: space-between;\n  font-family: 'STIXTwo', sans-serif;\n}\n\n.like {\n  width: 30px;\n  height: 30px;\n  margin-top: 18.72px;\n}\n\n.amount-likes {\n  text-align: right;\n  font-family: 'LibreFranklin', sans-serif;\n}\n\n.details-modal {\n  display: none;\n}\n\n.details-modal-on {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  background-color: #d0d3d6;\n\n  /* z-index: 1; */\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 80%;\n  overflow-y: scroll;\n}\n\n.close-btn {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  height: 25px;\n  width: 25px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.img-detail {\n  height: 50%;\n  width: 50%;\n  margin-top: 15px;\n  align-self: center;\n  background-color: rgb(247, 253, 251);\n}\n\n.extras-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n}\n\n.img-title {\n  grid-column: 1/3;\n  grid-row: 1/2;\n  font-family: 'STIXTwo', sans-serif;\n  font-size: 24px;\n  text-align: center;\n}\n\n.extras-flex {\n  display: flex;\n  margin: 0 auto 0 auto;\n}\n\n.desc-cont {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.copy-cont {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.date-cont {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.resource-cont {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n\n.extras {\n  color: black;\n  font-family: 'STIXTwo', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  display: flex;\n}\n\n.comments-box {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.comments-list {\n  list-style: none;\n  margin-top: 0.5em;\n}\n\n.comments-count {\n  text-align: center;\n}\n\n.add-comment {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2em;\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,qBAAqB;EACrB,0DAAqD;EACrD,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,0DAAoE;EACpE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,4BAA4B;EAC5B,0DAAsE;EACtE,gBAAgB;EAChB,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,+BAA+B;EAC/B,cAAc;EACd,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,SAAS;EACT,QAAQ;EACR,WAAW;EACX,YAAY;AACd;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,aAAa;EACb,6BAA6B;EAC7B,mBAAmB;EACnB,iCAAiC;EACjC,eAAe;EACf,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,iCAAiC;EACjC,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,qBAAqB;AACvB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,aAAa;AACf;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,kCAAkC;AACpC;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,wCAAwC;AAC1C;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,UAAU;EACV,yBAAyB;;EAEzB,gBAAgB;EAChB,eAAe;EACf,QAAQ;EACR,SAAS;EACT,gCAAgC;EAChC,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,UAAU;EACV,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,UAAU;EACV,gBAAgB;EAChB,kBAAkB;EAClB,oCAAoC;AACtC;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,aAAa;EACb,kCAAkC;EAClC,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,kCAAkC;EAClC,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;EAClB,eAAe;AACjB","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url('./assets/Roboto-Regular.ttf') format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'STIXTwo';\n  src: url('./assets/STIXTwoText-VariableFont_wght.ttf') format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'LibreFranklin';\n  src: url('./assets/LibreFranklin-VariableFont_wght.ttf') format('ttf');\n  font-weight: 600;\n  font-style: normal;\n}\n\n* {\n  box-sizing: border-box;\n}\n\nbody {\n  display: grid;\n  grid-template-rows: 2fr 7fr 1fr;\n  height: 1000px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  right: 0;\n  width: 100%;\n  opacity: 0.5;\n}\n\nheader {\n  grid-column: 1/1;\n  grid-row: 1/2;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  font-family: 'Roboto', sans-serif;\n  font-size: 30px;\n  background-color: gray;\n}\n\n.footer-grid {\n  grid-column: 1/2;\n  grid-row: 3/4;\n  background-color: gray;\n  font-family: 'Roboto', sans-serif;\n  font-size: 20px;\n  display: flex;\n  align-items: center;\n  padding-left: 2em;\n}\n\n.listContainer {\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  list-style-type: none;\n}\n\n.listContainer li {\n  padding: 20px;\n}\n\n.item-image {\n  width: 300px;\n  height: 210px;\n}\n\n.comments-button {\n  width: 100%;\n}\n\n.item-title {\n  display: flex;\n  justify-content: space-between;\n  font-family: 'STIXTwo', sans-serif;\n}\n\n.like {\n  width: 30px;\n  height: 30px;\n  margin-top: 18.72px;\n}\n\n.amount-likes {\n  text-align: right;\n  font-family: 'LibreFranklin', sans-serif;\n}\n\n.details-modal {\n  display: none;\n}\n\n.details-modal-on {\n  display: flex;\n  flex-direction: column;\n  width: 60%;\n  background-color: #d0d3d6;\n\n  /* z-index: 1; */\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  height: 80%;\n  overflow-y: scroll;\n}\n\n.close-btn {\n  position: absolute;\n  top: 5px;\n  right: 5px;\n  height: 25px;\n  width: 25px;\n  font-weight: bold;\n  cursor: pointer;\n}\n\n.img-detail {\n  height: 50%;\n  width: 50%;\n  margin-top: 15px;\n  align-self: center;\n  background-color: rgb(247, 253, 251);\n}\n\n.extras-div {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 2fr 1fr;\n}\n\n.img-title {\n  grid-column: 1/3;\n  grid-row: 1/2;\n  font-family: 'STIXTwo', sans-serif;\n  font-size: 24px;\n  text-align: center;\n}\n\n.extras-flex {\n  display: flex;\n  margin: 0 auto 0 auto;\n}\n\n.desc-cont {\n  grid-column: 1/2;\n  grid-row: 2/3;\n}\n\n.copy-cont {\n  grid-column: 2/3;\n  grid-row: 2/3;\n}\n\n.date-cont {\n  grid-column: 1/2;\n  grid-row: 3/4;\n}\n\n.resource-cont {\n  grid-column: 2/3;\n  grid-row: 3/4;\n}\n\n.extras {\n  color: black;\n  font-family: 'STIXTwo', sans-serif;\n  font-size: 18px;\n  text-align: center;\n  display: flex;\n}\n\n.comments-box {\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.comments-list {\n  list-style: none;\n  margin-top: 0.5em;\n}\n\n.comments-count {\n  text-align: center;\n}\n\n.add-comment {\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 2em;\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ }),

/***/ "./src/addLikes.js":
/*!*************************!*\
  !*** ./src/addLikes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const appURL = '7XuoMsU1STtgmjOxNrxL';

const addLikesList = async (id) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/likes/`, {
    method: 'POST',
    body: JSON.stringify({ item_id: id}),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(() => window.location.reload());
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addLikesList);

/***/ }),

/***/ "./src/comments.js":
/*!*************************!*\
  !*** ./src/comments.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_x_circle_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/x-circle.svg */ "./src/assets/x-circle.svg");


const popUp = (obj, callback) => {
  const detailsPage = document.createElement('div');
  detailsPage.classList.add('details-modal-on');
  document.body.appendChild(detailsPage);

  const closeBtn = new Image();
  closeBtn.src = _assets_x_circle_svg__WEBPACK_IMPORTED_MODULE_0__;
  closeBtn.className = 'close-btn';
  closeBtn.addEventListener('click', () => {
    detailsPage.classList.replace('details-modal-on', 'details-modal');
  });
  detailsPage.appendChild(closeBtn);

  

  obj.forEach((element) => {
    const detailImage = document.createElement('img');
    detailImage.className = 'img-detail';
    detailImage.src = element.url;
    detailsPage.appendChild(detailImage);

    const extrasCont = document.createElement('div');
    extrasCont.className = 'extras-div';

    const imgTitle = document.createElement('h1');
    imgTitle.innerHTML = element.title;
    imgTitle.className = 'img-title';
    extrasCont.appendChild(imgTitle);

    const descCont = document.createElement('div');
    descCont.classList.add('desc-cont', 'extras-flex');

    const description = document.createElement('p');
    description.classList.add('description', 'extras');
    description.innerHTML = 'Description:';
    descCont.appendChild(description);

    const descriptionTxt = document.createElement('p');
    descriptionTxt.classList.add('description-txt', 'extras');
    descriptionTxt.innerHTML = element.media_type;
    descCont.appendChild(descriptionTxt);
    extrasCont.appendChild(descCont);

    const dateCont = document.createElement('div');
    dateCont.classList.add('date-cont', 'extras-flex');

    const date = document.createElement('p');
    date.classList.add('date', 'extras');
    date.innerHTML = 'Date:';
    dateCont.appendChild(date);
   
    const dateTxt = document.createElement('p');
    dateTxt.classList.add('date', 'extras');
    dateTxt.innerHTML = element.date;
    dateCont.appendChild(dateTxt);
    extrasCont.appendChild(dateCont);

    const copyCont = document.createElement('div');
    copyCont.classList.add('copy-cont', 'extras-flex');

    const copyright = document.createElement('p');
    copyright.classList.add('copyright', 'extras');
    copyright.innerHTML = 'Service version:';
    copyCont.appendChild(copyright);

    const copyrightTxt = document.createElement('p');
    copyrightTxt.classList.add('copyright', 'extras');
    copyrightTxt.innerHTML = element.service_version;
    copyCont.appendChild(copyrightTxt);
    extrasCont.appendChild(copyCont);

    const resourceCont = document.createElement('div');
    resourceCont.classList.add('resource-cont', 'extras-flex');

    const resource = document.createElement('p');
    resource.classList.add('resource', 'extras');
    resource.innerHTML = 'Resource:';
    resourceCont.appendChild(resource);

    const resourceTxt = document.createElement('p');
    resourceTxt.classList.add('resource', 'extras');
    resourceTxt.innerHTML = element.date;
    resourceCont.appendChild(resourceTxt);
    extrasCont.appendChild(resourceCont);
    detailsPage.appendChild(extrasCont);
  });

  const commentsBox = document.createElement('div');
  commentsBox.classList.add('comments-box');

  const commentsCount = document.createElement('h3');
  commentsCount.classList.add('comments-count');
  commentsCount.innerHTML = 'Comments(3)';
  commentsBox.appendChild(commentsCount);

  const commentsList = document.createElement('ul');
  commentsList.classList.add('comments-list');
  const commentOne = document.createElement('li');
  commentOne.innerHTML = '2021/08/12  User1:  Hello';
  commentsList.appendChild(commentOne);
  const commentTwo = document.createElement('li');
  commentTwo.innerHTML = '2021/08/12  User2:  Hello back';
  commentsList.appendChild(commentTwo);
  commentsBox.appendChild(commentsList);
  detailsPage.appendChild(commentsBox);

  const addComment = document.createElement('div');
  addComment.classList.add('add-comment');

  const addAComm = document.createElement('h2');
  addAComm.classList.add('add-acomm');
  addAComm.innerHTML = 'Add a comment';
  addComment.appendChild(addAComm);
  const commentForm = document.createElement('form');
  const yourName = document.createElement('input');
  yourName.setAttribute('type', 'text');
  yourName.setAttribute('placeholder', 'Your name');
  yourName.classList.add('your-name');
  commentForm.appendChild(yourName);

  const yourComm = document.createElement('input');
  yourComm.setAttribute('type', 'textarea');
  yourComm.setAttribute('placeholder', 'Your insights');
  yourComm.classList.add('your-name');
  commentForm.appendChild(yourComm);

  const commBtn = document.createElement('button');
  yourComm.setAttribute('type', 'submit');
  yourComm.classList.add('comm-btn');
  commentForm.appendChild(commBtn);
  addComment.appendChild(commentForm);
  detailsPage.appendChild(addComment);

  document.body.appendChild(detailsPage);
  callback();
};

const getObj = async (callback) => {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=tStRhhjFA0HQcsJqbr9OwtfYzYXhQORNoO6K52bg&start_date=2021-05-01&end_date=2021-05-21')
    .then((response) => response.json())
    .then((json) => popUp(json, callback));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getObj);


/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footerDom = () => {
  const mainDom = document.querySelector('body');
  const footerGrid = document.createElement('footer');
  footerGrid.classList.add('footer-grid');
  footerGrid.innerHTML = 'Created by Kevin and Luis under Creative Commons License';
  mainDom.appendChild(footerGrid);
  return mainDom;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footerDom);

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/logo.svg */ "./src/assets/logo.svg");


const printHeader = () => {
  const mainDom = document.querySelector('body');
  const header = document.createElement('header');
  const logo = new Image();
  logo.src = _assets_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
  const title = document.createElement('h1');
  title.innerHTML = 'Nasa picture of the day';
  header.appendChild(logo);
  header.appendChild(title);
  mainDom.appendChild(header);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (printHeader);

/***/ }),

/***/ "./src/likes.js":
/*!**********************!*\
  !*** ./src/likes.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const appURL = '7XuoMsU1STtgmjOxNrxL';

const getLikesList = async () => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appURL}/likes/`)
    .then((response) => response.json())
    .then((json) => {
      json.forEach((element) => {
        if((element.item_id+'').includes('item')) {
          document.getElementById(element.item_id).childNodes[2].innerHTML = `${element.likes} likes`;
        }
      });
    });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikesList);


/***/ }),

/***/ "./src/list.js":
/*!*********************!*\
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_heart_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/heart.svg */ "./src/assets/heart.svg");
/* harmony import */ var _comments_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments.js */ "./src/comments.js");
/* harmony import */ var _addLikes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./addLikes.js */ "./src/addLikes.js");




const printList = (list, callback) => {
  const mainDom = document.querySelector('body');
  const container = document.createElement('main');
  const listContainer = document.createElement('ul');
  listContainer.setAttribute('class', 'listContainer');
  let count = 0;
  list.forEach((element) => {
    count += 1;
    const item = document.createElement('li');
    item.id = `item${count}`;
    const image = new Image();
    image.src = element.url;
    image.setAttribute('class', 'item-image');
    const titleContainer = document.createElement('div');
    titleContainer.setAttribute('class', 'item-title');
    const title = document.createElement('h3');
    title.innerHTML = element.title;
    const like = new Image();
    like.src = _assets_heart_svg__WEBPACK_IMPORTED_MODULE_0__;
    like.setAttribute('class', 'like');
    like.addEventListener('click', (e) => (0,_addLikes_js__WEBPACK_IMPORTED_MODULE_2__.default)(e.target.parentNode.parentNode.id));
    const likeText = document.createElement('p');
    likeText.innerHTML = '0 likes';
    likeText.setAttribute('class', 'amount-likes');
    const button = document.createElement('button');
    button.textContent = 'Comments';
    button.setAttribute('class', 'comments-button');

    button.addEventListener('click', (e) => {
      const title = e.target.parentNode.childNodes[1];
      console.log(title);
      (0,_comments_js__WEBPACK_IMPORTED_MODULE_1__.default)(title);
    });

    titleContainer.appendChild(title);
    titleContainer.appendChild(like);
    item.appendChild(image);
    item.appendChild(titleContainer);
    item.appendChild(likeText);
    item.appendChild(button);
    listContainer.appendChild(item);
  });
  container.appendChild(listContainer);
  mainDom.appendChild(container);
  callback();
};

const getList = async (callback) => {
  await fetch('https://api.nasa.gov/planetary/apod?api_key=tStRhhjFA0HQcsJqbr9OwtfYzYXhQORNoO6K52bg&start_date=2021-05-01&end_date=2021-05-21')
    .then((response) => response.json())
    .then((json) => printList(json, callback));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getList);

/***/ }),

/***/ "./src/assets/LibreFranklin-VariableFont_wght.ttf":
/*!********************************************************!*\
  !*** ./src/assets/LibreFranklin-VariableFont_wght.ttf ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79b6e141a9934744da5b.ttf";

/***/ }),

/***/ "./src/assets/Roboto-Regular.ttf":
/*!***************************************!*\
  !*** ./src/assets/Roboto-Regular.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a8d6ac03c7b96b7acb62.ttf";

/***/ }),

/***/ "./src/assets/STIXTwoText-VariableFont_wght.ttf":
/*!******************************************************!*\
  !*** ./src/assets/STIXTwoText-VariableFont_wght.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "da46840f3176f36da301.ttf";

/***/ }),

/***/ "./src/assets/heart.svg":
/*!******************************!*\
  !*** ./src/assets/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "27cf625b15dd614828ad.svg";

/***/ }),

/***/ "./src/assets/logo.svg":
/*!*****************************!*\
  !*** ./src/assets/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3dc66fd0fd7565ea2f5d.svg";

/***/ }),

/***/ "./src/assets/x-circle.svg":
/*!*********************************!*\
  !*** ./src/assets/x-circle.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bd4906d4f5c28e4d7321.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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
/* harmony import */ var _footer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.js */ "./src/footer.js");
/* harmony import */ var _header_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.js */ "./src/header.js");
/* harmony import */ var _list_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list.js */ "./src/list.js");
/* harmony import */ var _likes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./likes.js */ "./src/likes.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ "./src/style.css");






window.onload = () => {
  (0,_header_js__WEBPACK_IMPORTED_MODULE_1__.default)();
  (0,_footer_js__WEBPACK_IMPORTED_MODULE_0__.default)();
  (0,_list_js__WEBPACK_IMPORTED_MODULE_2__.default)(_likes_js__WEBPACK_IMPORTED_MODULE_3__.default);
};
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQ3pEdEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmb0M7QUFDRTtBQUNOO0FBQ007QUFDakI7O0FBRXJCO0FBQ0EsRUFBRSxtREFBVztBQUNiLEVBQUUsbURBQVM7QUFDWCxFQUFFLGlEQUFPLENBQUMsOENBQVk7QUFDdEIsRSIsInNvdXJjZXMiOlsid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9hZGRMaWtlcy5qcyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lLy4vc3JjL2NvbW1lbnRzLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvZm9vdGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaGVhZGVyLmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvbGlrZXMuanMiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS8uL3NyYy9saXN0LmpzIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vamF2YXNjcmlwdC1jYXBzdG9uZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9qYXZhc2NyaXB0LWNhcHN0b25lL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2phdmFzY3JpcHQtY2Fwc3RvbmUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2Fzc2V0cy9Sb2JvdG8tUmVndWxhci50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9hc3NldHMvU1RJWFR3b1RleHQtVmFyaWFibGVGb250X3dnaHQudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vYXNzZXRzL0xpYnJlRnJhbmtsaW4tVmFyaWFibGVGb250X3dnaHQudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoJ3R0ZicpO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1NUSVhUd28nO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdCgndHRmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnTGlicmVGcmFua2xpbic7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KCd0dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyZnIgN2ZyIDFmcjtcXG4gIGhlaWdodDogMTAwMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcblxcbmhlYWRlciB7XFxuICBncmlkLWNvbHVtbjogMS8xO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uZm9vdGVyLWdyaWQge1xcbiAgZ3JpZC1jb2x1bW46IDEvMjtcXG4gIGdyaWQtcm93OiAzLzQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWxlZnQ6IDJlbTtcXG59XFxuXFxuLmxpc3RDb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxufVxcblxcbi5saXN0Q29udGFpbmVyIGxpIHtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5pdGVtLWltYWdlIHtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIGhlaWdodDogMjEwcHg7XFxufVxcblxcbi5jb21tZW50cy1idXR0b24ge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5pdGVtLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBmb250LWZhbWlseTogJ1NUSVhUd28nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ubGlrZSB7XFxuICB3aWR0aDogMzBweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIG1hcmdpbi10b3A6IDE4LjcycHg7XFxufVxcblxcbi5hbW91bnQtbGlrZXMge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LWZhbWlseTogJ0xpYnJlRnJhbmtsaW4nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4uZGV0YWlscy1tb2RhbCB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZGV0YWlscy1tb2RhbC1vbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA2MCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDBkM2Q2O1xcblxcbiAgLyogei1pbmRleDogMTsgKi9cXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICBoZWlnaHQ6IDgwJTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XFxuXFxuLmNsb3NlLWJ0biB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDVweDtcXG4gIHJpZ2h0OiA1cHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uaW1nLWRldGFpbCB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NywgMjUzLCAyNTEpO1xcbn1cXG5cXG4uZXh0cmFzLWRpdiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMmZyIDFmcjtcXG59XFxuXFxuLmltZy10aXRsZSB7XFxuICBncmlkLWNvbHVtbjogMS8zO1xcbiAgZ3JpZC1yb3c6IDEvMjtcXG4gIGZvbnQtZmFtaWx5OiAnU1RJWFR3bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5leHRyYXMtZmxleCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xcbn1cXG5cXG4uZGVzYy1jb250IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uY29weS1jb250IHtcXG4gIGdyaWQtY29sdW1uOiAyLzM7XFxuICBncmlkLXJvdzogMi8zO1xcbn1cXG5cXG4uZGF0ZS1jb250IHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy80O1xcbn1cXG5cXG4ucmVzb3VyY2UtY29udCB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLmV4dHJhcyB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LWZhbWlseTogJ1NUSVhUd28nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmNvbW1lbnRzLWJveCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIG1hcmdpbi1yaWdodDogYXV0bztcXG59XFxuXFxuLmNvbW1lbnRzLWxpc3Qge1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIG1hcmdpbi10b3A6IDAuNWVtO1xcbn1cXG5cXG4uY29tbWVudHMtY291bnQge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uYWRkLWNvbW1lbnQge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICBtYXJnaW4tdG9wOiAyZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsMERBQXFEO0VBQ3JELGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsMERBQW9FO0VBQ3BFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsMERBQXNFO0VBQ3RFLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsK0JBQStCO0VBQy9CLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLE9BQU87RUFDUCxTQUFTO0VBQ1QsUUFBUTtFQUNSLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGFBQWE7RUFDYiw2QkFBNkI7RUFDN0IsbUJBQW1CO0VBQ25CLGlDQUFpQztFQUNqQyxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUNBQWlDO0VBQ2pDLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsd0NBQXdDO0FBQzFDOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YseUJBQXlCOztFQUV6QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFVBQVU7RUFDVixZQUFZO0VBQ1osV0FBVztFQUNYLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtDQUFrQztFQUNsQyxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoJy4vYXNzZXRzL1JvYm90by1SZWd1bGFyLnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnU1RJWFR3byc7XFxuICBzcmM6IHVybCgnLi9hc3NldHMvU1RJWFR3b1RleHQtVmFyaWFibGVGb250X3dnaHQudHRmJykgZm9ybWF0KCd0dGYnKTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdMaWJyZUZyYW5rbGluJztcXG4gIHNyYzogdXJsKCcuL2Fzc2V0cy9MaWJyZUZyYW5rbGluLVZhcmlhYmxlRm9udF93Z2h0LnR0ZicpIGZvcm1hdCgndHRmJyk7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDdmciAxZnI7XFxuICBoZWlnaHQ6IDEwMDBweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICBib3R0b206IDA7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG5cXG5oZWFkZXIge1xcbiAgZ3JpZC1jb2x1bW46IDEvMTtcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLmZvb3Rlci1ncmlkIHtcXG4gIGdyaWQtY29sdW1uOiAxLzI7XFxuICBncmlkLXJvdzogMy80O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZy1sZWZ0OiAyZW07XFxufVxcblxcbi5saXN0Q29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyO1xcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbn1cXG5cXG4ubGlzdENvbnRhaW5lciBsaSB7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uaXRlbS1pbWFnZSB7XFxuICB3aWR0aDogMzAwcHg7XFxuICBoZWlnaHQ6IDIxMHB4O1xcbn1cXG5cXG4uY29tbWVudHMtYnV0dG9uIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uaXRlbS10aXRsZSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgZm9udC1mYW1pbHk6ICdTVElYVHdvJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmxpa2Uge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBtYXJnaW4tdG9wOiAxOC43MnB4O1xcbn1cXG5cXG4uYW1vdW50LWxpa2VzIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgZm9udC1mYW1pbHk6ICdMaWJyZUZyYW5rbGluJywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLmRldGFpbHMtbW9kYWwge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmRldGFpbHMtbW9kYWwtb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNjAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QwZDNkNjtcXG5cXG4gIC8qIHotaW5kZXg6IDE7ICovXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgaGVpZ2h0OiA4MCU7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxufVxcblxcbi5jbG9zZS1idG4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA1cHg7XFxuICByaWdodDogNXB4O1xcbiAgaGVpZ2h0OiAyNXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLmltZy1kZXRhaWwge1xcbiAgaGVpZ2h0OiA1MCU7XFxuICB3aWR0aDogNTAlO1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDcsIDI1MywgMjUxKTtcXG59XFxuXFxuLmV4dHJhcy1kaXYge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDJmciAxZnI7XFxufVxcblxcbi5pbWctdGl0bGUge1xcbiAgZ3JpZC1jb2x1bW46IDEvMztcXG4gIGdyaWQtcm93OiAxLzI7XFxuICBmb250LWZhbWlseTogJ1NUSVhUd28nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4uZXh0cmFzLWZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcXG59XFxuXFxuLmRlc2MtY29udCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmNvcHktY29udCB7XFxuICBncmlkLWNvbHVtbjogMi8zO1xcbiAgZ3JpZC1yb3c6IDIvMztcXG59XFxuXFxuLmRhdGUtY29udCB7XFxuICBncmlkLWNvbHVtbjogMS8yO1xcbiAgZ3JpZC1yb3c6IDMvNDtcXG59XFxuXFxuLnJlc291cmNlLWNvbnQge1xcbiAgZ3JpZC1jb2x1bW46IDIvMztcXG4gIGdyaWQtcm93OiAzLzQ7XFxufVxcblxcbi5leHRyYXMge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1mYW1pbHk6ICdTVElYVHdvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5jb21tZW50cy1ib3gge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxufVxcblxcbi5jb21tZW50cy1saXN0IHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxuICBtYXJnaW4tdG9wOiAwLjVlbTtcXG59XFxuXFxuLmNvbW1lbnRzLWNvdW50IHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLmFkZC1jb21tZW50IHtcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLXRvcDogMmVtO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwcFVSTCA9ICc3WHVvTXNVMVNUdGdtak94TnJ4TCc7XG5cbmNvbnN0IGFkZExpa2VzTGlzdCA9IGFzeW5jIChpZCkgPT4ge1xuICBhd2FpdCBmZXRjaChgaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpL2FwcHMvJHthcHBVUkx9L2xpa2VzL2AsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGl0ZW1faWQ6IGlkfSksXG4gICAgaGVhZGVyczoge1xuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICB9LFxuICB9KVxuICAgIC50aGVuKCgpID0+IHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBhZGRMaWtlc0xpc3Q7IiwiaW1wb3J0IGNsb3NlSWNvbiBmcm9tICcuL2Fzc2V0cy94LWNpcmNsZS5zdmcnO1xuXG5jb25zdCBwb3BVcCA9IChvYmosIGNhbGxiYWNrKSA9PiB7XG4gIGNvbnN0IGRldGFpbHNQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRldGFpbHNQYWdlLmNsYXNzTGlzdC5hZGQoJ2RldGFpbHMtbW9kYWwtb24nKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxzUGFnZSk7XG5cbiAgY29uc3QgY2xvc2VCdG4gPSBuZXcgSW1hZ2UoKTtcbiAgY2xvc2VCdG4uc3JjID0gY2xvc2VJY29uO1xuICBjbG9zZUJ0bi5jbGFzc05hbWUgPSAnY2xvc2UtYnRuJztcbiAgY2xvc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZGV0YWlsc1BhZ2UuY2xhc3NMaXN0LnJlcGxhY2UoJ2RldGFpbHMtbW9kYWwtb24nLCAnZGV0YWlscy1tb2RhbCcpO1xuICB9KTtcbiAgZGV0YWlsc1BhZ2UuYXBwZW5kQ2hpbGQoY2xvc2VCdG4pO1xuXG4gIFxuXG4gIG9iai5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY29uc3QgZGV0YWlsSW1hZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbiAgICBkZXRhaWxJbWFnZS5jbGFzc05hbWUgPSAnaW1nLWRldGFpbCc7XG4gICAgZGV0YWlsSW1hZ2Uuc3JjID0gZWxlbWVudC51cmw7XG4gICAgZGV0YWlsc1BhZ2UuYXBwZW5kQ2hpbGQoZGV0YWlsSW1hZ2UpO1xuXG4gICAgY29uc3QgZXh0cmFzQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGV4dHJhc0NvbnQuY2xhc3NOYW1lID0gJ2V4dHJhcy1kaXYnO1xuXG4gICAgY29uc3QgaW1nVGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGltZ1RpdGxlLmlubmVySFRNTCA9IGVsZW1lbnQudGl0bGU7XG4gICAgaW1nVGl0bGUuY2xhc3NOYW1lID0gJ2ltZy10aXRsZSc7XG4gICAgZXh0cmFzQ29udC5hcHBlbmRDaGlsZChpbWdUaXRsZSk7XG5cbiAgICBjb25zdCBkZXNjQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRlc2NDb250LmNsYXNzTGlzdC5hZGQoJ2Rlc2MtY29udCcsICdleHRyYXMtZmxleCcpO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb24uY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24nLCAnZXh0cmFzJyk7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJIVE1MID0gJ0Rlc2NyaXB0aW9uOic7XG4gICAgZGVzY0NvbnQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgY29uc3QgZGVzY3JpcHRpb25UeHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgZGVzY3JpcHRpb25UeHQuY2xhc3NMaXN0LmFkZCgnZGVzY3JpcHRpb24tdHh0JywgJ2V4dHJhcycpO1xuICAgIGRlc2NyaXB0aW9uVHh0LmlubmVySFRNTCA9IGVsZW1lbnQubWVkaWFfdHlwZTtcbiAgICBkZXNjQ29udC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvblR4dCk7XG4gICAgZXh0cmFzQ29udC5hcHBlbmRDaGlsZChkZXNjQ29udCk7XG5cbiAgICBjb25zdCBkYXRlQ29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGRhdGVDb250LmNsYXNzTGlzdC5hZGQoJ2RhdGUtY29udCcsICdleHRyYXMtZmxleCcpO1xuXG4gICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlLmNsYXNzTGlzdC5hZGQoJ2RhdGUnLCAnZXh0cmFzJyk7XG4gICAgZGF0ZS5pbm5lckhUTUwgPSAnRGF0ZTonO1xuICAgIGRhdGVDb250LmFwcGVuZENoaWxkKGRhdGUpO1xuICAgXG4gICAgY29uc3QgZGF0ZVR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBkYXRlVHh0LmNsYXNzTGlzdC5hZGQoJ2RhdGUnLCAnZXh0cmFzJyk7XG4gICAgZGF0ZVR4dC5pbm5lckhUTUwgPSBlbGVtZW50LmRhdGU7XG4gICAgZGF0ZUNvbnQuYXBwZW5kQ2hpbGQoZGF0ZVR4dCk7XG4gICAgZXh0cmFzQ29udC5hcHBlbmRDaGlsZChkYXRlQ29udCk7XG5cbiAgICBjb25zdCBjb3B5Q29udCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvcHlDb250LmNsYXNzTGlzdC5hZGQoJ2NvcHktY29udCcsICdleHRyYXMtZmxleCcpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnLCAnZXh0cmFzJyk7XG4gICAgY29weXJpZ2h0LmlubmVySFRNTCA9ICdTZXJ2aWNlIHZlcnNpb246JztcbiAgICBjb3B5Q29udC5hcHBlbmRDaGlsZChjb3B5cmlnaHQpO1xuXG4gICAgY29uc3QgY29weXJpZ2h0VHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGNvcHlyaWdodFR4dC5jbGFzc0xpc3QuYWRkKCdjb3B5cmlnaHQnLCAnZXh0cmFzJyk7XG4gICAgY29weXJpZ2h0VHh0LmlubmVySFRNTCA9IGVsZW1lbnQuc2VydmljZV92ZXJzaW9uO1xuICAgIGNvcHlDb250LmFwcGVuZENoaWxkKGNvcHlyaWdodFR4dCk7XG4gICAgZXh0cmFzQ29udC5hcHBlbmRDaGlsZChjb3B5Q29udCk7XG5cbiAgICBjb25zdCByZXNvdXJjZUNvbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICByZXNvdXJjZUNvbnQuY2xhc3NMaXN0LmFkZCgncmVzb3VyY2UtY29udCcsICdleHRyYXMtZmxleCcpO1xuXG4gICAgY29uc3QgcmVzb3VyY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgcmVzb3VyY2UuY2xhc3NMaXN0LmFkZCgncmVzb3VyY2UnLCAnZXh0cmFzJyk7XG4gICAgcmVzb3VyY2UuaW5uZXJIVE1MID0gJ1Jlc291cmNlOic7XG4gICAgcmVzb3VyY2VDb250LmFwcGVuZENoaWxkKHJlc291cmNlKTtcblxuICAgIGNvbnN0IHJlc291cmNlVHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHJlc291cmNlVHh0LmNsYXNzTGlzdC5hZGQoJ3Jlc291cmNlJywgJ2V4dHJhcycpO1xuICAgIHJlc291cmNlVHh0LmlubmVySFRNTCA9IGVsZW1lbnQuZGF0ZTtcbiAgICByZXNvdXJjZUNvbnQuYXBwZW5kQ2hpbGQocmVzb3VyY2VUeHQpO1xuICAgIGV4dHJhc0NvbnQuYXBwZW5kQ2hpbGQocmVzb3VyY2VDb250KTtcbiAgICBkZXRhaWxzUGFnZS5hcHBlbmRDaGlsZChleHRyYXNDb250KTtcbiAgfSk7XG5cbiAgY29uc3QgY29tbWVudHNCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgY29tbWVudHNCb3guY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtYm94Jyk7XG5cbiAgY29uc3QgY29tbWVudHNDb3VudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gIGNvbW1lbnRzQ291bnQuY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtY291bnQnKTtcbiAgY29tbWVudHNDb3VudC5pbm5lckhUTUwgPSAnQ29tbWVudHMoMyknO1xuICBjb21tZW50c0JveC5hcHBlbmRDaGlsZChjb21tZW50c0NvdW50KTtcblxuICBjb25zdCBjb21tZW50c0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd1bCcpO1xuICBjb21tZW50c0xpc3QuY2xhc3NMaXN0LmFkZCgnY29tbWVudHMtbGlzdCcpO1xuICBjb25zdCBjb21tZW50T25lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgY29tbWVudE9uZS5pbm5lckhUTUwgPSAnMjAyMS8wOC8xMiAgVXNlcjE6ICBIZWxsbyc7XG4gIGNvbW1lbnRzTGlzdC5hcHBlbmRDaGlsZChjb21tZW50T25lKTtcbiAgY29uc3QgY29tbWVudFR3byA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gIGNvbW1lbnRUd28uaW5uZXJIVE1MID0gJzIwMjEvMDgvMTIgIFVzZXIyOiAgSGVsbG8gYmFjayc7XG4gIGNvbW1lbnRzTGlzdC5hcHBlbmRDaGlsZChjb21tZW50VHdvKTtcbiAgY29tbWVudHNCb3guYXBwZW5kQ2hpbGQoY29tbWVudHNMaXN0KTtcbiAgZGV0YWlsc1BhZ2UuYXBwZW5kQ2hpbGQoY29tbWVudHNCb3gpO1xuXG4gIGNvbnN0IGFkZENvbW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYWRkQ29tbWVudC5jbGFzc0xpc3QuYWRkKCdhZGQtY29tbWVudCcpO1xuXG4gIGNvbnN0IGFkZEFDb21tID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgYWRkQUNvbW0uY2xhc3NMaXN0LmFkZCgnYWRkLWFjb21tJyk7XG4gIGFkZEFDb21tLmlubmVySFRNTCA9ICdBZGQgYSBjb21tZW50JztcbiAgYWRkQ29tbWVudC5hcHBlbmRDaGlsZChhZGRBQ29tbSk7XG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICBjb25zdCB5b3VyTmFtZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gIHlvdXJOYW1lLnNldEF0dHJpYnV0ZSgndHlwZScsICd0ZXh0Jyk7XG4gIHlvdXJOYW1lLnNldEF0dHJpYnV0ZSgncGxhY2Vob2xkZXInLCAnWW91ciBuYW1lJyk7XG4gIHlvdXJOYW1lLmNsYXNzTGlzdC5hZGQoJ3lvdXItbmFtZScpO1xuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZCh5b3VyTmFtZSk7XG5cbiAgY29uc3QgeW91ckNvbW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICB5b3VyQ29tbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dGFyZWEnKTtcbiAgeW91ckNvbW0uc2V0QXR0cmlidXRlKCdwbGFjZWhvbGRlcicsICdZb3VyIGluc2lnaHRzJyk7XG4gIHlvdXJDb21tLmNsYXNzTGlzdC5hZGQoJ3lvdXItbmFtZScpO1xuICBjb21tZW50Rm9ybS5hcHBlbmRDaGlsZCh5b3VyQ29tbSk7XG5cbiAgY29uc3QgY29tbUJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICB5b3VyQ29tbS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnc3VibWl0Jyk7XG4gIHlvdXJDb21tLmNsYXNzTGlzdC5hZGQoJ2NvbW0tYnRuJyk7XG4gIGNvbW1lbnRGb3JtLmFwcGVuZENoaWxkKGNvbW1CdG4pO1xuICBhZGRDb21tZW50LmFwcGVuZENoaWxkKGNvbW1lbnRGb3JtKTtcbiAgZGV0YWlsc1BhZ2UuYXBwZW5kQ2hpbGQoYWRkQ29tbWVudCk7XG5cbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkZXRhaWxzUGFnZSk7XG4gIGNhbGxiYWNrKCk7XG59O1xuXG5jb25zdCBnZXRPYmogPSBhc3luYyAoY2FsbGJhY2spID0+IHtcbiAgYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLm5hc2EuZ292L3BsYW5ldGFyeS9hcG9kP2FwaV9rZXk9dFN0UmhoakZBMEhRY3NKcWJyOU93dGZZellYaFFPUk5vTzZLNTJiZyZzdGFydF9kYXRlPTIwMjEtMDUtMDEmZW5kX2RhdGU9MjAyMS0wNS0yMScpXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgLnRoZW4oKGpzb24pID0+IHBvcFVwKGpzb24sIGNhbGxiYWNrKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRPYmo7XG4iLCJjb25zdCBmb290ZXJEb20gPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGZvb3RlckdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcbiAgZm9vdGVyR3JpZC5jbGFzc0xpc3QuYWRkKCdmb290ZXItZ3JpZCcpO1xuICBmb290ZXJHcmlkLmlubmVySFRNTCA9ICdDcmVhdGVkIGJ5IEtldmluIGFuZCBMdWlzIHVuZGVyIENyZWF0aXZlIENvbW1vbnMgTGljZW5zZSc7XG4gIG1haW5Eb20uYXBwZW5kQ2hpbGQoZm9vdGVyR3JpZCk7XG4gIHJldHVybiBtYWluRG9tO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyRG9tOyIsImltcG9ydCBJY29uIGZyb20gJy4vYXNzZXRzL2xvZ28uc3ZnJztcblxuY29uc3QgcHJpbnRIZWFkZXIgPSAoKSA9PiB7XG4gIGNvbnN0IG1haW5Eb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG4gIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xuICBjb25zdCBsb2dvID0gbmV3IEltYWdlKCk7XG4gIGxvZ28uc3JjID0gSWNvbjtcbiAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICB0aXRsZS5pbm5lckhUTUwgPSAnTmFzYSBwaWN0dXJlIG9mIHRoZSBkYXknO1xuICBoZWFkZXIuYXBwZW5kQ2hpbGQobG9nbyk7XG4gIGhlYWRlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gIG1haW5Eb20uYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHByaW50SGVhZGVyOyIsImNvbnN0IGFwcFVSTCA9ICc3WHVvTXNVMVNUdGdtak94TnJ4TCc7XG5cbmNvbnN0IGdldExpa2VzTGlzdCA9IGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZmV0Y2goYGh0dHBzOi8vdXMtY2VudHJhbDEtaW52b2x2ZW1lbnQtYXBpLmNsb3VkZnVuY3Rpb25zLm5ldC9jYXBzdG9uZUFwaS9hcHBzLyR7YXBwVVJMfS9saWtlcy9gKVxuICAgIC50aGVuKChyZXNwb25zZSkgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgIC50aGVuKChqc29uKSA9PiB7XG4gICAgICBqc29uLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYoKGVsZW1lbnQuaXRlbV9pZCsnJykuaW5jbHVkZXMoJ2l0ZW0nKSkge1xuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGVsZW1lbnQuaXRlbV9pZCkuY2hpbGROb2Rlc1syXS5pbm5lckhUTUwgPSBgJHtlbGVtZW50Lmxpa2VzfSBsaWtlc2A7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZ2V0TGlrZXNMaXN0O1xuIiwiaW1wb3J0IEljb24gZnJvbSAnLi9hc3NldHMvaGVhcnQuc3ZnJztcbmltcG9ydCBnZXRPYmogZnJvbSAnLi9jb21tZW50cy5qcyc7XG5pbXBvcnQgYWRkTGlrZXNMaXN0IGZyb20gJy4vYWRkTGlrZXMuanMnO1xuXG5jb25zdCBwcmludExpc3QgPSAobGlzdCwgY2FsbGJhY2spID0+IHtcbiAgY29uc3QgbWFpbkRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbWFpbicpO1xuICBjb25zdCBsaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgbGlzdENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpc3RDb250YWluZXInKTtcbiAgbGV0IGNvdW50ID0gMDtcbiAgbGlzdC5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgY291bnQgKz0gMTtcbiAgICBjb25zdCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICBpdGVtLmlkID0gYGl0ZW0ke2NvdW50fWA7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBlbGVtZW50LnVybDtcbiAgICBpbWFnZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2l0ZW0taW1hZ2UnKTtcbiAgICBjb25zdCB0aXRsZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHRpdGxlQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAnaXRlbS10aXRsZScpO1xuICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICB0aXRsZS5pbm5lckhUTUwgPSBlbGVtZW50LnRpdGxlO1xuICAgIGNvbnN0IGxpa2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBsaWtlLnNyYyA9IEljb247XG4gICAgbGlrZS5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2xpa2UnKTtcbiAgICBsaWtlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IGFkZExpa2VzTGlzdChlLnRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUuaWQpKTtcbiAgICBjb25zdCBsaWtlVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBsaWtlVGV4dC5pbm5lckhUTUwgPSAnMCBsaWtlcyc7XG4gICAgbGlrZVRleHQuc2V0QXR0cmlidXRlKCdjbGFzcycsICdhbW91bnQtbGlrZXMnKTtcbiAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBidXR0b24udGV4dENvbnRlbnQgPSAnQ29tbWVudHMnO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2NsYXNzJywgJ2NvbW1lbnRzLWJ1dHRvbicpO1xuXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGNvbnN0IHRpdGxlID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzFdO1xuICAgICAgY29uc29sZS5sb2codGl0bGUpO1xuICAgICAgZ2V0T2JqKHRpdGxlKTtcbiAgICB9KTtcblxuICAgIHRpdGxlQ29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICB0aXRsZUNvbnRhaW5lci5hcHBlbmRDaGlsZChsaWtlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGltYWdlKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKHRpdGxlQ29udGFpbmVyKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGxpa2VUZXh0KTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgbGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZChpdGVtKTtcbiAgfSk7XG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsaXN0Q29udGFpbmVyKTtcbiAgbWFpbkRvbS5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICBjYWxsYmFjaygpO1xufTtcblxuY29uc3QgZ2V0TGlzdCA9IGFzeW5jIChjYWxsYmFjaykgPT4ge1xuICBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkubmFzYS5nb3YvcGxhbmV0YXJ5L2Fwb2Q/YXBpX2tleT10U3RSaGhqRkEwSFFjc0pxYnI5T3d0Zll6WVhoUU9STm9PNks1MmJnJnN0YXJ0X2RhdGU9MjAyMS0wNS0wMSZlbmRfZGF0ZT0yMDIxLTA1LTIxJylcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAudGhlbigoanNvbikgPT4gcHJpbnRMaXN0KGpzb24sIGNhbGxiYWNrKSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBnZXRMaXN0OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGZvb3RlckRvbSBmcm9tICcuL2Zvb3Rlci5qcyc7XG5pbXBvcnQgcHJpbnRIZWFkZXIgZnJvbSAnLi9oZWFkZXIuanMnO1xuaW1wb3J0IGdldExpc3QgZnJvbSAnLi9saXN0LmpzJztcbmltcG9ydCBnZXRMaWtlc0xpc3QgZnJvbSAnLi9saWtlcy5qcyc7XG5pbXBvcnQgJy4vc3R5bGUuY3NzJztcblxud2luZG93Lm9ubG9hZCA9ICgpID0+IHtcbiAgcHJpbnRIZWFkZXIoKTtcbiAgZm9vdGVyRG9tKCk7XG4gIGdldExpc3QoZ2V0TGlrZXNMaXN0KTtcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9