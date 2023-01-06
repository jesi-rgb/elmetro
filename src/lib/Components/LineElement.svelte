<script>
	//this component displays a single tram stop as a timeline

	import { Star } from 'phosphor-svelte';
	import DisplayHourTable from './DisplayHourTable.svelte';
	import StopNumber from './StopNumber.svelte';
	import { favourites } from '../../stores';
	import DisplayHourTableLoading from './DisplayHourTableLoading.svelte';
	import sleepy from '../assets/elmetro-sleepy.svg';

	export let paradaInfo;

	let idParada = paradaInfo.idParada;

	async function fetchStop() {
		return await fetch(
			'https://api.ctan.es/v1/Consorcios/3/paradas/' + idParada + '/servicios?horaIni='
		)
			.then((response) => response.json())
			.then((data) => {
				return data;
			});
	}
</script>

{#await fetchStop()}
	<div>
		<StopNumber orden={paradaInfo.orden} />
		<div class="pb-4 ml-7">
			<div class="space-y-2">
				<div class="flex justify-between items-center">
					<div
						style="color: hsl({paradaInfo.orden * 70} 80% 20%);"
						class="font-semibold text-2xl -mb-2"
					>
						{paradaInfo.nombre}
					</div>
					<svg
						aria-hidden="true"
						class="w-5 h-5 text-gray-200 animate-spin fill-blue-600"
						viewBox="0 0 100 101"
					>
						<path
							d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
							fill="currentColor"
						/>
						<path
							d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
							fill="currentFill"
						/>
					</svg>
				</div>

				<DisplayHourTableLoading />
			</div>
		</div>
	</div>
{:then serviceInfo}
	{#if serviceInfo.servicios.length > 0}
		<div>
			<StopNumber orden={paradaInfo.orden} />
			<div class="pb-4 ml-7">
				<div class="space-y-2">
					<div class="flex justify-between items-baseline">
						<div
							style="color: hsl({paradaInfo.orden * 70} 80% 20%);"
							class="font-semibold text-2xl -mb-2"
						>
							{paradaInfo.nombre}
						</div>
						<div style="color: hsl({paradaInfo.orden * 70} 80% 40%);" class="text-right">
							<button
								on:click={() => {
									$favourites.favourites = [...$favourites.favourites, paradaInfo.orden];
								}}
							>
								<Star weight="bold" />
							</button>
						</div>
					</div>

					<DisplayHourTable {serviceInfo} />
				</div>
			</div>
		</div>
	{:else}
		<div>
			<StopNumber orden={paradaInfo.orden} />
			<div class="pb-4 ml-7">
				<div class="space-y-2">
					<div class="flex justify-between items-baseline">
						<div
							style="color: hsl({paradaInfo.orden * 70} 80% 20%);"
							class="font-semibold text-2xl -mb-2"
						>
							{paradaInfo.nombre}
						</div>
						<div style="color: hsl({paradaInfo.orden * 70} 80% 40%);" class="text-right">
							<button
								on:click={() => {
									$favourites.favourites = [...$favourites.favourites, paradaInfo.orden];
								}}
							>
								<Star weight="bold" />
							</button>
						</div>
					</div>

					<div class="flex space-x-3 items-baseline">
						<p class="text-lg">no hay más servicios por hoy</p>
						<img src={sleepy} width="30px" alt="elmetro durmiendo" />
					</div>
				</div>
			</div>
		</div>
	{/if}
{/await}
