<script>
	//this component displays a single tram stop as a timeline

	import { Star } from 'phosphor-svelte';
	import DisplayHourTable from './DisplayHourTable.svelte';
	import StopNumber from './StopNumber.svelte';
	import { favourites } from '../../stores';

	export let paradaInfo;

	let starStyle = paradaInfo.favourite ? 'fill' : 'bold';
</script>

<StopNumber orden={paradaInfo.parada.orden} />
<div class="pb-4 ml-7">
	<div class="space-y-2">
		<div class="flex justify-between items-baseline">
			<div
				style="color: hsl({paradaInfo.parada.orden * 30} 80% 20%);"
				class="font-semibold text-2xl -mb-2"
			>
				{paradaInfo.parada.nombre}
			</div>
			<div style="color: hsl({paradaInfo.parada.orden * 30} 80% 40%);" class="text-right">
				<button
					on:click={() => {
						$favourites.favourites = [...$favourites.favourites, paradaInfo.parada.orden];
					}}
				>
					<Star weight={starStyle} />
				</button>
			</div>
		</div>
		<div
			style="color: hsl({paradaInfo.parada.orden * 30} 80% 30%);opacity:30%;"
			class="block text-sm font-normal"
		>
			Zona {paradaInfo.nucleo.idZona} · {paradaInfo.nucleo.nombre}
		</div>
		<DisplayHourTable {paradaInfo} />
	</div>
</div>
