import * as types from '../mutation-types'
import store from 'src/utils/store'

const name = 'data'

const defaults = {
	language: 'tw',
};

const state = defaults;

const actions = {
	update_language: ({ commit }, data) => {
		commit(types.UPDATE_LANGUAGE, data);
	}
};

const mutations = {
	[types.UPDATE_LANGUAGE](state, data) {
		state.language = data;
		store.set('language', state.language);
	}
};

getLanguage();

function getLanguage() {
	try {
		var switchPage = function (language) {
			switch (language) {
				case 'zh-cn':
					state.language = 'cn';
					store.set('language', 'cn');
					//window.location.href = '/zh-CN' + window.location.pathname;
					return true;
					break;

				case 'tw':
				case 'zh-tw':
					state.language = 'tw';
					store.set('language', 'tw');
					//window.location.href = '/zh-TW' + window.location.pathname;
					return true;
					break;

				case 'en':
				case 'en-us':
					state.language = 'en';
					store.set('language', 'en');
					//window.location.href = window.location.pathname + '/en';
					return true;
					break;

                default:
                    state.language = 'tw';
                    store.set('language', 'tw');
                    return true;
                    break;
			}
			return false;
		};

		// detect window.navigator.languages
		var found = false;
		if (typeof(window.navigator.languages) === 'object') {
			for (var index in window.navigator.languages) {
				found = switchPage(window.navigator.languages[index].toLowerCase());
				if (found) break;
			}
		}

		if (!found) {
			var lang = window.navigator.userLanguage || window.navigator.language;
			var relang = lang.toLowerCase();
			found = switchPage(relang);
		}

		if (!found) {
			state.language = 'en';
			store.set('language', 'en');
			//window.location.href = '/en-US' + window.location.pathname;
		}
	} catch (e) {
		state.language = 'tw';
		store.set('language', 'tw');
		//window.location.href = '/en-US' + window.location.pathname;
	}
}

export default {
    state,
	actions,
	mutations
}