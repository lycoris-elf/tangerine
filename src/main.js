// Application Entry Point
// v0.1.72
import Vue from 'vue';
import VueComputedPromise from 'vue-computed-promise';

import App from './App';
import store from './store'
import Backendless from 'backendless';

// Router Instance
import router from './router';
// Custom Libraries

Vue.config.productionTip = false;
Vue.use(VueComputedPromise);

window.addEventListener('resize', () => {
	// store.dispatch('DETECT_DEVICE');
	// store.dispatch('DETECT_SIZE');
	// store.dispatch('DETECT_TOOLBAR_TYPE');
});
window.addEventListener('load', () => {
	
	/* eslint-disable no-new */

	// Backendless API
	// Backendless.initApp('FF01D8BC-F950-E491-FF67-D30C3CA26800' , '95C6FA43-5B67-1E67-FF96-65B4DB73E000');
	console.log('Backendless initialised');
	
	new Vue({
		el: '#app',
		router,
		store,
		template: '<App/>',
		components: { App }
	});
	console.log('Vue initialised');

});
