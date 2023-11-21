import { createRouter, createWebHistory } from 'vue-router'
import BarrowMazePage from "@/pages/barrowmaze/BarrowMazePage.vue";


const routes = [
    {
        path: '/',
        component: BarrowMazePage
    },  {
        path: '/Barrowmaze',
        component: BarrowMazePage
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
