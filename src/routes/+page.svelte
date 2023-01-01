<script>
	import FavLineElement from '../lib/Components/FavLineElement.svelte';
	import LineElement from '../lib/Components/LineElement.svelte';

	import { cubicOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { Clock } from 'phosphor-svelte';

	const [send, receive] = crossfade({
		duration: (d) => Math.sqrt(d * 200),

		fallback(node, params) {
			const style = getComputedStyle(node);
			const transform = style.transform === 'none' ? '' : style.transform;

			return {
				duration: 600,
				easing: cubicOut,
				css: (t) => `
					transform: ${transform} scale(${t});
					opacity: ${t}
				`
			};
		}
	});

	export let data;
	let paradasInfo = data.paradasInfo;
	$: console.log(paradasInfo);

	console.log(localStorage);
</script>

<div class="my-10">
	<div class="text-6xl font-semibold tracking-tight text-blue-900">ELMETRO©</div>
</div>

<div class="items-baseline space-x-1 mb-9 text-lg">
	<div class="flex space-x-1 items-center">
		<span class="text-blue-900"><Clock weight="bold" /></span>
		<div>Actualizado por última vez a las:</div>
	</div>
	<span class="font-mono font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-sm"
		>{new Date().toLocaleTimeString()}</span
	>
</div>

<!-- fav lines  -->
<div class="text-2xl font-semibold text-blue-900 flex items-center mb-3">
	<span class="text-2xl mr-2">⭐</span>Favs
</div>
<div class="">
	<div class="font-light text-xl relative space-y-4">
		{#each paradasInfo.filter((p) => p.favourite) as paradaInfo, i (paradaInfo.parada.orden)}
			<div
				in:receive={{ key: paradaInfo.parada.orden }}
				out:send={{ key: paradaInfo.parada.orden }}
				animate:flip={{ duration: 100 }}
			>
				<FavLineElement bind:value={paradasInfo} {paradaInfo} />
			</div>
		{/each}
	</div>
</div>
<!-- all the lines  -->

<div class="my-20">
	<hr />
</div>

<div class="font-light text-xl relative border-l-4 border-dotted border-neutral-300 space-y-7">
	{#each paradasInfo.filter((p) => !p.favourite) as paradaInfo, i (paradaInfo.parada.orden)}
		<div
			in:receive={{ key: paradaInfo.parada.orden }}
			out:send={{ key: paradaInfo.parada.orden }}
			animate:flip={{ duration: 100 }}
		>
			<LineElement bind:value={paradasInfo} {paradaInfo} />
		</div>
	{/each}
</div>
