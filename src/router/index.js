import Vue from 'vue'
import VueRouter from "vue-router";
import Home from '../views/Home';
import News from '../views/News';
import coachPre from "@/components/coachPre";
import coachTest from "@/components/coachTest";
import gymAbout from "@/components/gymAbout";
import gymTest from "@/components/gymTest";
import trainingBlog from "@/components/trainingBlog";
import DownloadApp from "@/views/DownloadApp";
import Login from "@/views/Login";
import Register from "@/views/Register";
import FunctionPage from "@/views/FunctionPage";
import cooperation from "@/components/cooperation";
import agreement from "@/components/agreement";
Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        props: true
    },
    {
        path: '/Home',
        name: 'Home',
        component: Home,
        props: true,
        children: [
            {
                path: '/',
                component: FunctionPage,
                props: true
            },
            {
                path: '/Cooperation',
                component: cooperation,
                name: 'Cooperation'
            },
            {
                path: '/Agreement',
                component: agreement,
                name: 'Agreement'
            },
            {
                path: '/News',
                name: 'News',
                component: News,
                props: true
            },
            {
                path: '/DownloadApp',
                name: 'DownloadApp',
                component: DownloadApp,
                props: true
            },
            {
                path: '/Login',
                name: 'Login',
                component: Login,
                props: true
            },
            {
                path: '/Register',
                name: 'Register',
                component: Register,
                props: true
            },
            {
                path: '/FunctionPage',
                name: 'FunctionPage',
                component: FunctionPage,
                props: true,
                children: [
                    {
                        path: '/',
                        component: coachPre
                    },
                    {
                        path: '/coachPre',
                        name: 'coachPre',
                        component: coachPre
                    },
                    {
                        path: '/coachTest',
                        name: 'coachTest',
                        component: coachTest
                    },
                    {
                        path: '/gymAbout',
                        name: 'gymAbout',
                        component: gymAbout
                    },
                    {
                        path: '/gymTest',
                        name: 'gymTest',
                        component: gymTest
                    },
                    {
                        path: '/trainingBlog',
                        name: 'trainingBlog',
                        component: trainingBlog
                    }
                ]
            }
        ]
    }

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
