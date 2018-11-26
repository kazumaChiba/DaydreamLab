import Vue from 'vue'
import Vuex from 'vuex';

import user from './modules/user'
import data from './modules/data'

Vue.use(Vuex);

const Modules = {
    user,
    data,
};

export default new Vuex.Store({
  modules: Modules,
});
