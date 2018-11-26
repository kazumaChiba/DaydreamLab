webpackJsonp([5],{

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(605)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 605:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

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
exports.push([module.i, "\n#homepage[data-v-e3a27224] {\n  width: 100vw;\n  overflow: hidden;\n}\n#homepage .overflow-h[data-v-e3a27224] {\n    min-height: calc(100vh - 210px);\n    width: 200vw;\n}\n#homepage .overflow-wrap[data-v-e3a27224] {\n    width: 100vw;\n}\n#homepage .content[data-v-e3a27224], #homepage .content-right[data-v-e3a27224] {\n    width: 60%;\n    -webkit-transform-origin: right;\n            transform-origin: right;\n    -webkit-transform: perspective(0) translate(0) rotate(0) scale(1);\n            transform: perspective(0) translate(0) rotate(0) scale(1);\n    -webkit-transition: all .5s ease-out;\n    transition: all .5s ease-out;\n}\n#homepage .content-right[data-v-e3a27224] {\n    -webkit-transform-origin: left;\n            transform-origin: left;\n}\n#homepage .btn-goto .goto[data-v-e3a27224] {\n    font-size: 22px;\n}\n#homepage .btn-goto svg[data-v-e3a27224] {\n    margin: 60px 40px 0 40px;\n}\n#homepage .home-item[data-v-e3a27224] {\n    font-size: 54px;\n    margin: 58px 0;\n    font-weight: 600;\n}\n#homepage .home-item:hover .sub-items[data-v-e3a27224] {\n      height: 40px;\n}\n#homepage .sub-items[data-v-e3a27224] {\n    height: 0px;\n    overflow: hidden;\n    -webkit-transition: all .3s;\n    transition: all .3s;\n}\n#homepage .sub-items a[data-v-e3a27224] {\n      font-size: 22px;\n      display: block;\n}\n#homepage .sub-items a[data-v-e3a27224]:before {\n        content: \"\";\n        display: inline-block;\n        width: 70px;\n        height: 2px;\n        background: black;\n        vertical-align: middle;\n        margin-bottom: 4px;\n        margin-right: 10px;\n}\n#homepage #rect-liquid-1[data-v-e3a27224] {\n    -webkit-transform-origin: top;\n            transform-origin: top;\n}\n#homepage #rect-liquid-1.active[data-v-e3a27224] {\n      -webkit-animation: liquid-move-data-v-e3a27224 0.2s cubic-bezier(0.36, 0.45, 0.63, 0.53) 8;\n              animation: liquid-move-data-v-e3a27224 0.2s cubic-bezier(0.36, 0.45, 0.63, 0.53) 8;\n}\n#homepage .attracting[data-v-e3a27224] {\n    -webkit-animation: attracting 1s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;\n            animation: attracting 1s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;\n    -webkit-animation-delay: .5s;\n            animation-delay: .5s;\n    -webkit-transform: perspective(23.5rem) rotateX(0deg) rotateY(18deg) translateX(180px) translateY(0px) scale(0.88);\n            transform: perspective(23.5rem) rotateX(0deg) rotateY(18deg) translateX(180px) translateY(0px) scale(0.88);\n}\n#homepage .attract-in[data-v-e3a27224] {\n    -webkit-transform: perspective(23.5rem) rotateX(0deg) rotateY(18deg) translateX(560px) translateY(0px) scale(0);\n            transform: perspective(23.5rem) rotateX(0deg) rotateY(18deg) translateX(560px) translateY(0px) scale(0);\n    -webkit-transition: all 1s;\n    transition: all 1s;\n}\n@-webkit-keyframes liquid-move-data-v-e3a27224 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n}\n100% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n}\n}\n@keyframes liquid-move-data-v-e3a27224 {\n0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n}\n50% {\n    -webkit-transform: rotate(10deg);\n            transform: rotate(10deg);\n}\n100% {\n    -webkit-transform: rotate(-10deg);\n            transform: rotate(-10deg);\n}\n}\n", ""]);

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
            next: true,
            inbottle: true,
            repeat: -1
        };
    },
    mounted: function mounted() {},

    destroyed: function destroyed() {},
    methods: {
        goto: function goto() {
            var timeline = new TimelineMax({ onComplete: function onComplete() {
                    this.inbottle = false;
                } });
            this.inbottle = true;

            if (this.next) {
                timeline.to('.goto', .3, {
                    opacity: 0,
                    ease: Power3.easeInOut
                }).to('.svg-bottle', .5, {
                    rotation: -75,
                    ease: Power3.easeOut
                }).set('.content', {
                    transformPerspective: 160,
                    rotationX: 0,
                    rotationY: 20,
                    x: 180,
                    y: 0,
                    scale: 0.4
                }).to('.content', 1, {
                    transformPerspective: 60,
                    rotationX: 0,
                    rotationY: 20,
                    x: 170,
                    y: 0,
                    scale: 0,
                    ease: Expo.easeOut
                }).to('.svg-bottle', .5, {
                    rotation: 0,
                    ease: Power3.easeOut
                }).to('.overflow-h', 1, {
                    x: '-100vw',
                    ease: Power3.easeInOut
                }).set("#rect-liquid-1", { className: "+=active" }).add(TweenMax.to('.btn-goto', 1, {
                    x: $("#homepage .container:nth-of-type(2)").offset().left - $(".btn-goto").offset().left + 150
                })).set("#rect-liquid-1", { className: "-=active" }).to('.goto', .3, {
                    x: -300,
                    opacity: 1,
                    ease: Power3.easeInOut
                }).to('.arrow', 1, {
                    rotationY: '180deg'
                });
            } else {
                timeline.to('.goto', .3, {
                    opacity: 0,
                    ease: Power3.easeInOut
                }).to('.svg-bottle', .5, {
                    rotation: 75,
                    ease: Power3.easeOut
                }).set('.content-right', {
                    transformPerspective: 260,
                    rotationX: 0,
                    rotationY: -18,
                    x: -180,
                    y: 0,
                    scale: 1
                }).to('.content-right', 1, {
                    transformPerspective: 260,
                    rotationX: 0,
                    rotationY: -20,
                    x: -280,
                    y: 0,
                    scale: 0,
                    ease: Expo.easeOut
                }).to('.svg-bottle', .5, {
                    rotation: 0,
                    ease: Power3.easeOut
                }).to('.overflow-h', 1, {
                    x: 0,
                    ease: Power3.easeInOut
                }).set("#rect-liquid-1", { className: "+=active" }).add(TweenMax.to('.btn-goto', 1, {
                    x: 0
                })).set("#rect-liquid-1", { className: "-=active" }).to('.goto', .3, {
                    x: 0,
                    opacity: 1,
                    ease: Power3.easeInOut
                }).to('.arrow', 1, {
                    rotationY: 0
                });
            }
            this.next = !this.next;
        },
        attracting: function attracting() {
            if (this.next) {
                TweenMax.set('.content', {
                    transformPerspective: 260,
                    rotationY: 18,
                    x: 130,
                    y: 0,
                    scale: 0.88
                });
                TweenMax.to('.content', .5, {
                    rotationX: 0,
                    rotationY: 20,
                    x: 180,
                    y: 0,
                    scale: 0.6,
                    repeat: -1,
                    yoyo: true,
                    ease: Expo.easeOut
                });
            } else {
                TweenMax.set('.content-right', {
                    transformPerspective: 260,
                    rotationY: -18,
                    x: -130,
                    scale: 0.88
                });
                TweenMax.to('.content-right', .5, {
                    rotationY: -20,
                    x: -180,
                    scale: 0.6,
                    repeat: -1,
                    yoyo: true,
                    ease: Expo.easeOut
                });
            }
        },
        stopattracting: function stopattracting() {
            TweenMax.to('.content , .content-right', .3, {
                transformPerspective: 260,
                rotationX: 0,
                rotationY: 0,
                x: 0,
                y: 0,
                scale: 1,
                ease: Expo.easeOut
            });
        }
    },
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
    _c("div", { staticClass: "overflow-h d-flex align-items-center" }, [
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass: "row d-flex align-items-center justify-content-between"
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c("div", { staticClass: "btn-goto d-flex align-items-center" }, [
              _c(
                "svg",
                {
                  staticClass: "svg-bottle",
                  attrs: {
                    width: "70",
                    xmlns: "http://www.w3.org/2000/svg",
                    "xmlns:xlink": "http://www.w3.org/1999/xlink",
                    viewBox: "0 0 71.57 144.68"
                  }
                },
                [
                  _c(
                    "defs",
                    [
                      _c(
                        "linearGradient",
                        {
                          attrs: {
                            id: "a",
                            x1: "-908.64",
                            y1: "602.18",
                            x2: "-908.64",
                            y2: "601.18",
                            gradientTransform:
                              "matrix(66.57, 0, 0, -43.18, 60525.42, 26100.62)",
                            gradientUnits: "userSpaceOnUse"
                          }
                        },
                        [
                          _c("stop", {
                            attrs: { offset: "0", "stop-color": "#131313" }
                          }),
                          _vm._v(" "),
                          _c("stop", {
                            attrs: { offset: "1", "stop-color": "#fbfbfb" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "linearGradient",
                        {
                          attrs: {
                            id: "b",
                            x1: "-904.29",
                            y1: "581.81",
                            x2: "-904.29",
                            y2: "580.11",
                            gradientTransform:
                              "matrix(50.69, 0, 0, -14.64, 45878.07, 8613.41)",
                            gradientUnits: "userSpaceOnUse"
                          }
                        },
                        [
                          _c("stop", {
                            attrs: { offset: "0", "stop-color": "#466d8d" }
                          }),
                          _vm._v(" "),
                          _c("stop", {
                            attrs: { offset: "1", "stop-color": "#fbfbfb" }
                          })
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("clipPath", { attrs: { id: "a-stay-inside" } }, [
                        _c("path", {
                          staticStyle: { fill: "#466d8d" },
                          attrs: {
                            id: "Fill-4",
                            d:
                              "M62.18,75.09a30.11,30.11,0,0,0-1.67-3.42c-3.57-6.45-14.49-27.32-18.2-34L42.17,8.33H32.83L33,38c-3.7,6.66-14.55,27.22-18.12,33.67a28.17,28.17,0,0,0-1.66,3.42,3.13,3.13,0,0,0,.4,3.37,3.31,3.31,0,0,0,2.3,1.13H59.47a3.27,3.27,0,0,0,2.3-1.13,3.1,3.1,0,0,0,.41-3.37",
                            transform: "translate(-0.98 0)"
                          }
                        })
                      ])
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("g", { staticStyle: { opacity: "0.20000001788139343" } }, [
                    _c("path", {
                      staticStyle: {
                        fill: "none",
                        stroke: "#fbfbfb",
                        "stroke-linecap": "round",
                        "stroke-width": "5px"
                      },
                      attrs: {
                        d: "M23.35,141.74h27",
                        transform: "translate(-0.98 0)"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticStyle: {
                        fill: "none",
                        "stroke-width": "5px",
                        opacity: "0.5999999642372131",
                        isolation: "isolate",
                        stroke: "url(#a)"
                      },
                      attrs: {
                        d:
                          "M70.05,105.31c0-1.62-2.32-2.73-3.93-3.68A18.73,18.73,0,0,0,56.57,99H17a18.77,18.77,0,0,0-9.56,2.63c-1.61,1-3.93,2.06-3.93,3.68,0,3.19-.18,5.2,1.45,7a52.7,52.7,0,0,0,5.81,5.5c3.8,2.86,6.76,5.71,11,8.54.19.12,1.58.8,1.56,1l-1.67,14.84H51.76l-1.63-14.84c0-.19,1.37-.87,1.56-1,4.28-2.83,7.25-5.68,11.06-8.54a51.94,51.94,0,0,0,5.82-5.5C70.21,110.51,70.05,108.75,70.05,105.31Z",
                        transform: "translate(-0.98 0)"
                      }
                    }),
                    _vm._v(" "),
                    _c("path", {
                      staticStyle: { fill: "url(#b)" },
                      attrs: {
                        d:
                          "M18.73,104.78c-2.23.26-8.27,1.68-7.21,4.37.82,1.68,15.45,9.86,15.54,10.23H46.82c.09-.37,14.32-8.55,15.14-10.23,1.06-2.69-4.55-4.11-6.78-4.37C54.77,104.73,19.14,104.73,18.73,104.78Z",
                        transform: "translate(-0.98 0)"
                      }
                    })
                  ]),
                  _vm._v(" "),
                  _c("path", {
                    staticStyle: { fill: "#131313" },
                    attrs: {
                      d:
                        "M66.68,80.71A6.25,6.25,0,0,1,61.16,84H14.24a6.25,6.25,0,0,1-5.52-3.24,6.6,6.6,0,0,1,0-6.39c1.15-2.2,20.57-37.43,20.68-37.64a2.42,2.42,0,0,0,.31-1.18V6.1H45.64V34.68h0v.82A2.42,2.42,0,0,0,46,36.68c.11.21,19.52,35.44,20.68,37.64a6.6,6.6,0,0,1,.05,6.39m2.69-11.93C62.21,56,52.33,38.21,50.48,34.87v-.19h0V6A3,3,0,0,0,52.9,3.05s0,0,0,0V3a2,2,0,0,0-.16-.76A3,3,0,0,0,49.85,0H25.55a3,3,0,0,0-2.88,2.21A2.1,2.1,0,0,0,22.5,3s0,0,0,0v0A3,3,0,0,0,24.92,6v28.9C23.07,38.21,13.19,56,6,68.78a32.87,32.87,0,0,0-2.29,5A11.08,11.08,0,0,0,14.08,88.81H61.32A11.07,11.07,0,0,0,71.65,73.74a31.8,31.8,0,0,0-2.28-5",
                      transform: "translate(-0.98 0)"
                    }
                  }),
                  _vm._v(" "),
                  _c("path", {
                    staticStyle: { fill: "#466d8d" },
                    attrs: {
                      d:
                        "M62.18,75.09a30.11,30.11,0,0,0-1.67-3.42C56.94,65.22,52.71,57.7,49,51H26.39c-3.7,6.66-7.94,14.18-11.51,20.63a28.17,28.17,0,0,0-1.66,3.42,3.13,3.13,0,0,0,.4,3.37,3.31,3.31,0,0,0,2.3,1.13H59.47a3.27,3.27,0,0,0,2.3-1.13,3.1,3.1,0,0,0,.41-3.37",
                      transform: "translate(-0.98 0)"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "g",
                    {
                      attrs: {
                        id: "liquid",
                        "clip-path": "url(#a-stay-inside)"
                      }
                    },
                    [
                      _c("rect", {
                        attrs: {
                          id: "rect-liquid-1",
                          x: "0",
                          width: "80",
                          y: "50",
                          height: "100",
                          fill: "#466d8d"
                        }
                      })
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass: "d-flex flex-column goto",
                  on: {
                    click: _vm.goto,
                    mouseenter: function($event) {
                      _vm.attracting()
                    },
                    mouseleave: function($event) {
                      _vm.stopattracting()
                    }
                  }
                },
                [
                  _c("span", { staticClass: "class-hover pb-1" }, [
                    _vm._v("WHAT WE DO")
                  ]),
                  _vm._v(" "),
                  _c("span", {
                    staticClass: "arrow d-inline-block right w-100"
                  })
                ]
              )
            ])
          ]
        )
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "container" }, [
        _c(
          "div",
          {
            staticClass:
              "row d-flex flex-column justify-content-center w-50 h-100 ml-auto content-right"
          },
          [
            _c(
              "div",
              { staticClass: "home-item" },
              [
                _c("router-link", { attrs: { to: "/" } }, [
                  _vm._v("Web Techonologies")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "sub-items" },
                  [
                    _c(
                      "router-link",
                      {
                        staticClass: "animated fadeInDown",
                        attrs: { to: "/" }
                      },
                      [_vm._v("CASE STUDY")]
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "home-item" },
              [
                _c("router-link", { attrs: { to: "/" } }, [
                  _vm._v("E-Commerce")
                ])
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "home-item" },
              [
                _c("router-link", { attrs: { to: "/" } }, [
                  _vm._v("User Experience")
                ])
              ],
              1
            )
          ]
        )
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content" }, [
      _c("h2", { staticClass: "main-title" }, [
        _vm._v("Digital experiences that "),
        _c("span", { staticClass: "text-subcolor" }, [
          _vm._v("make you shine")
        ]),
        _vm._v(".")
      ]),
      _vm._v(" "),
      _c("span", [
        _vm._v(
          "Daydream Lab is a digital design agency,a place where strategy, creativity and technology converge.We love finding simple solutions to complex challenges and aim to deliverbeautifully crafted work."
        )
      ])
    ])
  }
]
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