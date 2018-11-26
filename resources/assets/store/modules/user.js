import * as types from '../mutation-types'
import store from 'src/utils/store'
import moment from 'moment';

const name = 'user'

const defaults = {
    news_items:  store.get('news_items') || {},
};

const state = defaults;

const actions = {
    //news_items
    update_news_items: ({ commit }, news_items) => {
        return new Promise((resolve, reject) => {
              commit(types.UPDATE_NEWS_ITEMS, news_items);
              resolve()
        });
    },
    remove_news_items: ({ commit }) => {
        commit(types.REMOVE_NEWS_ITEMS);
    },
};

const mutations = {
    //news_items
    [types.UPDATE_NEWS_ITEMS](state, news_items) {

        state.news_items = news_items;
        store.set('news_items', state.news_items);
    },
    [types.REMOVE_NEWS_ITEMS](state) {
        state.news_items = {};
        store.set('news_items', state.news_items);
    },

};


export default {
  state,
  actions,
  // getters,
  mutations,
}
