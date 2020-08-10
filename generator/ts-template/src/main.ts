import Vue from 'vue'
import SvgIcon from '@/components/base/svg-icon/svg-icon.vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins'
import '@/common/scss/index.scss'

Vue.config.productionTip = false
Vue.config.devtools = process.env.NODE_ENV === 'development'

Vue.directive('focus', {
  inserted(el: HTMLElement, binding) {
    if ((binding && binding.value === undefined) || binding.value === true) {
      el.focus()
    }
  }
})

Vue.component('svg-icon', SvgIcon)

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
