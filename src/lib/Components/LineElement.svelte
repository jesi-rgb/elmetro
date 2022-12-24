<script>
	//this component displays a single tram stop as a timeline

	import DisplayHourTable from './DisplayHourTable.svelte';
	export let paradaInfo;
	export let color;

	color == undefined ? (color = 'teal') : color;
</script>

<div class="bg-{color}-100 bg-opacity-40 p-4 rounded-xl m-4 ml-6 pl-1 ring-1 ring-{color}-600">
	<div class="ml-6">
		<span
			class="flex absolute -left-[17px] justify-center items-center w-[32px] h-[32px] bg-{color}-200 rounded-full ring-2 ring-{color}-700"
		>
			<span class="font-bold text-{color}-900 text-xl">{paradaInfo.parada.orden}</span>
		</span>
		<div class="space-y-2">
			<div class="font-semibold text-{color}-900 text-2xl -mb-3">
				{paradaInfo.parada.nombre}
			</div>
			<div class="block text-sm font-normal text-{color}-500">
				Zona {paradaInfo.nucleo.idZona} · {paradaInfo.nucleo.nombre}
			</div>
			<DisplayHourTable {paradaInfo} />
		</div>
	</div>
</div>
