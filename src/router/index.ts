import {createMemoryHistory, createRouter} from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
// import HomeView from "@/components/home/HomeView.vue";
// import AboutView from "@/components/about/AboutView.vue";
// import ContactView from "@/components/contact/ContactView.vue";
// import BlogView from "@/components/blog/BlogView.vue";
// import ProjectsView from "@/components/projects/ProjectsView.vue";


const routes = [
    {path: '/',
        component: HelloWorld,
        meta: { transition: 'slide-left' },
    },
    // {path: '/about', component: AboutView,
    //     meta: { transition: 'slide-left' },
    // },
    // {path: '/projects', component: ProjectsView,
    // meta: { transition: 'slide-left' },
    // },
    // {path: '/contact', component: ContactView,
    // meta: { transition: 'slide-left' },
    // },
    // {path: '/blog', component: BlogView,
    // meta: { transition: 'slide-left' },
    // },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes,
})

export default router
