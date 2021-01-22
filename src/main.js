import Vue from 'vue'
import App from './App.vue'
import store from './store'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')

window.addEventListener('beforeunload', e => {
		const CURR_USERS = JSON.stringify(store.getters['users/GET_USERS']);
		const STATE_TYPE_OF_SORT = JSON.stringify(store.getters['users/GET_IS_TYPE_OF_SORT']);

		localStorage.setItem('CURR_USERS', CURR_USERS);
		localStorage.setItem('STATE_TYPE_OF_SORT', STATE_TYPE_OF_SORT);
});

