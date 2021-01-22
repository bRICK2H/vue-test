export default {
	getters: {
		GET_SELECTED_CHIEF: (s, g, rootState) => field => {
			const { form: { fields: { chief } } } = rootState;
			return chief[field];
		}
	},
	mutations: {
		SET_SELECTED_CHIEF: (s, { chief, value }) => chief.value = value,
	},
	actions: {
		SET_SELECTED_CHIEF: ({ commit, rootState }, value) => {
			let { form: { fields: { chief } } } = rootState;
			commit('SET_SELECTED_CHIEF', { chief, value });
		},
	}
}