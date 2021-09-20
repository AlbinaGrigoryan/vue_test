import {createRouter, createWebHashHistory} from 'vue-router'
import ShippingInformation from "@/components/ShippingInformation";
import Payment from "@/components/Payment";
import Success from "@/components/Success";

const routes = [
    {
        path: '/',
        name: 'delivery',
        component: ShippingInformation
    },
    {
        path: '/payment',
        name: 'payment',
        component: Payment,
    },
    {
        path: '/success',
        name: 'success',
        component: Success
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    ShippingInformation,
    Payment,
    Success
})

export default router
