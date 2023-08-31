<script lang="ts">
	import InnerComponent from './InnerComponent.svelte';
</script>

<div>
	<InnerComponent on:pass on:data on:click/>
</div>

<style>
	div {
		border: 3px solid deeppink;
		padding: 3rem;
	}
</style>
