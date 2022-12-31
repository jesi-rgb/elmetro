<script>
	//this component displays a single tram stop as a timeline

	import { Star } from 'phosphor-svelte';
	import DisplayHourFav from './DisplayHourFav.svelte';
	import DisplayHourTable from './DisplayHourTable.svelte';
	import StopNumber from './StopNumber.svelte';
	export let paradaInfo;

	let starStyle = paradaInfo.favourite ? 'fill' : 'bold';
</script>

<div class="">
	<div class="space-y-1">
		<div class="flex justify-between items-center">
			<div class="font-semibold text-2xl text-purple-900">
				{paradaInfo.parada.nombre}
			</div>
			<button class="text-blue-900">
				<Star weight={starStyle} />
			</button>
		</div>
		<DisplayHourFav {paradaInfo} />
	</div>
</div>
