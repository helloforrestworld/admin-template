import MenuLayout from '@/layout/MenuLayout'

const MODULE_PREFIX = '/home2'

const getPrefixRoute = function (path) {
  return MODULE_PREFIX + path
}

console.log(getPrefixRoute)

const routes = [
  {
    path: '/home2',
    component: MenuLayout,
    redirect: '/home2/index',
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/index'),
        meta: {
          title: 'Home',
          icon: 'component'
        }
      }
    ]
  },
  {
    path: '/home2/nested',
    component: MenuLayout,
    redirect: '/home2/nested/menu1/menu1-1',
    name: 'Nested',
    meta: {
      title: 'Nested Routes',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu 1' },
        redirect: 'menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu 1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            redirect: 'menu1/menu1-2/menu1-2-1',
            meta: { title: 'Menu 1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu 1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu 1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu 1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'Menu 2' }
      }
    ]
  },
  {
    path: '/home2/error',
    component: MenuLayout,
    meta: {
      title: 'Error Pages',
      icon: '404'
    },
    children: [
      {
        path: '401',
        component: () => import('@/views/error-page/401'),
        name: 'Page401',
        meta: {
          title: '401'
        }
      },
      {
        path: '404',
        component: () => import('@/views/error-page/404'),
        name: 'Page404',
        meta: {
          title: '404'
        }
      }
    ]
  },

  {
    path: '/home2/external-link',
    component: MenuLayout,
    children: [
      {
        path: 'https://www.baidu.com',
        meta: { 'title': '外链', 'icon': 'link' }
      }
    ]
  }
]

export default routes
