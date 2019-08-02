import MenuLayout from '@/layout/MenuLayout'

const routes = [
  {
    path: '/other',
    component: MenuLayout,
    redirect: '/other/table',
    children: [
      {
        path: 'table',
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
