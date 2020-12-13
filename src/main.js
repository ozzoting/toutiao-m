import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'
// 引入组件样式
import 'vant/lib/index.css'
// 加载全局样式，让我们自己的样式覆盖组件的样式
import './styles/index.less'
// 加载动态rem
import 'amfe-flexible'

Vue.use(Vant)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
