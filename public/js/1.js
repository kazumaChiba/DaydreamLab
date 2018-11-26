webpackJsonp([1],{

/***/ 809:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(815)
}
var normalizeComponent = __webpack_require__(44)
/* script */
var __vue_script__ = __webpack_require__(819)
/* template */
var __vue_template__ = __webpack_require__(822)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-e3a27224"
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
Component.options.__file = "resources/assets/pages/Home.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-e3a27224", Component.options)
  } else {
    hotAPI.reload("data-v-e3a27224", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 815:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(816);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(160)("c420dc4c", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-e3a27224\",\"scoped\":true,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/lib/loader.js?indentedSyntax!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Home.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 816:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(105)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ 819:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    data: function data() {
        return {};
    },
    mounted: function mounted() {},

    destroyed: function destroyed() {},
    methods: {},
    components: {},
    props: {}
});

/***/ }),

/***/ 822:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "homepage" } }, [
    _c(
      "svg",
      {
        attrs: {
          xmlns: "http://www.w3.org/2000/svg",
          stroke: "#000",
          width: "100px",
          height: "100px",
          viewbox: "0 0 100 100",
          "stroke-width": "5px",
          fill: "transparent",
          "stroke-linejoin": "round"
        }
      },
      [
        _c("defs", [
          _c("mask", { attrs: { id: "mask" } }, [
            _c("path", {
              attrs: {
                fill: "#fff",
                d: "m0,50 h25 C50,35 50,65 75,50 h25 v50 H0"
              }
            }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "50", cy: "50", r: "5" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "60", cy: "70", r: "5" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "35", cy: "80", r: "10" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "65", cy: "95", r: "10" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "80", cy: "75", r: "7" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "55", cy: "60", r: "2" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "40", cy: "65", r: "2" } }),
            _vm._v(" "),
            _c("circle", { attrs: { cx: "52", cy: "80", r: "2" } })
          ])
        ]),
        _vm._v(" "),
        _c("path", {
          attrs: {
            d:
              "m35,2 h30 q-5,0 -5,30 L90,82 Q98,98 80,98 L20,98\n        Q0,98 10,82 L40,32 Q40,2 35,2 h1"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: {
            fill: "#487193",
            "stroke-width": "0",
            mask: "url(#mask)",
            d:
              "m50,27 L80,77 C90,93 90,93 70,93 L40,93\n        C10,93 10,93 20,77"
          }
        }),
        _vm._v(" "),
        _c("path", {
          attrs: { fill: "#fff", d: "m0,80 h5 C50,35 80,65 75,80 h25 v40 H0" }
        })
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-e3a27224", module.exports)
  }
}

/***/ })

});