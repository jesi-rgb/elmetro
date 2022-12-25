<script>
	//this component displays a single tram stop as a timeline

	import DisplayHourTable from './DisplayHourTable.svelte';
	import StopNumber from './StopNumber.svelte';
	export let paradaInfo;
</script>

<StopNumber orden={paradaInfo.parada.orden} />
<div class=" rounded-sm px-4 pb-2 ml-6">
	<div class="space-y-2">
		<div
			style="color: hsl({paradaInfo.parada.orden * 30} 80% 20%);"
			class="font-semibold text-2xl -mb-2"
		>
			{paradaInfo.parada.nombre}
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
