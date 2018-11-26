/**
 * 导出所有模块需要用到接口
 * 一级属性：模块名
 * 一级属性中的方法：当前模块需要用的接口
 * @type {Object}
 */

import contact from './contact';

 export default [
	{
		module: 'contact',
		name  : '聯絡我們',
		list  : contact
	},
];