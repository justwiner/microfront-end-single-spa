export default [
    {
        path: '/project2',
        name: 'demo',
        component: () => import('../pages/demo.vue'),
    },
    {
        path: '/project2/modulesA',
        name: 'homePage',
        component: () => import('../pages/home.vue'),
        children: [
            {
                path: '/project2/modulesA/subHome',
                name: 'subHomePage',
                component: () => import('../pages/subHome.vue'),
            }
        ]
    },
    {
        path: '/project2/modulesA/about',
        name: 'about',
        component: () => import('../pages/about.vue'),
    }
]