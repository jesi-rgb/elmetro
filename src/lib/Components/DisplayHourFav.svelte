<script>
	import { dateFromHour } from '../utils';

	import MinutesLeft from './MinutesLeft.svelte';
	export let serviceInfo;

	let ida = serviceInfo.servicios.filter((s) => s.sentido == 1);
	let vuelta = serviceInfo.servicios.filter((s) => s.sentido == 2);

	let minsArmilla = new Date(dateFromHour(ida[0].servicio) - new Date()).getMinutes();
	let minsArmillaNext = new Date(dateFromHour(ida[1].servicio) - new Date()).getMinutes();

	let minsAlbolote = new Date(dateFromHour(vuelta[0].servicio) - new Date()).getMinutes();
	let minsAlboloteNext = new Date(dateFromHour(vuelta[1].servicio) - new Date()).getMinutes();
</script>

<div>
	<div class="flex flex-row gap-4 items-start">
		<div
			class="flex flex-col w-1/2 px-4 py-2 text-violet-900 bg-violet-100 bg-opacity-60 rounded-sm ring-1 ring-violet-600"
		>
			<MinutesLeft minutesLeft={minsAlbolote} actualHour={vuelta[0].servicio} />
			<div class="opacity-40">
				<MinutesLeft minutesLeft={minsAlboloteNext} actualHour={vuelta[1].servicio} />
			</div>
		</div>
		<div
			class="flex flex-col w-1/2 px-4 py-2 bg-orange-100 rounded-sm ring-1 ring-orange-600 text-orange-900"
		>
			<MinutesLeft minutesLeft={minsArmilla} actualHour={ida[0].servicio} />
			<div class="opacity-40 text-xl">
				<MinutesLeft minutesLeft={minsArmillaNext} actualHour={ida[1].servicio} />
			</div>
		</div>
	</div>
</div>
