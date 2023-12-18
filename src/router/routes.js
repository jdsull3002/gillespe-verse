import {createRouter, createWebHashHistory} from 'vue-router'
import BarrowMazePage from "@/pages/BarrowMazePage.vue";
import IndexPageNew from "@/pages/IndexPageNew.vue";
import ArachiaPage from "@/pages/ArachiaPage.vue";
import HighfellPage from "@/pages/HighfellPage.vue";
import DwarrowDeepPage from "@/pages/DwarrowDeepPage.vue";


const routes = [
    {
        path: '/',
        component: IndexPageNew
    },
    {
        path: '/barrowmaze',
        component: BarrowMazePage
    },
    {
        path: '/arachia',
        component: ArachiaPage
    },
    {
        path: '/highfell',
        component: HighfellPage
    },
    {
        path: '/dwarrowdeep',
        component: DwarrowDeepPage
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});

export default router;