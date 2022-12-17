<script>
	export let data;
	let paradas = data.paradas;
</script>

<div>
	<li class="font-light text-xl font-serif">
		{#each paradas as parada}
			<li>{parada.nombre}</li>
		{/each}
	</li>
</div>
