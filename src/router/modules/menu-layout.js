import MenuLayout from '@/layout/MenuLayout'

const MODULE_PREFIX = '/menu-layout'

const getPrefixRoute = function (path) {
  return MODULE_PREFIX + path
}

console.log(getPrefixRoute)

const routes = [
  {
    path: '/menu-layout',
    component: MenuLayout,
    redirect: '/menu-layout/table',
    children: [
      {
        path: '/menu-layout/table',
        component: () => import('@/views/table/index'),
        meta: {
          title: '表格',
          icon: 'component'
        }
      }
    ]
  }
]

export default routes
