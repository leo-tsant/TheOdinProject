/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/form.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/form.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Darken the background */
    z-index: 1000; /* Make it appear on top of other content */
    justify-content: center;
    align-items: center;
}

.popup-form {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
    width: 400px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    color: #fff;
    background-color: #ff3b30;
    font-size: 24px;
    border-radius: 50%;
    transition: background-color 0.3s ease-in-out;
    text-align: center;
    outline: none;
    border: none;
    cursor: pointer;
    color: white;
}

.close-button:hover {
    background-color: #d9534f;
}

form button {
    margin-top: 10px;
    color: white;
    border-radius: 4px;
    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
    background: rgb(32, 97, 35);
    border: 1.4px solid rgb(102, 143, 104);
    width: 150px;
    height: 30px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
}

form button:hover {
    background: rgb(76, 150, 26);
}

label {
    font-size: 18px;
}

.input-fields {
    width: 100%;
}

input {
    width: 200px;
    height: 22px;
}

.popup-form h2 {
    margin-bottom: 20px;
    text-align: center;
}

form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/styles/form.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC,EAAE,0BAA0B;IAChE,aAAa,EAAE,2CAA2C;IAC1D,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,uCAAuC;IACvC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,WAAW;IACX,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,eAAe;IACf,kBAAkB;IAClB,6CAA6C;IAC7C,kBAAkB;IAClB,aAAa;IACb,YAAY;IACZ,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,yCAAyC;IACzC,2BAA2B;IAC3B,sCAAsC;IACtC,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,mBAAmB;IACnB,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,WAAW;AACf","sourcesContent":[".overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7); /* Darken the background */\n    z-index: 1000; /* Make it appear on top of other content */\n    justify-content: center;\n    align-items: center;\n}\n\n.popup-form {\n    background-color: white;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    position: relative;\n    width: 400px;\n    height: 320px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n\n.close-button {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    width: 24px;\n    height: 24px;\n    color: #fff;\n    background-color: #ff3b30;\n    font-size: 24px;\n    border-radius: 50%;\n    transition: background-color 0.3s ease-in-out;\n    text-align: center;\n    outline: none;\n    border: none;\n    cursor: pointer;\n    color: white;\n}\n\n.close-button:hover {\n    background-color: #d9534f;\n}\n\nform button {\n    margin-top: 10px;\n    color: white;\n    border-radius: 4px;\n    text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n    background: rgb(32, 97, 35);\n    border: 1.4px solid rgb(102, 143, 104);\n    width: 150px;\n    height: 30px;\n    font-weight: 600;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\nform button:hover {\n    background: rgb(76, 150, 26);\n}\n\nlabel {\n    font-size: 18px;\n}\n\n.input-fields {\n    width: 100%;\n}\n\ninput {\n    width: 200px;\n    height: 22px;\n}\n\n.popup-form h2 {\n    margin-bottom: 20px;\n    text-align: center;\n}\n\nform {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: #d6d4d4;
    min-height: 100vh;
}

ul {
    list-style: none;
}

.container {
    height: 100vh;
    display: grid;
    grid-template-rows: 120px 1fr 50px;
    grid-template-columns: 1fr 4fr;
}

.header {
    grid-row: 1 / 2;
    grid-column: 1 / 3;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 20px;
    background: #777570 radial-gradient(rgba(22, 22, 21, 0.5), rgba(8, 8, 7, 0.7));
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    color: #f5f5f5;
    font-size: 45px;
    font-weight: 600;
    border-bottom: 3px solid forestgreen;
    padding: 0 20px;
}

.sidebar {
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    background: #979795 radial-gradient(rgba(22, 22, 21, 0.5), rgba(8, 8, 7, 0.7));
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.sidebar-title {
    font-size: 28px;
    font-weight: 600;
    color: #f5f5f5;
    padding-bottom: 2px;
    border-bottom: 2px solid #f5f5f5;
}

.sidebar-item {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 10px 0;
    color: #f5f5f5;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.3s ease;
}

.sidebar-item:hover {
    cursor: pointer;
    background-color: #575553;
}

.sidebar-item:active {
    background-color: #777570;
}

.sidebar-item-icon {
    width: 25px;
}

.content {
    grid-row: 2 / 3;
    grid-column: 2 / 3;
    padding: 20px;
    display: grid;
    grid-template-rows: 70px 1fr;
    justify-items: center;
}

.content-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 30px;
    font-weight: 600;
    color: #dce0db;
    background: #a0a7a0 radial-gradient(rgba(22, 22, 21, 0.5), rgba(8, 8, 7, 0.7));
    width: 100%;
    padding: 0 20px;
    margin-bottom: 20px;
}

.tasks-container {
    width: 100%;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));
}

.add-new-task-button {
    background-color: #329b1d;
    color: #f5f5f5;
    height: 35px;
    width: 130px;
    font-size: 20px;
    font-weight: 600;
    padding: 5px;
    border-radius: 5px;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
}

.add-new-task-button:hover {
    background-color: #1b6e0a;
}

.footer {
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(255, 255, 255);
    font-weight: 500; /* Added font weight */
    padding: 0 20px; /* Side padding for larger screens */
    transition: background-color 0.3s ease; /* Transition for hover effect */
    font-size: 14px;
    background-color: rgb(116, 113, 113);
}

.footer a {
    color: rgb(15, 223, 50);
    text-decoration: none; /* Added underline to identify as link */
    transition: color 0.3s ease; /* Transition for hover effect */
    font-weight: 700;
}

.footer a:hover {
    text-decoration: underline;
}
`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAAA;IACI,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;IACzB,iBAAiB;AACrB;;AAEA;IACI,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,aAAa;IACb,kCAAkC;IAClC,8BAA8B;AAClC;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,mBAAmB;IACnB,SAAS;IACT,8EAA8E;IAC9E,sCAAsC;IACtC,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,oCAAoC;IACpC,eAAe;AACnB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,8EAA8E;IAC9E,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,SAAS;AACb;;AAEA;IACI,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,mBAAmB;IACnB,gCAAgC;AACpC;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,SAAS;IACT,eAAe;IACf,cAAc;IACd,eAAe;IACf,gBAAgB;IAChB,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,WAAW;AACf;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,4BAA4B;IAC5B,qBAAqB;AACzB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,gBAAgB;IAChB,cAAc;IACd,8EAA8E;IAC9E,WAAW;IACX,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,WAAW;IACX,aAAa;IACb,SAAS;IACT,6DAA6D;AACjE;;AAEA;IACI,yBAAyB;IACzB,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gBAAgB;IAChB,YAAY;IACZ,kBAAkB;IAClB,YAAY;IACZ,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,yBAAyB;IACzB,gBAAgB,EAAE,sBAAsB;IACxC,eAAe,EAAE,oCAAoC;IACrD,sCAAsC,EAAE,gCAAgC;IACxE,eAAe;IACf,oCAAoC;AACxC;;AAEA;IACI,uBAAuB;IACvB,qBAAqB,EAAE,wCAAwC;IAC/D,2BAA2B,EAAE,gCAAgC;IAC7D,gBAAgB;AACpB;;AAEA;IACI,0BAA0B;AAC9B","sourcesContent":["* {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n\nbody {\n    background-color: #d6d4d4;\n    min-height: 100vh;\n}\n\nul {\n    list-style: none;\n}\n\n.container {\n    height: 100vh;\n    display: grid;\n    grid-template-rows: 120px 1fr 50px;\n    grid-template-columns: 1fr 4fr;\n}\n\n.header {\n    grid-row: 1 / 2;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n    gap: 20px;\n    background: #777570 radial-gradient(rgba(22, 22, 21, 0.5), rgba(8, 8, 7, 0.7));\n    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);\n    color: #f5f5f5;\n    font-size: 45px;\n    font-weight: 600;\n    border-bottom: 3px solid forestgreen;\n    padding: 0 20px;\n}\n\n.sidebar {\n    grid-row: 2 / 3;\n    grid-column: 1 / 2;\n    background: #979795 radial-gradient(rgba(22, 22, 21, 0.5), rgba(8, 8, 7, 0.7));\n    padding: 20px;\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n}\n\n.sidebar-title {\n    font-size: 28px;\n    font-weight: 600;\n    color: #f5f5f5;\n    padding-bottom: 2px;\n    border-bottom: 2px solid #f5f5f5;\n}\n\n.sidebar-item {\n    display: flex;\n    align-items: center;\n    gap: 10px;\n    padding: 10px 0;\n    color: #f5f5f5;\n    font-size: 20px;\n    font-weight: 600;\n    transition: all 0.3s ease;\n}\n\n.sidebar-item:hover {\n    cursor: pointer;\n    background-color: #575553;\n}\n\n.sidebar-item:active {\n    background-color: #777570;\n}\n\n.sidebar-item-icon {\n    width: 25px;\n}\n\n.content {\n    grid-row: 2 / 3;\n    grid-column: 2 / 3;\n    padding: 20px;\n    display: grid;\n    grid-template-rows: 70px 1fr;\n    justify-items: center;\n}\n\n.content-header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    font-size: 30px;\n    font-weight: 600;\n    color: #dce0db;\n    background: #a0a7a0 radial-gradient(rgba(22, 22, 21, 0.5), rgba(8, 8, 7, 0.7));\n    width: 100%;\n    padding: 0 20px;\n    margin-bottom: 20px;\n}\n\n.tasks-container {\n    width: 100%;\n    display: grid;\n    gap: 30px;\n    grid-template-columns: repeat(auto-fit, minmax(300px, 400px));\n}\n\n.add-new-task-button {\n    background-color: #329b1d;\n    color: #f5f5f5;\n    height: 35px;\n    width: 130px;\n    font-size: 20px;\n    font-weight: 600;\n    padding: 5px;\n    border-radius: 5px;\n    border: none;\n    cursor: pointer;\n    transition: all 0.3s ease;\n}\n\n.add-new-task-button:hover {\n    background-color: #1b6e0a;\n}\n\n.footer {\n    grid-row: 3 / 4;\n    grid-column: 1 / 3;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: rgb(255, 255, 255);\n    font-weight: 500; /* Added font weight */\n    padding: 0 20px; /* Side padding for larger screens */\n    transition: background-color 0.3s ease; /* Transition for hover effect */\n    font-size: 14px;\n    background-color: rgb(116, 113, 113);\n}\n\n.footer a {\n    color: rgb(15, 223, 50);\n    text-decoration: none; /* Added underline to identify as link */\n    transition: color 0.3s ease; /* Transition for hover effect */\n    font-weight: 700;\n}\n\n.footer a:hover {\n    text-decoration: underline;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/task.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/task.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card {
    height: 300px;
    border-radius: 10px;
    background-color: white;
    padding: 25px 15px 15px 25px;
    display: grid;
    grid-template-rows: repeat(3 1fr);
    position: relative;
}

.low-importance {
    background-image: linear-gradient(to right, rgb(14, 68, 185) 17px, white 17px);
}

.medium-importance {
    background-image: linear-gradient(to right, rgb(254, 198, 14) 17px, white 17px);
}

.high-importance {
    background-image: linear-gradient(to right, rgb(199, 24, 18) 17px, white 17px);
}

.delete-card-button {
    position: absolute;
    bottom: 10px;
    right: 10px;
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease-in-out;
    opacity: 0.5;
    cursor: pointer;
}

.delete-card-button:hover {
    transform: scale(1.2);
    opacity: 1;
}

.edit-card-button {
    position: absolute;
    bottom: 10px;
    right: 40px;
    width: 24px;
    height: 24px;
    transition: transform 0.2s ease-in-out;
    opacity: 0.5;
    cursor: pointer;
}

.edit-card-button:hover {
    transform: scale(1.2);
    opacity: 1;
}

.delete-card-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7); /* Darken the background */
    z-index: 1000; /* Make it appear on top of other content */
    justify-content: center;
    align-items: center;
}

.delete-card-popup {
    background-color: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    position: relative;
    width: 400px;
    height: 320px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`, "",{"version":3,"sources":["webpack://./src/styles/task.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,4BAA4B;IAC5B,aAAa;IACb,iCAAiC;IACjC,kBAAkB;AACtB;;AAEA;IACI,8EAA8E;AAClF;;AAEA;IACI,+EAA+E;AACnF;;AAEA;IACI,8EAA8E;AAClF;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,YAAY;IACZ,WAAW;IACX,WAAW;IACX,YAAY;IACZ,sCAAsC;IACtC,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,qBAAqB;IACrB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC,EAAE,0BAA0B;IAChE,aAAa,EAAE,2CAA2C;IAC1D,uBAAuB;IACvB,mBAAmB;AACvB;;AAEA;IACI,uBAAuB;IACvB,aAAa;IACb,kBAAkB;IAClB,uCAAuC;IACvC,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;AACvB","sourcesContent":[".card {\n    height: 300px;\n    border-radius: 10px;\n    background-color: white;\n    padding: 25px 15px 15px 25px;\n    display: grid;\n    grid-template-rows: repeat(3 1fr);\n    position: relative;\n}\n\n.low-importance {\n    background-image: linear-gradient(to right, rgb(14, 68, 185) 17px, white 17px);\n}\n\n.medium-importance {\n    background-image: linear-gradient(to right, rgb(254, 198, 14) 17px, white 17px);\n}\n\n.high-importance {\n    background-image: linear-gradient(to right, rgb(199, 24, 18) 17px, white 17px);\n}\n\n.delete-card-button {\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    width: 24px;\n    height: 24px;\n    transition: transform 0.2s ease-in-out;\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n.delete-card-button:hover {\n    transform: scale(1.2);\n    opacity: 1;\n}\n\n.edit-card-button {\n    position: absolute;\n    bottom: 10px;\n    right: 40px;\n    width: 24px;\n    height: 24px;\n    transition: transform 0.2s ease-in-out;\n    opacity: 0.5;\n    cursor: pointer;\n}\n\n.edit-card-button:hover {\n    transform: scale(1.2);\n    opacity: 1;\n}\n\n.delete-card-overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.7); /* Darken the background */\n    z-index: 1000; /* Make it appear on top of other content */\n    justify-content: center;\n    align-items: center;\n}\n\n.delete-card-popup {\n    background-color: white;\n    padding: 20px;\n    border-radius: 5px;\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n    position: relative;\n    width: 400px;\n    height: 320px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n}\n"],"sourceRoot":""}]);
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
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/form.css":
/*!*****************************!*\
  !*** ./src/styles/form.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./form.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/form.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_form_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/styles/task.css":
/*!*****************************!*\
  !*** ./src/styles/task.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./task.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/task.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_task_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
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
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
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
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
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
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
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
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
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
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/components/forms/edit-task-form.js":
/*!************************************************!*\
  !*** ./src/components/forms/edit-task-form.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const editTaskForm = (task) => {
    const container = document.querySelector(".container");

    const overlay = document.createElement("div");
    overlay.id = "edit-task-overlay";
    overlay.classList.add("overlay");

    const editPopupForm = document.createElement("div");
    editPopupForm.classList.add("popup-form");

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Edit Task";

    const form = document.createElement("form");
    form.id = "edit-task-form";

    // Create the input fields for the form
    const inputFields = document.createElement("div");
    inputFields.classList.add("input-fields");

    createInputField("Title:", "text", "title", task.title);
    createTextAreaField("Description:", "description", task.description);
    createInputField("Due Date:", "date", "dueDate", task.dueDate);
    createSelectField("Importance:", "importance", ["High", "Medium", "Low"], task.importance);

    const doneButton = document.createElement("button");
    doneButton.type = "submit";
    doneButton.textContent = "Done";

    const cancelButton = document.createElement("button");
    cancelButton.id = "cancel-button";
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";

    form.appendChild(inputFields);
    form.appendChild(doneButton);
    form.appendChild(cancelButton);

    // Add all elements to the popup form
    editPopupForm.appendChild(formTitle);
    editPopupForm.appendChild(form);

    // Add the popup form to the overlay
    overlay.appendChild(editPopupForm);

    // Add the overlay to the document's body
    container.appendChild(overlay);

    function createInputField(labelText, inputType, inputName, defaultValue, isRequired = true) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputName;
        input.name = inputName;
        input.value = defaultValue;
        if (isRequired) {
            input.required = true;
        }

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        inputFields.appendChild(fieldContainer);
    }

    function createTextAreaField(labelText, inputName, defaultValue) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const textarea = document.createElement("textarea");
        textarea.id = inputName;
        textarea.name = inputName;
        textarea.value = defaultValue;

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(textarea);
        inputFields.appendChild(fieldContainer);
    }

    function createSelectField(labelText, inputName, options, defaultValue) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const select = document.createElement("select");
        select.id = inputName;
        select.name = inputName;
        select.required = true;

        options.forEach((optionText) => {
            const option = document.createElement("option");
            option.value = optionText;
            option.textContent = optionText;
            if (optionText === defaultValue) {
                option.selected = true;
            }
            select.appendChild(option);
        });

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(select);
        inputFields.appendChild(fieldContainer);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editTaskForm);


/***/ }),

/***/ "./src/components/forms/form.js":
/*!**************************************!*\
  !*** ./src/components/forms/form.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../styles/form.css */ "./src/styles/form.css");


const form = () => {
    const container = document.querySelector(".container");

    const overlay = document.createElement("div");
    overlay.id = "new-task-overlay";
    overlay.classList.add("overlay");

    const popupForm = document.createElement("div");
    popupForm.classList.add("popup-form");

    const formTitle = document.createElement("h2");
    formTitle.textContent = "Add New Task";

    const form = document.createElement("form");
    form.id = "new-task-form";

    // Create the input fields for the form
    const inputFields = document.createElement("div");
    inputFields.classList.add("input-fields");

    // Create input fields for Title, Description, Due Date, and Importance
    createInputField("Title:", "text", "title");
    createTextAreaField("Description:", "description");
    createInputField("Due Date:", "date", "dueDate");
    createSelectField("Importance:", "importance", ["High", "Medium", "Low"]);

    // Create the "Add Task" button
    const addButton = document.createElement("button");
    addButton.type = "submit";
    addButton.textContent = "Add Task";

    // Add input fields and the "Add Task" button to the form
    form.appendChild(inputFields);
    form.appendChild(addButton);

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.classList.add("close-button");
    closeButton.textContent = "×";

    // Add all elements to the popup form
    popupForm.appendChild(formTitle);
    popupForm.appendChild(form);
    popupForm.appendChild(closeButton);

    // Add the popup form to the overlay
    overlay.appendChild(popupForm);

    // Add the overlay to the document's body
    container.appendChild(overlay);

    // Create a function to simplify input field creation
    function createInputField(labelText, inputType, inputName, isRequired = true) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const input = document.createElement("input");
        input.type = inputType;
        input.id = inputName;
        input.name = inputName;
        if (isRequired) {
            input.required = true;
        }

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(input);
        inputFields.appendChild(fieldContainer);
    }
    // Function to create a text area input field
    function createTextAreaField(labelText, inputName) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const textarea = document.createElement("textarea");
        textarea.id = inputName;
        textarea.name = inputName;

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(textarea);
        inputFields.appendChild(fieldContainer);
    }

    // Function to create a select input field
    function createSelectField(labelText, inputName, options) {
        const fieldContainer = document.createElement("div");
        fieldContainer.classList.add("box");

        const label = document.createElement("label");
        label.textContent = labelText;
        label.setAttribute("for", inputName);

        const select = document.createElement("select");
        select.id = inputName;
        select.name = inputName;
        select.required = true;

        options.forEach((optionText) => {
            const option = document.createElement("option");
            option.value = optionText;
            option.textContent = optionText;
            select.appendChild(option);
        });

        fieldContainer.appendChild(label);
        fieldContainer.appendChild(select);
        inputFields.appendChild(fieldContainer);
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (form);


/***/ }),

/***/ "./src/components/forms/new-project-form.js":
/*!**************************************************!*\
  !*** ./src/components/forms/new-project-form.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// import displayProjects from "../display-projects";

const projects = JSON.parse(localStorage.getItem("projects")) || [];

const newProjectForm = () => {
    const projectsList = document.getElementById("projects-list");

    const popupForm = document.createElement("div");
    popupForm.classList.add("new-project-popup-form");

    const projectForm = document.createElement("form");
    projectForm.id = "new-project-form";

    const fieldContainer = document.createElement("div");
    fieldContainer.classList.add("box");

    const label = document.createElement("label");
    label.textContent = "Project Name";
    label.setAttribute("for", "project-name");

    const input = document.createElement("input");
    input.type = "text";
    input.id = "project-name";
    input.name = "project-name";
    input.required = true;

    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Add Project";

    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.textContent = "Cancel";
    cancelButton.addEventListener("click", () => {
        projectsList.removeChild(projectForm);
    });

    projectForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const projectName = document.getElementById("project-name").value;

        const project = {
            name: projectName,
            tasks: [],
        };

        projects.push(project);
        localStorage.setItem("projects", JSON.stringify(projects));

        projectsList.removeChild(projectForm);
        displayProjects();
    });

    fieldContainer.appendChild(label);
    fieldContainer.appendChild(input);

    projectForm.appendChild(fieldContainer);
    projectForm.appendChild(submitButton);
    projectForm.appendChild(cancelButton);

    projectsList.append(projectForm);
};

const displayProjects = () => {
    const projectsList = document.getElementById("projects-list");

    projectsList.innerHTML = "";

    projects.forEach((project) => {
        const projectItem = document.createElement("li");
        projectItem.classList.add("sidebar-item");
        projectItem.id = project.name;

        const projectItemText = document.createElement("div");
        projectItemText.classList.add("sidebar-item-text");
        projectItemText.textContent = project.name;

        const projectItemIcon = document.createElement("img");
        projectItemIcon.classList.add("sidebar-item-icon");
        projectItemIcon.src = "assets/checkmark.svg";

        projectItem.appendChild(projectItemIcon);
        projectItem.appendChild(projectItemText);
        projectsList.appendChild(projectItem);
    });

    const addProjectItem = document.createElement("li");
    addProjectItem.classList.add("sidebar-item");
    addProjectItem.id = "add-project";

    const addProjectItemText = document.createElement("div");
    addProjectItemText.classList.add("sidebar-item-text");
    addProjectItemText.textContent = "Add Project";

    const addProjectItemIcon = document.createElement("img");
    addProjectItemIcon.classList.add("sidebar-item-icon");
    addProjectItemIcon.src = "assets/checkmark.svg";

    addProjectItem.appendChild(addProjectItemIcon);
    addProjectItem.appendChild(addProjectItemText);
    projectsList.appendChild(addProjectItem);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (newProjectForm);


/***/ }),

/***/ "./src/components/load-page/content.js":
/*!*********************************************!*\
  !*** ./src/components/load-page/content.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _sidebar_items_all_tasks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../sidebar-items/all-tasks */ "./src/components/sidebar-items/all-tasks.js");
/* harmony import */ var _sidebar_items_today__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar-items/today */ "./src/components/sidebar-items/today.js");
/* harmony import */ var _sidebar_items_this_week__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sidebar-items/this-week */ "./src/components/sidebar-items/this-week.js");
/* harmony import */ var _sidebar_items_important__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sidebar-items/important */ "./src/components/sidebar-items/important.js");
/* harmony import */ var _sidebar_items_add_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sidebar-items/add-project */ "./src/components/sidebar-items/add-project.js");






const content = () => {
    const content = document.querySelector(".content");
    const allTasksTab = document.getElementById("all-tasks");
    const todayTab = document.getElementById("today");
    const thisWeekTab = document.getElementById("this-week");
    const importantTab = document.getElementById("important");
    const addProjectButton = document.getElementById("add-project");

    let firstLoad = true;

    function handleTabClick(callback) {
        content.innerHTML = "";
        callback();
    }

    allTasksTab.addEventListener("click", () => handleTabClick(_sidebar_items_all_tasks__WEBPACK_IMPORTED_MODULE_0__["default"]));
    todayTab.addEventListener("click", () => handleTabClick(_sidebar_items_today__WEBPACK_IMPORTED_MODULE_1__["default"]));
    thisWeekTab.addEventListener("click", () => handleTabClick(_sidebar_items_this_week__WEBPACK_IMPORTED_MODULE_2__["default"]));
    importantTab.addEventListener("click", () => handleTabClick(_sidebar_items_important__WEBPACK_IMPORTED_MODULE_3__["default"]));
    addProjectButton.addEventListener("click", () => (0,_sidebar_items_add_project__WEBPACK_IMPORTED_MODULE_4__["default"])());

    if (firstLoad) {
        handleTabClick(_sidebar_items_all_tasks__WEBPACK_IMPORTED_MODULE_0__["default"]);
        firstLoad = false;
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (content);


/***/ }),

/***/ "./src/components/load-page/footer.js":
/*!********************************************!*\
  !*** ./src/components/load-page/footer.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const footer = () => {
    const footer = document.querySelector(".footer");
    footer.innerHTML =
        'Created by &nbsp;<a href="https://github.com/leo-tsant" target="_blank">Leonidas Tsantarliotis</a>&nbsp;for&nbsp;<a href="https://www.theodinproject.com/dashboard" target="_blank">The Odin Project</a>';
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (footer);


/***/ }),

/***/ "./src/components/load-page/header.js":
/*!********************************************!*\
  !*** ./src/components/load-page/header.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/checkmark.svg */ "./src/images/checkmark.svg");


const header = () => {
    const header = document.querySelector(".header");

    const headerText = document.createElement("div");
    headerText.textContent = "To Do List";
    headerText.classList.add("header-text");

    const headerIcon = document.createElement("img");
    headerIcon.className = "icon";
    headerIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    header.appendChild(headerIcon);
    header.appendChild(headerText);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (header);


/***/ }),

/***/ "./src/components/load-page/index.js":
/*!*******************************************!*\
  !*** ./src/components/load-page/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/components/load-page/header.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sidebar */ "./src/components/load-page/sidebar.js");
/* harmony import */ var _content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content */ "./src/components/load-page/content.js");
/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ "./src/components/load-page/footer.js");





const loadPage = () => {
    (0,_header__WEBPACK_IMPORTED_MODULE_0__["default"])();
    (0,_sidebar__WEBPACK_IMPORTED_MODULE_1__["default"])();
    (0,_content__WEBPACK_IMPORTED_MODULE_2__["default"])();
    (0,_footer__WEBPACK_IMPORTED_MODULE_3__["default"])();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loadPage);


/***/ }),

/***/ "./src/components/load-page/sidebar.js":
/*!*********************************************!*\
  !*** ./src/components/load-page/sidebar.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../images/checkmark.svg */ "./src/images/checkmark.svg");


const sidebar = () => {
    const sidebar = document.querySelector(".sidebar");

    // Home List
    const homeList = document.createElement("div");
    homeList.classList.add("sidebar-list");
    const homeListTitle = document.createElement("div");
    homeListTitle.classList.add("sidebar-title");
    homeListTitle.textContent = "Home";

    const homeListItems = document.createElement("ul");
    homeListItems.id = "home-list";

    const homeListItemsAllTasks = document.createElement("li");
    homeListItemsAllTasks.id = "all-tasks";
    homeListItemsAllTasks.classList.add("sidebar-item");
    const homeListItemsAllTasksText = document.createElement("div");
    homeListItemsAllTasksText.classList.add("sidebar-item-text");
    homeListItemsAllTasksText.textContent = "All Tasks";
    const homeListItemsAllTasksIcon = document.createElement("img");
    homeListItemsAllTasksIcon.classList.add("sidebar-item-icon");
    homeListItemsAllTasksIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    homeListItemsAllTasks.appendChild(homeListItemsAllTasksIcon);
    homeListItemsAllTasks.appendChild(homeListItemsAllTasksText);
    homeListItems.appendChild(homeListItemsAllTasks);

    const homeListItemsToday = document.createElement("li");
    homeListItemsToday.id = "today";
    homeListItemsToday.classList.add("sidebar-item");
    const homeListItemsTodayText = document.createElement("div");
    homeListItemsTodayText.classList.add("sidebar-item-text");
    homeListItemsTodayText.textContent = "Today";
    const homeListItemsTodayIcon = document.createElement("img");
    homeListItemsTodayIcon.classList.add("sidebar-item-icon");
    homeListItemsTodayIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    homeListItemsToday.appendChild(homeListItemsTodayIcon);
    homeListItemsToday.appendChild(homeListItemsTodayText);
    homeListItems.appendChild(homeListItemsToday);

    const homeListItemsThisWeek = document.createElement("li");
    homeListItemsThisWeek.id = "this-week";
    homeListItemsThisWeek.classList.add("sidebar-item");
    const homeListItemsThisWeekText = document.createElement("div");
    homeListItemsThisWeekText.classList.add("sidebar-item-text");
    homeListItemsThisWeekText.textContent = "This Week";
    const homeListItemsThisWeekIcon = document.createElement("img");
    homeListItemsThisWeekIcon.classList.add("sidebar-item-icon");
    homeListItemsThisWeekIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    homeListItemsThisWeek.appendChild(homeListItemsThisWeekIcon);
    homeListItemsThisWeek.appendChild(homeListItemsThisWeekText);
    homeListItems.appendChild(homeListItemsThisWeek);

    const homeListItemsImportant = document.createElement("li");
    homeListItemsImportant.id = "important";
    homeListItemsImportant.classList.add("sidebar-item");
    const homeListItemsImportantText = document.createElement("div");
    homeListItemsImportantText.classList.add("sidebar-item-text");
    homeListItemsImportantText.textContent = "Important";
    const homeListItemsImportantIcon = document.createElement("img");
    homeListItemsImportantIcon.classList.add("sidebar-item-icon");
    homeListItemsImportantIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    homeListItemsImportant.appendChild(homeListItemsImportantIcon);
    homeListItemsImportant.appendChild(homeListItemsImportantText);
    homeListItems.appendChild(homeListItemsImportant);

    homeList.appendChild(homeListTitle);
    homeList.appendChild(homeListItems);

    // Projects List
    const projectsList = document.createElement("div");
    projectsList.classList.add("sidebar-list");
    const projectsListTitle = document.createElement("div");
    projectsListTitle.textContent = "Projects";
    projectsListTitle.classList.add("sidebar-title");

    const projectsListItems = document.createElement("ul");
    projectsListItems.id = "projects-list";

    const projectsListItemsAddProject = document.createElement("li");
    projectsListItemsAddProject.classList.add("sidebar-item");
    projectsListItemsAddProject.id = "add-project";
    const projectsListItemsAddProjectText = document.createElement("div");
    projectsListItemsAddProjectText.classList.add("sidebar-item-text");
    projectsListItemsAddProjectText.textContent = "Add Project";
    const projectsListItemsAddProjectIcon = document.createElement("img");
    projectsListItemsAddProjectIcon.classList.add("sidebar-item-icon");
    projectsListItemsAddProjectIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    projectsListItemsAddProject.appendChild(projectsListItemsAddProjectIcon);
    projectsListItemsAddProject.appendChild(projectsListItemsAddProjectText);
    projectsListItems.appendChild(projectsListItemsAddProject);

    projectsList.appendChild(projectsListTitle);
    projectsList.appendChild(projectsListItems);

    sidebar.appendChild(homeList);
    sidebar.appendChild(projectsList);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);


/***/ }),

/***/ "./src/components/sidebar-items/add-project.js":
/*!*****************************************************!*\
  !*** ./src/components/sidebar-items/add-project.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _forms_new_project_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../forms/new-project-form */ "./src/components/forms/new-project-form.js");


const addProject = () => {
    let newForm = document.getElementById("new-project-form");
    if (!newForm) {
        (0,_forms_new_project_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
    }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addProject);


/***/ }),

/***/ "./src/components/sidebar-items/all-tasks.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar-items/all-tasks.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/components/task.js");


const allTasks = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "All Tasks";

    const addNewTaskButton = document.createElement("button");
    addNewTaskButton.classList.add("add-new-task-button");
    addNewTaskButton.textContent = "+ New Task";

    header.appendChild(addNewTaskButton);

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    content.appendChild(header);
    content.appendChild(tasksContainer);

    (0,_task__WEBPACK_IMPORTED_MODULE_0__.createTaskForm)();
    (0,_task__WEBPACK_IMPORTED_MODULE_0__.displayTasks)("allTasks");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (allTasks);


/***/ }),

/***/ "./src/components/sidebar-items/important.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar-items/important.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/components/task.js");


const important = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "Important";

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    content.appendChild(header);
    content.appendChild(tasksContainer);

    (0,_task__WEBPACK_IMPORTED_MODULE_0__.displayTasks)("important");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (important);


/***/ }),

/***/ "./src/components/sidebar-items/this-week.js":
/*!***************************************************!*\
  !*** ./src/components/sidebar-items/this-week.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/components/task.js");


const thisWeek = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "This Week";

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    content.appendChild(header);
    content.appendChild(tasksContainer);

    (0,_task__WEBPACK_IMPORTED_MODULE_0__.displayTasks)("thisWeek");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (thisWeek);


/***/ }),

/***/ "./src/components/sidebar-items/today.js":
/*!***********************************************!*\
  !*** ./src/components/sidebar-items/today.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../task */ "./src/components/task.js");


const today = () => {
    const content = document.querySelector(".content");

    const header = document.createElement("div");
    header.classList.add("content-header");
    header.textContent = "Today";

    const tasksContainer = document.createElement("div");
    tasksContainer.classList.add("tasks-container");

    content.appendChild(header);
    content.appendChild(tasksContainer);

    (0,_task__WEBPACK_IMPORTED_MODULE_0__.displayTasks)("today");
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (today);


/***/ }),

/***/ "./src/components/task.js":
/*!********************************!*\
  !*** ./src/components/task.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createTaskForm: () => (/* binding */ createTaskForm),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks)
/* harmony export */ });
/* harmony import */ var _forms_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms/form */ "./src/components/forms/form.js");
/* harmony import */ var _forms_edit_task_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forms/edit-task-form */ "./src/components/forms/edit-task-form.js");
/* harmony import */ var _styles_task_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/task.css */ "./src/styles/task.css");
/* harmony import */ var _images_trash_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/trash.png */ "./src/images/trash.png");
/* harmony import */ var _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/edit.svg */ "./src/images/edit.svg");






const tasks = [];
let currentId = 0;

const createTask = (title, description, dueDate, importance) => {
    const toDoItem = {
        id: currentId++, // Assign the currentId and then increment it.
        title: title,
        description: description,
        dueDate: dueDate,
        importance: importance,
    };

    return toDoItem;
};

const addTask = (task) => {
    tasks.push(task);
    saveTasksToLocalStorage(); // Save tasks to local storage when adding a new task
};

// Function to save tasks to local storage
const saveTasksToLocalStorage = () => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
};

const displayTasks = (whichTasks) => {
    const tasksContainer = document.querySelector(".tasks-container");
    tasksContainer.innerHTML = "";

    // Clear the tasks array before loading tasks from local storage
    tasks.length = 0;

    // Load tasks from local storage if they exist
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (storedTasks) {
        tasks.push(...storedTasks);
    }

    let filteredTasks = [];

    if (whichTasks === "today") {
        filteredTasks = tasks.filter((task) => {
            const today = new Date();
            const taskDueDate = new Date(task.dueDate);
            return (
                taskDueDate.getDate() === today.getDate() &&
                taskDueDate.getMonth() === today.getMonth() &&
                taskDueDate.getFullYear() === today.getFullYear()
            );
        });
    } else if (whichTasks === "thisWeek") {
        filteredTasks = tasks.filter((task) => {
            const today = new Date();
            const taskDueDate = new Date(task.dueDate);
            const todayDay = today.getDate();
            const taskDueDateDay = taskDueDate.getDate();
            const differenceInDays = Math.abs(todayDay - taskDueDateDay);
            return differenceInDays <= 7;
        });
    } else if (whichTasks === "important") {
        filteredTasks = tasks.filter((task) => {
            return task.importance === "High";
        });
    } else if (whichTasks === "allTasks") {
        filteredTasks = tasks;
    }

    filteredTasks.forEach((task) => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("h2");
        title.textContent = task.title;

        const description = document.createElement("p");
        description.textContent = task.description;

        const dueDate = document.createElement("p");
        dueDate.textContent = task.dueDate;

        const importance = document.createElement("div");
        importance.textContent = task.importance;

        if (task.importance === "High") {
            card.classList.add("high-importance");
        } else if (task.importance === "Medium") {
            card.classList.add("medium-importance");
        } else if (task.importance === "Low") {
            card.classList.add("low-importance");
        }

        const deleteCardButton = document.createElement("img");
        deleteCardButton.classList.add("delete-card-button");
        deleteCardButton.src = _images_trash_png__WEBPACK_IMPORTED_MODULE_3__;

        deleteCardButton.addEventListener("click", () => {
            deleteTask(whichTasks, task);
        });

        const editCardButton = document.createElement("img");
        editCardButton.classList.add("edit-card-button");
        editCardButton.src = _images_edit_svg__WEBPACK_IMPORTED_MODULE_4__;

        editCardButton.addEventListener("click", () => {
            editTask(whichTasks, task);
        });

        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(dueDate);
        card.appendChild(importance);
        card.appendChild(deleteCardButton);
        card.appendChild(editCardButton);

        tasksContainer.appendChild(card);
    });
};

let firstLoad = true;
const createTaskForm = () => {
    // Only create the form once
    if (firstLoad) {
        (0,_forms_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
        firstLoad = false;

        const addTaskForm = document.getElementById("new-task-form");
        addTaskForm.addEventListener("submit", (e) => {
            const popupOverlay = document.getElementById("new-task-overlay");

            e.preventDefault();
            const title = document.getElementById("title").value;
            const description = document.getElementById("description").value;
            const dueDate = document.getElementById("dueDate").value;
            const importance = document.getElementById("importance").value;
            addTask(createTask(title, description, dueDate, importance));
            displayTasks("allTasks");
            popupOverlay.style.display = "none";
        });
    }

    const addNewTaskButton = document.querySelector(".add-new-task-button");
    addNewTaskButton.addEventListener("click", () => {
        const popupOverlay = document.getElementById("new-task-overlay");

        popupOverlay.style.display = "flex";
        const closeButton = document.querySelector(".close-button");
        closeButton.addEventListener("click", () => {
            const popupOverlay = document.getElementById("new-task-overlay");

            popupOverlay.style.display = "none";
        });
    });
};

const deleteTask = (whichTasks, task) => {
    const container = document.querySelector(".container");
    let popupOverlay = document.querySelector(".delete-card-overlay");

    // Only create the popup once
    if (!popupOverlay) {
        popupOverlay = document.createElement("div");
        popupOverlay.classList.add("delete-card-overlay");
        const popup = document.createElement("div");
        popup.classList.add("delete-card-popup");
        const popupHeader = document.createElement("div");
        popupHeader.classList.add("delete-card-popup-header");
        const popupContent = document.createElement("div");
        popupContent.classList.add("delete-card-popup-content");
        const popupButtons = document.createElement("div");
        popupButtons.classList.add("delete-card-popup-buttons");
        const yesButton = document.createElement("button");
        yesButton.classList.add("yes-button");
        const noButton = document.createElement("button");
        noButton.classList.add("no-button");
        const closeButton = document.createElement("img");
        closeButton.classList.add("close-button");

        popupOverlay.style.display = "flex";
        popupHeader.textContent = "Delete Task";
        popupContent.textContent = "Are you sure you want to delete this task?";
        yesButton.textContent = "Yes";
        noButton.textContent = "No";

        yesButton.addEventListener("click", () => {
            const index = tasks.indexOf(task);
            tasks.splice(index, 1);
            saveTasksToLocalStorage();
            displayTasks(whichTasks);
            popupOverlay.style.display = "none";
        });

        noButton.addEventListener("click", () => {
            popupOverlay.style.display = "none";
        });

        closeButton.addEventListener("click", () => {
            popupOverlay.style.display = "none";
        });

        popupOverlay.addEventListener("click", (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.style.display = "none";
            }
        });

        popupHeader.appendChild(closeButton);
        popupButtons.appendChild(yesButton);
        popupButtons.appendChild(noButton);
        popup.appendChild(popupHeader);
        popup.appendChild(popupContent);
        popup.appendChild(popupButtons);
        popupOverlay.appendChild(popup);
        container.appendChild(popupOverlay);
    }
    // If the popup already exists, just display it
    popupOverlay.style.display = "flex";
};

const editTask = (whichTasks, task) => {
    // Call the editTaskForm function with the task to be edited
    (0,_forms_edit_task_form__WEBPACK_IMPORTED_MODULE_1__["default"])(task);
    const editOverlay = document.querySelector("#edit-task-overlay");

    editOverlay.style.display = "flex";

    // Get the form from the DOM
    const form = document.querySelector("#edit-task-form");

    // Add an event listener for the form submission
    form.addEventListener("submit", (event) => {
        // Prevent the form from being submitted normally
        event.preventDefault();

        // Fetch the new values from the form
        const title = form.querySelector("#title").value;
        const description = form.querySelector("#description").value;
        const dueDate = form.querySelector("#dueDate").value;
        const importance = form.querySelector("#importance").value;

        // Update the task object with the new values
        task.title = title;
        task.description = description;
        task.dueDate = dueDate;
        task.importance = importance;

        // Save the updated tasks to local storage
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const updatedTasks = tasks.map((t) => {
            if (t.id === task.id) {
                return {
                    ...t,
                    title: title,
                    description: description,
                    dueDate: dueDate,
                    importance: importance,
                };
            }
            return t;
        });

        localStorage.setItem("tasks", JSON.stringify(updatedTasks));

        // Re-display the tasks
        displayTasks(whichTasks);

        // Close the form
        editOverlay.remove();
    });

    // Add an event listener for the cancel button
    const cancelButton = form.querySelector("#cancel-button");
    cancelButton.addEventListener("click", () => {
        // Close the form without making any changes
        editOverlay.remove();
    });
};



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTask);


/***/ }),

/***/ "./src/images/checkmark.svg":
/*!**********************************!*\
  !*** ./src/images/checkmark.svg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "7c52fbf99964cf74475b.svg";

/***/ }),

/***/ "./src/images/edit.svg":
/*!*****************************!*\
  !*** ./src/images/edit.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3850e0ebedd15efb907f.svg";

/***/ }),

/***/ "./src/images/trash.png":
/*!******************************!*\
  !*** ./src/images/trash.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c4e35861d2606e76ed78.png";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _components_load_page_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/load-page/index */ "./src/components/load-page/index.js");



(0,_components_load_page_index__WEBPACK_IMPORTED_MODULE_1__["default"])();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIRzs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBO0FBQ0EsU0FBUztBQUNULE1BQU07QUFDTjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0JBQStCLDhDQUFTOztBQUV4QztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsNkJBQTZCLDZDQUFROztBQUVyQztBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHVEQUFJO0FBQ1o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJLGlFQUFZO0FBQ2hCOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRXdDOztBQUV4QyxpRUFBZSxVQUFVLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUM3UjFCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7OztBQ0E0QjtBQUN3Qjs7QUFFcEQsdUVBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9mb3JtLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFzay5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL2Zvcm0uY3NzPzc0ZWEiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzP2ZmOTQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvdGFzay5jc3M/ODgwOCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9mb3Jtcy9lZGl0LXRhc2stZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9ybXMvZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvZm9ybXMvbmV3LXByb2plY3QtZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9hZC1wYWdlL2NvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xvYWQtcGFnZS9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xvYWQtcGFnZS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2xvYWQtcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9hZC1wYWdlL3NpZGViYXIuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXItaXRlbXMvYWRkLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXItaXRlbXMvYWxsLXRhc2tzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLWl0ZW1zL2ltcG9ydGFudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtcy90aGlzLXdlZWsuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXItaXRlbXMvdG9kYXkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3Rhc2suanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLm92ZXJsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIERhcmtlbiB0aGUgYmFja2dyb3VuZCAqL1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIE1ha2UgaXQgYXBwZWFyIG9uIHRvcCBvZiBvdGhlciBjb250ZW50ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnBvcHVwLWZvcm0ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jbG9zZS1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjNiMzA7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZS1pbi1vdXQ7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbi5jbG9zZS1idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOTUzNGY7XG59XG5cbmZvcm0gYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgYmFja2dyb3VuZDogcmdiKDMyLCA5NywgMzUpO1xuICAgIGJvcmRlcjogMS40cHggc29saWQgcmdiKDEwMiwgMTQzLCAxMDQpO1xuICAgIHdpZHRoOiAxNTBweDtcbiAgICBoZWlnaHQ6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuZm9ybSBidXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQ6IHJnYig3NiwgMTUwLCAyNik7XG59XG5cbmxhYmVsIHtcbiAgICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5pbnB1dC1maWVsZHMge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIGhlaWdodDogMjJweDtcbn1cblxuLnBvcHVwLWZvcm0gaDIge1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5mb3JtIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogMTAwJTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9mb3JtLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQyxFQUFFLDBCQUEwQjtJQUNoRSxhQUFhLEVBQUUsMkNBQTJDO0lBQzFELHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQix1Q0FBdUM7SUFDdkMsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsNkNBQTZDO0lBQzdDLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUNBQXlDO0lBQ3pDLDJCQUEyQjtJQUMzQixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVztBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5vdmVybGF5IHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogRGFya2VuIHRoZSBiYWNrZ3JvdW5kICovXFxuICAgIHotaW5kZXg6IDEwMDA7IC8qIE1ha2UgaXQgYXBwZWFyIG9uIHRvcCBvZiBvdGhlciBjb250ZW50ICovXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucG9wdXAtZm9ybSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2IzMDtcXG4gICAgZm9udC1zaXplOiAyNHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBvdXRsaW5lOiBub25lO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0ZjtcXG59XFxuXFxuZm9ybSBidXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gICAgdGV4dC1zaGFkb3c6IDAgMXB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMik7XFxuICAgIGJhY2tncm91bmQ6IHJnYigzMiwgOTcsIDM1KTtcXG4gICAgYm9yZGVyOiAxLjRweCBzb2xpZCByZ2IoMTAyLCAxNDMsIDEwNCk7XFxuICAgIHdpZHRoOiAxNTBweDtcXG4gICAgaGVpZ2h0OiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XFxufVxcblxcbmZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxNTAsIDI2KTtcXG59XFxuXFxubGFiZWwge1xcbiAgICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5pbnB1dC1maWVsZHMge1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXFxuaW5wdXQge1xcbiAgICB3aWR0aDogMjAwcHg7XFxuICAgIGhlaWdodDogMjJweDtcXG59XFxuXFxuLnBvcHVwLWZvcm0gaDIge1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmZvcm0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q2ZDRkNDtcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxudWwge1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jb250YWluZXIge1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmciA1MHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbn1cblxuLmhlYWRlciB7XG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjNzc3NTcwIHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyLCAyMiwgMjEsIDAuNSksIHJnYmEoOCwgOCwgNywgMC43KSk7XG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiA0NXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGZvcmVzdGdyZWVuO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbn1cblxuLnNpZGViYXIge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMSAvIDI7XG4gICAgYmFja2dyb3VuZDogIzk3OTc5NSByYWRpYWwtZ3JhZGllbnQocmdiYSgyMiwgMjIsIDIxLCAwLjUpLCByZ2JhKDgsIDgsIDcsIDAuNykpO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMjBweDtcbn1cblxuLnNpZGViYXItdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIHBhZGRpbmctYm90dG9tOiAycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XG59XG5cbi5zaWRlYmFyLWl0ZW0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDEwcHg7XG4gICAgcGFkZGluZzogMTBweCAwO1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5zaWRlYmFyLWl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NTUzO1xufVxuXG4uc2lkZWJhci1pdGVtOmFjdGl2ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzc3NzU3MDtcbn1cblxuLnNpZGViYXItaXRlbS1pY29uIHtcbiAgICB3aWR0aDogMjVweDtcbn1cblxuLmNvbnRlbnQge1xuICAgIGdyaWQtcm93OiAyIC8gMztcbiAgICBncmlkLWNvbHVtbjogMiAvIDM7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNzBweCAxZnI7XG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xufVxuXG4uY29udGVudC1oZWFkZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNkY2UwZGI7XG4gICAgYmFja2dyb3VuZDogI2EwYTdhMCByYWRpYWwtZ3JhZGllbnQocmdiYSgyMiwgMjIsIDIxLCAwLjUpLCByZ2JhKDgsIDgsIDcsIDAuNykpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4udGFza3MtY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdhcDogMzBweDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpdCwgbWlubWF4KDMwMHB4LCA0MDBweCkpO1xufVxuXG4uYWRkLW5ldy10YXNrLWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyOWIxZDtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDEzMHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG4uYWRkLW5ldy10YXNrLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiNmUwYTtcbn1cblxuLmZvb3RlciB7XG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcbiAgICBmb250LXdlaWdodDogNTAwOyAvKiBBZGRlZCBmb250IHdlaWdodCAqL1xuICAgIHBhZGRpbmc6IDAgMjBweDsgLyogU2lkZSBwYWRkaW5nIGZvciBsYXJnZXIgc2NyZWVucyAqL1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlOyAvKiBUcmFuc2l0aW9uIGZvciBob3ZlciBlZmZlY3QgKi9cbiAgICBmb250LXNpemU6IDE0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMTEzLCAxMTMpO1xufVxuXG4uZm9vdGVyIGEge1xuICAgIGNvbG9yOiByZ2IoMTUsIDIyMywgNTApO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogQWRkZWQgdW5kZXJsaW5lIHRvIGlkZW50aWZ5IGFzIGxpbmsgKi9cbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG59XG5cbi5mb290ZXIgYTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksU0FBUztJQUNULFVBQVU7SUFDVixzQkFBc0I7QUFDMUI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixrQ0FBa0M7SUFDbEMsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsMkJBQTJCO0lBQzNCLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsOEVBQThFO0lBQzlFLHNDQUFzQztJQUN0QyxjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsOEVBQThFO0lBQzlFLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQ0FBZ0M7QUFDcEM7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCxlQUFlO0lBQ2YsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsOEVBQThFO0lBQzlFLFdBQVc7SUFDWCxlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsNkRBQTZEO0FBQ2pFOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osZUFBZTtJQUNmLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIseUJBQXlCO0lBQ3pCLGdCQUFnQixFQUFFLHNCQUFzQjtJQUN4QyxlQUFlLEVBQUUsb0NBQW9DO0lBQ3JELHNDQUFzQyxFQUFFLGdDQUFnQztJQUN4RSxlQUFlO0lBQ2Ysb0NBQW9DO0FBQ3hDOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQixFQUFFLHdDQUF3QztJQUMvRCwyQkFBMkIsRUFBRSxnQ0FBZ0M7SUFDN0QsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIioge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbmJvZHkge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNGQ0O1xcbiAgICBtaW4taGVpZ2h0OiAxMDB2aDtcXG59XFxuXFxudWwge1xcbiAgICBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4uY29udGFpbmVyIHtcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMjBweCAxZnIgNTBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xcbn1cXG5cXG4uaGVhZGVyIHtcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZ2FwOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjNzc3NTcwIHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyLCAyMiwgMjEsIDAuNSksIHJnYmEoOCwgOCwgNywgMC43KSk7XFxuICAgIGJveC1zaGFkb3c6IDAgMCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1zaXplOiA0NXB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZm9yZXN0Z3JlZW47XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG59XFxuXFxuLnNpZGViYXIge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcXG4gICAgYmFja2dyb3VuZDogIzk3OTc5NSByYWRpYWwtZ3JhZGllbnQocmdiYSgyMiwgMjIsIDIxLCAwLjUpLCByZ2JhKDgsIDgsIDcsIDAuNykpO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDIwcHg7XFxufVxcblxcbi5zaWRlYmFyLXRpdGxlIHtcXG4gICAgZm9udC1zaXplOiAyOHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmNWY1ZjU7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDEwcHg7XFxuICAgIHBhZGRpbmc6IDEwcHggMDtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLnNpZGViYXItaXRlbTpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzU3NTU1MztcXG59XFxuXFxuLnNpZGViYXItaXRlbTphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3NTcwO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtLWljb24ge1xcbiAgICB3aWR0aDogMjVweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgICBncmlkLXJvdzogMiAvIDM7XFxuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uY29udGVudC1oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMzBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgY29sb3I6ICNkY2UwZGI7XFxuICAgIGJhY2tncm91bmQ6ICNhMGE3YTAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjIsIDIyLCAyMSwgMC41KSwgcmdiYSg4LCA4LCA3LCAwLjcpKTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIHBhZGRpbmc6IDAgMjBweDtcXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcXG59XFxuXFxuLnRhc2tzLWNvbnRhaW5lciB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBnYXA6IDMwcHg7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDQwMHB4KSk7XFxufVxcblxcbi5hZGQtbmV3LXRhc2stYnV0dG9uIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyOWIxZDtcXG4gICAgY29sb3I6ICNmNWY1ZjU7XFxuICAgIGhlaWdodDogMzVweDtcXG4gICAgd2lkdGg6IDEzMHB4O1xcbiAgICBmb250LXNpemU6IDIwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuLmFkZC1uZXctdGFzay1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZTBhO1xcbn1cXG5cXG4uZm9vdGVyIHtcXG4gICAgZ3JpZC1yb3c6IDMgLyA0O1xcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xcbiAgICBmb250LXdlaWdodDogNTAwOyAvKiBBZGRlZCBmb250IHdlaWdodCAqL1xcbiAgICBwYWRkaW5nOiAwIDIwcHg7IC8qIFNpZGUgcGFkZGluZyBmb3IgbGFyZ2VyIHNjcmVlbnMgKi9cXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxMTYsIDExMywgMTEzKTtcXG59XFxuXFxuLmZvb3RlciBhIHtcXG4gICAgY29sb3I6IHJnYigxNSwgMjIzLCA1MCk7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgLyogQWRkZWQgdW5kZXJsaW5lIHRvIGlkZW50aWZ5IGFzIGxpbmsgKi9cXG4gICAgdHJhbnNpdGlvbjogY29sb3IgMC4zcyBlYXNlOyAvKiBUcmFuc2l0aW9uIGZvciBob3ZlciBlZmZlY3QgKi9cXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcXG59XFxuXFxuLmZvb3RlciBhOmhvdmVyIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLmNhcmQge1xuICAgIGhlaWdodDogMzAwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHggMTVweCAyNXB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMyAxZnIpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmxvdy1pbXBvcnRhbmNlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxNCwgNjgsIDE4NSkgMTdweCwgd2hpdGUgMTdweCk7XG59XG5cbi5tZWRpdW0taW1wb3J0YW5jZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU0LCAxOTgsIDE0KSAxN3B4LCB3aGl0ZSAxN3B4KTtcbn1cblxuLmhpZ2gtaW1wb3J0YW5jZSB7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTk5LCAyNCwgMTgpIDE3cHgsIHdoaXRlIDE3cHgpO1xufVxuXG4uZGVsZXRlLWNhcmQtYnV0dG9uIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIHdpZHRoOiAyNHB4O1xuICAgIGhlaWdodDogMjRweDtcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGVsZXRlLWNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmVkaXQtY2FyZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDQwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5lZGl0LWNhcmQtYnV0dG9uOmhvdmVyIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLmRlbGV0ZS1jYXJkLW92ZXJsYXkge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIERhcmtlbiB0aGUgYmFja2dyb3VuZCAqL1xuICAgIHotaW5kZXg6IDEwMDA7IC8qIE1ha2UgaXQgYXBwZWFyIG9uIHRvcCBvZiBvdGhlciBjb250ZW50ICovXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmRlbGV0ZS1jYXJkLXBvcHVwIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA0MDBweDtcbiAgICBoZWlnaHQ6IDMyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3Rhc2suY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsNEJBQTRCO0lBQzVCLGFBQWE7SUFDYixpQ0FBaUM7SUFDakMsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0ksK0VBQStFO0FBQ25GOztBQUVBO0lBQ0ksOEVBQThFO0FBQ2xGOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixzQ0FBc0M7SUFDdEMsWUFBWTtJQUNaLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsMEJBQTBCO0lBQ2hFLGFBQWEsRUFBRSwyQ0FBMkM7SUFDMUQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmNhcmQge1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgcGFkZGluZzogMjVweCAxNXB4IDE1cHggMjVweDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMyAxZnIpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5sb3ctaW1wb3J0YW5jZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE0LCA2OCwgMTg1KSAxN3B4LCB3aGl0ZSAxN3B4KTtcXG59XFxuXFxuLm1lZGl1bS1pbXBvcnRhbmNlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMjU0LCAxOTgsIDE0KSAxN3B4LCB3aGl0ZSAxN3B4KTtcXG59XFxuXFxuLmhpZ2gtaW1wb3J0YW5jZSB7XFxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE5OSwgMjQsIDE4KSAxN3B4LCB3aGl0ZSAxN3B4KTtcXG59XFxuXFxuLmRlbGV0ZS1jYXJkLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICByaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZGVsZXRlLWNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZWRpdC1jYXJkLWJ1dHRvbiB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgYm90dG9tOiAxMHB4O1xcbiAgICByaWdodDogNDBweDtcXG4gICAgd2lkdGg6IDI0cHg7XFxuICAgIGhlaWdodDogMjRweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDAuNTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4uZWRpdC1jYXJkLWJ1dHRvbjpob3ZlciB7XFxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLmRlbGV0ZS1jYXJkLW92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBEYXJrZW4gdGhlIGJhY2tncm91bmQgKi9cXG4gICAgei1pbmRleDogMTAwMDsgLyogTWFrZSBpdCBhcHBlYXIgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5kZWxldGUtY2FyZC1wb3B1cCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICB3aWR0aDogNDAwcHg7XFxuICAgIGhlaWdodDogMzIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZm9ybS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Rhc2suY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBlZGl0VGFza0Zvcm0gPSAodGFzaykgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5pZCA9IFwiZWRpdC10YXNrLW92ZXJsYXlcIjtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJvdmVybGF5XCIpO1xuXG4gICAgY29uc3QgZWRpdFBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgZWRpdFBvcHVwRm9ybS5jbGFzc0xpc3QuYWRkKFwicG9wdXAtZm9ybVwiKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkVkaXQgVGFza1wiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uaWQgPSBcImVkaXQtdGFzay1mb3JtXCI7XG5cbiAgICAvLyBDcmVhdGUgdGhlIGlucHV0IGZpZWxkcyBmb3IgdGhlIGZvcm1cbiAgICBjb25zdCBpbnB1dEZpZWxkcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaW5wdXRGaWVsZHMuY2xhc3NMaXN0LmFkZChcImlucHV0LWZpZWxkc1wiKTtcblxuICAgIGNyZWF0ZUlucHV0RmllbGQoXCJUaXRsZTpcIiwgXCJ0ZXh0XCIsIFwidGl0bGVcIiwgdGFzay50aXRsZSk7XG4gICAgY3JlYXRlVGV4dEFyZWFGaWVsZChcIkRlc2NyaXB0aW9uOlwiLCBcImRlc2NyaXB0aW9uXCIsIHRhc2suZGVzY3JpcHRpb24pO1xuICAgIGNyZWF0ZUlucHV0RmllbGQoXCJEdWUgRGF0ZTpcIiwgXCJkYXRlXCIsIFwiZHVlRGF0ZVwiLCB0YXNrLmR1ZURhdGUpO1xuICAgIGNyZWF0ZVNlbGVjdEZpZWxkKFwiSW1wb3J0YW5jZTpcIiwgXCJpbXBvcnRhbmNlXCIsIFtcIkhpZ2hcIiwgXCJNZWRpdW1cIiwgXCJMb3dcIl0sIHRhc2suaW1wb3J0YW5jZSk7XG5cbiAgICBjb25zdCBkb25lQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkb25lQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGRvbmVCdXR0b24udGV4dENvbnRlbnQgPSBcIkRvbmVcIjtcblxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmlkID0gXCJjYW5jZWwtYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnR5cGUgPSBcImJ1dHRvblwiO1xuICAgIGNhbmNlbEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQ2FuY2VsXCI7XG5cbiAgICBmb3JtLmFwcGVuZENoaWxkKGlucHV0RmllbGRzKTtcbiAgICBmb3JtLmFwcGVuZENoaWxkKGRvbmVCdXR0b24pO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoY2FuY2VsQnV0dG9uKTtcblxuICAgIC8vIEFkZCBhbGwgZWxlbWVudHMgdG8gdGhlIHBvcHVwIGZvcm1cbiAgICBlZGl0UG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgZWRpdFBvcHVwRm9ybS5hcHBlbmRDaGlsZChmb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgcG9wdXAgZm9ybSB0byB0aGUgb3ZlcmxheVxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQoZWRpdFBvcHVwRm9ybSk7XG5cbiAgICAvLyBBZGQgdGhlIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50J3MgYm9keVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUlucHV0RmllbGQobGFiZWxUZXh0LCBpbnB1dFR5cGUsIGlucHV0TmFtZSwgZGVmYXVsdFZhbHVlLCBpc1JlcXVpcmVkID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXROYW1lKTtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgaW5wdXQuaWQgPSBpbnB1dE5hbWU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIGlucHV0LnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICBpZiAoaXNSZXF1aXJlZCkge1xuICAgICAgICAgICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG4gICAgICAgIGlucHV0RmllbGRzLmFwcGVuZENoaWxkKGZpZWxkQ29udGFpbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0QXJlYUZpZWxkKGxhYmVsVGV4dCwgaW5wdXROYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHRleHRhcmVhLmlkID0gaW5wdXROYW1lO1xuICAgICAgICB0ZXh0YXJlYS5uYW1lID0gaW5wdXROYW1lO1xuICAgICAgICB0ZXh0YXJlYS52YWx1ZSA9IGRlZmF1bHRWYWx1ZTtcblxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICAgICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEZpZWxkKGxhYmVsVGV4dCwgaW5wdXROYW1lLCBvcHRpb25zLCBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gaW5wdXROYW1lO1xuICAgICAgICBzZWxlY3QubmFtZSA9IGlucHV0TmFtZTtcbiAgICAgICAgc2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvblRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0O1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcbiAgICAgICAgICAgIGlmIChvcHRpb25UZXh0ID09PSBkZWZhdWx0VmFsdWUpIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2VsZWN0LmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZWN0KTtcbiAgICAgICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xuICAgIH1cbn07XG5cbmV4cG9ydCBkZWZhdWx0IGVkaXRUYXNrRm9ybTtcbiIsImltcG9ydCBcIi4uLy4uL3N0eWxlcy9mb3JtLmNzc1wiO1xuXG5jb25zdCBmb3JtID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGFpbmVyXCIpO1xuXG4gICAgY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgb3ZlcmxheS5pZCA9IFwibmV3LXRhc2stb3ZlcmxheVwiO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG5cbiAgICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwRm9ybS5jbGFzc0xpc3QuYWRkKFwicG9wdXAtZm9ybVwiKTtcblxuICAgIGNvbnN0IGZvcm1UaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBmb3JtVGl0bGUudGV4dENvbnRlbnQgPSBcIkFkZCBOZXcgVGFza1wiO1xuXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmb3JtXCIpO1xuICAgIGZvcm0uaWQgPSBcIm5ldy10YXNrLWZvcm1cIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZmllbGRzIGZvciB0aGUgZm9ybVxuICAgIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGRzXCIpO1xuXG4gICAgLy8gQ3JlYXRlIGlucHV0IGZpZWxkcyBmb3IgVGl0bGUsIERlc2NyaXB0aW9uLCBEdWUgRGF0ZSwgYW5kIEltcG9ydGFuY2VcbiAgICBjcmVhdGVJbnB1dEZpZWxkKFwiVGl0bGU6XCIsIFwidGV4dFwiLCBcInRpdGxlXCIpO1xuICAgIGNyZWF0ZVRleHRBcmVhRmllbGQoXCJEZXNjcmlwdGlvbjpcIiwgXCJkZXNjcmlwdGlvblwiKTtcbiAgICBjcmVhdGVJbnB1dEZpZWxkKFwiRHVlIERhdGU6XCIsIFwiZGF0ZVwiLCBcImR1ZURhdGVcIik7XG4gICAgY3JlYXRlU2VsZWN0RmllbGQoXCJJbXBvcnRhbmNlOlwiLCBcImltcG9ydGFuY2VcIiwgW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXSk7XG5cbiAgICAvLyBDcmVhdGUgdGhlIFwiQWRkIFRhc2tcIiBidXR0b25cbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi50eXBlID0gXCJzdWJtaXRcIjtcbiAgICBhZGRCdXR0b24udGV4dENvbnRlbnQgPSBcIkFkZCBUYXNrXCI7XG5cbiAgICAvLyBBZGQgaW5wdXQgZmllbGRzIGFuZCB0aGUgXCJBZGQgVGFza1wiIGJ1dHRvbiB0byB0aGUgZm9ybVxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZHMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoYWRkQnV0dG9uKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgY2xvc2UgYnV0dG9uXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJjbG9zZS1idXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24udGV4dENvbnRlbnQgPSBcIsOXXCI7XG5cbiAgICAvLyBBZGQgYWxsIGVsZW1lbnRzIHRvIHRoZSBwb3B1cCBmb3JtXG4gICAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm1UaXRsZSk7XG4gICAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xuICAgIHBvcHVwRm9ybS5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG5cbiAgICAvLyBBZGQgdGhlIHBvcHVwIGZvcm0gdG8gdGhlIG92ZXJsYXlcbiAgICBvdmVybGF5LmFwcGVuZENoaWxkKHBvcHVwRm9ybSk7XG5cbiAgICAvLyBBZGQgdGhlIG92ZXJsYXkgdG8gdGhlIGRvY3VtZW50J3MgYm9keVxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChvdmVybGF5KTtcblxuICAgIC8vIENyZWF0ZSBhIGZ1bmN0aW9uIHRvIHNpbXBsaWZ5IGlucHV0IGZpZWxkIGNyZWF0aW9uXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5wdXRGaWVsZChsYWJlbFRleHQsIGlucHV0VHlwZSwgaW5wdXROYW1lLCBpc1JlcXVpcmVkID0gdHJ1ZSkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXROYW1lKTtcblxuICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcbiAgICAgICAgaW5wdXQudHlwZSA9IGlucHV0VHlwZTtcbiAgICAgICAgaW5wdXQuaWQgPSBpbnB1dE5hbWU7XG4gICAgICAgIGlucHV0Lm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xuICAgIH1cbiAgICAvLyBGdW5jdGlvbiB0byBjcmVhdGUgYSB0ZXh0IGFyZWEgaW5wdXQgZmllbGRcbiAgICBmdW5jdGlvbiBjcmVhdGVUZXh0QXJlYUZpZWxkKGxhYmVsVGV4dCwgaW5wdXROYW1lKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHRleHRhcmVhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRleHRhcmVhXCIpO1xuICAgICAgICB0ZXh0YXJlYS5pZCA9IGlucHV0TmFtZTtcbiAgICAgICAgdGV4dGFyZWEubmFtZSA9IGlucHV0TmFtZTtcblxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHRleHRhcmVhKTtcbiAgICAgICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHNlbGVjdCBpbnB1dCBmaWVsZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVNlbGVjdEZpZWxkKGxhYmVsVGV4dCwgaW5wdXROYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWxlY3RcIik7XG4gICAgICAgIHNlbGVjdC5pZCA9IGlucHV0TmFtZTtcbiAgICAgICAgc2VsZWN0Lm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIHNlbGVjdC5yZXF1aXJlZCA9IHRydWU7XG5cbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb25UZXh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgICAgICAgICAgb3B0aW9uLnZhbHVlID0gb3B0aW9uVGV4dDtcbiAgICAgICAgICAgIG9wdGlvbi50ZXh0Q29udGVudCA9IG9wdGlvblRleHQ7XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybTtcbiIsIi8vIGltcG9ydCBkaXNwbGF5UHJvamVjdHMgZnJvbSBcIi4uL2Rpc3BsYXktcHJvamVjdHNcIjtcblxuY29uc3QgcHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicHJvamVjdHNcIikpIHx8IFtdO1xuXG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RzLWxpc3RcIik7XG5cbiAgICBjb25zdCBwb3B1cEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHBvcHVwRm9ybS5jbGFzc0xpc3QuYWRkKFwibmV3LXByb2plY3QtcG9wdXAtZm9ybVwiKTtcblxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgcHJvamVjdEZvcm0uaWQgPSBcIm5ldy1wcm9qZWN0LWZvcm1cIjtcblxuICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgbGFiZWwudGV4dENvbnRlbnQgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInByb2plY3QtbmFtZVwiKTtcblxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGlucHV0LnR5cGUgPSBcInRleHRcIjtcbiAgICBpbnB1dC5pZCA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgaW5wdXQubmFtZSA9IFwicHJvamVjdC1uYW1lXCI7XG4gICAgaW5wdXQucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBzdWJtaXRCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgc3VibWl0QnV0dG9uLnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcbiAgICBjYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgcHJvamVjdHNMaXN0LnJlbW92ZUNoaWxkKHByb2plY3RGb3JtKTtcbiAgICB9KTtcblxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0LW5hbWVcIikudmFsdWU7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IHtcbiAgICAgICAgICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgICAgICAgdGFza3M6IFtdLFxuICAgICAgICB9O1xuXG4gICAgICAgIHByb2plY3RzLnB1c2gocHJvamVjdCk7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwicHJvamVjdHNcIiwgSlNPTi5zdHJpbmdpZnkocHJvamVjdHMpKTtcblxuICAgICAgICBwcm9qZWN0c0xpc3QucmVtb3ZlQ2hpbGQocHJvamVjdEZvcm0pO1xuICAgICAgICBkaXNwbGF5UHJvamVjdHMoKTtcbiAgICB9KTtcblxuICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChpbnB1dCk7XG5cbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XG4gICAgcHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0QnV0dG9uKTtcbiAgICBwcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZChwcm9qZWN0Rm9ybSk7XG59O1xuXG5jb25zdCBkaXNwbGF5UHJvamVjdHMgPSAoKSA9PiB7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0cy1saXN0XCIpO1xuXG4gICAgcHJvamVjdHNMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBwcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgIGNvbnN0IHByb2plY3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICBwcm9qZWN0SXRlbS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xuICAgICAgICBwcm9qZWN0SXRlbS5pZCA9IHByb2plY3QubmFtZTtcblxuICAgICAgICBjb25zdCBwcm9qZWN0SXRlbVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwcm9qZWN0SXRlbVRleHQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbS10ZXh0XCIpO1xuICAgICAgICBwcm9qZWN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBwcm9qZWN0Lm5hbWU7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdEl0ZW1JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgcHJvamVjdEl0ZW1JY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0taWNvblwiKTtcbiAgICAgICAgcHJvamVjdEl0ZW1JY29uLnNyYyA9IFwiYXNzZXRzL2NoZWNrbWFyay5zdmdcIjtcblxuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbUljb24pO1xuICAgICAgICBwcm9qZWN0SXRlbS5hcHBlbmRDaGlsZChwcm9qZWN0SXRlbVRleHQpO1xuICAgICAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdEl0ZW0pO1xuICAgIH0pO1xuXG4gICAgY29uc3QgYWRkUHJvamVjdEl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgYWRkUHJvamVjdEl0ZW0uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcbiAgICBhZGRQcm9qZWN0SXRlbS5pZCA9IFwiYWRkLXByb2plY3RcIjtcblxuICAgIGNvbnN0IGFkZFByb2plY3RJdGVtVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgYWRkUHJvamVjdEl0ZW1UZXh0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0tdGV4dFwiKTtcbiAgICBhZGRQcm9qZWN0SXRlbVRleHQudGV4dENvbnRlbnQgPSBcIkFkZCBQcm9qZWN0XCI7XG5cbiAgICBjb25zdCBhZGRQcm9qZWN0SXRlbUljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGFkZFByb2plY3RJdGVtSWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLWljb25cIik7XG4gICAgYWRkUHJvamVjdEl0ZW1JY29uLnNyYyA9IFwiYXNzZXRzL2NoZWNrbWFyay5zdmdcIjtcblxuICAgIGFkZFByb2plY3RJdGVtLmFwcGVuZENoaWxkKGFkZFByb2plY3RJdGVtSWNvbik7XG4gICAgYWRkUHJvamVjdEl0ZW0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEl0ZW1UZXh0KTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEl0ZW0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbmV3UHJvamVjdEZvcm07XG4iLCJpbXBvcnQgYWxsVGFza3MgZnJvbSBcIi4uL3NpZGViYXItaXRlbXMvYWxsLXRhc2tzXCI7XG5pbXBvcnQgdG9kYXkgZnJvbSBcIi4uL3NpZGViYXItaXRlbXMvdG9kYXlcIjtcbmltcG9ydCB0aGlzV2VlayBmcm9tIFwiLi4vc2lkZWJhci1pdGVtcy90aGlzLXdlZWtcIjtcbmltcG9ydCBpbXBvcnRhbnQgZnJvbSBcIi4uL3NpZGViYXItaXRlbXMvaW1wb3J0YW50XCI7XG5pbXBvcnQgYWRkUHJvamVjdCBmcm9tIFwiLi4vc2lkZWJhci1pdGVtcy9hZGQtcHJvamVjdFwiO1xuXG5jb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgYWxsVGFza3NUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrc1wiKTtcbiAgICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XG4gICAgY29uc3QgdGhpc1dlZWtUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcG9ydGFudFwiKTtcbiAgICBjb25zdCBhZGRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGQtcHJvamVjdFwiKTtcblxuICAgIGxldCBmaXJzdExvYWQgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVGFiQ2xpY2soY2FsbGJhY2spIHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGFsbFRhc2tzVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVUYWJDbGljayhhbGxUYXNrcykpO1xuICAgIHRvZGF5VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVUYWJDbGljayh0b2RheSkpO1xuICAgIHRoaXNXZWVrVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVUYWJDbGljayh0aGlzV2VlaykpO1xuICAgIGltcG9ydGFudFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlVGFiQ2xpY2soaW1wb3J0YW50KSk7XG4gICAgYWRkUHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gYWRkUHJvamVjdCgpKTtcblxuICAgIGlmIChmaXJzdExvYWQpIHtcbiAgICAgICAgaGFuZGxlVGFiQ2xpY2soYWxsVGFza3MpO1xuICAgICAgICBmaXJzdExvYWQgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50O1xuIiwiY29uc3QgZm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9vdGVyXCIpO1xuICAgIGZvb3Rlci5pbm5lckhUTUwgPVxuICAgICAgICAnQ3JlYXRlZCBieSAmbmJzcDs8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2xlby10c2FudFwiIHRhcmdldD1cIl9ibGFua1wiPkxlb25pZGFzIFRzYW50YXJsaW90aXM8L2E+Jm5ic3A7Zm9yJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vd3d3LnRoZW9kaW5wcm9qZWN0LmNvbS9kYXNoYm9hcmRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5UaGUgT2RpbiBQcm9qZWN0PC9hPic7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7XG4iLCJpbXBvcnQgY2hlY2ttYXJrSWNvbiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NoZWNrbWFyay5zdmdcIjtcblxuY29uc3QgaGVhZGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGVhZGVyXCIpO1xuXG4gICAgY29uc3QgaGVhZGVyVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyVGV4dC50ZXh0Q29udGVudCA9IFwiVG8gRG8gTGlzdFwiO1xuICAgIGhlYWRlclRleHQuY2xhc3NMaXN0LmFkZChcImhlYWRlci10ZXh0XCIpO1xuXG4gICAgY29uc3QgaGVhZGVySWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaGVhZGVySWNvbi5jbGFzc05hbWUgPSBcImljb25cIjtcbiAgICBoZWFkZXJJY29uLnNyYyA9IGNoZWNrbWFya0ljb247XG5cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQoaGVhZGVySWNvbik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlclRleHQpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaGVhZGVyO1xuIiwiaW1wb3J0IGhlYWRlciBmcm9tIFwiLi9oZWFkZXJcIjtcbmltcG9ydCBzaWRlYmFyIGZyb20gXCIuL3NpZGViYXJcIjtcbmltcG9ydCBjb250ZW50IGZyb20gXCIuL2NvbnRlbnRcIjtcbmltcG9ydCBmb290ZXIgZnJvbSBcIi4vZm9vdGVyXCI7XG5cbmNvbnN0IGxvYWRQYWdlID0gKCkgPT4ge1xuICAgIGhlYWRlcigpO1xuICAgIHNpZGViYXIoKTtcbiAgICBjb250ZW50KCk7XG4gICAgZm9vdGVyKCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsb2FkUGFnZTtcbiIsImltcG9ydCBjaGVja21hcmtJY29uIGZyb20gXCIuLi8uLi9pbWFnZXMvY2hlY2ttYXJrLnN2Z1wiO1xuXG5jb25zdCBzaWRlYmFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNpZGViYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnNpZGViYXJcIik7XG5cbiAgICAvLyBIb21lIExpc3RcbiAgICBjb25zdCBob21lTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUxpc3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbGlzdFwiKTtcbiAgICBjb25zdCBob21lTGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lTGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXRpdGxlXCIpO1xuICAgIGhvbWVMaXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIkhvbWVcIjtcblxuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgaG9tZUxpc3RJdGVtcy5pZCA9IFwiaG9tZS1saXN0XCI7XG5cbiAgICBjb25zdCBob21lTGlzdEl0ZW1zQWxsVGFza3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzLmlkID0gXCJhbGwtdGFza3NcIjtcbiAgICBob21lTGlzdEl0ZW1zQWxsVGFza3MuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcbiAgICBjb25zdCBob21lTGlzdEl0ZW1zQWxsVGFza3NUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lTGlzdEl0ZW1zQWxsVGFza3NUZXh0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0tdGV4dFwiKTtcbiAgICBob21lTGlzdEl0ZW1zQWxsVGFza3NUZXh0LnRleHRDb250ZW50ID0gXCJBbGwgVGFza3NcIjtcbiAgICBjb25zdCBob21lTGlzdEl0ZW1zQWxsVGFza3NJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBob21lTGlzdEl0ZW1zQWxsVGFza3NJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0taWNvblwiKTtcbiAgICBob21lTGlzdEl0ZW1zQWxsVGFza3NJY29uLnNyYyA9IGNoZWNrbWFya0ljb247XG5cbiAgICBob21lTGlzdEl0ZW1zQWxsVGFza3MuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc0FsbFRhc2tzSWNvbik7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzLmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNBbGxUYXNrc1RleHQpO1xuICAgIGhvbWVMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc0FsbFRhc2tzKTtcblxuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNUb2RheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob21lTGlzdEl0ZW1zVG9kYXkuaWQgPSBcInRvZGF5XCI7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc1RvZGF5VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5VGV4dC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLXRleHRcIik7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5VGV4dC50ZXh0Q29udGVudCA9IFwiVG9kYXlcIjtcbiAgICBjb25zdCBob21lTGlzdEl0ZW1zVG9kYXlJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBob21lTGlzdEl0ZW1zVG9kYXlJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0taWNvblwiKTtcbiAgICBob21lTGlzdEl0ZW1zVG9kYXlJY29uLnNyYyA9IGNoZWNrbWFya0ljb247XG5cbiAgICBob21lTGlzdEl0ZW1zVG9kYXkuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc1RvZGF5SWNvbik7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5LmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNUb2RheVRleHQpO1xuICAgIGhvbWVMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc1RvZGF5KTtcblxuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNUaGlzV2VlayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWsuaWQgPSBcInRoaXMtd2Vla1wiO1xuICAgIGhvbWVMaXN0SXRlbXNUaGlzV2Vlay5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNUaGlzV2Vla1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVMaXN0SXRlbXNUaGlzV2Vla1RleHQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbS10ZXh0XCIpO1xuICAgIGhvbWVMaXN0SXRlbXNUaGlzV2Vla1RleHQudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNUaGlzV2Vla0ljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhvbWVMaXN0SXRlbXNUaGlzV2Vla0ljb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbS1pY29uXCIpO1xuICAgIGhvbWVMaXN0SXRlbXNUaGlzV2Vla0ljb24uc3JjID0gY2hlY2ttYXJrSWNvbjtcblxuICAgIGhvbWVMaXN0SXRlbXNUaGlzV2Vlay5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zVGhpc1dlZWtJY29uKTtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWsuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc1RoaXNXZWVrVGV4dCk7XG4gICAgaG9tZUxpc3RJdGVtcy5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zVGhpc1dlZWspO1xuXG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc0ltcG9ydGFudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBob21lTGlzdEl0ZW1zSW1wb3J0YW50LmlkID0gXCJpbXBvcnRhbnRcIjtcbiAgICBob21lTGlzdEl0ZW1zSW1wb3J0YW50LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc0ltcG9ydGFudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVMaXN0SXRlbXNJbXBvcnRhbnRUZXh0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0tdGV4dFwiKTtcbiAgICBob21lTGlzdEl0ZW1zSW1wb3J0YW50VGV4dC50ZXh0Q29udGVudCA9IFwiSW1wb3J0YW50XCI7XG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc0ltcG9ydGFudEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhvbWVMaXN0SXRlbXNJbXBvcnRhbnRJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0taWNvblwiKTtcbiAgICBob21lTGlzdEl0ZW1zSW1wb3J0YW50SWNvbi5zcmMgPSBjaGVja21hcmtJY29uO1xuXG4gICAgaG9tZUxpc3RJdGVtc0ltcG9ydGFudC5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zSW1wb3J0YW50SWNvbik7XG4gICAgaG9tZUxpc3RJdGVtc0ltcG9ydGFudC5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zSW1wb3J0YW50VGV4dCk7XG4gICAgaG9tZUxpc3RJdGVtcy5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zSW1wb3J0YW50KTtcblxuICAgIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWVMaXN0VGl0bGUpO1xuICAgIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXMpO1xuXG4gICAgLy8gUHJvamVjdHMgTGlzdFxuICAgIGNvbnN0IHByb2plY3RzTGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWxpc3RcIik7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHByb2plY3RzTGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJQcm9qZWN0c1wiO1xuICAgIHByb2plY3RzTGlzdFRpdGxlLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLXRpdGxlXCIpO1xuXG4gICAgY29uc3QgcHJvamVjdHNMaXN0SXRlbXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgcHJvamVjdHNMaXN0SXRlbXMuaWQgPSBcInByb2plY3RzLWxpc3RcIjtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3QuaWQgPSBcImFkZC1wcm9qZWN0XCI7XG4gICAgY29uc3QgcHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0VGV4dC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLXRleHRcIik7XG4gICAgcHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0VGV4dC50ZXh0Q29udGVudCA9IFwiQWRkIFByb2plY3RcIjtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0taWNvblwiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RJY29uLnNyYyA9IGNoZWNrbWFya0ljb247XG5cbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0SWNvbik7XG4gICAgcHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0LmFwcGVuZENoaWxkKHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdFRleHQpO1xuICAgIHByb2plY3RzTGlzdEl0ZW1zLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdCk7XG5cbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0VGl0bGUpO1xuICAgIHByb2plY3RzTGlzdC5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3RJdGVtcyk7XG5cbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKGhvbWVMaXN0KTtcbiAgICBzaWRlYmFyLmFwcGVuZENoaWxkKHByb2plY3RzTGlzdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBzaWRlYmFyO1xuIiwiaW1wb3J0IG5ld1Byb2plY3RGb3JtIGZyb20gXCIuLi9mb3Jtcy9uZXctcHJvamVjdC1mb3JtXCI7XG5cbmNvbnN0IGFkZFByb2plY3QgPSAoKSA9PiB7XG4gICAgbGV0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy1wcm9qZWN0LWZvcm1cIik7XG4gICAgaWYgKCFuZXdGb3JtKSB7XG4gICAgICAgIG5ld1Byb2plY3RGb3JtKCk7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgYWRkUHJvamVjdDtcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tGb3JtLCBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi4vdGFza1wiO1xuXG5jb25zdCBhbGxUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cbiAgICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtbmV3LXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgTmV3IFRhc2tcIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gICAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgICBkaXNwbGF5VGFza3MoXCJhbGxUYXNrc1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFRhc2tzO1xuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uL3Rhc2tcIjtcblxuY29uc3QgaW1wb3J0YW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbXBvcnRhbnRcIjtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gICAgZGlzcGxheVRhc2tzKFwiaW1wb3J0YW50XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW1wb3J0YW50O1xuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uL3Rhc2tcIjtcblxuY29uc3QgdGhpc1dlZWsgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1jb250YWluZXJcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICBkaXNwbGF5VGFza3MoXCJ0aGlzV2Vla1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoaXNXZWVrO1xuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uL3Rhc2tcIjtcblxuY29uc3QgdG9kYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcblxuICAgIGRpc3BsYXlUYXNrcyhcInRvZGF5XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kYXk7XG4iLCJpbXBvcnQgZm9ybSBmcm9tIFwiLi9mb3Jtcy9mb3JtXCI7XG5pbXBvcnQgZWRpdFRhc2tGb3JtIGZyb20gXCIuL2Zvcm1zL2VkaXQtdGFzay1mb3JtXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvdGFzay5jc3NcIjtcbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4uL2ltYWdlcy90cmFzaC5wbmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5cbmNvbnN0IHRhc2tzID0gW107XG5sZXQgY3VycmVudElkID0gMDtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UpID0+IHtcbiAgICBjb25zdCB0b0RvSXRlbSA9IHtcbiAgICAgICAgaWQ6IGN1cnJlbnRJZCsrLCAvLyBBc3NpZ24gdGhlIGN1cnJlbnRJZCBhbmQgdGhlbiBpbmNyZW1lbnQgaXQuXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBpbXBvcnRhbmNlOiBpbXBvcnRhbmNlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdG9Eb0l0ZW07XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7IC8vIFNhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZSB3aGVuIGFkZGluZyBhIG5ldyB0YXNrXG59O1xuXG4vLyBGdW5jdGlvbiB0byBzYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICh3aGljaFRhc2tzKSA9PiB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy8gQ2xlYXIgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBsb2FkaW5nIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIHRhc2tzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBMb2FkIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGV5IGV4aXN0XG4gICAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIGlmIChzdG9yZWRUYXNrcykge1xuICAgICAgICB0YXNrcy5wdXNoKC4uLnN0b3JlZFRhc2tzKTtcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVyZWRUYXNrcyA9IFtdO1xuXG4gICAgaWYgKHdoaWNoVGFza3MgPT09IFwidG9kYXlcIikge1xuICAgICAgICBmaWx0ZXJlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2hpY2hUYXNrcyA9PT0gXCJ0aGlzV2Vla1wiKSB7XG4gICAgICAgIGZpbHRlcmVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5RGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGVEYXkgPSB0YXNrRHVlRGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gTWF0aC5hYnModG9kYXlEYXkgLSB0YXNrRHVlRGF0ZURheSk7XG4gICAgICAgICAgICByZXR1cm4gZGlmZmVyZW5jZUluRGF5cyA8PSA3O1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdoaWNoVGFza3MgPT09IFwiaW1wb3J0YW50XCIpIHtcbiAgICAgICAgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2suaW1wb3J0YW5jZSA9PT0gXCJIaWdoXCI7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2hpY2hUYXNrcyA9PT0gXCJhbGxUYXNrc1wiKSB7XG4gICAgICAgIGZpbHRlcmVkVGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBmaWx0ZXJlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbXBvcnRhbmNlLnRleHRDb250ZW50ID0gdGFzay5pbXBvcnRhbmNlO1xuXG4gICAgICAgIGlmICh0YXNrLmltcG9ydGFuY2UgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWltcG9ydGFuY2VcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5pbXBvcnRhbmNlID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0taW1wb3J0YW5jZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLmltcG9ydGFuY2UgPT09IFwiTG93XCIpIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImxvdy1pbXBvcnRhbmNlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbGV0ZUNhcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1jYXJkLWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQ2FyZEJ1dHRvbi5zcmMgPSB0cmFzaEljb247XG5cbiAgICAgICAgZGVsZXRlQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVGFzayh3aGljaFRhc2tzLCB0YXNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0Q2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1jYXJkLWJ1dHRvblwiKTtcbiAgICAgICAgZWRpdENhcmRCdXR0b24uc3JjID0gZWRpdEljb247XG5cbiAgICAgICAgZWRpdENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRUYXNrKHdoaWNoVGFza3MsIHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQ2FyZEJ1dHRvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdENhcmRCdXR0b24pO1xuXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xufTtcblxubGV0IGZpcnN0TG9hZCA9IHRydWU7XG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAvLyBPbmx5IGNyZWF0ZSB0aGUgZm9ybSBvbmNlXG4gICAgaWYgKGZpcnN0TG9hZCkge1xuICAgICAgICBmb3JtKCk7XG4gICAgICAgIGZpcnN0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1mb3JtXCIpO1xuICAgICAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLW92ZXJsYXlcIik7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRhbmNlXCIpLnZhbHVlO1xuICAgICAgICAgICAgYWRkVGFzayhjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW5jZSkpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKFwiYWxsVGFza3NcIik7XG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbmV3LXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1vdmVybGF5XCIpO1xuXG4gICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLW92ZXJsYXlcIik7XG5cbiAgICAgICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9ICh3aGljaFRhc2tzLCB0YXNrKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHBvcHVwT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWNhcmQtb3ZlcmxheVwiKTtcblxuICAgIC8vIE9ubHkgY3JlYXRlIHRoZSBwb3B1cCBvbmNlXG4gICAgaWYgKCFwb3B1cE92ZXJsYXkpIHtcbiAgICAgICAgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcG9wdXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY2FyZC1vdmVybGF5XCIpO1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY2FyZC1wb3B1cFwiKTtcbiAgICAgICAgY29uc3QgcG9wdXBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwb3B1cEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNhcmQtcG9wdXAtaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwb3B1cENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1jYXJkLXBvcHVwLWNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IHBvcHVwQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNhcmQtcG9wdXAtYnV0dG9uc1wiKTtcbiAgICAgICAgY29uc3QgeWVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgeWVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ5ZXMtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBub0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5vQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuby1idXR0b25cIik7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcblxuICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBwb3B1cEhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcbiAgICAgICAgcG9wdXBDb250ZW50LnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIjtcbiAgICAgICAgeWVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgICAgICAgbm9CdXR0b24udGV4dENvbnRlbnQgPSBcIk5vXCI7XG5cbiAgICAgICAgeWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcyh3aGljaFRhc2tzKTtcbiAgICAgICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9wdXBPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cE92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwb3B1cEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIHBvcHVwQnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdXR0b24pO1xuICAgICAgICBwb3B1cEJ1dHRvbnMuYXBwZW5kQ2hpbGQobm9CdXR0b24pO1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEhlYWRlcik7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQ29udGVudCk7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9ucyk7XG4gICAgICAgIHBvcHVwT3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cE92ZXJsYXkpO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcG9wdXAgYWxyZWFkeSBleGlzdHMsIGp1c3QgZGlzcGxheSBpdFxuICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59O1xuXG5jb25zdCBlZGl0VGFzayA9ICh3aGljaFRhc2tzLCB0YXNrKSA9PiB7XG4gICAgLy8gQ2FsbCB0aGUgZWRpdFRhc2tGb3JtIGZ1bmN0aW9uIHdpdGggdGhlIHRhc2sgdG8gYmUgZWRpdGVkXG4gICAgZWRpdFRhc2tGb3JtKHRhc2spO1xuICAgIGNvbnN0IGVkaXRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stb3ZlcmxheVwiKTtcblxuICAgIGVkaXRPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIC8vIEdldCB0aGUgZm9ybSBmcm9tIHRoZSBET01cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZm9ybVwiKTtcblxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCBub3JtYWxseVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEZldGNoIHRoZSBuZXcgdmFsdWVzIGZyb20gdGhlIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGltcG9ydGFuY2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaW1wb3J0YW5jZVwiKS52YWx1ZTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRhc2sgb2JqZWN0IHdpdGggdGhlIG5ldyB2YWx1ZXNcbiAgICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRhc2suaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MubWFwKCh0KSA9PiB7XG4gICAgICAgICAgICBpZiAodC5pZCA9PT0gdGFzay5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiBpbXBvcnRhbmNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza3MpKTtcblxuICAgICAgICAvLyBSZS1kaXNwbGF5IHRoZSB0YXNrc1xuICAgICAgICBkaXNwbGF5VGFza3Mod2hpY2hUYXNrcyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgdGhlIGZvcm1cbiAgICAgICAgZWRpdE92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1idXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIENsb3NlIHRoZSBmb3JtIHdpdGhvdXQgbWFraW5nIGFueSBjaGFuZ2VzXG4gICAgICAgIGVkaXRPdmVybGF5LnJlbW92ZSgpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFza0Zvcm0sIGRpc3BsYXlUYXNrcyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2xvYWQtcGFnZS9pbmRleFwiO1xuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9