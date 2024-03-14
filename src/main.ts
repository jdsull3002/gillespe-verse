import { IonicVue } from "@ionic/vue";

import { createApp } from 'vue'

import App from '../src/App.vue';

import router from './router/routes';

import '../src/styles/app.scss';

const app = createApp(App)
    .use(IonicVue)
    .use(router)
    .mount('#app')

