import Vue from 'vue'  // ES6 导入方式
import App from './App.vue'  // 导入根组件App
// import router from './router'
// import store from './store'

Vue.config.productionTip = false

new Vue({
  // router,
  // store,
  render: h => h(App)  // vue支持的新写法   把App实例化挂到app的节点上
}).$mount('#app')
