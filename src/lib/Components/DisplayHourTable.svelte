<script>
	import { ArrowRight, ArrowUp, ArrowDown } from 'phosphor-svelte';
	import { dateFromHour } from '../utils';
	export let paradaInfo;

	let minsIda = new Date(
		dateFromHour(paradaInfo.serviciosIda[0].servicio) - new Date()
	).getMinutes();
	let minsVuelta = new Date(
		dateFromHour(paradaInfo.serviciosVuelta[0].servicio) - new Date()
	).getMinutes();
	let minsIdaNext = new Date(
		dateFromHour(paradaInfo.serviciosIda[1].servicio) - new Date()
	).getMinutes();
	let minsVueltaNext = new Date(
		dateFromHour(paradaInfo.serviciosVuelta[1].servicio) - new Date()
	).getMinutes();
</script>

<div>
	<div class="flex flex-row space-x-10 items-start">
		<div class="flex flex-col">
			<span class="flex items-center font-medium">Albolote <span><ArrowUp /></span> </span>
			<div class="flex">
				<span class="font-semibold">{minsIda}</span>
				<span class="font-regular ml-3">min</span>
			</div>
			<div class="flex">
				<span class="font-semibold">{minsIdaNext}</span>
				<span class="font-regular ml-3">min</span>
			</div>
		</div>

		<div class="flex flex-col">
			<span class="flex items-center font-medium">Armilla <span><ArrowDown /></span> </span>
			<div class="flex">
				<span class="font-semibold">{minsVuelta}</span>
				<span class="font-regular ml-3">min</span>
			</div>
			<div class="flex">
				<span class="font-semibold">{minsVueltaNext}</span>
				<span class="font-regular ml-3">min</span>
			</div>
		</div>
	</div>
</div>
