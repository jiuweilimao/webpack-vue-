import VueRouter from 'vue-router'

// 导入 Account 组件
import account from './main/Account.vue'
import goodslist from './main/GoodsList.vue'

// 导入Account的两个子组件

// 组件的导入 使用的是es6的语法
// import 变量名 from 文件路径

导出 时使用 export default
import login from './subcom/login.vue'
import register from './subcom/register.vue'
import { comment } from 'postcss';

// 3. 创建路由对象

// 路由对象是一个数组 routers对象
/*里面的属性有
{path: '/设置自定义路由',
component:对应的组件名称,
children: [ 
    path: '设置子组件自定义路由 注意子组件锚点前不加/',
    comment: 对应子组件的名称
]


}*/

var router = new VueRouter({
  routes: [
    // account  goodslist
    {
      path: '/account',
      component: account,
      children: [
        { path: 'login', component: login },
        { path: 'register', component: register }
      ]
    },
    { path: '/goodslist', component: goodslist }
  ]
})

// 把路由对象暴露出去
export default router