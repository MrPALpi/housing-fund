<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import { UserItem } from '@/entites/user';

	const store = useStore();
	const selectUser = (id) => {
		store.commit('usersStore/setSelectedUser', id);
	};
	const users = computed(() => store.getters['usersStore/getUsers']);
</script>

<template>
	<div class="user-list">
		<transition-group name="list">
			<user-item
				v-for="user in users"
				:key="user"
				:user="user"
				@select-user="selectUser"
			/>
		</transition-group>
	</div>
</template>

<style lang="scss" scoped>
	.user-list {
		@include flex-list-column(18px);
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.2s ease-in-out;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateY(-30px);
	}
</style>
