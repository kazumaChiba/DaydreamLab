import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

// 导入封装的回调函数
import {
  cbs,
  gbs

} from './config';

// 动态设置本地和线上接口域名
Vue.axios.defaults.baseURL = gbs.host;

/**
 * 封装axios的通用请求
 * @param  {string}   type      get或post
 * @param  {string}   url       请求的接口URL
 * @param  {object}   data      传的参数，没有则传空对象
 * @param  {Function} fn        回调函数
 * @param  {boolean}   tokenFlag 是否需要携带token参数，为true，不需要；false，需要。一般除了登录，都需要
 */
export default function ({
  type,
  path,
  data,
  fn,
  errFn,
  tokenFlag,
  headers,
  opts,
  addPath,
  pathData = '',
} = {}) {
	/**
	 * 若 path 裡面有包含 * 則以 pathData 取代
	 */
	path = path.replace(/\*/g, pathData);

  var options = {
    method: type,
    url: path,
    headers: headers && typeof headers === 'object' ? headers : {}
  };

  options[type === 'get' ? 'params' : 'data'] = data;

  //data = qs.stringify({ data }, { encode: false });

  //console.log(type);
  // 分发显示加载样式任务
  // this.$store.dispatch('show_loading');

  // if (tokenFlag !== true && this.$store.state.user.userinfo.token) {
  //   //如果你们的后台不会接受headers里面的参数，打开这个注释，即实现token通过普通参数方式传
  //   //data.token = this.$store.state.user.userinfo.token;

  //   options.headers['Authorization'] = 'Bearer ' + this.$store.state.user.userinfo.token
  // }

  //axios内置属性均可写在这里
  if (opts && typeof opts === 'object') {
    for (var f in opts) {
      options[f] = opts[f];
    }
  }

  // console.log(options);

    //发送请求
   Vue.axios(options).then((res) => {
        // this.$store.dispatch('hide_loading');

        /*if (res.data[gbs.api_status_key_field] === gbs.api_status_value_field) {
            if (res.data[gbs.api_data_field]) {
                console.log("data 內有值")
                // 若是 data 內有值
                fn({ data: res.data[gbs.api_data_field], msg: res.data.message });
            } else {
                console.log("data 沒有值")
                // 若是 data 沒有值
                fn({ msg: res.data.message });
            }
        }*/
       if (res.data[gbs.api_status_key_field] === gbs.api_status_value_field) {
           if (res.data[gbs.api_data_field]) {
               // 若是 data 內有值
               fn({ data: res.data[gbs.api_data_field], msg: res.data.message });
           } else {
               // 若是 data 沒有值
               fn({ msg: res.data.message });
           }
       }
       else{
          console.error('gbs.api_status_key_field:'+res.data[gbs.api_status_key_field]);
          console.error('gbs.api_status_value_field:'+gbs.api_status_value_field);
       }
    }).catch((err) => {
        if (gbs.api_custom[err.response.data[gbs.api_status_key_field]]) {
            gbs.api_custom[err.response.data[gbs.api_status_key_field]].call(this, err.response.data);
        } else {
            if (errFn) {
                errFn.call(this, err.response.data);
            } else {
                cbs.requestError.call(this, err.response.data);
            }
        }
    });

  //发送请求
  /*Vue.axios(options).then((res) => {
    // this.$store.dispatch('hide_loading');
    if (res.data[gbs.api_status_key_field] === gbs.api_status_value_field) {
      if (res.data[gbs.api_data_field]) {
        // console.log(`success1`);

        // console.log(res.data[gbs.api_data_field]);
        fn(res.data[gbs.api_data_field]);
      } else {
        console.log(`success2`);

        // console.log(res.data);
        fn(res.data);
      }
    } else {
      if (gbs.api_custom[res.data[gbs.api_status_key_field]]) {
        // console.log(`success3`)
        // console.log(gbs.api_custom[res.data[gbs.api_status_key_field]])
        gbs.api_custom[res.data[gbs.api_status_key_field]].call(this, res.data);
      } else {
        if (errFn) {
          // console.log(`success4`)
          // console.log(res.data)
          errFn.call(this, res.data);
        } else {
          // console.log(`success5`)
          // console.log(res.data)
          cbs.statusError.call(this, res.data);
        }
      }
    }
  }).catch((err) => {
    if (errFn) {
      errFn.call(this, err.response);
    } else {
      cbs.requestError.call(this, err.response.data);
    }
  });*/

};
