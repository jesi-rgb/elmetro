<script>
	import { ArrowClockwise, Star } from 'phosphor-svelte';

	export let value;
	export let fetchStop;
	export let paradaInfo;
	export let serviceInfo;

	import { favourites } from '../../stores';
	import DisplayHourFav from './DisplayHourFav.svelte';
</script>

<div class="">
	<div class="space-y-1">
		<div class="flex justify-between items-center">
			<div class="flex items-baseline space-x-2">
				<button
					on:click={() => {
						value = fetchStop();
					}}
					class="self-center text-blue-800"
				>
					<ArrowClockwise weight="bold" />
				</button>
				<div class="font-semibold text-purple-800 font-mono">
					{paradaInfo.orden}
				</div>
				<span class="w-1 h-1 self-center bg-purple-400 rounded-full" />
				<div class="font-semibold text-2xl text-purple-900">
					{paradaInfo.nombre}
				</div>
			</div>

			<button
				class="text-blue-900"
				on:click={() => {
					let i = $favourites.favourites.findIndex((v) => v == paradaInfo.orden);
					$favourites.favourites.splice(i, 1);
					$favourites.favourites = $favourites.favourites;
				}}
			>
				<Star weight="fill" />
			</button>
		</div>
		<div class="text-sm flex space-x-1">
			<div class="font-regular">actualizado a las:</div>
			<span class="font-mono font-bold text-blue-800">{new Date().toLocaleTimeString()}</span>
		</div>
		<DisplayHourFav {serviceInfo} />
	</div>
</div>
