<script lang="ts">
	export let fullName = false;
	$: if (fullName) alert('Yeehaw!');
	console.log($$props.name);
</script>

<p>This is some nested markup</p>
<p>FullName: {fullName}</p>
