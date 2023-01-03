<script>
	//this component displays a single tram stop as a timeline

	import { ArrowClockwise, Star } from 'phosphor-svelte';
	import DisplayHourFav from './DisplayHourFav.svelte';
	import { favourites } from '../../stores';
	import DisplayHourTableLoading from './DisplayHourTableLoading.svelte';

	export let paradaInfo;

	let idParada = paradaInfo.idParada;

	async function fetchStop() {
		return await fetch(
			'https://api.ctan.es/v1/Consorcios/3/paradas/' + idParada + '/servicios?horaIni='
		).then((response) => response.json());
	}
	let servicePromise = fetchStop();
</script>

{#await servicePromise}
	<div>
		<div class="space-y-1">
			<div class="flex justify-between items-center">
				<div class="flex items-baseline space-x-2">
					<button
						on:click={() => {
							servicePromise = fetchStop();
							console.log('reloading ' + idParada);
						}}
						class="self-center text-blue-800 animate-spin duration-500 transition-transform"
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
			<DisplayHourTableLoading />
		</div>
	</div>
{:then serviceInfo}
	<div class="">
		<div class="space-y-1">
			<div class="flex justify-between items-center">
				<div class="flex items-baseline space-x-2">
					<button
						on:click={() => {
							servicePromise = fetchStop();
							console.log('reloading ' + idParada);
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
{/await}
