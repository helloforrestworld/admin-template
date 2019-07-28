import LayoutWithHeader from '@/layoutWithHeader/index.vue'

const MODULE_PREFIX = '/component'

const getPrefixRoute = function (path) {
  return MODULE_PREFIX + path
}

const routes = [
  {
    path: getPrefixRoute('/table'),
    component: LayoutWithHeader,
    redirect: 'table/index',
    children: [
      {
        path: 'index',
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
