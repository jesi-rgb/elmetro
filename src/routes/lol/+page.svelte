<script>
	let characterName;

	async function fetchStop() {
		return await fetch(
			'http://api.ctan.es/v1/Consorcios/3/paradas/' + 15770 + '/servicios?horaIni='
		)
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}
</script>

<main>
	{#await fetchStop()}
		<div role="status" class="max-w-sm animate-pulse">
			<div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5" />
			<div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]" />
			<span class="sr-only">Loading...</span>
		</div>
	{:then stop}
		<div>
			{stop.horaIni}
		</div>
	{/await}
</main>
