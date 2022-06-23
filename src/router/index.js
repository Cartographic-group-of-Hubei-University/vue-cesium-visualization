import { createRouter, createWebHistory, createWebHashHistory } from "vue-router"
import ObjTiles from '@/components/obj-3dtiles/ObjTiles.vue'
import Tif from '@/components/tif/Tif.vue'

const routes = [
    {
        path: '/',
        redirect: '/objtiles',
    },
    {
        path: '/objtiles',
        name: 'objTiles',
        component: ObjTiles
    },
    {
        path: '/tif',
        name: 'tif',
        component: Tif
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
