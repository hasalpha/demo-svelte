<script lang="ts">
	import Nested from './nested.svelte';
	let state = {
		firstName: '',
		lastName: ''
	};

	$: fullName = state.firstName && state.lastName ? true : false;

	function handleChange(e: Event & { currentTarget: EventTarget & HTMLInputElement }) {
		const { value } = e.currentTarget;
		state[e.currentTarget.name as keyof typeof state] = value;
	}
</script>

<pre class="state">{JSON.stringify(state)}</pre>

{#each Object.entries(state) as [key, value]}
	<label for={key}>
		{key}:<input name={key} id={key} {value} on:input={handleChange} />
	</label>
{/each}
	<svelte:component this={Nested} {fullName} name={'hfeiow'} />

<style>
	.state {
		text-align: center;
		font-size: 2em;
	}
	input {
		display: block;
	}
</style>
