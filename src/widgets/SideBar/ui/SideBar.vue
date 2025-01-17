<template>
	<div class="sidebar">
		<div v-if="slots.title" class="sidebar__title">
			<slot name="title" />
		</div>
		<div v-if="slots.title" class="sidebar__header">
			<slot name="header" />
		</div>
		<div v-if="slots.content" class="sidebar__content">
			<slot name="content" />
		</div>
	</div>
</template>

<script setup>
	import { useSlots } from 'vue';

	const slots = useSlots();
</script>

<style lang="scss" scoped>
	.sidebar {
		flex: auto;
		padding: 28px 20px 28px 30px;
		border-bottom: 1px solid $gray-light;

		@include desktop-up {
			flex: 0 0 290px;
			max-width: 290px;
			border-bottom: initial;
			border-right: 1px solid $gray-light;
		}
	}

	.sidebar__title {
		font-size: 16px;
		font-weight: 600;
		line-height: 140%;
	}

	.sidebar__header {
		margin-top: 14px;
	}

	.sidebar__content {
		margin-top: 30px;
	}
</style>
