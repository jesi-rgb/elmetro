<script>
	//this component displays a single tram stop as a timeline

	import DisplayHourTable from './DisplayHourTable.svelte';
	export let paradaInfo;
</script>

<div class="bg-teal-50 p-4 rounded-xl m-4 ml-0 pl-1">
	<div class="ml-6">
		<span
			class="flex absolute -left-[17px] justify-center items-center w-[32px] h-[32px] bg-teal-200 rounded-full ring-2 ring-teal-600"
		>
			<span class="font-bold text-teal-900 text-xl">{paradaInfo.parada.orden}</span>
		</span>
		<div class="font-semibold text-teal-900 text-2xl">
			{paradaInfo.parada.nombre}
		</div>
		<div class="block mb-2 text-sm font-normal leading-none text-teal-500">
			Zona {paradaInfo.nucleo.idZona} · {paradaInfo.nucleo.nombre}
		</div>
		<DisplayHourTable {paradaInfo} />
	</div>
</div>
