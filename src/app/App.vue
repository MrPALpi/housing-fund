<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import { NavBar } from '@/widgets/NavBar';
	import { UserName } from '@/entites/user';
	import { NotificationList } from '@/widgets/NotificationList';
	import { SideBar } from '@/widgets/SideBar';
	import { Search } from '@/widgets/Search';
	import { UserList } from '@/widgets/UserList';
	import { InfoUser } from '@/widgets/InfoUser';
	import { Loader } from '@/shared/ui';

	const store = useStore();
	const isLoading = computed(() => store.state.usersStore.isLoading);
</script>

<template>
	<notification-list />
	<div :class="{ container_loading: isLoading }" class="container">
		<loader :show="isLoading" />
		<nav-bar>
			<template #left>
				<div class="logo">Жилфонд</div>
			</template>
			<template #rigth>
				<user-name />
			</template>
		</nav-bar>
		<div class="content">
			<side-bar class="sidebar">
				<template #title> Поиск сотрудников </template>
				<template #header>
					<search :debounce="800" class="sidebar__header-search" />
				</template>
				<template #content>
					<div class="sidebar__content-title">Результаты</div>
					<user-list class="sidebar__content-items" />
				</template>
			</side-bar>
			<info-user />
		</div>
	</div>
</template>

<style scoped lang="scss">
	.container {
		height: 100vh;
		display: flex;
		flex-direction: column;
	}

	.logo {
		font-size: clamp(24px, 4vw, 32px);
		font-weight: 700;
		color: $red;
	}

	.content {
		@include flex-list;

		flex: 1 1 auto;
		flex-wrap: wrap;
		margin-top: 30px;
		border: 1px solid $gray-light;
		border-radius: 10px;
		background-color: $gray-soft;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

		@include desktop-up {
			flex-wrap: nowrap;
			margin-top: 60px;
		}
	}

	.sidebar__header-search {
		width: 100%;
	}

	.sidebar__content-title {
		font-size: 16px;
		font-weight: 600;
		line-height: 140%;
	}

	.sidebar__content-items {
		max-height: 40vh;
		overflow-y: auto;
		margin-top: 18px;

		@include thin-scrollbar;
	}
</style>
