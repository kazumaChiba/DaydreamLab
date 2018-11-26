import Store from "src/utils/store";
import i18n from "../lang";

const routes = [
    {
		path: '/',
		redirect: '/en', //  Store.get('language')
    },
    {
		path: '/:lang',
		component: { template: '<router-view></router-view>' },
		beforeEnter (to, from, next){
			const lang = to.params.lang;
            
			if(!['en','tw','cn'].includes(lang)){
				i18n.locale = Store.get('language');
				return next(Store.get('language'))
			}else{
				i18n.locale = lang;
			}
            
            return next()
            
		},
		children: [
			{
				path: '',
				component: resolve => require(['pages/layout/Landing.vue'], resolve),
				children: [
					{
						path: '',
						name: 'home',
						component: resolve => require(['pages/Home.vue'], resolve),
					},
				]
			},
		],
	}
]
export default routes
