<!-- svelte-ignore a11y-click-events-have-key-events -->
<script>
	import { ArrowClockwise, Star } from 'phosphor-svelte';

	export let value;
	export let fetchStop;
	export let paradaInfo;
	export let serviceInfo;

	import { favourites } from '../../stores';
	import DisplayHourFav from './DisplayHourFav.svelte';
	import sleepy from '../assets/elmetro-sleepy.svg';
	import SleepyMetro from './SleepyMetro.svelte';
</script>

<!-- si estamos en horario de servicio, reproduce los servicios -->
{#if serviceInfo.servicios.length > 0}
	<div
		on:click={() => {
			value = fetchStop();
		}}
		class="cursor-pointer hover:bg-blue-100 px-3 py-2 rounded-md"
	>
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
					<div class="font-semibold text-xl text-purple-900">
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
	<!-- si no hay más servicios, indicamos que no quedan -->
{:else}
	<div
		on:click={() => {
			value = fetchStop();
		}}
		class="cursor-pointer hover:bg-blue-100 px-3 py-2 rounded-md"
	>
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
					<div class="font-semibold text-xl text-purple-900">
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
			<SleepyMetro />
		</div>
	</div>
{/if}
