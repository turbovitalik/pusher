import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Login from '../components/login/Login'
import Signup from '../components/login/Signup'
import Forum from '../components/forum/Forum'
import Logout from '../components/login/Logout'
import Read from '../components/forum/Read'
import Create from '../components/forum/Create'

const routes = [
    { path: '/login', component: Login },
    { path: '/logout', component: Logout },
    { path: '/signup', component: Signup},
    { path: '/forum', name: 'forum', component: Forum },
    { path: '/ask', component: Create },
    { path: '/question/:slug', name: 'read', component: Read }
]

const router = new VueRouter({
    routes,
    hashBang: false,
    mode: 'history'// short for `routes: routes`
})

export default router