/**
 * Created by xavier on 2019/4/5.
 */

import Vue from 'vue';
import ElementUI from 'element-ui';
import App from './App.vue';
import router from './router';
import store from './store';

import locale from 'element-ui/lib/locale/lang/en'

Vue.use(ElementUI, { locale })
new Vue({
    el: '#app',
    template: '<App/>',
    components: { App },
    router,
        store,
    render: h => h(App)
});