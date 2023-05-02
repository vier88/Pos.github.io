import HoMe from './components/HoMe.vue'
import SignUp from './components/SignUp.vue'
import { createRouter, createWebHistory } from 'vue-router'
import LoGin from './components/LoGin.vue'
import AdD from './components/AdD.vue'
import UpDate from './components/UpDate.vue'
const routes = [
    {
        name: 'HoMe',
        component: HoMe,
        path: '/'
    },
    {
        name: 'SignUp',
        component: SignUp,
        path: '/sign-up'
    },
    {
        name: 'LoGin',
        component: LoGin,
        path: '/login'
    },
    {
        name: 'AdD',
        component: AdD,
        path: '/Add'
    },
    {
        name: 'UpDate',
        component: UpDate,
        path: '/Update/:id'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;