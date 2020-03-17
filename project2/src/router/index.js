import Vue from 'vue'
import Router from 'vue-router'

import modulesA from './modulesA'

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        ...modulesA
    ]
})

export default router