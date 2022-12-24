<script>
	import { PaintBrush } from 'phosphor-svelte';
	import DisplayHour from '../lib/Components/DisplayHour.svelte';
	import DisplayHourTable from '../lib/Components/DisplayHourTable.svelte';

	export let data;
	let paradasInfo = data.paradasInfo;
	console.log(paradasInfo.map((p) => p.nucleo));
</script>

<div>
	<div class="font-light text-xl relative border-l-2 border-pink-200 ">
		{#each paradasInfo as paradaInfo}
			<div class="my-10">
				<li class="mb-10 ml-6 list-none">
					<span
						class="flex absolute -left-[17px] justify-center items-center w-[32px] h-[32px] bg-pink-200 rounded-full ring-1 ring-pink-600"
					>
						<span class="font-bold text-pink-900">{paradaInfo.parada.orden}</span>
					</span>
					<h3 class="mb-1 text-lg font-semibold text-pink-900 ">{paradaInfo.parada.nombre}</h3>
					<div class="block mb-2 text-sm font-normal leading-none text-pink-400 opacity-80">
						Zona {paradaInfo.nucleo.idZona} · {paradaInfo.nucleo.nombre}
					</div>
					<DisplayHourTable {paradaInfo} />
				</li>
			</div>
		{/each}
	</div>
</div>
