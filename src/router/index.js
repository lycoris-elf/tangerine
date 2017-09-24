// Router Entry
// v0.1.1

// Libraries
import Vue from 'vue';
import Router from 'vue-router';

// Components/Pages
import Modal from '@/components/Modal';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Modal,
			props: function(route) { return { zIndex: 910 } }
		},
		// {
		// 	path: '/videoView/:filmNumber/:fake',
		// 	name: 'VideoView',
		// 	component: VideoView
		// },
		// {
		// 	path: '/player/:filmNumber/:fake',
		// 	name: 'Player',
		// 	component: PlayerPage2,
		// 	props: function(route) { return { contents: route.query } }
		// },
		// {
		// 	path: '/account/',
		// 	name: 'Account',
		// 	component: AccountPage,
		// 	props: function(route) { return { contents: route.query } }
		// },
		// {
		// 	path: '/login/',
		// 	name: 'Login',
		// 	component: LoginPage,
		// 	props: function(route) { return { contents: route.query } }
		// },
		// {
		// 	path: '/message/',
		// 	name: 'Message',
		// 	component: MessagePage,
		// 	props: function(route) { return  { contents: route.query } }
		// },
		// {
		// 	path: '/profile/',
		// 	name: 'Profile',
		// 	component: ProfilePage,
		// 	props: function(route) { return { contents: route.query } }
		// },
		// {
		// 	path: '/register/',
		// 	name: 'Register',
		// 	component: RegisterPage,
		// 	props: function(route) { return { contents: route.query } }
		// },
		// {
		// 	path: '/category/:category',
		// 	name: 'Category',
		// 	component: CategoryPage
		// },
		// {
		// 	path: '*',
		// 	name: 'All',
		// 	redirect: {name: 'Home'}
		// },
		// {
		// 	path: '/purchase/',
		// 	name: 'Purchase',
		// 	component: PurchasePage,
		// 	children: [
		// 		{
		// 			path: 'purchasePlan',
		// 			component: PurchaseStepOne,
		// 			name: 'stepOne'
		// 		},
		// 		{
		// 			path: 'PurchaseSelect',
		// 			component: PurchaseStepTwo,
		// 			name: 'stepTwo'
		// 		},
		// 		{
		// 			path: 'PurchaseConfirm',
		// 			component: PurchaseStepThree,
		// 			name: 'stepThree'
		// 		},
		// 		{
		// 			path: 'SuccessPurchase',
		// 			component: PurchaseStepFour,
		// 			name: 'stepFour'
		// 		}
		// 	],
		// 	props: function(route) { return { contents: route.query } }
		// }
	]
});
