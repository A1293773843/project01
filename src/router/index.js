//该文件用于创建整个应用的路由器
//引入VueRouter
import VueRouter from 'vue-router';
//引入组件
import MidArea from '../pages/MidArea.vue';
import HighArea from '../pages/HighArea.vue';
import SpringView from '../pages/SpringView.vue'
//创建并暴露一个路由器
export default new VueRouter({
    routes: [

        {
            name: 'midArea',
            path: '/MidArea',
            components: {
                default:MidArea,
            },

        },
        {
            path: '/HighArea',
            components: {
                a:HighArea,
            },

        },
        {
            path: '/SpringView:citys',
            name: 'SpringView',
            components: {
                b:SpringView,
            },
            props: true
        }
    ],
});