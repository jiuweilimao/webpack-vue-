

// 导入vue 模块包
import Vue from 'vue'
// 导入路由
import VueRouter from 'vue-router'
// 手动设置路由
Vue.use(VueRouter)


// 导入组件
import app from './App.vue'

// 导入 自定义路由模块
import router from './router.js'

var vm= new Vue({
  el: '#app',
  render: c=>c(app),// render 会把 el 指定的容器中，所有的内容都清空覆盖，
  router                  // 所以 不要 把 路由的 router-view 和 router-link 直接写到 el 所控制的元素中
 // 4. 将路由对象挂载到 vm 上
 
})


