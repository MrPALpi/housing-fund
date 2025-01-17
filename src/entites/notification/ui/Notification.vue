<script setup>
	const props = defineProps({
		notification: { type: Object, required: true },
	});

	const emit = defineEmits(['close']);
</script>
<template>
	<div :class="'notification notification_' + notification.status">
		<button
			@click="emit('close', props.notification.id)"
			class="notification__close"
		>
			×
		</button>
		{{ notification.message }}
	</div>
</template>

<style lang="scss" scoped>
	.notification {
		position: relative;
		z-index: 2;
		padding: 30px 20px 20px;
		border: 1px solid $gray-light;
		border-radius: 10px;
		background-color: $gray-soft;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		pointer-events: initial;
		word-break: break-word;
	}

	.notification_info {
		color: #2196f3;
	}

	.notification_error {
		color: $red;
	}

	.notification_success {
		color: #4caf50;
	}

	.notification__close {
		position: absolute;
		top: 5px;
		right: 5px;
		cursor: pointer;
		width: 30px;
		height: 30px;
		font-size: 24px;
		border: none;
		color: $black;
		background-color: transparent;

		@media (hover: hover) {
			transition: color 0.2s ease-in-out;

			&:hover {
				color: $red;
			}
		}
	}
</style>
