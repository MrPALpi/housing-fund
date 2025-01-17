<script setup>
	import { ref } from 'vue';
	import { useStore } from 'vuex';
	import { VInput } from '@/shared/ui';
	import { useDebounce } from '@/shared/lib/useDebounce';

	const props = defineProps({
		debounce: {
			type: Number,
			default: 500,
		},
	});
	const store = useStore();
	const search = ref('');

	const fetchUsers = (params) =>
		store.dispatch('usersStore/fetchUsers', params);

	const onInput = useDebounce(() => {
		const params = search.value.split(',').reduce(
			(acc, item) => {
				item = item.trim();

				if (/^\d+$/.test(item)) {
					if (acc.id.includes(item)) {
						return acc;
					}

					acc.id.push(item);
				} else if (item.length) {
					if (acc.username.includes(item)) {
						return acc;
					}

					acc.username.push(item);
				}

				return acc;
			},
			{ username: [], id: [] }
		);

		fetchUsers(params);
	}, props.debounce);
</script>

<template>
	<v-input
		v-model="search"
		@input="onInput"
		placeholder="Введите имя или id"
		class="search__input"
	/>
</template>
