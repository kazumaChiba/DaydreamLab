webpackJsonp([13],{

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(518)
}
var normalizeComponent = __webpack_require__(7)
/* script */
var __vue_script__ = __webpack_require__(520)
/* template */
var __vue_template__ = __webpack_require__(521)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
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
Component.options.__file = "resources/pages/404.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-c9cf7536", Component.options)
  } else {
    hotAPI.reload("data-v-c9cf7536", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 518:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(519);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(24)("7ffe62d9", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c9cf7536\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-c9cf7536\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./404.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 519:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(18)(false);
// imports


// module
exports.push([module.i, "\n#section-404 {\n  height: 90vh;\n  height: calc(100vh - 96px);\n  margin-top: 96px;\n}\n#section-404 .bg {\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n}\n#section-404 .bg:after {\n      content: \"\";\n      position: absolute;\n      left: 0;\n      top: 0;\n      bottom: 0;\n      right: 0;\n      background: rgba(92, 87, 81, 0.5);\n}\n#section-404 .inner_404 {\n    padding-top: 15vh;\n    text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ 520:
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

/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    computed: {},
    created: function created() {},

    mounted: function mounted() {},
    methods: {},
    components: {}
});

/***/ }),

/***/ 521:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { attrs: { id: "section-404" } }, [
      _c("div", { staticClass: "bg" }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "container", staticStyle: { position: "relative" } },
        [
          _c(
            "div",
            { staticClass: "inner_404" },
            [
              _c(
                "div",
                { staticStyle: { color: "#fff", "font-size": "12rem" } },
                [_vm._v("404")]
              ),
              _vm._v(" "),
              _c(
                "h1",
                {
                  staticClass:
                    "text-playfair text-white text-uppercase font-weight-bold"
                },
                [_vm._v("Page Not Found")]
              ),
              _vm._v(" "),
              _vm._m(0),
              _vm._v(" "),
              _c(
                "router-link",
                { staticClass: "btn style-6", attrs: { to: "/" } },
                [_vm._v("GO TO HOMEPAGE")]
              )
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h3", { staticClass: "text-white mb-4 pb-2" }, [
      _vm._v("Sorry,the link you clicked may be broken or the"),
      _c("br"),
      _vm._v("page may have been removed.")
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-c9cf7536", module.exports)
  }
}

/***/ })

});