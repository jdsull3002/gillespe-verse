import { createRouter, createWebHistory } from 'vue-router'
import BarrowMazePage from "@/pages/barrowmaze/BarrowMazePage.vue";
import IndexPage from "@/pages/IndexPage.vue";


const routes = [
    {
        path: '/',
        component: IndexPage
    },  {
        path: '/barrowmaze',
        component: BarrowMazePage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
