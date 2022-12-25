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
	<div class="flex flex-row gap-6 items-start">
		<div
			class="flex flex-col w-1/2 px-4 py-2 text-violet-900 bg-violet-200 bg-opacity-60 rounded-sm ring-1 ring-violet-600"
		>
			<span class="flex items-center font-medium text-violet-900"
				>Albolote <span class="text-violet-600"><ArrowUp /></span>
			</span>
			<MinutesLeft minutesLeft={minsIda} actualHour={paradaInfo.serviciosIda[0].servicio} />
			<MinutesLeft minutesLeft={minsIdaNext} actualHour={paradaInfo.serviciosIda[1].servicio} />
		</div>

		<div
			class="flex flex-col w-1/2 px-4 py-2 bg-orange-200 rounded-sm ring-1 ring-orange-600 text-orange-900"
		>
			<span class="flex items-center font-medium text-orange-900"
				>Armilla <span class="text-orange-600"><ArrowDown /></span>
			</span>
			<MinutesLeft minutesLeft={minsVuelta} actualHour={paradaInfo.serviciosVuelta[0].servicio} />
			<MinutesLeft
				minutesLeft={minsVueltaNext}
				actualHour={paradaInfo.serviciosVuelta[1].servicio}
			/>
		</div>
	</div>
</div>
