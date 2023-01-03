<script>
	import { ArrowClockwise, Clock } from 'phosphor-svelte';
</script>

<div class="items-baseline space-x-1 mb-9 text-lg">
	<div class="flex space-x-1 items-center">
		<span class="text-blue-900 text-2xl"><Clock weight="bold" /></span>
		<div>Actualizado las:</div>
		<div class="flex items-center bg-blue-100 rounded-lg space-x-2 px-1">
			<span class="font-mono font-bold text-blue-900 rounded-sm"
				>{new Date().toLocaleTimeString()}</span
			>
			<button
				class="text-xl text-blue-800"
				on:click={() => {
					window.location.reload();
				}}><ArrowClockwise weight="bold" /></button
			>
		</div>
	</div>
</div>
