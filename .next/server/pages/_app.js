"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "redux"
const external_redux_namespaceObject = require("redux");
;// CONCATENATED MODULE: external "next-redux-wrapper"
const external_next_redux_wrapper_namespaceObject = require("next-redux-wrapper");
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./store/store.js



const initialState = {
    lang: "ru"
};
const count = function reducer(state = initialState, action) {
    switch(action.type){
        case "en":
            window.localStorage.setItem("lang", "en");
            return {
                ...state,
                lang: "en"
            };
        case "ru":
            window.localStorage.setItem("lang", "ru");
            return {
                ...state,
                lang: "ru"
            };
        case "uz":
            window.localStorage.setItem("lang", "uz");
            return {
                ...state,
                lang: "uz"
            };
        default:
            return state;
    }
};
const combineReducer = (0,external_redux_namespaceObject.combineReducers)({
    count
});
const initialStore = ()=>{
    return (0,external_redux_namespaceObject.createStore)(combineReducer);
};
const wrapper = (0,external_next_redux_wrapper_namespaceObject.createWrapper)(initialStore);

;// CONCATENATED MODULE: ./pages/_app.js



function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
        ...pageProps
    }));
}
/* harmony default export */ const _app = (wrapper.withRedux(MyApp));


/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(505));
module.exports = __webpack_exports__;

})();