<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import { UserInfo } from '@/entites/user';

	const store = useStore();

	const user = computed(() => store.getters['usersStore/getSelectedUser']);
</script>

<template>
	<user-info :user="user" />
</template>

<style lang="scss" scoped>
	.user-info {
		flex: 1 1 975px;
	}
</style>
