<template>
	<div class="field-box form__field-box">
		<label for="" class="field-box__label">Начальник</label>
		<select name="" id="" class="field-item field-box__field-item"
			v-model="selectChief"
		>
			<option :value="null" selected>нет</option>
			<option
				v-for="user of GET_USERS"
				:key="user.id"
				:value="[user]"
			>
				{{ user.name }}
			</option>
		</select>
	</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
	name: 'cFormChief',
	computed: {
		...mapGetters('form', ['GET_SELECTED_CHIEF']),
		...mapGetters('users', ['GET_USERS']),
		selectChief: {
			get() {
				return this.GET_SELECTED_CHIEF('value');
			},
			set(value) {
				this.SET_SELECTED_CHIEF(value);
			}
		}
	},
	methods: mapActions('form', ['SET_SELECTED_CHIEF']),
}
</script>