<script>
	import { ArrowUp, ArrowDown } from 'phosphor-svelte';
	import { dateFromHour } from '../utils';

	import MinutesLeft from './MinutesLeft.svelte';
	export let paradaInfo;
	console.log(paradaInfo);

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
	<div class="flex flex-row gap-4 items-start">
		<div
			class="flex flex-col w-1/2 px-4 py-2 text-violet-900 bg-violet-100 bg-opacity-60 rounded-sm ring-1 ring-violet-600"
		>
			<span class="text-8xl font-bold opacity-10 m-auto absolute"><ArrowUp weight={'bold'} /></span>
			<span class="flex items-center font-medium text-violet-900">Albolote </span>
			<MinutesLeft minutesLeft={minsIda} actualHour={paradaInfo.serviciosIda[0].servicio} />
			<MinutesLeft minutesLeft={minsIdaNext} actualHour={paradaInfo.serviciosIda[1].servicio} />
		</div>
		<div
			class="flex flex-col w-1/2 px-4 py-2 bg-orange-100 rounded-sm ring-1 ring-orange-600 text-orange-900"
		>
			<span class="text-8xl font-bold opacity-10 m-auto absolute"
				><ArrowDown weight={'bold'} /></span
			>
			<span class="flex items-center font-medium text-orange-900">Armilla </span>
			<MinutesLeft minutesLeft={minsVuelta} actualHour={paradaInfo.serviciosVuelta[0].servicio} />
			<MinutesLeft
				minutesLeft={minsVueltaNext}
				actualHour={paradaInfo.serviciosVuelta[1].servicio}
			/>
		</div>
	</div>
</div>
