
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import App from './App'
import router from './router'
import store from './store'
import './register'

// Fullpage : https://github.com/alvarotrigo/fullPage.js/
import Vue from 'vue'
 
// FontAwesome : https://github.com/FortAwesome/vue-fontawesome#usage
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';

// import falMapMarkerAlt from '@fortawesome/fontawesome-pro-light/faMapMarkerAlt';



import fabFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import fabInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';

// import fabLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// fontawesome.library.add(falMapMarkerAlt);
fontawesome.library.add(fabFacebook);
fontawesome.library.add(fabInstagram);

//ScrollMagic https://www.npmjs.com/package/ks-vue-scrollmagic https://github.com/pirony/ks-vue-scrollmagic#readme
// import KsVueScrollmagic from 'ks-vue-scrollmagic'
// Vue.use(KsVueScrollmagic)

import TweenMax from 'TweenMax'
// import ScrollToPlugin from 'gsap/src/minified/plugins/ScrollToPlugin.min'
Vue.component('TweenMax',TweenMax)

import vuescroll from 'vue-scroll' // https://www.npmjs.com/package/vue-scroll
Vue.use(vuescroll)

import Slick from 'vue-slick'
Vue.component('Slick',Slick)

import lineClamp from 'vue-line-clamp' //https://github.com/Frondor/vue-line-clamp#readme
Vue.use(lineClamp)

import VueLazyload from 'vue-lazyload' // https://github.com/hilongjw/vue-lazyload
Vue.use(VueLazyload, {
    lazyComponent: true
});

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

import i18n from "./lang" //http://kazupon.github.io/vue-i18n/introduction.html

const app = new Vue({
    el: '#app',
    router,
    i18n,
    store,
    render: h => h(App)
});
