// hash 路由
import Vue from 'vue'
import Router from 'vue-router'
import LearnVue1 from '@/views/LearnVue1'
import HelloWorld from '@/components/HelloWorld'
import LearnVue3 from "@/views/LearnVue3";

Vue.use(Router)

const router = new Router({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: '/HelloWorld'
        },
        {
            name: 'HelloWorld',
            path: '/HelloWorld',
            component: HelloWorld,
            // children:[
            //     {
            //         path: 'LearnVue1',
            //         name: 'LearnVue1',
            //         component: LearnVue1
            //     }
            // ]
        },
        {
            path: '/LearnVue1',
            name: 'LearnVue1',
            component: LearnVue1
        },
        {
            path: '/LearnVue3',
            name: 'LearnVue3',
            component: LearnVue3
        },
    ]
})

export default router
