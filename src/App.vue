<template>
	<div id="app" >
		<Engine></Engine>
		<div id="routerView">
			<router-view>
			</router-view>
		</div>
	</div>
</template>

<script>
// Vuex
import { mapState } from 'vuex';

// Components
import Engine from '@/components/Engine';

export default {
	name: 'App',
	components: {
		Engine
	},
	props: {
		//
	},
	data () {
		return {
			//
		}
	},
	computed: {
		...mapState ({
			//
		})
	},
	watch: {
		'$route' (newValue, oldValue) {
			// Watch the route changes
			console.warn('[App] Route changed:');
			// this.handleRouteChange(newValue);
		}
	},
	created () {
		window['app'] = this;
	},
	beforeDestroy () {
		clearTimeout(this.checkingTimer);
	},
	mounted () {
		// Detect route
		this.handleRouteChange(this.$route);

		// Check current user status per secound
		
	},
	methods: {
		
		handleRouteChange (newRoute) {
			// Hide search results
			
		}
	}

}
</script>

<style lang="sass">
@import 'shared'
/* Placeholder Web Fonts */

/* Global Styling */
body 
	margin: 0
	padding: 0
	font-family: 'Archivo', 'Avenir Next', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	background: $backgroundColor


#app 
	position: relative
	min-height: calc(100vh - 370px)
	

#routerView 
	position: fixed
	top: 0
	left: 0
	z-index: 920

/* Transitions */
.page-fade-enter-active, .page-fade-leave-active 
	transition: .3s cubic-bezier(.33,.85,.85,.99)

.page-fade-enter 
	opacity: 0

.page-fade-leave-to 
	opacity: 0


</style>
