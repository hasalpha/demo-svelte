<script lang="ts">
	import OuterComponent from './OuterComponent.svelte';
	let data: string | number | null = null;
	function onData(e: CustomEvent<{ data: string }>) {
		data = e.detail.data;
	}

	function onPass(e: CustomEvent<{ data: number }>) {
		data = e.detail.data;
	}
	function handleReset(){
		data = null;
	}
</script>

<OuterComponent on:data={onData} on:pass={onPass} on:click={handleReset} />

{#if data}
	<h1>{data}</h1>
{:else}
	<h1>No data found</h1>
{/if}
