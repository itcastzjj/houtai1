import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
// import 'lib-flexible/flexible'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
router.beforeEach((to, from, next) => {
  // ...
  let istoken = localStorage.getItem('lt_token')
  if (istoken) {
    console.log('已登录')
    next()
  } else {
    if (to.name === 'login') {
      console.log('未登录，接着到登录页')
      next()
    } else {
      console.log('未登录，跳转到登录页')
      next('login')
    }
  }
})
