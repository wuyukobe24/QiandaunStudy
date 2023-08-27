import Vue from 'vue'
import App from './App.vue'
import Find from '@/views/Find'
import My from '@/views/My'
import Part from '@/views/Part'

Vue.config.productionTip = false

// 方式一 全局过滤器
// 任意的.vue文件内直接使用
Vue.filter('reverse', val => val.split('').reverse().join(''))

// 自定义指令-传值
Vue.directive('color',{
  inserted(el, binding){
    console.log('binding = ' + binding);
    el.style.color = binding.value
  },
  update(el, binding){
    el.style.color = binding.value
  }
})

// 目标：vue-router基础使用
// 1、下载vue-router（yarn add vue-router）
// 2、引入
import VueRouter from 'vue-router'
// 3、注册全局组件
Vue.use(VueRouter)
// 4、规则数组
const routes = [
  {
    path: '/find',
    component: Find
  },
  {
    path: '/my',
    component: My
  },
  {
    path: '/part',
    component: Part
  }
]
// 5、生成路由对象
const router = new VueRouter({
  routes // routes是固定key
})

// 6、路由对象注入到vue实例中，this可以访问$route 和 $router
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
