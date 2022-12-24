<script>
	export let minutesLeft;
	export let actualHour;
</script>

<div class="flex items-baseline space-x-3">
	<span class="font-semibold font-mono text-teal-900 w-1/2">{minutesLeft}´</span>
	<span class="font-mono text-teal-500 text-xs w-1/2">{actualHour}</span>
</div>
