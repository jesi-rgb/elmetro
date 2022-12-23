<script>
	import { ArrowRight, ArrowUp, ArrowDown } from 'phosphor-svelte';
	import { dateFromHour } from '../utils';
	export let hour;
	export let direction;

	let directionText = direction == 1 ? 'Ida' : 'Vuelta';
</script>

<li class="flex items-center space-x-2">
	{directionText}
	<span>
		{#if direction == 1}
			<ArrowUp />
		{:else}
			<ArrowDown />
		{/if}
	</span>
	<span class="font-semibold"
		>{new Date(Math.abs(dateFromHour(hour) - new Date())).getMinutes()} minutos</span
	>
	<ArrowRight />
	<span>
		{hour}
	</span>
</li>
