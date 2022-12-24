<script>
	import { PaintBrush } from 'phosphor-svelte';
	import DisplayHour from '../lib/Components/DisplayHour.svelte';
	import DisplayHourTable from '../lib/Components/DisplayHourTable.svelte';
	import LineElement from '../lib/Components/LineElement.svelte';

	export let data;
	let paradasInfo = data.paradasInfo;
</script>

<div>
	<div class="font-light text-xl relative border-l-2 border-teal-200">
		{#each paradasInfo as paradaInfo}
			<LineElement {paradaInfo} />
		{/each}
	</div>
</div>
