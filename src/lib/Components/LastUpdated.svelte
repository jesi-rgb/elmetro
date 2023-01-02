<script>
	import { Clock } from 'phosphor-svelte';
</script>

<div class="items-baseline space-x-1 mb-9 text-lg">
	<div class="flex space-x-1 items-center">
		<span class="text-blue-900"><Clock weight="bold" /></span>
		<div>Actualizado por última vez a las:</div>
	</div>
	<span class="font-mono font-bold text-blue-900 bg-blue-100 px-3 py-1 rounded-sm"
		>{new Date().toLocaleTimeString()}</span
	>
</div>
