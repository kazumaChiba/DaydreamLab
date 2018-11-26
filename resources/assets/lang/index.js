import Vue from "vue";
import VueI18n from "vue-i18n";
import Store from "src/utils/store";


Vue.use(VueI18n);

import enLocale from "./en_us";
import zhLocale from "./zh_tw";
import cnLocale from "./zh_cn";

const messages = {
	en: {
		...enLocale
	},
	cn: {
		...cnLocale
	},
	tw: {
		...zhLocale
	}
};

const i18n = new VueI18n({
	locale: Store.get('language') || 'en', // set locale
	messages // set locale messages
});

export default i18n;