import 'babel-polyfill' // 一开始就引入babel-polyfill
import Vue from 'vue'
import App from './App'
import router from './router'

import fastclick from 'fastclick' // 因为移动端默认会有 300ms 的延时，所以需要使用这个插件
import VueLazyLoad from 'vue-lazyload'

import 'common/stylus/index.styl'

fastclick.attach(document.body) // 这样300ms问题就解决了

Vue.config.productionTip = false

Vue.use(VueLazyLoad, {
  loading: require('common/images/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
