<script>
	//this component displays a single tram stop as a timeline
	import LoadingFavElement from './LoadingFavElement.svelte';
	import FavElementContent from './FavElementContent.svelte';

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
	<LoadingFavElement {paradaInfo} {fetchStop} {servicePromise} />
{:then serviceInfo}
	<FavElementContent {paradaInfo} {fetchStop} bind:value={servicePromise} {serviceInfo} />
{/await}
