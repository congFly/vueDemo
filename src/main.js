// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'
import Parent from './components/parent.vue'
import Child2 from './components/child2.vue'
import Child3 from './components/child3.vue'

Vue.use(Router);
Vue.config.productionTip = false

const router = new Router({
  routes: [
    {
      path: '/parent',
      component: Parent
    },
    {
      path: '/child2',
      component: Child2
    },
    {
      path: '/child3',
      component: Child3
    }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
});
