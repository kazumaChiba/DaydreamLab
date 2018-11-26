webpackJsonp([10],{

/***/ 807:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(944)
/* template */
var __vue_template__ = __webpack_require__(945)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/pages/News.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-830ce5d4", Component.options)
  } else {
    hotAPI.reload("data-v-830ce5d4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 811:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(812)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(814)
/* template */
var __vue_template__ = __webpack_require__(815)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1cbe62ac"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/block-footer.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1cbe62ac", Component.options)
  } else {
    hotAPI.reload("data-v-1cbe62ac", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 812:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(813);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(105)("4f0037b5", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cbe62ac\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-footer.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1cbe62ac\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-footer.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 813:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#footer[data-v-1cbe62ac] {\n  height: 100vh;\n  position: relative;\n  z-index: 2;\n}\n#footer .logo[data-v-1cbe62ac] {\n    position: relative;\n    height: 220px;\n}\n#footer .container[data-v-1cbe62ac] {\n    z-index: 2;\n}\n#footer .container .join-us-slogan[data-v-1cbe62ac] {\n      font-size: 28px;\n      font-weight: lighter;\n}\n#footer .container .join-us-slogan span[data-v-1cbe62ac] {\n        font-size: 48px;\n        line-height: inherit;\n        margin: -10px 0 10px 0;\n        font-weight: bold;\n}\n#footer .footer-social[data-v-1cbe62ac] {\n    margin-bottom: 60px;\n}\n#footer[data-v-1cbe62ac]:before {\n    content: \"\";\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.85);\n    top: 0;\n    left: 0;\n}\n#footer .fp-tableCell[data-v-1cbe62ac] {\n    position: relative;\n    z-index: 2;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n}\n#footer .fp-tableCell .footer-info-title[data-v-1cbe62ac] {\n      letter-spacing: 6px;\n      font-weight: 500;\n      font-size: 15px;\n}\n#footer .footer-social .footer-icons[data-v-1cbe62ac] {\n    font-size: 20px;\n}\n#footer .footer[data-v-1cbe62ac] {\n    -webkit-box-flex: 2;\n        -ms-flex: 2;\n            flex: 2;\n}\n#footer .footer .footer-info[data-v-1cbe62ac] {\n      margin-bottom: 100px;\n      line-height: 25px;\n      font-size: 14px;\n      font-weight: 100;\n}\n#footer .footer .footer-info div[data-v-1cbe62ac] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#footer .footer .footer-info p[data-v-1cbe62ac] {\n        margin-bottom: 30px;\n}\n#footer .footer .footer-info .footer-text-right .footer-info-subtitle[data-v-1cbe62ac] {\n        font-size: 18px;\n        font-weight: 100;\n        line-height: 30px;\n}\n#footer .footer.footer-join[data-v-1cbe62ac] {\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      padding: 20px 0;\n}\n#footer .footer.footer-join[data-v-1cbe62ac]:before {\n        content: \"\";\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        background: rgba(0, 0, 0, 0.8);\n        top: 0px;\n}\n#footer .footer.footer-info[data-v-1cbe62ac] {\n      padding: 20px 0;\n}\n#footer .footer .btn-orange[data-v-1cbe62ac]:hover {\n      background: white;\n      color: #f26d23 !important;\n      font-weight: 500;\n}\n@media only screen and (max-width: 991px) {\n#app #footer[data-v-1cbe62ac] {\n    background: #F2F2F1;\n}\n#app #footer .footer .col-contact-us[data-v-1cbe62ac] {\n      -webkit-box-flex: 100%;\n          -ms-flex: 100%;\n              flex: 100%;\n}\n#app #footer .container .join-us-slogan[data-v-1cbe62ac] {\n      line-height: 45px;\n      margin-bottom: 50px;\n}\n#app #footer .container .join-us-slogan span[data-v-1cbe62ac] {\n        font-size: 28px;\n        line-height: 20px;\n        margin: 0;\n}\n#app #footer .logo[data-v-1cbe62ac] {\n      height: 100px;\n}\n#app .btn-orange.fat[data-v-1cbe62ac] {\n    padding: 20px 45px;\n}\n}\n@media only screen and (max-width: 420px) {\n#app #footer .container .join-us-slogan[data-v-1cbe62ac] {\n    font-size: 16px;\n    line-height: 20px;\n    margin-bottom: 30px;\n    text-align: center !important;\n    padding: 0px 28px;\n}\n#app #footer .container .join-us-slogan span[data-v-1cbe62ac] {\n      font-size: 16px;\n}\n#app #footer #copyright[data-v-1cbe62ac], #app #footer #copyright a[data-v-1cbe62ac] {\n    white-space: normal;\n}\n#app #footer .footer .col p[data-v-1cbe62ac] {\n    font-size: 13px !important;\n}\n#app #footer .btn-orange.fat[data-v-1cbe62ac] {\n    padding: 12px 30px;\n    font-size: 13px;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 814:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    }
});

/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass:
        "w-100 text-white text-center bg-black-cover position-relative d-flex flex-column justify-content-center",
      staticStyle: { "background-image": "url('/images/footer.jpg')" },
      attrs: { id: "footer" }
    },
    [
      _c(
        "div",
        {
          staticClass:
            "footer footer-join position-relative d-flex align-items-center justify-content-between w-100"
        },
        [
          _c("div", { staticClass: "container" }, [
            _c(
              "div",
              {
                staticClass:
                  "row d-flex w-100 m-0 justify-content-between align-items-center flex-column flex-lg-row"
              },
              [
                _vm._m(0),
                _vm._v(" "),
                _c(
                  "router-link",
                  { staticClass: "btn-orange fat", attrs: { to: "/" } },
                  [_vm._v("馬上加入我們")]
                )
              ],
              1
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "footer footer-info container" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-column justify-content-lg-end justify-content-center h-100"
          },
          [
            _c(
              "div",
              { staticClass: "d-flex flex-8 flex-wrap-reverse flex-lg-row" },
              [
                _vm._m(1),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass:
                      "col d-flex align-items-center justify-content-center"
                  },
                  [
                    _c(
                      "svg",
                      {
                        staticClass: "logo",
                        attrs: {
                          id: "footer-logo",
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 117.97 127.6"
                        }
                      },
                      [
                        _c("title", [_vm._v("橘色總公司logo_oi")]),
                        _c("path", {
                          staticStyle: {
                            fill: "#ed6c00",
                            "fill-rule": "evenodd"
                          },
                          attrs: {
                            d:
                              "M80.85,86.49a17.85,17.85,0,0,0-1.36,2.69,14.72,14.72,0,0,1-.81,1.64c-.79,1.29-1.44,2.68-2.2,4-.61,1-1.36,2-2,3-.41.68-1,1.24-1.36,1.93a5.76,5.76,0,0,1-.77.9c-.33.36-.58.84-.92,1.21-.63.68-1,1.62-1.75,2.17-.29.2-.42.66-.64,1a14,14,0,0,1-.92,1.35c-.56.63-.7,1.53-1.21,2.18a1.74,1.74,0,0,0-.2,1c0,1.26-.18,2.53-.17,3.8,0,1,0,2,0,2.94,0,.66-.06,1.32-.07,2a4.59,4.59,0,0,1-.17,1.53,3.93,3.93,0,0,0-.11,1.53c0,.72,0,1.47.05,2.19a8.1,8.1,0,0,1-.07,2.14,9.11,9.11,0,0,1-.5,1.34,1.73,1.73,0,0,1-.64.9.77.77,0,0,1-.73.17c-.78-.21-1.19-.9-1.59-1.57-.53-.9-1-1.81-1.51-2.74s-1-1.88-1.4-2.85a4.56,4.56,0,0,1-.21-4.08,9.61,9.61,0,0,0,.6-1.3,3.67,3.67,0,0,0,.08-1.4c0-.32-.73-.5-1-.28-.47.34-1,.66-1.38,1a15.17,15.17,0,0,0-1.28.88,24.09,24.09,0,0,1-2,1.5,21.37,21.37,0,0,1-2,1.31,14.75,14.75,0,0,1-1.82,1.08,4,4,0,0,1-2.43.59,1.76,1.76,0,0,1-1.53-1.45,12.21,12.21,0,0,0-.8-1.57c-.31-.59-.67-1.16-1-1.75a1,1,0,0,1,0-.92c.36-.84.68-1.71,1-2.58a40,40,0,0,1,1.41-3.8c.64-1.29.93-2.73,1.5-4s.88-2.62,1.5-3.85A6.4,6.4,0,0,0,50.9,99a8.12,8.12,0,0,1,.5-1.32,19.31,19.31,0,0,0,1-2.33,3.51,3.51,0,0,1,.26-.75,10.69,10.69,0,0,0,.51-1.37A6.07,6.07,0,0,1,54.35,91a7.21,7.21,0,0,0,.76-1.18,9.74,9.74,0,0,1,.72-1,9.09,9.09,0,0,0,.84-1.12c.22-.43.48-.82.7-1.24s.23-.7.42-1a2.47,2.47,0,0,0,.17-.84c.13-.8-.21-1.13-.94-1.06a4.05,4.05,0,0,0-1.72.8,8.53,8.53,0,0,1-2.47,1.23,8.23,8.23,0,0,0-.86.19,4.55,4.55,0,0,1-1.25.34,4.88,4.88,0,0,1-2-.53,2.87,2.87,0,0,1-1.29-1.4C46.78,83,45.15,82.85,44.11,82a1.39,1.39,0,0,1-.25-1.36A1.17,1.17,0,0,1,45,79.69c.63,0,1.26-.06,1.88-.08a6.38,6.38,0,0,0,2.16-.89c1.25-.55,2.4-1.32,3.63-1.91.61-.29,1.16-.71,1.76-1a10.16,10.16,0,0,1,1-.53c.58-.27,1.1-.63,1.65-1a1.26,1.26,0,0,1,.26-.13,5.73,5.73,0,0,0,1.83-.92c.75-.6,1.63-1,2.4-1.55a8.83,8.83,0,0,0,1.26-1.26,2.29,2.29,0,0,0,.49-1.71c0-.39.05-.79,0-1.18-.07-.61,0-1.22,0-1.8,0-1.29,0-2.57,0-3.85a3.54,3.54,0,0,1,.16-.62,9,9,0,0,1,1.17-2.91,8.33,8.33,0,0,0,1-1.84c.07-.27.4-.31.53-.56a9.68,9.68,0,0,1,1.83-2.45,2.17,2.17,0,0,1,1.82-.6c.33.05.8.07,1,.41a4.41,4.41,0,0,1,.5,2,8.19,8.19,0,0,0,.53,3.6,4.34,4.34,0,0,1,.25.82,1.43,1.43,0,0,0,.32.73,1,1,0,0,1,.18.56.32.32,0,0,1-.16.34.3.3,0,0,1-.36,0,4.53,4.53,0,0,1-1.54-2A.84.84,0,0,0,69.26,59a2.58,2.58,0,0,0-.81,1.6c-.2.93-.36,1.87-.64,2.78a5.64,5.64,0,0,0,0,2.28,3.11,3.11,0,0,0,.3,1.07c.41.91,1.19,1,1.7.2a3.82,3.82,0,0,1,2-1.44c.65-.28,1.33-.5,2-.81.36-.16.69-.39,1.11-.25.18.05.34-.14.51-.16a12,12,0,0,1,2.24-.33,6.91,6.91,0,0,1,1.59.53c.08,0,.14.09.22.13a1.18,1.18,0,0,1,.76,1.36,6.13,6.13,0,0,1-.27,1.34c-.17.46-.59.63-.87,1-.09.1-.19.19-.29.31-.64.8-1.11,1.74-1.81,2.48-.54.59-1.16,1.1-1.74,1.64-.89.82-1.94,1.4-2.89,2.12-.19.15-.42.14-.62.23-.82.38-1.64.74-2.44,1.18a5.43,5.43,0,0,0-1.37,1.25,2.48,2.48,0,0,0-.51,1.33,12.77,12.77,0,0,0-.22,1.63,5.47,5.47,0,0,1-.3,1.24,6.06,6.06,0,0,0-.2.92c-.09.62.06,1.26-.08,1.88a6.32,6.32,0,0,0-.12,1.15c0,.33-.13.59-.13.93,0,.58,0,1.15,0,1.73s-.05,1.48-.15,2.16A11.82,11.82,0,0,0,66,91.56c0,.19,0,.38,0,.57,0,.4,0,.79-.08,1.21,0,.81,0,1.64-.1,2.45a17.26,17.26,0,0,0,.21,2.4,2.66,2.66,0,0,0,.36,1c.11.23.33.23.55.2a4.57,4.57,0,0,0,3.13-2.18c.71-.94,1.54-1.75,2.32-2.61.59-.65,1.27-1.19,1.85-1.86s1-1.31,1.55-1.91a9.8,9.8,0,0,0,.88-1.23c.21-.28.46-.57.64-.86.27-.45.57-.79.8-1.27A11.73,11.73,0,0,1,78.91,86a1.59,1.59,0,0,0,.18-.37c.24-.56.48-.73,1.06-.68.28,0,.36,0,.31-.37a3.57,3.57,0,0,1,.74-3.09c.32-.36.53-.34,1-.46a11.87,11.87,0,0,0,1.24-.61c.24-.09.49,0,.75-.14a3.73,3.73,0,0,1,1-.12A10.58,10.58,0,0,1,86.32,80a2.81,2.81,0,0,0,.9-.21c.4-.13.6-.52.87-.8a13.7,13.7,0,0,1,1.14-1c.19-.16.31-.42.51-.6.46-.43,1-.82,1.4-1.25s1.12-1.19,1.71-1.75c.41-.39.87-.75,1.27-1.17s1-1,1.52-1.54a21,21,0,0,1,2.46-2.35l.22-.21a12.06,12.06,0,0,1,1.28-1.3,17.41,17.41,0,0,0,2.27-2.2,1,1,0,0,0,.19-1c-.24-.7-1.08-1.08-1.64-1.48s-.84-.12-1.27-.23-.5-.5-.59-.82a4.77,4.77,0,0,1-.48-1.8c0-.27.1-.55.11-.81s0-.31,0-.47a9.53,9.53,0,0,1,.47-1.55c.26-.88.49-1.78.77-2.66a13.26,13.26,0,0,0,.37-2c.07-.63.4-1.2.45-1.83a2.31,2.31,0,0,0-.08-1.05c-.29-.71-1.16.11-1.48.34a4.23,4.23,0,0,1-.91.39,3,3,0,0,1-.91.18c-.19,0-.38.06-.58.06a3.57,3.57,0,0,1-.84-.21,2.12,2.12,0,0,1-.89-.58,1.58,1.58,0,0,1-.3-1.88c.1-.18.22-.32.43-.31A5.24,5.24,0,0,0,97,47.35a3.93,3.93,0,0,0,1.31-1.08,1.19,1.19,0,0,1,1-.52,5.76,5.76,0,0,0,1.46-.55,14.18,14.18,0,0,1,1.64-.18,7.27,7.27,0,0,1,2.59-.17,8.35,8.35,0,0,1,3.33,1.2c.2.13.25.4.34.62s.15.49.22.75a.55.55,0,0,1,0,.31c-.37.59-.37,1.36-.91,1.87a8.61,8.61,0,0,0-1.46,2.17,21.46,21.46,0,0,1-1.38,2,5.78,5.78,0,0,0-1.19,2.29,20.3,20.3,0,0,0-.52,3c0,1.93,1.64,1.75,2.86,2.55a5.75,5.75,0,0,1,2.52,3,2.16,2.16,0,0,1-1.26,2.66,13.87,13.87,0,0,1-2.17.65,2.7,2.7,0,0,0-1.16.69c-.64.55-1.3,1.08-1.93,1.66-.83.77-1.7,1.5-2.54,2.26s-1.84,1.74-2.84,2.5a7.47,7.47,0,0,0-1.76,1.66,1.18,1.18,0,0,1-.25.25c-.65.53-1.28,1.08-1.9,1.64-.2.18-.54.67,0,.41s1-.67,1.6-.9c.33-.15.66-.28,1-.44.63-.31,1.23-.79,1.83-1.16a20.29,20.29,0,0,1,1.94-.93c1.33-.62,2.66-1.24,4-1.84a11.1,11.1,0,0,1,2.46-.87c.42-.08.78-.37,1.22-.45.61-.11,1.2-.32,1.8-.48s1-.1,1.45-.27A22.47,22.47,0,0,1,113,71.1a10.48,10.48,0,0,1,2.8-.18c.44,0,.89,0,1.33,0a1.77,1.77,0,0,1,.69.13,17.3,17.3,0,0,1,1.67.46,1.87,1.87,0,0,1,.77.53c.17.21.19.65.34.79.6.57.47,1.4.62,2.13a3.64,3.64,0,0,1-1.56,3.86c-.59.4-1.2.77-1.79,1.2-.38.28-.84.46-1.25.72-.82.53-1.67,1-2.48,1.55s-1.48.72-2.14,1.21a13.51,13.51,0,0,0-1.48,1.07c-.81.78-1.71,1.44-2.58,2.17-.48.4-1,.76-1.46,1.21a17.22,17.22,0,0,1-1.48,1.2c-.06,0-.15.06-.18.12-.43.75-1,.43-1.55.22-.1,0-.18-.1-.27-.12-.38-.1-.47-.56-.9-.33a3.44,3.44,0,0,0-.79.78,15.42,15.42,0,0,0-1,1.37,7.73,7.73,0,0,1-1.58,1.39c-.7.52-1.3,1.19-2,1.72-.33.26-.56.61-.87.89a4.5,4.5,0,0,1-.81.56,7.16,7.16,0,0,0-.61.48,8.57,8.57,0,0,0-.75.6c-.22.19-.45.36-.67.53s-.39.49-.73.52a1.31,1.31,0,0,0-1,1.69,1.94,1.94,0,0,0,1.28,1.33.94.94,0,0,1,.3.15,2.19,2.19,0,0,0,2.2.45,11.43,11.43,0,0,0,3.12-1.13A19,19,0,0,1,101,99.2a22.54,22.54,0,0,0,3.08-1.09,6.49,6.49,0,0,0,1.38-.72,1.91,1.91,0,0,0,.59-.68c.23-.52.12-.82-.33-1a5.44,5.44,0,0,1-2.27-2.12c-.18-.27,0-.4.24-.44A9,9,0,0,1,105.1,93a6.82,6.82,0,0,1,2.81.47,2.78,2.78,0,0,1,1.25,1,.65.65,0,0,0,.6.21,6.7,6.7,0,0,0,1.47-.35c.57-.14,1.17-.22,1.73-.41a5.67,5.67,0,0,1,2.42-.26,12.88,12.88,0,0,1,1.52.06,34.39,34.39,0,0,0,3.47.47,12,12,0,0,1,1.88.57,3.62,3.62,0,0,1,1.9,1.37,5.36,5.36,0,0,0,.82.76,4.2,4.2,0,0,1,.84,1.16c.27.39.58.74.84,1.13a15.29,15.29,0,0,1,1.38,2.2,8.8,8.8,0,0,1,.6,3.48,24.51,24.51,0,0,1-.42,4.37c-.2,1.08-.23,2.17-.36,3.25a16.57,16.57,0,0,1-.51,2.78,25,25,0,0,1-.68,2.43c-.28.64-.42,1.33-.71,2-.19.42-.29.88-.52,1.28-.64,1.17-1,2.51-2.17,3.29a5.86,5.86,0,0,0-1.18,1c-.52.59-.91,1.28-1.39,1.9-.23.3-.42.62-.66.91-.41.5-.91.93-1.31,1.43a4.8,4.8,0,0,1-1.21,1.25,3.42,3.42,0,0,0-1.12,1.26,2.17,2.17,0,0,1-.55.49,10.58,10.58,0,0,0-.83.93,9.1,9.1,0,0,1-2.25,1.66,7,7,0,0,0-1.25.84,6.3,6.3,0,0,1-1.55.84c-.51.2-1.06.26-1.56.45a4.26,4.26,0,0,1-2.71-.06c-.1,0-.11-.12-.14-.21-.11-.34-.2-.7-.33-1a3.94,3.94,0,0,1-.57-2.23,19.92,19.92,0,0,0-1.69-4,3.42,3.42,0,0,1-.34-.89c-.07-.26,0-.48.34-.46a13.87,13.87,0,0,1,2.15.15,11.85,11.85,0,0,0,3.3.19,4.22,4.22,0,0,0,3.13-1.62,30.15,30.15,0,0,1,2.11-2.27,15.19,15.19,0,0,0,1.52-2.1,39.68,39.68,0,0,1,2.31-3.25,9.15,9.15,0,0,0,.84-1.49c.31-.59.62-1.19.9-1.8s.69-1.51,1-2.27c.15-.36.28-.72.46-1.06a8.67,8.67,0,0,0,.31-.9c.14-.37.21-.71.33-1.08a6.4,6.4,0,0,0,.12-1,18.1,18.1,0,0,0,.15-1.94c0-.57.13-1.13.13-1.71a7.39,7.39,0,0,0-.13-2,22.33,22.33,0,0,0-.66-2.43,7.56,7.56,0,0,0-.79-1.45,2,2,0,0,0-1.41-.83,21.45,21.45,0,0,0-3.4-.06,12.28,12.28,0,0,0-2.19.42.92.92,0,0,0-.68.49c-.17.33-.51.43-.73.67a13.46,13.46,0,0,0-1.3,1.61c-.3.42-.73.74-1,1.15a16.31,16.31,0,0,0-1.29,1.55c-.3.51-.83.82-1.19,1.3s-.72.9-1.08,1.33a16,16,0,0,1-1.65,1.83,5.54,5.54,0,0,0-.77.89c-.41.54-.88,1-1.31,1.53a4.12,4.12,0,0,0-.69,1.5c-.1.33.13.37.32.39a6.55,6.55,0,0,0,1.32-.18c.44-.06.77-.4,1.2-.49a.63.63,0,0,1,.45,0,9.42,9.42,0,0,1,1.51.84,4.43,4.43,0,0,0,1.09.54A12.71,12.71,0,0,1,109,115.9c.53.35.54.88.64,1.44a8.08,8.08,0,0,1-.07,3.06,2,2,0,0,1-.82,1.1,14.92,14.92,0,0,0-1.31.94c-.32.34-.64.68-.93,1s-.45.83-.81,1c-.12.06-.26,0-.38.1a2.38,2.38,0,0,0-.49.34,7,7,0,0,1-1.32.63c-.52.21-.92.58-1.43.83a5.66,5.66,0,0,1-1.42.6c-.54.09-.44-.24-.27-.59a2.46,2.46,0,0,0,.17-.63,2.27,2.27,0,0,1,.47-.86,6.56,6.56,0,0,0,1.07-3.85c0-.37-.09-.57-.51-.55-.81.05-1.61.16-2.42.18-.37,0-.73.34-1.11.47a15,15,0,0,0-1.74.76,9.48,9.48,0,0,1-2,.72,1.69,1.69,0,0,1-1.25,0,1.94,1.94,0,0,1-.59-.74,4,4,0,0,1-.59-3.06,13,13,0,0,0,.39-1.75,3.66,3.66,0,0,1,.25-1.4,5.27,5.27,0,0,1,1.51-.94,14.84,14.84,0,0,1,1.7-.83,1.84,1.84,0,0,0,1.08-1.49c0-.23-.08-.3-.23-.37a3.08,3.08,0,0,0-2.52-.09c-.38.16-.61.06-.84-.3a3.59,3.59,0,0,0-2.54-1.75,3.44,3.44,0,0,0-1.59.26,2.73,2.73,0,0,0-1.06.67c-.46.4-1,.73-1.47,1.18a16.72,16.72,0,0,1-1.22,1.16c-.84.7-1.6,1.51-2.41,2.26a19.84,19.84,0,0,0-1.66,2.23,9.09,9.09,0,0,0-1.21,3.19c-.42,1.3-2,.85-2.84.14a8.3,8.3,0,0,1-2.33-3.25c-.19-.59-.29-1.21-.43-1.82a7,7,0,0,1,0-1.37,11.46,11.46,0,0,1,0-1.55c0-.55.32-1,.32-1.59a2.86,2.86,0,0,1,1-1.89c.4-.45.76-.94,1.18-1.38.59-.62,1.19-1.24,1.76-1.91,1-1.18,2.27-2.06,3.33-3.2a14,14,0,0,1,1.22-1.08c.41-.36.81-.75,1.23-1.08.71-.57,1.41-1.18,2.12-1.77s1.91-1.17,2.43-2.32a.94.94,0,0,1,1-.51c.33,0,1.12.12,1.15-.38,0-.21-.17-.33-.16-.53a2.27,2.27,0,0,1,.36-.71,11.28,11.28,0,0,1,1.09-1.48c.32-.41.52-.87.85-1.25a8,8,0,0,0,.68-1c.48-.81,1-1.58,1.46-2.41.23-.42.48-.84.73-1.26a9.75,9.75,0,0,0,1.15-2.19A5.5,5.5,0,0,1,97.57,84c.26-.54.7-1.1,1.36-1a7.39,7.39,0,0,0,1.75.25,8.34,8.34,0,0,0,1.12-.28,1.83,1.83,0,0,1,2.2,1.15,7.45,7.45,0,0,1,.51,1.39c0,.31.24.33.44.19s.54-.43.81-.66c.93-.77,1.89-1.5,2.88-2.18.38-.27.68-.68,1.07-.94s.69-.54,1-.81c.61-.5,1.29-.93,1.9-1.43s1.37-1.1,2-1.72,1.36-.94,1.63-1.66-.5-1.21-1-1.41a3.65,3.65,0,0,0-1.77-.1c-.39,0-.76.17-1.16.2a13.5,13.5,0,0,0-1.77.45,14.28,14.28,0,0,0-2.74.93,16,16,0,0,0-2.06,1c-.46.27-1,.44-1.44.71-.84.49-1.71.93-2.56,1.4-.59.32-1.16.7-1.79,1A9.67,9.67,0,0,0,99,81a37,37,0,0,0-4.69,2.52c-.74.57-1.64.92-2.42,1.44a17.92,17.92,0,0,1-2.22,1.24,19.23,19.23,0,0,0-2.8,1.49,6.5,6.5,0,0,0-1.16,1.06,5.59,5.59,0,0,0-.52.66c-.11.2-.15.42-.28.62-.28.46-.54.56-1,.34s-.82-.18-1.17-.44c-.52-.39-1.26-.78-1.51-1.41a4.78,4.78,0,0,1-.2-.83C81,87.42,80.72,86.7,80.85,86.49ZM53,110.81c.78.1,1.29-.48,1.83-.9a26.5,26.5,0,0,1,2.55-2.07c.61-.36,1.07-.94,1.7-1.29,1.29-.73,1.48-2,1.48-3.32,0-.47,0-.92,0-1.39a29.92,29.92,0,0,1,0-3.14c0-.9-.21-1.72-.14-2.62,0-.37-.21-.55-.51-.4a1.16,1.16,0,0,0-.42.43c-.25.41-.33.92-.59,1.3-.41.61-.65,1.31-1,1.93-.25.41-.45.88-.71,1.28A26.48,26.48,0,0,0,55.82,103c-.25.51-.51,1-.77,1.5s-.59,1.23-.93,1.82-.65,1.39-1,2.07a5.61,5.61,0,0,0-.64,1.27C52.3,110.29,52.56,110.79,53,110.81Zm36.19-10.06c-.78,0-1.23.47-1.71.91s-1.08,1-1.59,1.51-1,.68-1.49,1.17-.8.6-1.13,1-.84.59-1.2,1c-.56.65-1.15,1.27-1.73,1.91a2.68,2.68,0,0,0-.36.56c-.21.49-.15.57.36.57a1.35,1.35,0,0,0,.56-.13,17.92,17.92,0,0,0,2.62-1.56c.5-.34,1.06-.57,1.54-1a5.6,5.6,0,0,1,1.24-.64c.36-.17.71-.33,1.07-.52a17,17,0,0,0,1.77-1.18c.59-.44,1.44-.72,1.51-1.53a2.5,2.5,0,0,0-.92-2C89.53,100.66,89.43,100.76,89.21,100.75Zm12.59,3.54a3,3,0,0,0-.63-.06,2.15,2.15,0,0,0-1.3.32,5.33,5.33,0,0,0-1.16,1.35c-.33.46-.78.75-1.15,1.18-.7.81-.1,1.6-.32,2.47a.29.29,0,0,0,.17.29c.12,0,.15-.1.21-.19.28-.39.57-.78.85-1.18a15.76,15.76,0,0,0,1.42-1.91,5.11,5.11,0,0,1,1.22-1.58A2.27,2.27,0,0,0,101.8,104.29Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: {
                            fill: "#ed6c00",
                            "fill-rule": "evenodd"
                          },
                          attrs: {
                            d:
                              "M131.66,138.36a3.08,3.08,0,0,0,1.45-.51,7.47,7.47,0,0,0,1.67-1.08c.45-.37.94-.7,1.38-1.08.28-.24.6-.45.84-.68s1-.66.85-1.38c-.08-.54.2-1,1-.92a1.92,1.92,0,0,0,1.88-.58,2,2,0,0,1,.51-.39,1,1,0,0,0,.45-.46.41.41,0,0,1,.66-.19,1.16,1.16,0,0,1,.31.22,1.7,1.7,0,0,0,1.07.54,4.36,4.36,0,0,1,.58.19,2,2,0,0,0,.81,0,2.69,2.69,0,0,1,1.23.21.9.9,0,0,1,.49.47,1.42,1.42,0,0,1,.07,1.4,8.76,8.76,0,0,1-1.9,2.34,16.64,16.64,0,0,1-1.35,1.17,4.35,4.35,0,0,0-1.55,1.61,3.72,3.72,0,0,1-.16.51c-.12.2-.34.34-.45.54a4.09,4.09,0,0,0-.32.79,15.42,15.42,0,0,1-.83,1.74,10.87,10.87,0,0,0-1.12,2.45,1.73,1.73,0,0,1-.14.31.52.52,0,0,0,0,.56,14.43,14.43,0,0,0,1.18,1.5,1.6,1.6,0,0,0,.89.54,3.19,3.19,0,0,1,1.67.85,3.26,3.26,0,0,1,1.09,1.29,1,1,0,0,1,.06.6c-.1.37-.07.77-.19,1.14a2.39,2.39,0,0,1-.31.57c-.22.3-.28.7-.6,1a2,2,0,0,1-.74.47,3.39,3.39,0,0,1-2.56,0,1.36,1.36,0,0,1-.63-.55,1.26,1.26,0,0,0-.77-.66,2.9,2.9,0,0,0-2-.11.19.19,0,0,0-.16.15c-.16.5-.31,1-.46,1.49-.27.89-.54,1.76-.79,2.64-.19.67-.42,1.33-.55,2-.05.31,0,.63-.08.94a8.23,8.23,0,0,0-.1,1,9.13,9.13,0,0,0,.09,2.34,3.49,3.49,0,0,0,1.3,2.42,6.33,6.33,0,0,0,2.7,1.18,8.9,8.9,0,0,0,2.31.09c1-.11,1.93-.12,2.88-.25a6.41,6.41,0,0,0,1.57-.18,1.72,1.72,0,0,1,.78,0c.52,0,1-.07,1.55-.09a16.19,16.19,0,0,0,1.95-.23,28.29,28.29,0,0,0,3.19-.53c.89-.25,1.8-.64,1.79-1.72a8.72,8.72,0,0,1,0-1.77,1.75,1.75,0,0,0-.29-1.32,11.86,11.86,0,0,0-.86-.88,3.65,3.65,0,0,1-.64-1.33,5.53,5.53,0,0,1-.17-1.34,6.46,6.46,0,0,0,.08-1.23c0-.15-.08-.32.1-.38s.25.1.34.22c.63.89,1.44,1.68,2,2.59a7,7,0,0,0,1,1.46c.39.38.6.86,1.09,1.13a4.08,4.08,0,0,1,1.29.87c.41.47,1,.72,1.36,1.25a.89.89,0,0,0,.47.31,4.87,4.87,0,0,1,1.48.93,1,1,0,0,1,.25,1.07,2.13,2.13,0,0,1-.14.35,9.07,9.07,0,0,0-.73,1.87,1.18,1.18,0,0,1-.91.76,5.06,5.06,0,0,0-1.94.93,6.53,6.53,0,0,1-1.57.92,9.66,9.66,0,0,1-1.81.34c-.6.12-1.2.24-1.79.4a15.34,15.34,0,0,1-1.82.49,31.17,31.17,0,0,0-4.86.57,7.63,7.63,0,0,1-2.23.24l-4.23-.13a1.61,1.61,0,0,0-.38,0c-.78.11-1.57-.06-2.36,0a2,2,0,0,1-1.15-.23,10.58,10.58,0,0,0-1.63-.59,7.83,7.83,0,0,1-.91-.47,3,3,0,0,1-1.37-.83,4.78,4.78,0,0,1-.92-1.61,9.61,9.61,0,0,0-.35-1,2.65,2.65,0,0,1-.21-1.2,12.33,12.33,0,0,0-.18-1.83,2.41,2.41,0,0,0-.5-1.1c-.17-.45-.36-.88-.56-1.3a4.28,4.28,0,0,1-.18-2.19,6.11,6.11,0,0,1,.22-1.55,8.61,8.61,0,0,1,.49-1.54,5.33,5.33,0,0,0,.31-1c.31-1,.64-1.91.9-2.89a11.1,11.1,0,0,0,.3-1.39,10.27,10.27,0,0,1,.32-1.08,3,3,0,0,0,.22-1.1,2.46,2.46,0,0,0-1.23-2,8.1,8.1,0,0,0-1-.53,2.19,2.19,0,0,0-1.79.1l-1.49.6c-.29.11-.55.28-.83.4a15.07,15.07,0,0,0-1.93.85,2.11,2.11,0,0,1-.95.43,1,1,0,0,1-.8-.2,3.2,3.2,0,0,1-1.07-1.7,3.08,3.08,0,0,1,.39-2.09c.3-.75.84-1.41,1.21-2.14a6.33,6.33,0,0,1,1.27-1.63c.37-.36.59-.83.95-1.21.59-.63,1.16-1.28,1.69-2s1.18-1.59,1.76-2.39a5,5,0,0,0,.74-1c.17-.42.33-.86.46-1.29a2.78,2.78,0,0,1,.81-1.17,24.11,24.11,0,0,0,2-1.68c.36-.4.68-.81,1-1.23a14.32,14.32,0,0,0,1.46-2.13c.41-.84.91-1.64,1.33-2.48a4.27,4.27,0,0,0,.63-2.27,1.57,1.57,0,0,1,0-.3,1.1,1.1,0,0,0-.46-1.2,1.73,1.73,0,0,1-.28-.26c-.44-.45-1-.78-1.45-1.18a2.08,2.08,0,0,1-.78-1.16,11.22,11.22,0,0,1-.28-2c0-.31,0-.62,0-.93a9.87,9.87,0,0,1,.44-2.91,18,18,0,0,1,1-2.59c.25-.55.51-1.11.81-1.64.2-.38.28-.85.48-1.25.31-.68.63-1.35.88-2a1.3,1.3,0,0,0-.1-.88c-.14-.36-.33-.72-.49-1.08a.38.38,0,0,1,.22-.53,2.92,2.92,0,0,1,1.87-.41,4.94,4.94,0,0,1,1.94.57c.23.14.48.24.72.37.73.38.84.58.75,1.41,0,.24.07.52-.08.71a7.05,7.05,0,0,1-.94,1.3c-.08,0-.17.1-.2.19-.24.63-.73,1.11-1,1.72a10.39,10.39,0,0,1-.91,1.71c-.78,1.12-1.54,2.3-2.25,3.46a2.44,2.44,0,0,0-.33,2.19,1.45,1.45,0,0,0,.83.78,4.53,4.53,0,0,1,1.87,1.3.21.21,0,0,0,.11.07,3.58,3.58,0,0,1,1.31,1c.29.28.63.51.93.79a5.47,5.47,0,0,1,.8.86,6.57,6.57,0,0,0,.58,1c.13.13.1.32.11.48,0,.44.15.85.15,1.29a3.76,3.76,0,0,1-.55,1.37,12.35,12.35,0,0,1-1.32,2.1c-.35.55-.84,1-1.21,1.59a23.32,23.32,0,0,1-1.46,2c-.79.93-1.56,1.89-2.27,2.87a23.62,23.62,0,0,1-1.82,2.28l-1.5,1.66a2.31,2.31,0,0,0-.14.19C132.15,137.81,132.05,138.2,131.66,138.36Zm1.9,5.06a1.65,1.65,0,0,0-1.26.43,1,1,0,0,1-.2.12,1.24,1.24,0,0,0-.35,1.23s0,.08.07.08c.27.09.56.23.84.05a3.3,3.3,0,0,0,.86-.72,4.1,4.1,0,0,0,.53-.64c.13-.22.08-.38-.16-.46A2.44,2.44,0,0,0,133.56,143.42Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M155.25,68.25a3.63,3.63,0,0,1-3.81-4,3.57,3.57,0,0,1,3.72-3.79,3.76,3.76,0,0,1,3.84,3.9A3.61,3.61,0,0,1,155.25,68.25Zm3.25-3.92c0-1.35-1.26-2.07-3.08-2.07-1.33,0-3.48.47-3.48,2.25,0,1.43,1.4,2,3.17,2S158.5,65.68,158.5,64.33Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M154.51,69.54c.44,0,.57,0,.7-.21l.1-.15a.29.29,0,0,1,.33,0,7.2,7.2,0,0,0,.65,1.6.22.22,0,0,1-.1.2,4,4,0,0,0-.47,0c-.07,0-.1,0-.13.11.19.3.55.61.55,1.07a.61.61,0,0,1-.65.6.66.66,0,0,1-.71-.7.61.61,0,0,1,.2-.42c.21-.25.22-.35.22-.42S155,71,154.55,71h-1.67c-.76,0-.85.05-.88.41l0,.35a.3.3,0,0,1-.37,0c0-.53,0-1,0-1.48s0-.93,0-1.29a.28.28,0,0,1,.37,0l0,.21c0,.36.13.4.89.4Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M153.11,76.74c-.74,0-.94.27-.94.49a.75.75,0,0,0,.13.41.19.19,0,0,1-.25.13,1.79,1.79,0,0,1-.59-1.26,1.29,1.29,0,0,1,.38-.92c.07-.08.09-.12.09-.17s0-.12-.12-.24a1.59,1.59,0,0,1-.35-.92A1.13,1.13,0,0,1,152.61,73c.56,0,.9.34,1.14,1.14.13.41.22.72.3,1s.13.25.22.26l.37,0c.42,0,.94-.16.94-.63,0-.27-.15-.49-.62-.57a.47.47,0,0,1-.35-.19,1.83,1.83,0,0,1-.25-.78.24.24,0,0,1,.27-.26,1.3,1.3,0,0,1,.84.53,3.07,3.07,0,0,1,.67,1.84c0,.91-.46,1.45-1.59,1.39Zm.28-1.31c.18,0,.21,0,.2-.08-.06-.49-.25-.92-.76-.92a.63.63,0,0,0-.66.56c0,.34.2.4.54.41Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M154.53,78.45c.44,0,.57,0,.7-.21l.1-.15a.26.26,0,0,1,.33,0,8.32,8.32,0,0,0,.63,1.61.21.21,0,0,1-.1.2l-.49,0c-.06,0-.08,0-.08,0a1,1,0,0,0,.08.21,2.69,2.69,0,0,1,.44,1.25,1.29,1.29,0,0,1-1.38,1.37h-1.88c-.76,0-.85,0-.89.44l0,.17a.28.28,0,0,1-.37,0c0-.34,0-.8,0-1.32s0-.86,0-1.18a.28.28,0,0,1,.37,0l0,.2c0,.25.12.29.72.29h1.85a.7.7,0,0,0,.77-.76.79.79,0,0,0-.26-.62.7.7,0,0,0-.41-.08h-1.95c-.6,0-.7,0-.73.32l0,.17a.28.28,0,0,1-.37,0c0-.34,0-.69,0-1.21s0-.91,0-1.29a.28.28,0,0,1,.37,0l0,.17c0,.39.13.44.89.44Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M155.74,88.92a.34.34,0,0,1-.28.1.51.51,0,0,1-.43-.17V88a1.33,1.33,0,0,1-.39,0c-.86,0-1.91-.52-1.91-2.24,0-.18,0-.33,0-.45a.27.27,0,0,0-.26-.19c-.24,0-.39.24-.39.56s0,.82,0,1.33c0,.82-.22,1.7-1.32,1.7a2,2,0,0,1-1.65-1,3.77,3.77,0,0,1-.48-1.91c0-1.57.72-2.14,1.39-2.14a.64.64,0,0,1,.55.35c.13.22.27.42.34.54s.13.1.15,0A1,1,0,0,1,152,84a.31.31,0,0,1,.23.08,6.19,6.19,0,0,0,.51.7c.08.09.14.14.24.08a1.49,1.49,0,0,1,1.41-.93c.9,0,1.76.72,1.76,2.13a3.59,3.59,0,0,1-.4,1.63ZM151,85.84a1,1,0,0,0-.15-.61.46.46,0,0,0-.38-.15,1.24,1.24,0,0,0-1.22,1.41c0,.69.33,1.15.86,1.15s.89-.47.89-1.07Zm2.21.24c0,.34.32.62,1.12.62s1.3-.31,1.3-.71-.33-.67-1.07-.67S153.22,85.64,153.22,86.08Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M154.21,90.75c0-.25,0-.27-.2-.27A1.52,1.52,0,0,0,152.39,92a1.09,1.09,0,0,0,.57,1,.25.25,0,0,1-.25.29,2.11,2.11,0,0,1-1.25-1.92,2.15,2.15,0,0,1,2.23-2.27,2.35,2.35,0,0,1,2.45,2.36,1.58,1.58,0,0,1-1.57,1.75c-.21,0-.36,0-.36-.39Zm.48.72a1,1,0,0,0,.09.45A.35.35,0,0,0,155,92a.55.55,0,0,0,.6-.58.9.9,0,0,0-.79-.86c-.15,0-.16.16-.16.5Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M147.78,67.11a14,14,0,0,0-1.7.13.29.29,0,0,1-.08-.41,2,2,0,0,0,1.56-2.06c0-1.21-1-2.51-3.21-2.51S141,63.52,141,64.83a2.37,2.37,0,0,0,1.69,2.23.3.3,0,0,1-.08.41,5,5,0,0,1-1.71-.41,8.3,8.3,0,0,1-.41-2.22,5,5,0,0,1,.83-2.94,3.44,3.44,0,0,1,2.87-1.39,3.61,3.61,0,0,1,2.89,1.32,4.79,4.79,0,0,1,1,3A13.44,13.44,0,0,1,147.78,67.11Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M142.78,68a2.38,2.38,0,0,1,2.42,2.51,2.34,2.34,0,1,1-4.67-.06A2.23,2.23,0,0,1,142.78,68Zm.24,1.57c-1.15,0-2,.36-2,1s.71.82,1.69.82,2-.32,2-.94S144.21,69.52,143,69.52Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        }),
                        _c("path", {
                          staticStyle: { fill: "#fff" },
                          attrs: {
                            d:
                              "M141.41,73.79a.89.89,0,1,1,0,1.77.85.85,0,0,1-.88-.89A.88.88,0,0,1,141.41,73.79Z",
                            transform: "translate(-43.78 -44.8)"
                          }
                        })
                      ]
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(2)
              ]
            ),
            _vm._v(" "),
            _vm._m(3)
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "join-us-slogan text-left" }, [
      _vm._v("\n                    持續創造價值並帶領團隊實現目標和理想"),
      _c("br"),
      _vm._v(" "),
      _c("span", { staticClass: "text-orange" }, [
        _vm._v("以前瞻眼光、宏觀策略成為產業先驅")
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "col col-contact-us d-flex align-items-center justify-content-center"
      },
      [
        _c(
          "div",
          { staticClass: "footer-text-left text-center text-lg-left" },
          [
            _c("div", { staticClass: "d-inline-block text-center" }, [
              _c("p", { staticClass: "text-orange footer-info-title mb-4" }, [
                _vm._v("聯絡我們")
              ]),
              _vm._v(" "),
              _c("p", [_vm._v("台北市大安區仁愛路四段37號3樓之B")]),
              _vm._v(" "),
              _c("p", [
                _vm._v("Email:  service@orange.co"),
                _c("br"),
                _vm._v("Phone:  02-2711-4636"),
                _c("br"),
                _vm._v("Fax:  02-2711-4638")
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "col d-flex align-items-center justify-content-center" },
      [
        _c(
          "div",
          { staticClass: "footer-text-right text-center text-lg-right" },
          [
            _c("div", { staticClass: "d-inline-block text-center" }, [
              _c("p", { staticClass: "text-orange footer-info-title mb-4" }, [
                _vm._v("橘色精神")
              ]),
              _vm._v(" "),
              _c("p", { staticClass: "footer-info-subtitle" }, [
                _vm._v("用心 · 貼心 · 安心"),
                _c("br"),
                _vm._v("信心 · 一心 · 同理心")
              ])
            ])
          ]
        )
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass:
          "flex-1 position-relative d-flex flex-column align-items-center justify-content-center w-100"
      },
      [
        _c(
          "p",
          {
            staticClass:
              "footer position-relative w-100 text-size-1 d-flex align-items-center justify-content-center",
            attrs: { id: "copyright" }
          },
          [
            _c("span", [
              _vm._v("\n                        2018 "),
              _c(
                "a",
                {
                  staticClass: "text-orange",
                  attrs: {
                    href: "http://www.orangeshabu.com.tw/",
                    target: "_blank"
                  }
                },
                [_vm._v(" 橘色餐飲集團 ")]
              ),
              _vm._v(" 版權所有."),
              _c("br", { staticClass: "d-md-none" }),
              _vm._v(" Designed by "),
              _c(
                "a",
                {
                  staticClass: "text-orange",
                  attrs: { href: "https://www.daydream-lab.com" }
                },
                [_vm._v("Daydream Lab")]
              )
            ])
          ]
        )
      ]
    )
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1cbe62ac", module.exports)
  }
}

/***/ }),

/***/ 817:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(818)
  __webpack_require__(820)
  __webpack_require__(822)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(824)
/* template */
var __vue_template__ = __webpack_require__(825)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-9670f3b8"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/components/block-news.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9670f3b8", Component.options)
  } else {
    hotAPI.reload("data-v-9670f3b8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 818:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(819);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(105)("707ec482", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9670f3b8\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-news.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9670f3b8\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./block-news.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 819:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n#banner[data-v-9670f3b8] {\n  height: auto;\n  padding: 70px 0;\n  background-image: url(\"/images/news/news_v5.png\");\n  background-size: cover;\n  background-attachment: fixed;\n  background-position: center;\n}\n#banner .tag-content p[data-v-9670f3b8] {\n    margin-top: 35px;\n    font-size: 20px;\n}\n#banner .tag-content .text-tag[data-v-9670f3b8] {\n    font-size: 20px;\n    border: 1px solid white;\n    padding: 5px 25px;\n    display: inline-block;\n}\n#banner .banner-title[data-v-9670f3b8] {\n    font-size: 75px;\n    letter-spacing: 5px;\n}\n#banner p[data-v-9670f3b8] {\n    font-weight: 500;\n    font-size: 16px;\n    letter-spacing: 2px;\n}\n#banner a[data-v-9670f3b8] {\n    color: #eb5e00;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n    cursor: pointer;\n}\n#banner a[data-v-9670f3b8]:hover {\n      color: white;\n}\n.el-select__caret[data-v-9670f3b8] {\n  color: #fff;\n}\n#block-breadcrumb .banner-title[data-v-9670f3b8] {\n  font-size: 90px;\n  font-weight: 300;\n}\n#block-news-load[data-v-9670f3b8] {\n  margin-bottom: 180px;\n}\n#block-news-load[data-v-9670f3b8]:before {\n    background-attachment: fixed;\n}\n#block-news-load.pageTag[data-v-9670f3b8] {\n    margin-bottom: 80px;\n}\n#block-news-load.pageTag #block-news-lists[data-v-9670f3b8] {\n      padding-top: 80px;\n      margin-bottom: 0;\n}\n#block-news-load.pageTag #block-news-lists #block-news-filter .news-categories[data-v-9670f3b8], #block-news-load.pageTag #block-news-lists #block-news-filter .el-select[data-v-9670f3b8] {\n        display: none;\n}\n#block-news-load.pageTag #block-news-lists #block-news-filter .filter-date[data-v-9670f3b8]:after {\n        display: none;\n}\n#block-news-load .filter-date.-year[data-v-9670f3b8] {\n    width: 90px;\n}\n#block-news-load .filter-date.-month[data-v-9670f3b8] {\n    width: 85px;\n}\n#block-news-load .btn-load-more.no-more[data-v-9670f3b8] {\n    background: rgba(0, 0, 0, 0.6);\n}\n#block-news-load #block-news-lists[data-v-9670f3b8] {\n    z-index: 2;\n    margin-bottom: 80px;\n}\n#block-news-load #block-news-lists #block-news-filter .news-categories[data-v-9670f3b8] {\n      padding: 55px 0;\n      font-size: 14px;\n}\n#block-news-load #block-news-lists #block-news-filter .news-categories.-category[data-v-9670f3b8] {\n        -webkit-box-flex: 1;\n            -ms-flex: 1;\n                flex: 1;\n}\n#block-news-load #block-news-lists #block-news-filter .news-categories .filter-date[data-v-9670f3b8] {\n        padding: 5px;\n        background: #eb5e00;\n        cursor: pointer;\n}\n#block-news-load #block-news-lists #block-news-filter .news-categories .filter-date.-month[data-v-9670f3b8] {\n          margin-right: 20px;\n}\n#block-news-load #block-news-lists #block-news-filter .news-categories .filter-date.-year[data-v-9670f3b8]:after {\n          content: \"\";\n          position: absolute;\n          height: 60%;\n          width: 1px;\n          background: rgba(255, 255, 255, 0.6);\n          right: 0;\n          top: 20%;\n}\n#block-news-items .news-item[data-v-9670f3b8] {\n  width: 25%;\n  padding: 0 16px;\n  margin-bottom: 50px;\n}\n#block-news-items .news-item:hover .news-head[data-v-9670f3b8]:before {\n    opacity: 1;\n    -webkit-transition: all .5s;\n    transition: all .5s;\n}\n#block-news-items .news-item:hover .news-head .btn-readmore[data-v-9670f3b8] {\n    display: block;\n}\n#block-news-items .news-item:hover .news-title[data-v-9670f3b8] {\n    color: #eb5e00;\n}\n#block-news-items .news-item .news-content[data-v-9670f3b8] {\n    font-weight: 600;\n    letter-spacing: 2px;\n}\n#block-news-items .news-item .news-head[data-v-9670f3b8] {\n    padding-top: 120%;\n    margin-bottom: 10px;\n    -webkit-box-flex: 1;\n        -ms-flex: 1;\n            flex: 1;\n    background-size: cover;\n    background-position: center;\n}\n#block-news-items .news-item .news-head[data-v-9670f3b8]:before {\n      content: \"\";\n      background: rgba(235, 94, 0, 0.4);\n      width: 100%;\n      height: 100%;\n      position: absolute;\n      top: 0;\n      left: 0;\n      opacity: 0;\n}\n#block-news-items .news-item .news-head .btn-readmore[data-v-9670f3b8] {\n      position: absolute;\n      top: 50%;\n      padding: 15px 35px;\n      color: white;\n      -webkit-transform: translateY(-50%);\n              transform: translateY(-50%);\n      display: none;\n      z-index: 2;\n}\n#block-news-items .news-item .news-head .btn-readmore[data-v-9670f3b8]:hover {\n        background: white;\n        color: #eb5e00;\n}\n#block-news-items .news-item .news-title[data-v-9670f3b8] {\n    color: black;\n    letter-spacing: 2px;\n}\n", ""]);

// exports


/***/ }),

/***/ 820:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(821);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(105)("31f025de", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9670f3b8\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./block-news.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9670f3b8\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./block-news.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 821:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n@media only screen and (max-width: 991px) {\n#banner[data-v-9670f3b8] {\n    background-attachment: unset;\n}\n#banner .banner-title[data-v-9670f3b8] {\n      font-size: 45px;\n}\n#block-news-load[data-v-9670f3b8] {\n    margin-bottom: 55px;\n}\n#block-news-load #block-news-lists[data-v-9670f3b8] {\n      margin-bottom: 0;\n}\n#block-news-load #block-news-filter .news-categories[data-v-9670f3b8] {\n      padding: 30px 0;\n}\n#block-news-load #block-news-filter .news-categories.-category[data-v-9670f3b8] {\n        display: none !important;\n}\n#block-news-load #block-news-filter .news-categories.-date .filter-date[data-v-9670f3b8] {\n        width: auto;\n        -webkit-box-flex: 2;\n            -ms-flex: 2;\n                flex: 2;\n}\n#block-news-load #block-news-filter .news-categories.-date .filter-date.-month[data-v-9670f3b8] {\n          margin-right: 0 !important;\n}\n#block-news-load.pageTag #block-news-lists[data-v-9670f3b8] {\n      padding-top: 55px;\n}\n#block-news-load.pageTag #block-news-lists #block-news-filter .news-categories[data-v-9670f3b8], #block-news-load.pageTag #block-news-lists #block-news-filter .el-select[data-v-9670f3b8] {\n        display: block;\n        width: 100%;\n}\n}\n", ""]);

// exports


/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(823);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(105)("51008650", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9670f3b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./block-news.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-9670f3b8\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=2!./block-news.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 823:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(78)(false);
// imports


// module
exports.push([module.i, "\n.el-input__inner {\n  background: #eb5e00;\n  border: none;\n  color: white;\n}\n", ""]);

// exports


/***/ }),

/***/ 824:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {
            newsItems: [{
                id: 1,
                background: '/images/news/news_v1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 2,
                background: '/images/news/news_v3.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 3,
                background: '/images/news/news_v5.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 4,
                background: '/images/news/news_v2.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 5,
                background: '/images/news/news_v4.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 6,
                background: '/images/news/news_v1.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 7,
                background: '/images/news/news_v3.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 8,
                background: '/images/news/news_v5.png',
                date: '2018/3/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 9,
                background: '/images/news/news_v2.png',
                date: '2018/8/21',
                category: '橘色涮涮屋',
                title: '日本黑毛和牛 豪華海陸雙饗<br>一次滿足山珍海味!!!<br>♥♥♥挑戰味蕾極限 ',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', 'Extension 1 by 橘色', '山珍海味']
            }, {
                id: 10,
                background: '/images/news/news_v4.png',
                date: '2018/8/21',
                category: '橘色涮涮屋',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['黑毛和牛', '橘色涮涮屋', '山珍海味']
            }, {
                id: 11,
                background: '/images/news/news_v1.png',
                date: '2018/10/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['金色三麥啤酒', 'Extension 1 by 橘色', '美食新體驗']
            }, {
                id: 12,
                background: '/images/news/news_v2.png',
                date: '2018/10/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['金色三麥啤酒', 'Extension 1 by 橘色', '美食新體驗']
            }, {
                id: 13,
                background: '/images/news/news_v3.png',
                date: '2018/12/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['金色三麥啤酒', '橘色涮涮屋', '美食新體驗']
            }, {
                id: 14,
                background: '/images/news/news_v4.png',
                date: '2018/12/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['金色三麥啤酒', 'Extension 1 by 橘色', '美食新體驗']
            }, {
                id: 15,
                background: '/images/news/news_v5.png',
                date: '2018/12/21',
                category: 'Extension 1 by 橘色',
                title: '獨家引進金色三麥啤酒<br>創造鍋物美食新體驗',
                intro: '測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字測試描述文字',
                tags: ['金色三麥啤酒', 'Extension 1 by 橘色', '美食新體驗']
            }],
            viewIndex: 8,
            loadEnd: false,
            year: 2018,
            month: '',
            category: ''
        };
    },
    methods: {
        loadMore: function loadMore() {
            var filterNewsLength = this.newsItems.filter(this.filterNews).length;
            this.viewIndex += 4;
            if (this.viewIndex >= filterNewsLength) {
                this.loadEnd = true;
            }
        },
        newsYear: function newsYear(date) {
            return date.split('/')[0];
        },
        newsMonth: function newsMonth(date) {
            return date.split('/')[1];
        },
        filterNews: function filterNews(value) {
            if (this.isTag) {
                return (value.category == this.category || this.category == '') && value.tags.includes(this.tag);
            } else {
                return (value.category == this.category || this.category == '') && (this.newsMonth(value.date) == this.month || this.month == '') && this.newsYear(value.date) == this.year;
            }
        },
        filterChange: function filterChange() {
            this.viewIndex = 8;
            var filterNewsLength = this.newsItems.filter(this.filterNews).length;
            if (this.viewIndex >= filterNewsLength) {
                this.loadEnd = true;
            } else {
                this.loadEnd = false;
            }
        }
    },
    mounted: function mounted() {

        $(".loading").fadeOut(500);

        $(window).on("mousewheel DOMMouseScroll", scroll);
        function scroll() {
            if ($(window).scrollTop() > 0) {
                $(".scroll-bg").css("opacity", "1");
                $("#logo-img,.sidebar").addClass("scroll-fix");
            } else {
                $(".scroll-bg").css("opacity", "0");
                $("#logo-img,.sidebar").removeClass("scroll-fix");
            }
        }
    },
    props: {
        isTag: {
            type: Boolean,
            default: false
        },
        tag: {
            type: String,
            default: ''
        }
    },
    destroyed: function destroyed() {
        $(window).unbind();
    }
});

/***/ }),

/***/ 825:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "block-news news-body position-relative",
      class: { pageTag: _vm.isTag },
      attrs: { id: "block-news-load" }
    },
    [
      !_vm.isTag
        ? _c(
            "div",
            {
              staticClass: "d-flex align-items-center justify-content-center",
              attrs: { id: "banner" }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "position-relative text-white pt-4 pt-lg-0 text-center"
                },
                [
                  _vm._m(0),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _c("router-link", { attrs: { to: "/" } }, [
                        _vm._v("首頁")
                      ]),
                      _vm._v(" > 橘色新訊")
                    ],
                    1
                  )
                ]
              )
            ]
          )
        : _c(
            "div",
            {
              staticClass: "d-flex align-items-center justify-content-center",
              attrs: { id: "banner" }
            },
            [
              _c(
                "div",
                {
                  staticClass:
                    "position-relative text-white pt-4 pt-lg-0 text-center"
                },
                [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "p",
                    [
                      _c("router-link", { attrs: { to: "/news/" } }, [
                        _vm._v("橘色新訊")
                      ]),
                      _vm._v(" > 搜尋結果")
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "tag-content" }, [
                    _c("p", [_vm._v("您選擇以下標籤：")]),
                    _vm._v(" "),
                    _c("span", { staticClass: "text-tag" }, [
                      _vm._v(_vm._s(_vm.tag))
                    ])
                  ])
                ]
              )
            ]
          ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "position-relative", attrs: { id: "block-news-lists" } },
        [
          _c("div", { attrs: { id: "block-news-filter" } }, [
            _c("div", { staticClass: "container d-flex justify-content-end" }, [
              !_vm.isTag
                ? _c("div", { staticClass: "news-categories -date" }, [
                    _c(
                      "div",
                      {
                        staticClass: "d-flex justify-content-end",
                        attrs: { id: "category-date" }
                      },
                      [
                        _c(
                          "div",
                          {
                            staticClass: "filter-date -year position-relative"
                          },
                          [
                            _c(
                              "el-select",
                              {
                                on: { change: _vm.filterChange },
                                model: {
                                  value: _vm.year,
                                  callback: function($$v) {
                                    _vm.year = $$v
                                  },
                                  expression: "year"
                                }
                              },
                              [
                                _c("el-option", {
                                  attrs: { label: "2018", value: 2018 }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          { staticClass: "filter-date -month" },
                          [
                            _c(
                              "el-select",
                              {
                                on: { change: _vm.filterChange },
                                model: {
                                  value: _vm.month,
                                  callback: function($$v) {
                                    _vm.month = $$v
                                  },
                                  expression: "month"
                                }
                              },
                              [
                                _c("el-option", {
                                  attrs: { label: "月份", value: "" }
                                }),
                                _vm._v(" "),
                                _c("el-option", {
                                  attrs: { label: "3月", value: 3 }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ]
                    )
                  ])
                : _vm._e()
            ])
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "news-list", attrs: { id: "block-news-items" } },
            [
              _c("div", { staticClass: "container" }, [
                _c(
                  "div",
                  { staticClass: "row" },
                  _vm._l(_vm.newsItems.filter(_vm.filterNews), function(
                    item,
                    $index
                  ) {
                    return $index < _vm.viewIndex
                      ? _c(
                          "div",
                          {
                            key: $index,
                            staticClass: "news-item col-12 col-md-3"
                          },
                          [
                            _c(
                              "router-link",
                              {
                                attrs: {
                                  to: {
                                    path: "/news/detail/" + item.id,
                                    params: { title: item.title }
                                  }
                                }
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass:
                                      "news-head d-flex align-items-center justify-content-center position-relative",
                                    style:
                                      "background-image: url(" +
                                      item.background +
                                      ")"
                                  },
                                  [
                                    _c(
                                      "span",
                                      {
                                        staticClass: "btn-border btn-readmore"
                                      },
                                      [_vm._v("了解更多")]
                                    )
                                  ]
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "div",
                              { staticClass: "news-content text-center" },
                              [
                                _c("div", [
                                  _c(
                                    "span",
                                    { staticClass: "text-black text-size-1" },
                                    [_vm._v(_vm._s(item.date))]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "span",
                                    { staticClass: "text-orange text-size-1" },
                                    [_vm._v(_vm._s(item.category))]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("router-link", {
                                  staticClass: "news-title",
                                  attrs: {
                                    to: { path: "/news/detail/" + item.id }
                                  },
                                  domProps: { innerHTML: _vm._s(item.title) }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      : _vm._e()
                  })
                )
              ])
            ]
          )
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "btn-load-more text-center" }, [
        _c(
          "a",
          {
            staticClass: "btn-load-more btn-orange fat",
            class: { "no-more": _vm.loadEnd },
            on: { click: _vm.loadMore }
          },
          [
            _vm._v(
              "\n            " +
                _vm._s(_vm.loadEnd ? "無更多新訊" : "載入更多") +
                "\n        "
            )
          ]
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "mb-2 mb-lg-3 banner-title" }, [
      _c("span", { staticClass: "text-orange" }, [_vm._v("橘色")]),
      _vm._v("新訊")
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "mb-2 mb-lg-3 banner-title" }, [
      _c("span", { staticClass: "text-orange" }, [_vm._v("搜尋")]),
      _vm._v("結果")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-9670f3b8", module.exports)
  }
}

/***/ }),

/***/ 944:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_news__ = __webpack_require__(817);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_block_news___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_block_news__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_footer__ = __webpack_require__(811);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_block_footer___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_block_footer__);
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
    components: {
        BlockNews: __WEBPACK_IMPORTED_MODULE_0_components_block_news___default.a,
        BlockFooter: __WEBPACK_IMPORTED_MODULE_1_components_block_footer___default.a
    },
    mounted: function mounted() {
        $(document).ready(function () {
            $(".loading").fadeOut(500);
            var footerPosition = $("#footer").offset().top;
            var windowHeight = $(window).height();

            $(window).scroll(function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > 0) {
                    $(".scroll-bg").css("opacity", "1");
                    $("#logo-img,.sidebar").addClass("scroll-fix");
                } else {
                    $(".scroll-bg").css("opacity", "0");
                    $("#logo-img,.sidebar").removeClass("scroll-fix");
                }
                if (scrollTop < footerPosition - windowHeight * 0.5) {
                    $(".social-icons").addClass("black");
                } else {
                    $(".social-icons").removeClass("black");
                }
                if (scrollTop > windowHeight * 0.5 && scrollTop < footerPosition - 180) {
                    $("#logo-img").addClass("black");
                } else {
                    $("#logo-img").removeClass("black");
                }
            });
        });
    }
});

/***/ }),

/***/ 945:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [_c("block-news"), _vm._v(" "), _c("block-footer")], 1)
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-830ce5d4", module.exports)
  }
}

/***/ })

});