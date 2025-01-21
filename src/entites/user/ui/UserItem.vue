<script setup>
	const props = defineProps({
		user: { type: Object, required: true },
	});

	const emit = defineEmits(['selectUser']);
</script>

<template>
	<label class="user-item">
		<input
			type="radio"
			@change="emit('selectUser', props.user.id)"
			name="user-item"
			class="user-item__input" />
		<img class="user-item__img" src="/empy.webp" alt="фото пользователя" />
		<div class="user-item__info">
			<div class="user-item__name">
				{{ props.user.username }}
			</div>
			<div class="user-item__email">
				{{ props.user.email }}
			</div>
		</div>
	</label>
</template>

<style lang="scss" scoped>
	.user-item {
		@include flex-row;

		flex-shrink: 0;
		border: 1px solid transparent;
		border-radius: 10px;
		overflow: hidden;
		background-color: $white;
		transition: border-color 0.2s ease-in-out, background-color 0.2s ease-in-out;
		box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}

	.user-item__img {
		display: block;
		flex-grow: 0;
		width: 70px;
		height: auto;
		object-fit: contain;
		background-color: $white;

		&::before {
			word-break: break-word;
		}
	}

	.user-item__info {
		@include flex-list-column(5px);

		padding: 15px;
		border-left: 1px solid $gray-light;
		word-break: break-word;
	}

	.user-item__name {
		font-weight: 600;
		font-size: 14px;
		line-height: 17px;
	}

	.user-item__email {
		color: $gray;
		font-weight: 400;
		font-size: 14px;
		line-height: 17px;
	}

	.user-item__input {
		display: none;
	}

	.user-item:has(.user-item__input:checked) {
		background-color: $gray-light;
		border-color: $gray-light;
	}
</style>
