import {createMemoryHistory, createRouter, createWebHistory} from "vue-router";

import HomeScreen from "../components/HomeScreen.vue";
import PrivacyPolicy from "../components/PrivacyPolicy.vue";
import Terms from "../components/Terms.vue";


const routes = [
    {path: '/',
        component: HomeScreen,
        meta: { transition: 'slide-left' },
    },
    {path: '/privacy', component: PrivacyPolicy,
        meta: { transition: 'slide-left' },
    },
    {path: '/terms', component: Terms,
    meta: { transition: 'slide-left' },
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
