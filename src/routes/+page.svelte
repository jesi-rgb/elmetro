<script>
	import { ArrowUp, ArrowDown, ArrowRight } from 'phosphor-svelte';
	import DisplayHour from '../lib/Components/DisplayHour.svelte';
	import DisplayHourTable from '../lib/Components/DisplayHourTable.svelte';

	export let data;
	let paradasInfo = data.paradasInfo;
</script>

<div>
	<div class="font-light text-xl">
		{#each paradasInfo as paradaInfo}
			<div class="my-10">
				<div class="font-bold">{paradaInfo.parada.nombre}</div>

				<DisplayHourTable {paradaInfo} />
			</div>
		{/each}
	</div>
</div>
