<script lang="ts">
	import Outer from './Outer.svelte';
	const colors = ['red', 'green', 'yellow', 'blue', 'deeppink'] as const;
	let secret = '';
	let selected: (typeof colors)[number] = colors[0];
	function eventHandler(e: CustomEvent<{ secret: string }>) {
		secret = e.detail.secret;
	}
	function handleClick() {
		console.log('Event forwarded to nested!');
	}
</script>

<nav>
	<a href="/demo">Demo</a>
	<a href="/bind">Bind</a>
</nav>

{#each colors as color}
	<button
		style="background-color:{color}"
		on:click={() => (selected = color)}
		aria-label={color}
		aria-current={color === selected}
	/>
{/each}

<p>selected color is: <strong style="color:{selected}">{selected}</strong></p>
<Outer on:message={eventHandler} on:click={handleClick} />

<h3>secret:{secret}</h3>

<style>
	button {
		width: 100px;
		height: 100px;
		border: none;
		margin-block: 1rem;
		border-radius: 8px;
		display: block;
	}
	a {
		color: green;
		font-size: 3rem;
	}
</style>
