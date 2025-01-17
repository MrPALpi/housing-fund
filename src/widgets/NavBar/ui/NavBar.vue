<template>
	<div class="nav-bar">
		<slot name="left" />
		<slot name="rigth" />
	</div>
</template>

<style lang="scss" scoped>
	.nav-bar {
		@include flex-list-wrap(10px, 10px);

		justify-content: space-between;
	}
</style>
