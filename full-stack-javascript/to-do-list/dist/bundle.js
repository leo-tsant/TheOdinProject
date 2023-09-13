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

/***/ "./src/components/edit-task-form.js":
/*!******************************************!*\
  !*** ./src/components/edit-task-form.js ***!
  \******************************************/
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

/***/ "./src/components/form.js":
/*!********************************!*\
  !*** ./src/components/form.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _styles_form_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/form.css */ "./src/styles/form.css");


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





const content = () => {
    const content = document.querySelector(".content");
    const allTasksTab = document.getElementById("all-tasks");
    const todayTab = document.getElementById("today");
    const thisWeekTab = document.getElementById("this-week");
    const importantTab = document.getElementById("important");

    let firstLoad = true;

    function handleTabClick(callback) {
        content.innerHTML = "";
        callback();
    }

    allTasksTab.addEventListener("click", () => handleTabClick(_sidebar_items_all_tasks__WEBPACK_IMPORTED_MODULE_0__["default"]));
    todayTab.addEventListener("click", () => handleTabClick(_sidebar_items_today__WEBPACK_IMPORTED_MODULE_1__["default"]));
    thisWeekTab.addEventListener("click", () => handleTabClick(_sidebar_items_this_week__WEBPACK_IMPORTED_MODULE_2__["default"]));
    importantTab.addEventListener("click", () => handleTabClick(_sidebar_items_important__WEBPACK_IMPORTED_MODULE_3__["default"]));

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

    // Projects List
    const projectsList = document.createElement("div");
    projectsList.classList.add("sidebar-list");
    const projectsListTitle = document.createElement("div");
    projectsListTitle.textContent = "Projects";
    projectsListTitle.classList.add("sidebar-title");

    const projectsListItems = document.createElement("ul");

    const projectsListItemsAddProject = document.createElement("li");
    projectsListItemsAddProject.classList.add("sidebar-item");
    const projectsListItemsAddProjectText = document.createElement("div");
    projectsListItemsAddProjectText.classList.add("sidebar-item-text");
    projectsListItemsAddProjectText.textContent = "Add Project";
    const projectsListItemsAddProjectIcon = document.createElement("img");
    projectsListItemsAddProjectIcon.classList.add("sidebar-item-icon");
    projectsListItemsAddProjectIcon.src = _images_checkmark_svg__WEBPACK_IMPORTED_MODULE_0__;

    projectsListItemsAddProject.appendChild(projectsListItemsAddProjectIcon);
    projectsListItemsAddProject.appendChild(projectsListItemsAddProjectText);
    projectsListItems.appendChild(projectsListItemsAddProject);

    homeList.appendChild(homeListTitle);
    homeList.appendChild(homeListItems);

    projectsList.appendChild(projectsListTitle);
    projectsList.appendChild(projectsListItems);

    sidebar.appendChild(homeList);
    sidebar.appendChild(projectsList);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sidebar);


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
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form */ "./src/components/form.js");
/* harmony import */ var _edit_task_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-task-form */ "./src/components/edit-task-form.js");
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
        (0,_form__WEBPACK_IMPORTED_MODULE_0__["default"])();
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
    (0,_edit_task_form__WEBPACK_IMPORTED_MODULE_1__["default"])(task);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLFlBQVksRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIQTs7QUFFNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlFQUFlLElBQUksRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIOEI7QUFDUDtBQUNPO0FBQ0M7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrREFBK0QsZ0VBQVE7QUFDdkUsNERBQTRELDREQUFLO0FBQ2pFLCtEQUErRCxnRUFBUTtBQUN2RSxnRUFBZ0UsZ0VBQVM7O0FBRXpFO0FBQ0EsdUJBQXVCLGdFQUFRO0FBQy9CO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzlCdkI7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLHVGQUF1RixTQUFTO0FBQzFIOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ05pQzs7QUFFdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFCQUFxQixrREFBYTs7QUFFbEM7QUFDQTtBQUNBOztBQUVBLGlFQUFlLE1BQU0sRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCUTtBQUNFO0FBQ0E7QUFDRjs7QUFFOUI7QUFDQSxJQUFJLG1EQUFNO0FBQ1YsSUFBSSxvREFBTztBQUNYLElBQUksb0RBQU87QUFDWCxJQUFJLG1EQUFNO0FBQ1Y7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDWitCOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DLGtEQUFhOztBQUVqRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxrREFBYTs7QUFFOUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msa0RBQWE7O0FBRWpEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLGtEQUFhOztBQUVsRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtEQUFhOztBQUV2RDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxpRUFBZSxPQUFPLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R2dDOztBQUV2RDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUkscURBQWM7QUFDbEIsSUFBSSxtREFBWTtBQUNoQjs7QUFFQSxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QmU7O0FBRXZDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxJQUFJLG1EQUFZO0FBQ2hCOztBQUVBLGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCYzs7QUFFdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBLElBQUksbURBQVk7QUFDaEI7O0FBRUEsaUVBQWUsUUFBUSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJlOztBQUV2QztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsSUFBSSxtREFBWTtBQUNoQjs7QUFFQSxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQks7QUFDa0I7QUFDaEI7QUFDZ0I7QUFDRjs7QUFFMUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsOENBQVM7O0FBRXhDO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSw2QkFBNkIsNkNBQVE7O0FBRXJDO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaURBQUk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUksMkRBQVk7QUFDaEI7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFd0M7O0FBRXhDLGlFQUFlLFVBQVUsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztVQzdSMUI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDbEJBOzs7Ozs7Ozs7Ozs7O0FDQTRCO0FBQ3dCOztBQUVwRCx1RUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL2Zvcm0uY3NzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvc3R5bGVzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy90YXNrLmNzcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9zdHlsZXMvZm9ybS5jc3M/NzRlYSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL3N0eWxlcy90YXNrLmNzcz84ODA4Iiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL2VkaXQtdGFzay1mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9mb3JtLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9sb2FkLXBhZ2UvY29udGVudC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9hZC1wYWdlL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9hZC1wYWdlL2hlYWRlci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvbG9hZC1wYWdlL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9sb2FkLXBhZ2Uvc2lkZWJhci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtcy9hbGwtdGFza3MuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9jb21wb25lbnRzL3NpZGViYXItaXRlbXMvaW1wb3J0YW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvY29tcG9uZW50cy9zaWRlYmFyLWl0ZW1zL3RoaXMtd2Vlay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvc2lkZWJhci1pdGVtcy90b2RheS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2NvbXBvbmVudHMvdGFzay5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90by1kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAub3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogRGFya2VuIHRoZSBiYWNrZ3JvdW5kICovXG4gICAgei1pbmRleDogMTAwMDsgLyogTWFrZSBpdCBhcHBlYXIgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4ucG9wdXAtZm9ybSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogNDAwcHg7XG4gICAgaGVpZ2h0OiAzMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmNsb3NlLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmM2IzMDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgMC4zcyBlYXNlLWluLW91dDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLmNsb3NlLWJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5NTM0Zjtcbn1cblxuZm9ybSBidXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMzIsIDk3LCAzNSk7XG4gICAgYm9yZGVyOiAxLjRweCBzb2xpZCByZ2IoMTAyLCAxNDMsIDEwNCk7XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xufVxuXG5mb3JtIGJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogcmdiKDc2LCAxNTAsIDI2KTtcbn1cblxubGFiZWwge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbn1cblxuLmlucHV0LWZpZWxkcyB7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbmlucHV0IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMnB4O1xufVxuXG4ucG9wdXAtZm9ybSBoMiB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAxMDAlO1xufVxuYCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2Zvcm0uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksYUFBYTtJQUNiLGVBQWU7SUFDZixNQUFNO0lBQ04sT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1osb0NBQW9DLEVBQUUsMEJBQTBCO0lBQ2hFLGFBQWEsRUFBRSwyQ0FBMkM7SUFDMUQsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGFBQWE7SUFDYixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw2Q0FBNkM7SUFDN0Msa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtJQUNmLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix5Q0FBeUM7SUFDekMsMkJBQTJCO0lBQzNCLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksNEJBQTRCO0FBQ2hDOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2QixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm92ZXJsYXkge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjcpOyAvKiBEYXJrZW4gdGhlIGJhY2tncm91bmQgKi9cXG4gICAgei1pbmRleDogMTAwMDsgLyogTWFrZSBpdCBhcHBlYXIgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgKi9cXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wb3B1cC1mb3JtIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jbG9zZS1idXR0b24ge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIHdpZHRoOiAyNHB4O1xcbiAgICBoZWlnaHQ6IDI0cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzYjMwO1xcbiAgICBmb250LXNpemU6IDI0cHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2UtaW4tb3V0O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDk1MzRmO1xcbn1cXG5cXG5mb3JtIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi10b3A6IDEwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB0ZXh0LXNoYWRvdzogMCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcXG4gICAgYmFja2dyb3VuZDogcmdiKDMyLCA5NywgMzUpO1xcbiAgICBib3JkZXI6IDEuNHB4IHNvbGlkIHJnYigxMDIsIDE0MywgMTA0KTtcXG4gICAgd2lkdGg6IDE1MHB4O1xcbiAgICBoZWlnaHQ6IDMwcHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcXG59XFxuXFxuZm9ybSBidXR0b246aG92ZXIge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNzYsIDE1MCwgMjYpO1xcbn1cXG5cXG5sYWJlbCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmlucHV0LWZpZWxkcyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG5pbnB1dCB7XFxuICAgIHdpZHRoOiAyMDBweDtcXG4gICAgaGVpZ2h0OiAyMnB4O1xcbn1cXG5cXG4ucG9wdXAtZm9ybSBoMiB7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuZm9ybSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAqIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDZkNGQ0O1xuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xufVxuXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMTIwcHggMWZyIDUwcHg7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNGZyO1xufVxuXG4uaGVhZGVyIHtcbiAgICBncmlkLXJvdzogMSAvIDI7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAyMHB4O1xuICAgIGJhY2tncm91bmQ6ICM3Nzc1NzAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjIsIDIyLCAyMSwgMC41KSwgcmdiYSg4LCA4LCA3LCAwLjcpKTtcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICBjb2xvcjogI2Y1ZjVmNTtcbiAgICBmb250LXNpemU6IDQ1cHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBib3JkZXItYm90dG9tOiAzcHggc29saWQgZm9yZXN0Z3JlZW47XG4gICAgcGFkZGluZzogMCAyMHB4O1xufVxuXG4uc2lkZWJhciB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk1IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyLCAyMiwgMjEsIDAuNSksIHJnYmEoOCwgOCwgNywgMC43KSk7XG4gICAgcGFkZGluZzogMjBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgZ2FwOiAyMHB4O1xufVxuXG4uc2lkZWJhci10aXRsZSB7XG4gICAgZm9udC1zaXplOiAyOHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgcGFkZGluZy1ib3R0b206IDJweDtcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcbn1cblxuLnNpZGViYXItaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG4gICAgY29sb3I6ICNmNWY1ZjU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLnNpZGViYXItaXRlbTpob3ZlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM1NzU1NTM7XG59XG5cbi5zaWRlYmFyLWl0ZW06YWN0aXZlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzc3NTcwO1xufVxuXG4uc2lkZWJhci1pdGVtLWljb24ge1xuICAgIHdpZHRoOiAyNXB4O1xufVxuXG4uY29udGVudCB7XG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xuICAgIGdyaWQtY29sdW1uOiAyIC8gMztcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA3MHB4IDFmcjtcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5jb250ZW50LWhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBjb2xvcjogI2RjZTBkYjtcbiAgICBiYWNrZ3JvdW5kOiAjYTBhN2EwIHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyLCAyMiwgMjEsIDAuNSksIHJnYmEoOCwgOCwgNywgMC43KSk7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi50YXNrcy1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ2FwOiAzMHB4O1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZml0LCBtaW5tYXgoMzAwcHgsIDQwMHB4KSk7XG59XG5cbi5hZGQtbmV3LXRhc2stYnV0dG9uIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5YjFkO1xuICAgIGNvbG9yOiAjZjVmNWY1O1xuICAgIGhlaWdodDogMzVweDtcbiAgICB3aWR0aDogMTMwcHg7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgcGFkZGluZzogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XG59XG5cbi5hZGQtbmV3LXRhc2stYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWI2ZTBhO1xufVxuXG4uZm9vdGVyIHtcbiAgICBncmlkLXJvdzogMyAvIDQ7XG4gICAgZ3JpZC1jb2x1bW46IDEgLyAzO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IC8qIEFkZGVkIGZvbnQgd2VpZ2h0ICovXG4gICAgcGFkZGluZzogMCAyMHB4OyAvKiBTaWRlIHBhZGRpbmcgZm9yIGxhcmdlciBzY3JlZW5zICovXG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7IC8qIFRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTE2LCAxMTMsIDExMyk7XG59XG5cbi5mb290ZXIgYSB7XG4gICAgY29sb3I6IHJnYigxNSwgMjIzLCA1MCk7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBBZGRlZCB1bmRlcmxpbmUgdG8gaWRlbnRpZnkgYXMgbGluayAqL1xuICAgIHRyYW5zaXRpb246IGNvbG9yIDAuM3MgZWFzZTsgLyogVHJhbnNpdGlvbiBmb3IgaG92ZXIgZWZmZWN0ICovXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmZvb3RlciBhOmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxTQUFTO0lBQ1QsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsYUFBYTtJQUNiLGtDQUFrQztJQUNsQyw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYiwyQkFBMkI7SUFDM0IsbUJBQW1CO0lBQ25CLFNBQVM7SUFDVCw4RUFBOEU7SUFDOUUsc0NBQXNDO0lBQ3RDLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG9DQUFvQztJQUNwQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQiw4RUFBOEU7SUFDOUUsYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsU0FBUztBQUNiOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLGdDQUFnQztBQUNwQzs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsU0FBUztJQUNULGVBQWU7SUFDZixjQUFjO0lBQ2QsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7O0FBRUE7SUFDSSxlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCw4RUFBOEU7SUFDOUUsV0FBVztJQUNYLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLFNBQVM7SUFDVCw2REFBNkQ7QUFDakU7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztJQUNkLFlBQVk7SUFDWixZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsZ0JBQWdCLEVBQUUsc0JBQXNCO0lBQ3hDLGVBQWUsRUFBRSxvQ0FBb0M7SUFDckQsc0NBQXNDLEVBQUUsZ0NBQWdDO0lBQ3hFLGVBQWU7SUFDZixvQ0FBb0M7QUFDeEM7O0FBRUE7SUFDSSx1QkFBdUI7SUFDdkIscUJBQXFCLEVBQUUsd0NBQXdDO0lBQy9ELDJCQUEyQixFQUFFLGdDQUFnQztJQUM3RCxnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICAgIG1hcmdpbjogMDtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkNmQ0ZDQ7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG51bCB7XFxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi5jb250YWluZXIge1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEyMHB4IDFmciA1MHB4O1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XFxufVxcblxcbi5oZWFkZXIge1xcbiAgICBncmlkLXJvdzogMSAvIDI7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBnYXA6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6ICM3Nzc1NzAgcmFkaWFsLWdyYWRpZW50KHJnYmEoMjIsIDIyLCAyMSwgMC41KSwgcmdiYSg4LCA4LCA3LCAwLjcpKTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCByZ2JhKDAsIDAsIDAsIDAuNSk7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBmb250LXNpemU6IDQ1cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCBmb3Jlc3RncmVlbjtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG5cXG4uc2lkZWJhciB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyAyO1xcbiAgICBiYWNrZ3JvdW5kOiAjOTc5Nzk1IHJhZGlhbC1ncmFkaWVudChyZ2JhKDIyLCAyMiwgMjEsIDAuNSksIHJnYmEoOCwgOCwgNywgMC43KSk7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLnNpZGViYXItdGl0bGUge1xcbiAgICBmb250LXNpemU6IDI4cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGNvbG9yOiAjZjVmNWY1O1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y1ZjVmNTtcXG59XFxuXFxuLnNpZGViYXItaXRlbSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogMTBweDtcXG4gICAgcGFkZGluZzogMTBweCAwO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgZm9udC1zaXplOiAyMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTc1NTUzO1xcbn1cXG5cXG4uc2lkZWJhci1pdGVtOmFjdGl2ZSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM3Nzc1NzA7XFxufVxcblxcbi5zaWRlYmFyLWl0ZW0taWNvbiB7XFxuICAgIHdpZHRoOiAyNXB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICAgIGdyaWQtcm93OiAyIC8gMztcXG4gICAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDcwcHggMWZyO1xcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5jb250ZW50LWhlYWRlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC1zaXplOiAzMHB4O1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBjb2xvcjogI2RjZTBkYjtcXG4gICAgYmFja2dyb3VuZDogI2EwYTdhMCByYWRpYWwtZ3JhZGllbnQocmdiYSgyMiwgMjIsIDIxLCAwLjUpLCByZ2JhKDgsIDgsIDcsIDAuNykpO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4udGFza3MtY29udGFpbmVyIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdhcDogMzBweDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maXQsIG1pbm1heCgzMDBweCwgNDAwcHgpKTtcXG59XFxuXFxuLmFkZC1uZXctdGFzay1idXR0b24ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI5YjFkO1xcbiAgICBjb2xvcjogI2Y1ZjVmNTtcXG4gICAgaGVpZ2h0OiAzNXB4O1xcbiAgICB3aWR0aDogMTMwcHg7XFxuICAgIGZvbnQtc2l6ZTogMjBweDtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgcGFkZGluZzogNXB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xcbn1cXG5cXG4uYWRkLW5ldy10YXNrLWJ1dHRvbjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjZlMGE7XFxufVxcblxcbi5mb290ZXIge1xcbiAgICBncmlkLXJvdzogMyAvIDQ7XFxuICAgIGdyaWQtY29sdW1uOiAxIC8gMztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7IC8qIEFkZGVkIGZvbnQgd2VpZ2h0ICovXFxuICAgIHBhZGRpbmc6IDAgMjBweDsgLyogU2lkZSBwYWRkaW5nIGZvciBsYXJnZXIgc2NyZWVucyAqL1xcbiAgICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTsgLyogVHJhbnNpdGlvbiBmb3IgaG92ZXIgZWZmZWN0ICovXFxuICAgIGZvbnQtc2l6ZTogMTRweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDExNiwgMTEzLCAxMTMpO1xcbn1cXG5cXG4uZm9vdGVyIGEge1xcbiAgICBjb2xvcjogcmdiKDE1LCAyMjMsIDUwKTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyAvKiBBZGRlZCB1bmRlcmxpbmUgdG8gaWRlbnRpZnkgYXMgbGluayAqL1xcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjNzIGVhc2U7IC8qIFRyYW5zaXRpb24gZm9yIGhvdmVyIGVmZmVjdCAqL1xcbiAgICBmb250LXdlaWdodDogNzAwO1xcbn1cXG5cXG4uZm9vdGVyIGE6aG92ZXIge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAuY2FyZCB7XG4gICAgaGVpZ2h0OiAzMDBweDtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI1cHggMTVweCAxNXB4IDI1cHg7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzIDFmcik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG93LWltcG9ydGFuY2Uge1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgcmdiKDE0LCA2OCwgMTg1KSAxN3B4LCB3aGl0ZSAxN3B4KTtcbn1cblxuLm1lZGl1bS1pbXBvcnRhbmNlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTQsIDE5OCwgMTQpIDE3cHgsIHdoaXRlIDE3cHgpO1xufVxuXG4uaGlnaC1pbXBvcnRhbmNlIHtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigxOTksIDI0LCAxOCkgMTdweCwgd2hpdGUgMTdweCk7XG59XG5cbi5kZWxldGUtY2FyZC1idXR0b24ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDEwcHg7XG4gICAgcmlnaHQ6IDEwcHg7XG4gICAgd2lkdGg6IDI0cHg7XG4gICAgaGVpZ2h0OiAyNHB4O1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5kZWxldGUtY2FyZC1idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZWRpdC1jYXJkLWJ1dHRvbiB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMTBweDtcbiAgICByaWdodDogNDBweDtcbiAgICB3aWR0aDogMjRweDtcbiAgICBoZWlnaHQ6IDI0cHg7XG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgb3BhY2l0eTogMC41O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmVkaXQtY2FyZC1idXR0b246aG92ZXIge1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcbiAgICBvcGFjaXR5OiAxO1xufVxuXG4uZGVsZXRlLWNhcmQtb3ZlcmxheSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43KTsgLyogRGFya2VuIHRoZSBiYWNrZ3JvdW5kICovXG4gICAgei1pbmRleDogMTAwMDsgLyogTWFrZSBpdCBhcHBlYXIgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQgKi9cbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZGVsZXRlLWNhcmQtcG9wdXAge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDQwMHB4O1xuICAgIGhlaWdodDogMzIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvdGFzay5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLHVCQUF1QjtJQUN2Qiw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLGlDQUFpQztJQUNqQyxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSw4RUFBOEU7QUFDbEY7O0FBRUE7SUFDSSwrRUFBK0U7QUFDbkY7O0FBRUE7SUFDSSw4RUFBOEU7QUFDbEY7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNDQUFzQztJQUN0QyxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0MsRUFBRSwwQkFBMEI7SUFDaEUsYUFBYSxFQUFFLDJDQUEyQztJQUMxRCx1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsdUNBQXVDO0lBQ3ZDLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osYUFBYTtJQUNiLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtBQUN2QlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuY2FyZCB7XFxuICAgIGhlaWdodDogMzAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyNXB4IDE1cHggMTVweCAyNXB4O1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzIDFmcik7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuXFxuLmxvdy1pbXBvcnRhbmNlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTQsIDY4LCAxODUpIDE3cHgsIHdoaXRlIDE3cHgpO1xcbn1cXG5cXG4ubWVkaXVtLWltcG9ydGFuY2Uge1xcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIHJnYigyNTQsIDE5OCwgMTQpIDE3cHgsIHdoaXRlIDE3cHgpO1xcbn1cXG5cXG4uaGlnaC1pbXBvcnRhbmNlIHtcXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2IoMTk5LCAyNCwgMTgpIDE3cHgsIHdoaXRlIDE3cHgpO1xcbn1cXG5cXG4uZGVsZXRlLWNhcmQtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5kZWxldGUtY2FyZC1idXR0b246aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblxcbi5lZGl0LWNhcmQtYnV0dG9uIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBib3R0b206IDEwcHg7XFxuICAgIHJpZ2h0OiA0MHB4O1xcbiAgICB3aWR0aDogMjRweDtcXG4gICAgaGVpZ2h0OiAyNHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4ycyBlYXNlLWluLW91dDtcXG4gICAgb3BhY2l0eTogMC41O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi5lZGl0LWNhcmQtYnV0dG9uOmhvdmVyIHtcXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cXG4uZGVsZXRlLWNhcmQtb3ZlcmxheSB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7IC8qIERhcmtlbiB0aGUgYmFja2dyb3VuZCAqL1xcbiAgICB6LWluZGV4OiAxMDAwOyAvKiBNYWtlIGl0IGFwcGVhciBvbiB0b3Agb2Ygb3RoZXIgY29udGVudCAqL1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmRlbGV0ZS1jYXJkLXBvcHVwIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjMpO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiA0MDBweDtcXG4gICAgaGVpZ2h0OiAzMjBweDtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2Zvcm0uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9mb3JtLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi90YXNrLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vdGFzay5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGVkaXRUYXNrRm9ybSA9ICh0YXNrKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmlkID0gXCJlZGl0LXRhc2stb3ZlcmxheVwiO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZChcIm92ZXJsYXlcIik7XG5cbiAgICBjb25zdCBlZGl0UG9wdXBGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBlZGl0UG9wdXBGb3JtLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mb3JtXCIpO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiRWRpdCBUYXNrXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5pZCA9IFwiZWRpdC10YXNrLWZvcm1cIjtcblxuICAgIC8vIENyZWF0ZSB0aGUgaW5wdXQgZmllbGRzIGZvciB0aGUgZm9ybVxuICAgIGNvbnN0IGlucHV0RmllbGRzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBpbnB1dEZpZWxkcy5jbGFzc0xpc3QuYWRkKFwiaW5wdXQtZmllbGRzXCIpO1xuXG4gICAgY3JlYXRlSW5wdXRGaWVsZChcIlRpdGxlOlwiLCBcInRleHRcIiwgXCJ0aXRsZVwiLCB0YXNrLnRpdGxlKTtcbiAgICBjcmVhdGVUZXh0QXJlYUZpZWxkKFwiRGVzY3JpcHRpb246XCIsIFwiZGVzY3JpcHRpb25cIiwgdGFzay5kZXNjcmlwdGlvbik7XG4gICAgY3JlYXRlSW5wdXRGaWVsZChcIkR1ZSBEYXRlOlwiLCBcImRhdGVcIiwgXCJkdWVEYXRlXCIsIHRhc2suZHVlRGF0ZSk7XG4gICAgY3JlYXRlU2VsZWN0RmllbGQoXCJJbXBvcnRhbmNlOlwiLCBcImltcG9ydGFuY2VcIiwgW1wiSGlnaFwiLCBcIk1lZGl1bVwiLCBcIkxvd1wiXSwgdGFzay5pbXBvcnRhbmNlKTtcblxuICAgIGNvbnN0IGRvbmVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRvbmVCdXR0b24udHlwZSA9IFwic3VibWl0XCI7XG4gICAgZG9uZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRG9uZVwiO1xuXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBjYW5jZWxCdXR0b24uaWQgPSBcImNhbmNlbC1idXR0b25cIjtcbiAgICBjYW5jZWxCdXR0b24udHlwZSA9IFwiYnV0dG9uXCI7XG4gICAgY2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gXCJDYW5jZWxcIjtcblxuICAgIGZvcm0uYXBwZW5kQ2hpbGQoaW5wdXRGaWVsZHMpO1xuICAgIGZvcm0uYXBwZW5kQ2hpbGQoZG9uZUJ1dHRvbik7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChjYW5jZWxCdXR0b24pO1xuXG4gICAgLy8gQWRkIGFsbCBlbGVtZW50cyB0byB0aGUgcG9wdXAgZm9ybVxuICAgIGVkaXRQb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICBlZGl0UG9wdXBGb3JtLmFwcGVuZENoaWxkKGZvcm0pO1xuXG4gICAgLy8gQWRkIHRoZSBwb3B1cCBmb3JtIHRvIHRoZSBvdmVybGF5XG4gICAgb3ZlcmxheS5hcHBlbmRDaGlsZChlZGl0UG9wdXBGb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgb3ZlcmxheSB0byB0aGUgZG9jdW1lbnQncyBib2R5XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgZnVuY3Rpb24gY3JlYXRlSW5wdXRGaWVsZChsYWJlbFRleHQsIGlucHV0VHlwZSwgaW5wdXROYW1lLCBkZWZhdWx0VmFsdWUsIGlzUmVxdWlyZWQgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICAgICAgICBpbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IGlucHV0TmFtZTtcbiAgICAgICAgaW5wdXQudmFsdWUgPSBkZWZhdWx0VmFsdWU7XG4gICAgICAgIGlmIChpc1JlcXVpcmVkKSB7XG4gICAgICAgICAgICBpbnB1dC5yZXF1aXJlZCA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGlucHV0KTtcbiAgICAgICAgaW5wdXRGaWVsZHMuYXBwZW5kQ2hpbGQoZmllbGRDb250YWluZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhRmllbGQobGFiZWxUZXh0LCBpbnB1dE5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXROYW1lKTtcblxuICAgICAgICBjb25zdCB0ZXh0YXJlYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZXh0YXJlYVwiKTtcbiAgICAgICAgdGV4dGFyZWEuaWQgPSBpbnB1dE5hbWU7XG4gICAgICAgIHRleHRhcmVhLm5hbWUgPSBpbnB1dE5hbWU7XG4gICAgICAgIHRleHRhcmVhLnZhbHVlID0gZGVmYXVsdFZhbHVlO1xuXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgICAgICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0RmllbGQobGFiZWxUZXh0LCBpbnB1dE5hbWUsIG9wdGlvbnMsIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICBjb25zdCBmaWVsZENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJib3hcIik7XG5cbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgICAgIGxhYmVsLnRleHRDb250ZW50ID0gbGFiZWxUZXh0O1xuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgaW5wdXROYW1lKTtcblxuICAgICAgICBjb25zdCBzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VsZWN0XCIpO1xuICAgICAgICBzZWxlY3QuaWQgPSBpbnB1dE5hbWU7XG4gICAgICAgIHNlbGVjdC5uYW1lID0gaW5wdXROYW1lO1xuICAgICAgICBzZWxlY3QucmVxdWlyZWQgPSB0cnVlO1xuXG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uVGV4dCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICAgICAgICAgIG9wdGlvbi52YWx1ZSA9IG9wdGlvblRleHQ7XG4gICAgICAgICAgICBvcHRpb24udGV4dENvbnRlbnQgPSBvcHRpb25UZXh0O1xuICAgICAgICAgICAgaWYgKG9wdGlvblRleHQgPT09IGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzZWxlY3QuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxlY3QpO1xuICAgICAgICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgZWRpdFRhc2tGb3JtO1xuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2Zvcm0uY3NzXCI7XG5cbmNvbnN0IGZvcm0gPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG5cbiAgICBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBvdmVybGF5LmlkID0gXCJuZXctdGFzay1vdmVybGF5XCI7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKFwib3ZlcmxheVwiKTtcblxuICAgIGNvbnN0IHBvcHVwRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcG9wdXBGb3JtLmNsYXNzTGlzdC5hZGQoXCJwb3B1cC1mb3JtXCIpO1xuXG4gICAgY29uc3QgZm9ybVRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgIGZvcm1UaXRsZS50ZXh0Q29udGVudCA9IFwiQWRkIE5ldyBUYXNrXCI7XG5cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImZvcm1cIik7XG4gICAgZm9ybS5pZCA9IFwibmV3LXRhc2stZm9ybVwiO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBpbnB1dCBmaWVsZHMgZm9yIHRoZSBmb3JtXG4gICAgY29uc3QgaW5wdXRGaWVsZHMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGlucHV0RmllbGRzLmNsYXNzTGlzdC5hZGQoXCJpbnB1dC1maWVsZHNcIik7XG5cbiAgICAvLyBDcmVhdGUgaW5wdXQgZmllbGRzIGZvciBUaXRsZSwgRGVzY3JpcHRpb24sIER1ZSBEYXRlLCBhbmQgSW1wb3J0YW5jZVxuICAgIGNyZWF0ZUlucHV0RmllbGQoXCJUaXRsZTpcIiwgXCJ0ZXh0XCIsIFwidGl0bGVcIik7XG4gICAgY3JlYXRlVGV4dEFyZWFGaWVsZChcIkRlc2NyaXB0aW9uOlwiLCBcImRlc2NyaXB0aW9uXCIpO1xuICAgIGNyZWF0ZUlucHV0RmllbGQoXCJEdWUgRGF0ZTpcIiwgXCJkYXRlXCIsIFwiZHVlRGF0ZVwiKTtcbiAgICBjcmVhdGVTZWxlY3RGaWVsZChcIkltcG9ydGFuY2U6XCIsIFwiaW1wb3J0YW5jZVwiLCBbXCJIaWdoXCIsIFwiTWVkaXVtXCIsIFwiTG93XCJdKTtcblxuICAgIC8vIENyZWF0ZSB0aGUgXCJBZGQgVGFza1wiIGJ1dHRvblxuICAgIGNvbnN0IGFkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgYWRkQnV0dG9uLnR5cGUgPSBcInN1Ym1pdFwiO1xuICAgIGFkZEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcblxuICAgIC8vIEFkZCBpbnB1dCBmaWVsZHMgYW5kIHRoZSBcIkFkZCBUYXNrXCIgYnV0dG9uIHRvIHRoZSBmb3JtXG4gICAgZm9ybS5hcHBlbmRDaGlsZChpbnB1dEZpZWxkcyk7XG4gICAgZm9ybS5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuXG4gICAgLy8gQ3JlYXRlIHRoZSBjbG9zZSBidXR0b25cbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcbiAgICBjbG9zZUJ1dHRvbi50ZXh0Q29udGVudCA9IFwiw5dcIjtcblxuICAgIC8vIEFkZCBhbGwgZWxlbWVudHMgdG8gdGhlIHBvcHVwIGZvcm1cbiAgICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZm9ybVRpdGxlKTtcbiAgICBwb3B1cEZvcm0uYXBwZW5kQ2hpbGQoZm9ybSk7XG4gICAgcG9wdXBGb3JtLmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uKTtcblxuICAgIC8vIEFkZCB0aGUgcG9wdXAgZm9ybSB0byB0aGUgb3ZlcmxheVxuICAgIG92ZXJsYXkuYXBwZW5kQ2hpbGQocG9wdXBGb3JtKTtcblxuICAgIC8vIEFkZCB0aGUgb3ZlcmxheSB0byB0aGUgZG9jdW1lbnQncyBib2R5XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG92ZXJsYXkpO1xuXG4gICAgLy8gQ3JlYXRlIGEgZnVuY3Rpb24gdG8gc2ltcGxpZnkgaW5wdXQgZmllbGQgY3JlYXRpb25cbiAgICBmdW5jdGlvbiBjcmVhdGVJbnB1dEZpZWxkKGxhYmVsVGV4dCwgaW5wdXRUeXBlLCBpbnB1dE5hbWUsIGlzUmVxdWlyZWQgPSB0cnVlKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImJveFwiKTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICAgICAgbGFiZWwudGV4dENvbnRlbnQgPSBsYWJlbFRleHQ7XG4gICAgICAgIGxhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBpbnB1dE5hbWUpO1xuXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgICAgICBpbnB1dC50eXBlID0gaW5wdXRUeXBlO1xuICAgICAgICBpbnB1dC5pZCA9IGlucHV0TmFtZTtcbiAgICAgICAgaW5wdXQubmFtZSA9IGlucHV0TmFtZTtcbiAgICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgICAgIGlucHV0LnJlcXVpcmVkID0gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuICAgICAgICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XG4gICAgfVxuICAgIC8vIEZ1bmN0aW9uIHRvIGNyZWF0ZSBhIHRleHQgYXJlYSBpbnB1dCBmaWVsZFxuICAgIGZ1bmN0aW9uIGNyZWF0ZVRleHRBcmVhRmllbGQobGFiZWxUZXh0LCBpbnB1dE5hbWUpIHtcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0TmFtZSk7XG5cbiAgICAgICAgY29uc3QgdGV4dGFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICAgIHRleHRhcmVhLmlkID0gaW5wdXROYW1lO1xuICAgICAgICB0ZXh0YXJlYS5uYW1lID0gaW5wdXROYW1lO1xuXG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKGxhYmVsKTtcbiAgICAgICAgZmllbGRDb250YWluZXIuYXBwZW5kQ2hpbGQodGV4dGFyZWEpO1xuICAgICAgICBpbnB1dEZpZWxkcy5hcHBlbmRDaGlsZChmaWVsZENvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gRnVuY3Rpb24gdG8gY3JlYXRlIGEgc2VsZWN0IGlucHV0IGZpZWxkXG4gICAgZnVuY3Rpb24gY3JlYXRlU2VsZWN0RmllbGQobGFiZWxUZXh0LCBpbnB1dE5hbWUsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZmllbGRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBmaWVsZENvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiYm94XCIpO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgICAgICBsYWJlbC50ZXh0Q29udGVudCA9IGxhYmVsVGV4dDtcbiAgICAgICAgbGFiZWwuc2V0QXR0cmlidXRlKFwiZm9yXCIsIGlucHV0TmFtZSk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcbiAgICAgICAgc2VsZWN0LmlkID0gaW5wdXROYW1lO1xuICAgICAgICBzZWxlY3QubmFtZSA9IGlucHV0TmFtZTtcbiAgICAgICAgc2VsZWN0LnJlcXVpcmVkID0gdHJ1ZTtcblxuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvblRleHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgICAgICAgICBvcHRpb24udmFsdWUgPSBvcHRpb25UZXh0O1xuICAgICAgICAgICAgb3B0aW9uLnRleHRDb250ZW50ID0gb3B0aW9uVGV4dDtcbiAgICAgICAgICAgIHNlbGVjdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmaWVsZENvbnRhaW5lci5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGZpZWxkQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGVjdCk7XG4gICAgICAgIGlucHV0RmllbGRzLmFwcGVuZENoaWxkKGZpZWxkQ29udGFpbmVyKTtcbiAgICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBmb3JtO1xuIiwiaW1wb3J0IGFsbFRhc2tzIGZyb20gXCIuLi9zaWRlYmFyLWl0ZW1zL2FsbC10YXNrc1wiO1xuaW1wb3J0IHRvZGF5IGZyb20gXCIuLi9zaWRlYmFyLWl0ZW1zL3RvZGF5XCI7XG5pbXBvcnQgdGhpc1dlZWsgZnJvbSBcIi4uL3NpZGViYXItaXRlbXMvdGhpcy13ZWVrXCI7XG5pbXBvcnQgaW1wb3J0YW50IGZyb20gXCIuLi9zaWRlYmFyLWl0ZW1zL2ltcG9ydGFudFwiO1xuXG5jb25zdCBjb250ZW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG4gICAgY29uc3QgYWxsVGFza3NUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFsbC10YXNrc1wiKTtcbiAgICBjb25zdCB0b2RheVRhYiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidG9kYXlcIik7XG4gICAgY29uc3QgdGhpc1dlZWtUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRoaXMtd2Vla1wiKTtcbiAgICBjb25zdCBpbXBvcnRhbnRUYWIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImltcG9ydGFudFwiKTtcblxuICAgIGxldCBmaXJzdExvYWQgPSB0cnVlO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlVGFiQ2xpY2soY2FsbGJhY2spIHtcbiAgICAgICAgY29udGVudC5pbm5lckhUTUwgPSBcIlwiO1xuICAgICAgICBjYWxsYmFjaygpO1xuICAgIH1cblxuICAgIGFsbFRhc2tzVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVUYWJDbGljayhhbGxUYXNrcykpO1xuICAgIHRvZGF5VGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVUYWJDbGljayh0b2RheSkpO1xuICAgIHRoaXNXZWVrVGFiLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBoYW5kbGVUYWJDbGljayh0aGlzV2VlaykpO1xuICAgIGltcG9ydGFudFRhYi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gaGFuZGxlVGFiQ2xpY2soaW1wb3J0YW50KSk7XG5cbiAgICBpZiAoZmlyc3RMb2FkKSB7XG4gICAgICAgIGhhbmRsZVRhYkNsaWNrKGFsbFRhc2tzKTtcbiAgICAgICAgZmlyc3RMb2FkID0gZmFsc2U7XG4gICAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgY29udGVudDtcbiIsImNvbnN0IGZvb3RlciA9ICgpID0+IHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvb3RlclwiKTtcbiAgICBmb290ZXIuaW5uZXJIVE1MID1cbiAgICAgICAgJ0NyZWF0ZWQgYnkgJm5ic3A7PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9sZW8tdHNhbnRcIiB0YXJnZXQ9XCJfYmxhbmtcIj5MZW9uaWRhcyBUc2FudGFybGlvdGlzPC9hPiZuYnNwO2ZvciZuYnNwOzxhIGhyZWY9XCJodHRwczovL3d3dy50aGVvZGlucHJvamVjdC5jb20vZGFzaGJvYXJkXCIgdGFyZ2V0PVwiX2JsYW5rXCI+VGhlIE9kaW4gUHJvamVjdDwvYT4nO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9vdGVyO1xuIiwiaW1wb3J0IGNoZWNrbWFya0ljb24gZnJvbSBcIi4uLy4uL2ltYWdlcy9jaGVja21hcmsuc3ZnXCI7XG5cbmNvbnN0IGhlYWRlciA9ICgpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhlYWRlclwiKTtcblxuICAgIGNvbnN0IGhlYWRlclRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlclRleHQudGV4dENvbnRlbnQgPSBcIlRvIERvIExpc3RcIjtcbiAgICBoZWFkZXJUZXh0LmNsYXNzTGlzdC5hZGQoXCJoZWFkZXItdGV4dFwiKTtcblxuICAgIGNvbnN0IGhlYWRlckljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIGhlYWRlckljb24uY2xhc3NOYW1lID0gXCJpY29uXCI7XG4gICAgaGVhZGVySWNvbi5zcmMgPSBjaGVja21hcmtJY29uO1xuXG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGhlYWRlckljb24pO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChoZWFkZXJUZXh0KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhlYWRlcjtcbiIsImltcG9ydCBoZWFkZXIgZnJvbSBcIi4vaGVhZGVyXCI7XG5pbXBvcnQgc2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XG5pbXBvcnQgY29udGVudCBmcm9tIFwiLi9jb250ZW50XCI7XG5pbXBvcnQgZm9vdGVyIGZyb20gXCIuL2Zvb3RlclwiO1xuXG5jb25zdCBsb2FkUGFnZSA9ICgpID0+IHtcbiAgICBoZWFkZXIoKTtcbiAgICBzaWRlYmFyKCk7XG4gICAgY29udGVudCgpO1xuICAgIGZvb3RlcigpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbG9hZFBhZ2U7XG4iLCJpbXBvcnQgY2hlY2ttYXJrSWNvbiBmcm9tIFwiLi4vLi4vaW1hZ2VzL2NoZWNrbWFyay5zdmdcIjtcblxuY29uc3Qgc2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBzaWRlYmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zaWRlYmFyXCIpO1xuXG4gICAgLy8gSG9tZSBMaXN0XG4gICAgY29uc3QgaG9tZUxpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVMaXN0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWxpc3RcIik7XG4gICAgY29uc3QgaG9tZUxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUxpc3RUaXRsZS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci10aXRsZVwiKTtcbiAgICBob21lTGlzdFRpdGxlLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG5cbiAgICBjb25zdCBob21lTGlzdEl0ZW1zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xuXG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc0FsbFRhc2tzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgIGhvbWVMaXN0SXRlbXNBbGxUYXNrcy5pZCA9IFwiYWxsLXRhc2tzXCI7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW1cIik7XG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc0FsbFRhc2tzVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzVGV4dC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLXRleHRcIik7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzVGV4dC50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc0FsbFRhc2tzSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzSWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLWljb25cIik7XG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzSWNvbi5zcmMgPSBjaGVja21hcmtJY29uO1xuXG4gICAgaG9tZUxpc3RJdGVtc0FsbFRhc2tzLmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNBbGxUYXNrc0ljb24pO1xuICAgIGhvbWVMaXN0SXRlbXNBbGxUYXNrcy5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zQWxsVGFza3NUZXh0KTtcbiAgICBob21lTGlzdEl0ZW1zLmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNBbGxUYXNrcyk7XG5cbiAgICBjb25zdCBob21lTGlzdEl0ZW1zVG9kYXkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5LmlkID0gXCJ0b2RheVwiO1xuICAgIGhvbWVMaXN0SXRlbXNUb2RheS5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNUb2RheVRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhvbWVMaXN0SXRlbXNUb2RheVRleHQuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbS10ZXh0XCIpO1xuICAgIGhvbWVMaXN0SXRlbXNUb2RheVRleHQudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG4gICAgY29uc3QgaG9tZUxpc3RJdGVtc1RvZGF5SWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5SWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLWljb25cIik7XG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5SWNvbi5zcmMgPSBjaGVja21hcmtJY29uO1xuXG4gICAgaG9tZUxpc3RJdGVtc1RvZGF5LmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNUb2RheUljb24pO1xuICAgIGhvbWVMaXN0SXRlbXNUb2RheS5hcHBlbmRDaGlsZChob21lTGlzdEl0ZW1zVG9kYXlUZXh0KTtcbiAgICBob21lTGlzdEl0ZW1zLmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNUb2RheSk7XG5cbiAgICBjb25zdCBob21lTGlzdEl0ZW1zVGhpc1dlZWsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZUxpc3RJdGVtc1RoaXNXZWVrLmlkID0gXCJ0aGlzLXdlZWtcIjtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWsuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcbiAgICBjb25zdCBob21lTGlzdEl0ZW1zVGhpc1dlZWtUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWtUZXh0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0tdGV4dFwiKTtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWtUZXh0LnRleHRDb250ZW50ID0gXCJUaGlzIFdlZWtcIjtcbiAgICBjb25zdCBob21lTGlzdEl0ZW1zVGhpc1dlZWtJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWtJY29uLmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0taWNvblwiKTtcbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWtJY29uLnNyYyA9IGNoZWNrbWFya0ljb247XG5cbiAgICBob21lTGlzdEl0ZW1zVGhpc1dlZWsuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc1RoaXNXZWVrSWNvbik7XG4gICAgaG9tZUxpc3RJdGVtc1RoaXNXZWVrLmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXNUaGlzV2Vla1RleHQpO1xuICAgIGhvbWVMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc1RoaXNXZWVrKTtcblxuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNJbXBvcnRhbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgaG9tZUxpc3RJdGVtc0ltcG9ydGFudC5pZCA9IFwiaW1wb3J0YW50XCI7XG4gICAgaG9tZUxpc3RJdGVtc0ltcG9ydGFudC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtXCIpO1xuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNJbXBvcnRhbnRUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBob21lTGlzdEl0ZW1zSW1wb3J0YW50VGV4dC5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLXRleHRcIik7XG4gICAgaG9tZUxpc3RJdGVtc0ltcG9ydGFudFRleHQudGV4dENvbnRlbnQgPSBcIkltcG9ydGFudFwiO1xuICAgIGNvbnN0IGhvbWVMaXN0SXRlbXNJbXBvcnRhbnRJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICBob21lTGlzdEl0ZW1zSW1wb3J0YW50SWNvbi5jbGFzc0xpc3QuYWRkKFwic2lkZWJhci1pdGVtLWljb25cIik7XG4gICAgaG9tZUxpc3RJdGVtc0ltcG9ydGFudEljb24uc3JjID0gY2hlY2ttYXJrSWNvbjtcblxuICAgIGhvbWVMaXN0SXRlbXNJbXBvcnRhbnQuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc0ltcG9ydGFudEljb24pO1xuICAgIGhvbWVMaXN0SXRlbXNJbXBvcnRhbnQuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc0ltcG9ydGFudFRleHQpO1xuICAgIGhvbWVMaXN0SXRlbXMuYXBwZW5kQ2hpbGQoaG9tZUxpc3RJdGVtc0ltcG9ydGFudCk7XG5cbiAgICAvLyBQcm9qZWN0cyBMaXN0XG4gICAgY29uc3QgcHJvamVjdHNMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0xpc3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItbGlzdFwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdHNMaXN0VGl0bGUudGV4dENvbnRlbnQgPSBcIlByb2plY3RzXCI7XG4gICAgcHJvamVjdHNMaXN0VGl0bGUuY2xhc3NMaXN0LmFkZChcInNpZGViYXItdGl0bGVcIik7XG5cbiAgICBjb25zdCBwcm9qZWN0c0xpc3RJdGVtcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ1bFwiKTtcblxuICAgIGNvbnN0IHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3QuY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbVwiKTtcbiAgICBjb25zdCBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RUZXh0LmNsYXNzTGlzdC5hZGQoXCJzaWRlYmFyLWl0ZW0tdGV4dFwiKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RUZXh0LnRleHRDb250ZW50ID0gXCJBZGQgUHJvamVjdFwiO1xuICAgIGNvbnN0IHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdEljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgIHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdEljb24uY2xhc3NMaXN0LmFkZChcInNpZGViYXItaXRlbS1pY29uXCIpO1xuICAgIHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdEljb24uc3JjID0gY2hlY2ttYXJrSWNvbjtcblxuICAgIHByb2plY3RzTGlzdEl0ZW1zQWRkUHJvamVjdC5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3RJY29uKTtcbiAgICBwcm9qZWN0c0xpc3RJdGVtc0FkZFByb2plY3QuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0VGV4dCk7XG4gICAgcHJvamVjdHNMaXN0SXRlbXMuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0SXRlbXNBZGRQcm9qZWN0KTtcblxuICAgIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWVMaXN0VGl0bGUpO1xuICAgIGhvbWVMaXN0LmFwcGVuZENoaWxkKGhvbWVMaXN0SXRlbXMpO1xuXG4gICAgcHJvamVjdHNMaXN0LmFwcGVuZENoaWxkKHByb2plY3RzTGlzdFRpdGxlKTtcbiAgICBwcm9qZWN0c0xpc3QuYXBwZW5kQ2hpbGQocHJvamVjdHNMaXN0SXRlbXMpO1xuXG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChob21lTGlzdCk7XG4gICAgc2lkZWJhci5hcHBlbmRDaGlsZChwcm9qZWN0c0xpc3QpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgc2lkZWJhcjtcbiIsImltcG9ydCB7IGNyZWF0ZVRhc2tGb3JtLCBkaXNwbGF5VGFza3MgfSBmcm9tIFwiLi4vdGFza1wiO1xuXG5jb25zdCBhbGxUYXNrcyA9ICgpID0+IHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250ZW50XCIpO1xuXG4gICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZChcImNvbnRlbnQtaGVhZGVyXCIpO1xuICAgIGhlYWRlci50ZXh0Q29udGVudCA9IFwiQWxsIFRhc2tzXCI7XG5cbiAgICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBhZGROZXdUYXNrQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJhZGQtbmV3LXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24udGV4dENvbnRlbnQgPSBcIisgTmV3IFRhc2tcIjtcblxuICAgIGhlYWRlci5hcHBlbmRDaGlsZChhZGROZXdUYXNrQnV0dG9uKTtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gICAgY3JlYXRlVGFza0Zvcm0oKTtcbiAgICBkaXNwbGF5VGFza3MoXCJhbGxUYXNrc1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGFsbFRhc2tzO1xuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uL3Rhc2tcIjtcblxuY29uc3QgaW1wb3J0YW50ID0gKCkgPT4ge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNvbnRlbnRcIik7XG5cbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKFwiY29udGVudC1oZWFkZXJcIik7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gXCJJbXBvcnRhbnRcIjtcblxuICAgIGNvbnN0IHRhc2tzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGFza3MtY29udGFpbmVyXCIpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChoZWFkZXIpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQodGFza3NDb250YWluZXIpO1xuXG4gICAgZGlzcGxheVRhc2tzKFwiaW1wb3J0YW50XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgaW1wb3J0YW50O1xuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uL3Rhc2tcIjtcblxuY29uc3QgdGhpc1dlZWsgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRoaXMgV2Vla1wiO1xuXG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0YXNrcy1jb250YWluZXJcIik7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGhlYWRlcik7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh0YXNrc0NvbnRhaW5lcik7XG5cbiAgICBkaXNwbGF5VGFza3MoXCJ0aGlzV2Vla1wiKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHRoaXNXZWVrO1xuIiwiaW1wb3J0IHsgZGlzcGxheVRhc2tzIH0gZnJvbSBcIi4uL3Rhc2tcIjtcblxuY29uc3QgdG9kYXkgPSAoKSA9PiB7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY29udGVudFwiKTtcblxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgaGVhZGVyLmNsYXNzTGlzdC5hZGQoXCJjb250ZW50LWhlYWRlclwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIlRvZGF5XCI7XG5cbiAgICBjb25zdCB0YXNrc0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza3NDb250YWluZXIuY2xhc3NMaXN0LmFkZChcInRhc2tzLWNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHRhc2tzQ29udGFpbmVyKTtcblxuICAgIGRpc3BsYXlUYXNrcyhcInRvZGF5XCIpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgdG9kYXk7XG4iLCJpbXBvcnQgZm9ybSBmcm9tIFwiLi9mb3JtXCI7XG5pbXBvcnQgZWRpdFRhc2tGb3JtIGZyb20gXCIuL2VkaXQtdGFzay1mb3JtXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvdGFzay5jc3NcIjtcbmltcG9ydCB0cmFzaEljb24gZnJvbSBcIi4uL2ltYWdlcy90cmFzaC5wbmdcIjtcbmltcG9ydCBlZGl0SWNvbiBmcm9tIFwiLi4vaW1hZ2VzL2VkaXQuc3ZnXCI7XG5cbmNvbnN0IHRhc2tzID0gW107XG5sZXQgY3VycmVudElkID0gMDtcblxuY29uc3QgY3JlYXRlVGFzayA9ICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGltcG9ydGFuY2UpID0+IHtcbiAgICBjb25zdCB0b0RvSXRlbSA9IHtcbiAgICAgICAgaWQ6IGN1cnJlbnRJZCsrLCAvLyBBc3NpZ24gdGhlIGN1cnJlbnRJZCBhbmQgdGhlbiBpbmNyZW1lbnQgaXQuXG4gICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICBpbXBvcnRhbmNlOiBpbXBvcnRhbmNlLFxuICAgIH07XG5cbiAgICByZXR1cm4gdG9Eb0l0ZW07XG59O1xuXG5jb25zdCBhZGRUYXNrID0gKHRhc2spID0+IHtcbiAgICB0YXNrcy5wdXNoKHRhc2spO1xuICAgIHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlKCk7IC8vIFNhdmUgdGFza3MgdG8gbG9jYWwgc3RvcmFnZSB3aGVuIGFkZGluZyBhIG5ldyB0YXNrXG59O1xuXG4vLyBGdW5jdGlvbiB0byBzYXZlIHRhc2tzIHRvIGxvY2FsIHN0b3JhZ2VcbmNvbnN0IHNhdmVUYXNrc1RvTG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidGFza3NcIiwgSlNPTi5zdHJpbmdpZnkodGFza3MpKTtcbn07XG5cbmNvbnN0IGRpc3BsYXlUYXNrcyA9ICh3aGljaFRhc2tzKSA9PiB7XG4gICAgY29uc3QgdGFza3NDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnRhc2tzLWNvbnRhaW5lclwiKTtcbiAgICB0YXNrc0NvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy8gQ2xlYXIgdGhlIHRhc2tzIGFycmF5IGJlZm9yZSBsb2FkaW5nIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZVxuICAgIHRhc2tzLmxlbmd0aCA9IDA7XG5cbiAgICAvLyBMb2FkIHRhc2tzIGZyb20gbG9jYWwgc3RvcmFnZSBpZiB0aGV5IGV4aXN0XG4gICAgY29uc3Qgc3RvcmVkVGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidGFza3NcIikpO1xuICAgIGlmIChzdG9yZWRUYXNrcykge1xuICAgICAgICB0YXNrcy5wdXNoKC4uLnN0b3JlZFRhc2tzKTtcbiAgICB9XG5cbiAgICBsZXQgZmlsdGVyZWRUYXNrcyA9IFtdO1xuXG4gICAgaWYgKHdoaWNoVGFza3MgPT09IFwidG9kYXlcIikge1xuICAgICAgICBmaWx0ZXJlZFRhc2tzID0gdGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0YXNrRHVlRGF0ZSA9IG5ldyBEYXRlKHRhc2suZHVlRGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmdldERhdGUoKSA9PT0gdG9kYXkuZ2V0RGF0ZSgpICYmXG4gICAgICAgICAgICAgICAgdGFza0R1ZURhdGUuZ2V0TW9udGgoKSA9PT0gdG9kYXkuZ2V0TW9udGgoKSAmJlxuICAgICAgICAgICAgICAgIHRhc2tEdWVEYXRlLmdldEZ1bGxZZWFyKCkgPT09IHRvZGF5LmdldEZ1bGxZZWFyKClcbiAgICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2hpY2hUYXNrcyA9PT0gXCJ0aGlzV2Vla1wiKSB7XG4gICAgICAgIGZpbHRlcmVkVGFza3MgPSB0YXNrcy5maWx0ZXIoKHRhc2spID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgIGNvbnN0IHRhc2tEdWVEYXRlID0gbmV3IERhdGUodGFzay5kdWVEYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IHRvZGF5RGF5ID0gdG9kYXkuZ2V0RGF0ZSgpO1xuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURhdGVEYXkgPSB0YXNrRHVlRGF0ZS5nZXREYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBkaWZmZXJlbmNlSW5EYXlzID0gTWF0aC5hYnModG9kYXlEYXkgLSB0YXNrRHVlRGF0ZURheSk7XG4gICAgICAgICAgICByZXR1cm4gZGlmZmVyZW5jZUluRGF5cyA8PSA3O1xuICAgICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHdoaWNoVGFza3MgPT09IFwiaW1wb3J0YW50XCIpIHtcbiAgICAgICAgZmlsdGVyZWRUYXNrcyA9IHRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHRhc2suaW1wb3J0YW5jZSA9PT0gXCJIaWdoXCI7XG4gICAgICAgIH0pO1xuICAgIH0gZWxzZSBpZiAod2hpY2hUYXNrcyA9PT0gXCJhbGxUYXNrc1wiKSB7XG4gICAgICAgIGZpbHRlcmVkVGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBmaWx0ZXJlZFRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImNhcmRcIik7XG5cbiAgICAgICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDJcIik7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gdGFzay50aXRsZTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHRhc2suZGVzY3JpcHRpb247XG5cbiAgICAgICAgY29uc3QgZHVlRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBkdWVEYXRlLnRleHRDb250ZW50ID0gdGFzay5kdWVEYXRlO1xuXG4gICAgICAgIGNvbnN0IGltcG9ydGFuY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBpbXBvcnRhbmNlLnRleHRDb250ZW50ID0gdGFzay5pbXBvcnRhbmNlO1xuXG4gICAgICAgIGlmICh0YXNrLmltcG9ydGFuY2UgPT09IFwiSGlnaFwiKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJoaWdoLWltcG9ydGFuY2VcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodGFzay5pbXBvcnRhbmNlID09PSBcIk1lZGl1bVwiKSB7XG4gICAgICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoXCJtZWRpdW0taW1wb3J0YW5jZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0YXNrLmltcG9ydGFuY2UgPT09IFwiTG93XCIpIHtcbiAgICAgICAgICAgIGNhcmQuY2xhc3NMaXN0LmFkZChcImxvdy1pbXBvcnRhbmNlXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgZGVsZXRlQ2FyZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG4gICAgICAgIGRlbGV0ZUNhcmRCdXR0b24uY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1jYXJkLWJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlQ2FyZEJ1dHRvbi5zcmMgPSB0cmFzaEljb247XG5cbiAgICAgICAgZGVsZXRlQ2FyZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgZGVsZXRlVGFzayh3aGljaFRhc2tzLCB0YXNrKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgZWRpdENhcmRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xuICAgICAgICBlZGl0Q2FyZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZWRpdC1jYXJkLWJ1dHRvblwiKTtcbiAgICAgICAgZWRpdENhcmRCdXR0b24uc3JjID0gZWRpdEljb247XG5cbiAgICAgICAgZWRpdENhcmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgICAgIGVkaXRUYXNrKHdoaWNoVGFza3MsIHRhc2spO1xuICAgICAgICB9KTtcblxuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZXNjcmlwdGlvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoaW1wb3J0YW5jZSk7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVsZXRlQ2FyZEJ1dHRvbik7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZWRpdENhcmRCdXR0b24pO1xuXG4gICAgICAgIHRhc2tzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNhcmQpO1xuICAgIH0pO1xufTtcblxubGV0IGZpcnN0TG9hZCA9IHRydWU7XG5jb25zdCBjcmVhdGVUYXNrRm9ybSA9ICgpID0+IHtcbiAgICAvLyBPbmx5IGNyZWF0ZSB0aGUgZm9ybSBvbmNlXG4gICAgaWYgKGZpcnN0TG9hZCkge1xuICAgICAgICBmb3JtKCk7XG4gICAgICAgIGZpcnN0TG9hZCA9IGZhbHNlO1xuXG4gICAgICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1mb3JtXCIpO1xuICAgICAgICBhZGRUYXNrRm9ybS5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLW92ZXJsYXlcIik7XG5cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXNjcmlwdGlvblwiKS52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImR1ZURhdGVcIikudmFsdWU7XG4gICAgICAgICAgICBjb25zdCBpbXBvcnRhbmNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbXBvcnRhbmNlXCIpLnZhbHVlO1xuICAgICAgICAgICAgYWRkVGFzayhjcmVhdGVUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgaW1wb3J0YW5jZSkpO1xuICAgICAgICAgICAgZGlzcGxheVRhc2tzKFwiYWxsVGFza3NcIik7XG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb25zdCBhZGROZXdUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5hZGQtbmV3LXRhc2stYnV0dG9uXCIpO1xuICAgIGFkZE5ld1Rhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgY29uc3QgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXctdGFzay1vdmVybGF5XCIpO1xuXG4gICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZS1idXR0b25cIik7XG4gICAgICAgIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBwb3B1cE92ZXJsYXkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ldy10YXNrLW92ZXJsYXlcIik7XG5cbiAgICAgICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuICAgIH0pO1xufTtcblxuY29uc3QgZGVsZXRlVGFzayA9ICh3aGljaFRhc2tzLCB0YXNrKSA9PiB7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jb250YWluZXJcIik7XG4gICAgbGV0IHBvcHVwT3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZGVsZXRlLWNhcmQtb3ZlcmxheVwiKTtcblxuICAgIC8vIE9ubHkgY3JlYXRlIHRoZSBwb3B1cCBvbmNlXG4gICAgaWYgKCFwb3B1cE92ZXJsYXkpIHtcbiAgICAgICAgcG9wdXBPdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgcG9wdXBPdmVybGF5LmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY2FyZC1vdmVybGF5XCIpO1xuICAgICAgICBjb25zdCBwb3B1cCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoXCJkZWxldGUtY2FyZC1wb3B1cFwiKTtcbiAgICAgICAgY29uc3QgcG9wdXBIZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwb3B1cEhlYWRlci5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNhcmQtcG9wdXAtaGVhZGVyXCIpO1xuICAgICAgICBjb25zdCBwb3B1cENvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBwb3B1cENvbnRlbnQuY2xhc3NMaXN0LmFkZChcImRlbGV0ZS1jYXJkLXBvcHVwLWNvbnRlbnRcIik7XG4gICAgICAgIGNvbnN0IHBvcHVwQnV0dG9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHBvcHVwQnV0dG9ucy5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlLWNhcmQtcG9wdXAtYnV0dG9uc1wiKTtcbiAgICAgICAgY29uc3QgeWVzQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgeWVzQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJ5ZXMtYnV0dG9uXCIpO1xuICAgICAgICBjb25zdCBub0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICAgIG5vQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJuby1idXR0b25cIik7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcbiAgICAgICAgY2xvc2VCdXR0b24uY2xhc3NMaXN0LmFkZChcImNsb3NlLWJ1dHRvblwiKTtcblxuICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgICAgICBwb3B1cEhlYWRlci50ZXh0Q29udGVudCA9IFwiRGVsZXRlIFRhc2tcIjtcbiAgICAgICAgcG9wdXBDb250ZW50LnRleHRDb250ZW50ID0gXCJBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoaXMgdGFzaz9cIjtcbiAgICAgICAgeWVzQnV0dG9uLnRleHRDb250ZW50ID0gXCJZZXNcIjtcbiAgICAgICAgbm9CdXR0b24udGV4dENvbnRlbnQgPSBcIk5vXCI7XG5cbiAgICAgICAgeWVzQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRhc2tzLmluZGV4T2YodGFzayk7XG4gICAgICAgICAgICB0YXNrcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgc2F2ZVRhc2tzVG9Mb2NhbFN0b3JhZ2UoKTtcbiAgICAgICAgICAgIGRpc3BsYXlUYXNrcyh3aGljaFRhc2tzKTtcbiAgICAgICAgICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG5vQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICB9KTtcblxuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgICAgICAgcG9wdXBPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcG9wdXBPdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBwb3B1cE92ZXJsYXkpIHtcbiAgICAgICAgICAgICAgICBwb3B1cE92ZXJsYXkuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICBwb3B1cEhlYWRlci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIHBvcHVwQnV0dG9ucy5hcHBlbmRDaGlsZCh5ZXNCdXR0b24pO1xuICAgICAgICBwb3B1cEJ1dHRvbnMuYXBwZW5kQ2hpbGQobm9CdXR0b24pO1xuICAgICAgICBwb3B1cC5hcHBlbmRDaGlsZChwb3B1cEhlYWRlcik7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQ29udGVudCk7XG4gICAgICAgIHBvcHVwLmFwcGVuZENoaWxkKHBvcHVwQnV0dG9ucyk7XG4gICAgICAgIHBvcHVwT3ZlcmxheS5hcHBlbmRDaGlsZChwb3B1cCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwb3B1cE92ZXJsYXkpO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcG9wdXAgYWxyZWFkeSBleGlzdHMsIGp1c3QgZGlzcGxheSBpdFxuICAgIHBvcHVwT3ZlcmxheS5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XG59O1xuXG5jb25zdCBlZGl0VGFzayA9ICh3aGljaFRhc2tzLCB0YXNrKSA9PiB7XG4gICAgLy8gQ2FsbCB0aGUgZWRpdFRhc2tGb3JtIGZ1bmN0aW9uIHdpdGggdGhlIHRhc2sgdG8gYmUgZWRpdGVkXG4gICAgZWRpdFRhc2tGb3JtKHRhc2spO1xuICAgIGNvbnN0IGVkaXRPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stb3ZlcmxheVwiKTtcblxuICAgIGVkaXRPdmVybGF5LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcblxuICAgIC8vIEdldCB0aGUgZm9ybSBmcm9tIHRoZSBET01cbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LXRhc2stZm9ybVwiKTtcblxuICAgIC8vIEFkZCBhbiBldmVudCBsaXN0ZW5lciBmb3IgdGhlIGZvcm0gc3VibWlzc2lvblxuICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcInN1Ym1pdFwiLCAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gUHJldmVudCB0aGUgZm9ybSBmcm9tIGJlaW5nIHN1Ym1pdHRlZCBub3JtYWxseVxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIC8vIEZldGNoIHRoZSBuZXcgdmFsdWVzIGZyb20gdGhlIGZvcm1cbiAgICAgICAgY29uc3QgdGl0bGUgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjdGl0bGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2Rlc2NyaXB0aW9uXCIpLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2R1ZURhdGVcIikudmFsdWU7XG4gICAgICAgIGNvbnN0IGltcG9ydGFuY2UgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoXCIjaW1wb3J0YW5jZVwiKS52YWx1ZTtcblxuICAgICAgICAvLyBVcGRhdGUgdGhlIHRhc2sgb2JqZWN0IHdpdGggdGhlIG5ldyB2YWx1ZXNcbiAgICAgICAgdGFzay50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0YXNrLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRhc2suZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRhc2suaW1wb3J0YW5jZSA9IGltcG9ydGFuY2U7XG5cbiAgICAgICAgLy8gU2F2ZSB0aGUgdXBkYXRlZCB0YXNrcyB0byBsb2NhbCBzdG9yYWdlXG4gICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRhc2tzXCIpKSB8fCBbXTtcbiAgICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MubWFwKCh0KSA9PiB7XG4gICAgICAgICAgICBpZiAodC5pZCA9PT0gdGFzay5pZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnQsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlLFxuICAgICAgICAgICAgICAgICAgICBpbXBvcnRhbmNlOiBpbXBvcnRhbmNlLFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0YXNrc1wiLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza3MpKTtcblxuICAgICAgICAvLyBSZS1kaXNwbGF5IHRoZSB0YXNrc1xuICAgICAgICBkaXNwbGF5VGFza3Mod2hpY2hUYXNrcyk7XG5cbiAgICAgICAgLy8gQ2xvc2UgdGhlIGZvcm1cbiAgICAgICAgZWRpdE92ZXJsYXkucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAvLyBBZGQgYW4gZXZlbnQgbGlzdGVuZXIgZm9yIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKFwiI2NhbmNlbC1idXR0b25cIik7XG4gICAgY2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIC8vIENsb3NlIHRoZSBmb3JtIHdpdGhvdXQgbWFraW5nIGFueSBjaGFuZ2VzXG4gICAgICAgIGVkaXRPdmVybGF5LnJlbW92ZSgpO1xuICAgIH0pO1xufTtcblxuZXhwb3J0IHsgY3JlYXRlVGFza0Zvcm0sIGRpc3BsYXlUYXNrcyB9O1xuXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVUYXNrO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAhc2NyaXB0VXJsKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlcy9zdHlsZS5jc3NcIjtcbmltcG9ydCBsb2FkUGFnZSBmcm9tIFwiLi9jb21wb25lbnRzL2xvYWQtcGFnZS9pbmRleFwiO1xuXG5sb2FkUGFnZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9