<script>
	import { Map, Marker } from '@beyonk/svelte-mapbox';
	import { PUBLIC_MAPBOX_PK } from '$env/static/public';
	import { paradas } from '../data/paradas';
	import BackButton from './BackButton.svelte';

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

<div class="-mt-14 mb-3 flex items-baseline justify-between">
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
			<Marker lat={parada.latitud} lng={parada.longitud} label={parada.orden} popup={false}>
				<svg width="700px" height="100%">
					<defs>
						<text
							id={'tag' + parada.orden}
							x="50%"
							y="50%"
							dx="6"
							stroke="#FEFEFE"
							stroke-width="4"
							font-size="19px"
							class="font-semibold font-serif fill-blue-900 ">{parada.orden} · {parada.nombre}</text
						>

						<mask id="outerStroke">
							<rect x="0" y="0" width="100%" height="100%" fill="white" />
							<use xlink:href={'#tag' + parada.orden} fill="#000" />
						</mask>
					</defs>

					<circle r="3" cy="50%" cx="50%" class="fill-blue-900" />
					<use
						xlink:href={'#tag' + parada.orden}
						stroke="blue"
						stroke-width="4"
						opacity=".9"
						fill="none"
						mask="url(#outerStroke)"
					/>
					<text
						id={'tag' + parada.orden}
						x="50%"
						y="50%"
						dx="6"
						font-size="19px"
						class="font-bold font-serif fill-blue-900 hover:fill-teal-600 transition-colors"
						>{parada.orden} · {parada.nombre}</text
					>
				</svg>
			</Marker>
		{/each}
	</Map>
</div>
