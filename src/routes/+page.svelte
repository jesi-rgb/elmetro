<script>
	export let data;
	let paradasInfo = data.paradasInfo;
	console.log(paradasInfo);
</script>

<div>
	<div class="font-light text-xl font-serif space-y-10">
		<div class="space-y-2">
			{#each paradasInfo as paradaInfo}
				<li class="font-bold">{paradaInfo.parada.nombre}</li>
				<ul class="">
					<li>IDA ꜛ:{paradaInfo.serviciosIda[0].servicio}</li>
					<li>IDA ꜛ:{paradaInfo.serviciosIda[1].servicio}</li>
				</ul>
				<ul class="">
					<li>VUELTA ꜜ:{paradaInfo.serviciosVuelta[0].servicio}</li>
					<li>VUELTA ꜜ:{paradaInfo.serviciosVuelta[1].servicio}</li>
				</ul>
			{/each}
		</div>
	</div>
</div>
