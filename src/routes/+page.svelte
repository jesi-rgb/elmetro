<script>
	import LineElement from '../lib/Components/LineElement.svelte';

	export let data;
	let paradasInfo = data.paradasInfo;
	export let color;

	color == undefined ? (color = 'blue') : color;
</script>

<div class="text-6xl font-semibold tracking-tight text-blue-900">ELMETRO©</div>
<div class="text-xl font-medium tracking-tight text-blue-900">corre que lo pierdes!!</div>
<div>
	<div class="font-light text-xl relative border-l-4 border-double border-{color}-200">
		{#each paradasInfo as paradaInfo}
			<LineElement {paradaInfo} color={'blue'} />
		{/each}
	</div>
</div>
