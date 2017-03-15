import Vue from 'vue'
import VueRouter from "vue-router"
import VueResource from 'vue-resource'

//开启debug模式
Vue.config.debug = true;

Vue.use(VueRouter);
Vue.use(VueResource);

import myheader from './component/header.vue';
import firstcomponent from './component/firstcomponent.vue';
import secondcomponent from './component/secondcomponent.vue';
import threecomponent from './component/threecomponent.vue';
import home from './component/second/home.vue';
import profile from './component/second/profile.vue';
import foo from './component/second/foo.vue';

const router = new VueRouter({
		routes: [
		{
			path: '/',
			component: secondcomponent
		},
		{
			path: '/firstcomponent',
			component: firstcomponent
		}, 
		{
			path: '/secondcomponent',
			component: secondcomponent
		},
		{
			path: '/threecomponent',
			component: threecomponent
		},
		{
			path: '/threecomponent/:id',
			component: threecomponent,
			children: [
		        { 
		        	path: '',
		        	component: home 
		        },
		        { 
		        	path: 'profile', 
		        	component: profile 
		        },
		        { 
		        	path: 'foo', 
		        	component: foo 
		        }
		    ]
		}
	]
})
	// 路由器会创建一个 App 实例，并且挂载到选择符 #app 匹配的元素上。
const app = new Vue({
	router,
	components: { 
        myheader 
    }
}).$mount('#app')