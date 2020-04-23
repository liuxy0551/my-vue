import router from '../router'

/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '前端 Demo'
  next()
})
