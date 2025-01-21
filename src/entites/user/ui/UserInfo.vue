<script setup>
	const props = defineProps({
		user: { type: Object, default: {} },
	});

	const STATIC_TEXT = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
	sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
	Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;
</script>

<template>
	<div :class="{ 'user-info_empty': !props.user.id }" class="user-info">
		<template v-if="props?.user?.id">
			<img
				class="user-info__img"
				src="/empy.webp"
				:alt="props?.user?.username" />
			<div class="user-info__content">
				<div class="user-info__name">
					{{ props.user.name }}
				</div>
				<div class="user-info__item">
					<span class="user-info__label">Email:</span> {{ props.user.email }}
				</div>
				<div class="user-info__item">
					<span class="user-info__label">Phone:</span> {{ props.user.phone }}
				</div>
				<div class="user-info__item user-info__item_big">
					<span class="user-info__label">О себе</span>

					{{ STATIC_TEXT }}
				</div>
			</div>
		</template>
		<template v-else>
			Выберите сотрудника, чтобы посмотреть его профиль
		</template>
	</div>
</template>

<style lang="scss" scoped>
	.user-info {
		@include flex-list-wrap(10px, 60px);

		flex: 1 1 auto;
		justify-content: space-between;
		align-items: flex-start;
		padding: 10px;

		@include desktop-up {
			padding: 30px 30px 30px 20px;
		}
	}

	.user-info_empty {
		color: $gray;
		align-items: center;
		justify-content: center;
	}

	.user-info__img {
		display: block;
		flex: 1 1 425px;
		max-width: 600px;
		width: 100%;
		margin: 0 auto;
		border: 1px solid $gray-light;

		@include desktop-up {
			max-width: 425px;
		}
	}

	.user-info__content {
		flex: 2 1 400px;
	}

	.user-info__name {
		font-size: 16px;
		font-weight: 600;
		line-height: 140%;
		color: $black;
	}

	.user-info__item {
		margin-top: 10px;
		font-size: 14px;
		color: $gray;
	}

	.user-info__item_big {
		@include flex-list-column(25px);

		margin-top: 20px;

		.user-info__label {
			font-size: 16px;
			line-height: 140%;
		}
	}

	.user-info__label {
		margin-right: 5px;
		font-weight: 600;
		color: $gray-dark;
	}
</style>
