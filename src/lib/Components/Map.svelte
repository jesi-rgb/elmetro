<script>
	import { Map, Marker } from '@beyonk/svelte-mapbox';
	import { PUBLIC_MAPBOX_PK } from '$env/static/public';
	import { paradas } from '../data/paradas';

	console.log(paradas);
	let mapComponent;

	function onReady() {
		mapComponent.flyTo({ center: [paradas[6].longitud, paradas[6].latitud], zoom: 11 });
	}
</script>

<p>tamos en map</p>
<div class="h-[600px] max-w-3xl">
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
					<circle r="4" cy="50%" cx="50%" class="fill-violet-900" />
					<text x="50%" y="50%" dx="6" class="font-semibold font-pally fill-violet-900"
						>{parada.nombre}</text
					>
				</svg>
			</Marker>
		{/each}
	</Map>
</div>
