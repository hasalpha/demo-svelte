<script lang="ts">
	import { checks, options, radioOptions } from './stuff';
	let state = {
		num1: 0,
		num2: 0,
		isAdult: false,
		selection: [],
		checks: false,
		contact: radioOptions[0],
		comment: ''
	};

	function handleSubmit() {
		throw new Error('Not Implemented');
	}
	$: stringifiedState = JSON.stringify(state);
</script>

<h1>Binding demo</h1>

<form on:submit|preventDefault|stopPropagation={handleSubmit}>
	<label for="name">
		Name:&nbsp;
		<input type="range" id="name" name="name" bind:value={state.num1} />
	</label>

	<label for="age">
		Age:&nbsp;
		<input type="range" name="age" id="age" bind:value={state.num2} />
	</label>
	<br />
	<br />
	<div>
		<label for="isAdult">
			Are you an adult?
			<input type="checkbox" name="isAdult" id="isAdult" bind:checked={state.isAdult} />
		</label>
	</div>
	<br />
	<br />
	<div>
		<h1>Select one</h1>
		<select multiple bind:value={state.selection}>
			{#each options as option (option.id)}
				<option label={option.text} value={option.id} />
			{/each}
		</select>
	</div>
	<div>
		Select as many as you want
		<br />
		{#each checks as check, i (check)}
			<label for="checks">
				{i}. {check}:
				<input type="checkbox" bind:group={state.checks} value={check} name="checks" />
			</label>
			<br />
		{/each}
	</div>
	<div>
		{#each radioOptions as radioOption (radioOption)}
			<label>
				<input type="radio" value={radioOption} bind:group={state.contact} />
				{radioOption}
			</label>
			<br />
		{/each}
	</div>
	<div>
		<label for="comment">
			<h3>Any comments:</h3>
			<textarea id="comment" name="comment" bind:value={state.comment} rows="10" cols="50" />
		</label>
	</div>
</form>

<p>
	{stringifiedState}
</p>

<style>
</style>
