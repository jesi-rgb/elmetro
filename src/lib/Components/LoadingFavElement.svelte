<script>
	import { ArrowClockwise, Star } from 'phosphor-svelte';

	export let servicePromise;
	export let fetchStop;
	export let paradaInfo;

	import { favourites } from '../../stores';
	import DisplayHourTableLoading from './DisplayHourTableLoading.svelte';
</script>

<div class="px-3 py-2">
	<div class="space-y-1">
		<div class="flex justify-between items-center">
			<div class="flex items-baseline space-x-2">
				<button
					on:click={() => {
						servicePromise = fetchStop();
					}}
					class="self-center text-blue-800 animate-spin duration-500 transition-transform"
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
			<div class="font-regular">actualizado a las: ...</div>
		</div>
		<DisplayHourTableLoading />
	</div>
</div>
