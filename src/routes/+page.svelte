<script>
	import LineElement from '../lib/Components/LineElement.svelte';

	export let data;
	let paradasInfo = data.paradasInfo;
</script>

<div class="text-6xl font-semibold tracking-tight text-blue-900">ELMETRO©</div>
<div class="text-xl font-medium tracking-tight text-blue-900">corre que lo pierdes!!</div>
<div>
	<div class="font-light text-xl relative border-l-4 border-dotted border-neutral-300 space-y-7">
		{#each paradasInfo as paradaInfo}
			<LineElement {paradaInfo} />
		{/each}
	</div>
</div>
