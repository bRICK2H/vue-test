<template>
	<tr class="body-row table__body-row">
		<td class="body-cell body-row__body-cell"
			:class="getClassNestedRow"
		>
			<span class="body-cell__item"
				:class="getClassNestedCell"
			>
				<span class="button-cell-box body-cell__button-cell-box">
					<button v-if="user.chief"
						class="button-cell-box__toggle-chief"
						:style="getStyleNestedButton"
						@click="isShowChief = !isShowChief"
					>
					</button>
				</span>
				{{ user.name }}
			</span>
			<span class="body-cell__item"
				:class="getClassNestedCell"
			>
				{{ user.phone }}
			</span>
		</td>
		<transition name="show-chief">
			<td v-show="user.chief && isShowChief" class="body-cell body-row__body-cell">
				<table class="table">
					<tbody>
						<c-user v-for="sub_user of user.chief"
							class="body-row table__body-row"
							:key="sub_user.id"
							:user="sub_user"
						/>
					</tbody>
				</table>
			</td>
		</transition>
	</tr>
</template>

<script>
export default {
	name: 'cUser',
	props: {
		user: {
			type: Object,
			require: true
		},
	},
	data: () => ({
		isShowChief: false,
		iconMinus: require('@/assets/icons/minus.svg'),
		iconPlus: require('@/assets/icons/plus.svg')
	}),
	computed: {
		getClassNestedRow() {
			return { 'body-cell--nested': this.user.chief };
		},
		getClassNestedCell() {
			return { 'body-cell__item--nested': this.user.chief };
		},
		getStyleNestedButton() {
			return this.isShowChief
				? `background-image:url('${this.iconMinus}')`
				: `background-image:url('${this.iconPlus}')`;
		}
	},
}
</script>

<style lang="scss">
	.table {
		width: 100% !important;
		border-collapse: collapse;

		@media (max-width: 450px) {
			width: 90% !important;
		}
	}
	.body-row {
		&__body-cell {
			display: flex;
			justify-content: center;
		}
	}

	.body-cell {

		&--nested {
			@media (max-width: 450px) {
				clip-path: polygon(0 0, 100% 0, 100% calc(100% - 1rem), calc(100% - 1rem) 100%, 1rem 100%, 0 calc(100% - 1rem));
			}
		}
		&__item {
			flex: 1 1 auto;
			border: .1rem solid #000;
			padding: 1rem;
			background: #fff;

			@media (max-width: 450px) {
				flex: 1 1 50%;
				font-size: 1.4rem;
				padding: .5rem;
			}

			&--nested {
				background: #abc;

				&:nth-child(1) {
					clip-path: polygon(0 0, 100% 0, 100% 100%, 2.3rem 100%, 0 2rem);

					@media (max-width: 450px) {
						clip-path: none;
					}
				}
			}
		}

		&:nth-child(1) &__item {

			&:nth-child(2) {
				flex: 0 1 25rem;
				text-align: center;

				@media (max-width: 450px) {
					flex: 1 1 50%;
				}
			}
		}

		&:nth-child(2) {
			border-left: 3rem solid transparent;

			@media (max-width: 450px) {
				border-left: none;
			}
		}
	}

	.button-cell-box {
		position: relative;
		width: 2rem;
		display: inline-block;

		&__toggle-chief {
			outline: none;
			background-size: cover;
			width: 1.5rem;
			height: 1.5rem;
			position: absolute;
			top: -2rem;
			left: -.5rem;

			@media (max-width: 450px) {
				top: -1.5rem;
				left: -.2rem;
			}
		}
	}

	.show-chief-enter-active {
		transform: translateX(-10rem);
		opacity: 0;
		animation: show-chief-enter .3s;

		@keyframes show-chief-enter {
			100% { transform: translateX(0); opacity: 1}
		}
	}
</style>