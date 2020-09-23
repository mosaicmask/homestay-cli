import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
		path: '/open',
		name: 'open',
		component: () => import('../views/open.vue')
	},
	{
		path: '/guide',
		name: 'guide',
		component: () => import('../views/guide.vue')
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('../views/login.vue')
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('../components/register/register.vue')
	},
	{
		path: '/password',
		name: 'password',
		component: () => import('../components/register/password.vue')
	},
	{
		path: '/index',
		name: 'index',
		component: () => import('../views/index.vue')
	},
	{
		path: '/',
		name: 'discover',
		component: () => import('../views/discover.vue')
	},
	{
		path: '/like',
		name: 'like',
		component: () => import('../views/like.vue'),
		redirect: '/like/myLike',
		children: [{
				path: '/like/history',
				name: 'history',
				component: () => import('../components/like/history.vue')
			},
			{
				path: '/like/myLike',
				name: 'myLike',
				component: () => import('../components/like/myLike.vue')
			}
		]
	},
	{
		path: '/information',
		name: 'information',
		component: () => import('../views/information.vue')
	},
	{
		path: '/my',
		name: 'my',
		component: () => import('../views/my.vue')
	},
	{
		path: '/particulars',
		name: 'particulars',
		component: () => import('../views/particulars.vue')
	}
]

const router = new VueRouter({
	routes
})

export default router
