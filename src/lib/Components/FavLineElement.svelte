<script>
	//this component displays a single tram stop as a timeline

	import { Star } from 'phosphor-svelte';
	import DisplayHourFav from './DisplayHourFav.svelte';
	import { favourites } from '../../stores';

	// export let value;
	export let paradaInfo;
</script>

<div class="">
	<div class="space-y-1">
		<div class="flex justify-between items-center">
			<div class="flex items-baseline space-x-2">
				<div class="font-semibold text-purple-800 font-mono">
					{paradaInfo.parada.orden}
				</div>
				<span class="w-1 h-1 self-center bg-purple-400 rounded-full" />
				<div class="font-semibold text-2xl text-purple-900">
					{paradaInfo.parada.nombre}
				</div>
			</div>
			<button
				class="text-blue-900"
				on:click={() => {
					let i = $favourites.favourites.findIndex((v) => v == paradaInfo.parada.orden);
					$favourites.favourites.splice(i, 1);
					$favourites.favourites = $favourites.favourites;
				}}
			>
				<Star weight="fill" />
			</button>
		</div>
		<DisplayHourFav {paradaInfo} />
	</div>
</div>
