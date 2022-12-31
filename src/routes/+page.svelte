<script>
	import { Star } from 'phosphor-svelte';
	import FavLineElement from '../lib/Components/FavLineElement.svelte';
	import LineElement from '../lib/Components/LineElement.svelte';

	export let data;
	$: paradasInfo = data.paradasInfo;
</script>

<div class="my-10">
	<div class="text-6xl font-semibold tracking-tight text-blue-900">ELMETRO©</div>
	<div class="text-xl font-medium tracking-tight text-blue-900">corre que lo pierdes!!</div>
</div>

<!-- fav lines  -->
<div class="text-3xl font-bold text-blue-900 flex items-center">
	<span class="text-2xl mr-2">⭐</span> Favoritos
</div>
<div class="">
	<div class="font-light text-xl relative space-y-4">
		{#each paradasInfo.filter((p) => p.favourite) as paradaInfo (paradaInfo.parada.orden)}
			<FavLineElement {paradaInfo} />
		{/each}
	</div>
</div>
<!-- all the lines  -->

<div class="my-20">
	<hr />
</div>

<div class="font-light text-xl relative border-l-4 border-dotted border-neutral-300 space-y-7">
	{#each paradasInfo.filter((p) => !p.favourite) as paradaInfo (paradaInfo.parada.orden)}
		<LineElement {paradaInfo} />
	{/each}
</div>
