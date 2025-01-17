<template>
	<transition name="fade">
		<div v-if="show" class="loader"></div>
	</transition>
</template>
<script setup>
	const props = defineProps({
		show: { type: Boolean, default: false },
		size: { type: String, default: '48px' },
	});
</script>

<style lang="scss" scoped>
	.loader {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		width: v-bind(size);
		height: v-bind(size);
		border: 5px solid $red;
		border-bottom-color: transparent;
		border-radius: 50%;
		display: inline-block;
		box-sizing: border-box;
		animation: rotation 1s linear infinite;
	}

	@keyframes rotation {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.01s ease-in-out;
	}

	.fade-enter-from,
	.fade-leave-to {
		opacity: 0;
	}
</style>
