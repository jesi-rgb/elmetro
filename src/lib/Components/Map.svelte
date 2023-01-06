<script>
	import { Map, Marker } from '@beyonk/svelte-mapbox';
	import { PUBLIC_MAPBOX_PK } from '$env/static/public';
	import { paradas } from '../data/paradas';
	import BackButton from './BackButton.svelte';

	console.log(paradas);
	let mapComponent;

	function onReady() {
		mapComponent.flyTo({
			center: [
				Number.parseFloat(paradas[6].longitud),
				Number.parseFloat(paradas[6].latitud) - 0.039
			],
			zoom: 11,
			speed: 3
		});
	}
</script>

<div class="-mt-8 mb-3 flex items-baseline justify-between">
	<p class="font-pally text-2xl font-bold text-blue-900">Mapa</p>
	<BackButton />
</div>
<div class="h-[800px]">
	<Map
		accessToken={PUBLIC_MAPBOX_PK}
		style="mapbox://styles/jesi-rgb/clcksky4s001015w2y9ggph24"
		bind:this={mapComponent}
		on:ready={onReady}
	>
		{#each paradas as parada}
			<Marker lat={parada.latitud} lng={parada.longitud} label={parada.orden}>
				<!-- <img src={sleepy} width="40px" alt="elmetro durmiendo" /> -->
				<svg width="100%" height="100%">
					<circle r="3" cy="50%" cx="50%" class="fill-blue-900" />
					<text x="50%" y="50%" dx="6" class="font-semibold font-serif fill-blue-900"
						>{parada.orden} · {parada.nombre}</text
					>
				</svg>
			</Marker>
		{/each}
	</Map>
</div>
