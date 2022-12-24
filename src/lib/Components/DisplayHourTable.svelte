<script>
	import { ArrowUp, ArrowDown } from 'phosphor-svelte';
	import { dateFromHour } from '../utils';

	import MinutesLeft from './MinutesLeft.svelte';
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
			<span class="flex items-center font-medium text-teal-900"
				>Albolote <span class="text-teal-400"><ArrowUp /></span>
			</span>
			<MinutesLeft minutesLeft={minsIda} actualHour={paradaInfo.serviciosIda[0].servicio} />
			<MinutesLeft minutesLeft={minsIdaNext} actualHour={paradaInfo.serviciosIda[1].servicio} />
		</div>

		<div class="flex flex-col">
			<span class="flex items-center font-medium text-teal-900"
				>Armilla <span class="text-teal-400"><ArrowDown /></span>
			</span>
			<MinutesLeft minutesLeft={minsVuelta} actualHour={paradaInfo.serviciosVuelta[0].servicio} />
			<MinutesLeft
				minutesLeft={minsVueltaNext}
				actualHour={paradaInfo.serviciosVuelta[1].servicio}
			/>
		</div>
	</div>
</div>
