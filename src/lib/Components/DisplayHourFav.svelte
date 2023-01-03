<script>
	import { ArrowUp, ArrowDown } from 'phosphor-svelte';
	import { dateFromHour } from '../utils';

	import MinutesLeft from './MinutesLeft.svelte';
	export let serviceInfo;

	let minsIda = new Date(
		dateFromHour(serviceInfo.serviciosIda[0].servicio) - new Date()
	).getMinutes();
	let minsVuelta = new Date(
		dateFromHour(serviceInfo.serviciosVuelta[0].servicio) - new Date()
	).getMinutes();
	let minsIdaNext = new Date(
		dateFromHour(serviceInfo.serviciosIda[1].servicio) - new Date()
	).getMinutes();
	let minsVueltaNext = new Date(
		dateFromHour(serviceInfo.serviciosVuelta[1].servicio) - new Date()
	).getMinutes();
</script>

<div>
	<div class="flex flex-row gap-4 items-start">
		<div
			class="flex flex-col w-1/2 px-4 py-2 text-violet-900 bg-violet-100 bg-opacity-60 rounded-sm ring-1 ring-violet-600"
		>
			<MinutesLeft minutesLeft={minsIda} actualHour={serviceInfo.serviciosIda[0].servicio} />
			<div class="opacity-40">
				<MinutesLeft minutesLeft={minsIdaNext} actualHour={serviceInfo.serviciosIda[1].servicio} />
			</div>
		</div>
		<div
			class="flex flex-col w-1/2 px-4 py-2 bg-orange-100 rounded-sm ring-1 ring-orange-600 text-orange-900"
		>
			<MinutesLeft minutesLeft={minsVuelta} actualHour={serviceInfo.serviciosVuelta[0].servicio} />
			<div class="opacity-40 text-xl">
				<MinutesLeft
					minutesLeft={minsVueltaNext}
					actualHour={serviceInfo.serviciosVuelta[1].servicio}
				/>
			</div>
		</div>
	</div>
</div>
