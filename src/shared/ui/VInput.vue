<template>
	<input v-bind="$attrs" class="v-input" v-model="model" />
</template>

<script setup>
	const model = defineModel();
</script>

<style lang="scss" scoped>
	.v-input {
		height: 50px;
		padding: 16px 24px;
		font-weight: 400;
		font-size: 14;
		line-height: 17px;
		color: $gray;
		border: 1px solid $gray-lighter;
		border-radius: 8px;
		outline: none;
	}
</style>
