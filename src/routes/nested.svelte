<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher<{ message: { secret: string } }>();
	export let fullName = false;
	$: if (fullName) alert('Yeehaw!');
	function handleClick() {
		return dispatch('message', { secret: 'hasan is the best' });
	}
</script>

<p>This is some nested markup</p>
<p>FullName: {fullName}</p>
<a href="#sd" on:click|stopPropagation|preventDefault={handleClick}>click here</a>
<button on:click>Forwarded</button>
