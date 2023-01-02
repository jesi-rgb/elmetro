<script>
	import FavLineElement from '../lib/Components/FavLineElement.svelte';
	import LineElement from '../lib/Components/LineElement.svelte';
	import { favourites } from '../stores';

	import { cubicOut } from 'svelte/easing';
	import { crossfade } from 'svelte/transition';
	import { flip } from 'svelte/animate';

	import { paradas } from '../lib/data/paradas';
	import LastUpdated from '../lib/Components/LastUpdated.svelte';

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

	// console.log($favourites.favourites.includes(2));
</script>

<div class="my-10">
	<div class="text-6xl font-semibold tracking-tight text-blue-900">ELMETRO©</div>
</div>

<LastUpdated />

<!-- fav lines  -->
<!-- <div class="text-2xl font-semibold text-blue-900 flex items-center mb-3">
	<span class="text-2xl mr-2">⭐</span>Favs
</div>

<div class="">
	<div class="font-light text-xl relative space-y-4">
		{#each paradas.filter((p) => $favourites.favourites.includes(p.orden)) as paradaInfo (paradaInfo.orden)}
			<div
				in:receive={{ key: paradaInfo.orden }}
				out:send={{ key: paradaInfo.orden }}
				animate:flip={{ duration: 100 }}
			>
				<FavLineElement {paradaInfo} />
			</div>
		{/each}
	</div>
</div>

<div class="my-10 xl:my-20">
	<hr />
</div> -->

<!-- rest of the lines  -->
<div class="font-light text-xl relative border-l-4 border-dotted border-neutral-300 space-y-7">
	{#each paradas.filter((p) => !$favourites.favourites.includes(p.orden)) as paradaInfo (paradaInfo.orden)}
		<div
			in:receive={{ key: paradaInfo.orden }}
			out:send={{ key: paradaInfo.orden }}
			animate:flip={{ duration: 100 }}
		>
			<LineElement {paradaInfo} />
		</div>
	{/each}
</div>
