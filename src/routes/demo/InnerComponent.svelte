<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher<{ data: { data: string }; pass: { data: number } }>();
</script>

<div>
	<button
		on:click={() =>
			dispatch('data', {
				data: 'hassan'
			})}
		>Pass Name
	</button>
	<button
		on:click={() =>
			dispatch('pass', {
				data: ~~(Math.random() * 100 + 1)
			})}
	>
		Pass Number
	</button>
	<button on:click>RESET</button>
</div>

<style>
	div {
		margin: 3rem;
		background: greenyellow;
		display: flex;
		flex-direction: row;
		justify-content: space-evenly;
	}

	button {
		width: 10rem;
		height: 10rem;
		border-radius: 0.5rem;
		background: orange;
	}
</style>
