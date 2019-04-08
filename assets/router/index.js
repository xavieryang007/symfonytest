/**
 * Created by xavier on 2019/4/5.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import store from '../store';
import Home from '../views/Home';
import Login from '../views/Login';
import List from '../views/List';
import New from '../views/New';
import Edit from '../views/Edit';

Vue.use(VueRouter);

let router = new VueRouter({
    mode: 'hash',
    routes: [
        { path: '/web/admin/login', component: Login},
        { path: '/web/admin/home', component: Home},
        // { path: '/web/admin/list', component:  List },
        // { path: '/web/admin/new', component:  New  },
        {
            path: '/',
            component: Home,
            children: [
                { path: '/list', component: List},
                { path: '/new', component: New},
                { path: '/edit', component: Edit},
            ]
        },
    ],
});

export default router;