import MenuLayout from '@/layout/MenuLayout'
import RouterView from '@/layout/RouterView'

const routes = [
  {
    path: '/other',
    component: MenuLayout,
    redirect: '/other/table',
    children: [
      {
        path: 'table',
        component: RouterView,
        redirect: 'table/index',
        meta: {
          title: '业务表格',
          icon: 'component'
        },
        children: [
          {
            path: 'index',
            component: () => import('@/views/table/index'),
            meta: {
              title: 'TableIndex',
              icon: '404'
            }
          },
          {
            path: 'modify/:id?',
            component: () => import('@/views/table/modify'),
            meta: {
              title: 'TableModify',
              icon: '404'
            }
          }
        ]
      }
    ]
  }

  // {
  //   path: '/other/error',
  //   component: MenuLayout,
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: {
  //         title: '401'
  //       }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: {
  //         title: '404'
  //       }
  //     }
  //   ]
  // }
]

export default routes
