<script setup>
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import { Notification } from '@/entites/notification';

	const store = useStore();
	const notifications = computed(
		() => store.state.notificationsStore.notifications
	);
	const close = (id) => {
		store.commit('notificationsStore/close', id);
	};
</script>
<template>
	<div class="notification-list">
		<transition-group name="list">
			<notification
				v-for="notification in notifications"
				:key="notification.id"
				:notification="notification"
				@close="close"
			/>
		</transition-group>
	</div>
</template>

<style lang="scss" scoped>
	.notification-list {
		position: absolute;
		z-index: 2;
		top: 20px;
		right: 20px;
		max-width: calc(100% - 40px);
		width: 350px;
		pointer-events: none;

		@include flex-list-column(8px);

		flex-direction: column-reverse;
	}

	.list-enter-active,
	.list-leave-active {
		transition: all 0.3s ease-in-out;
	}
	.list-enter-from,
	.list-leave-to {
		opacity: 0;
		transform: translateX(20px);
	}
</style>
