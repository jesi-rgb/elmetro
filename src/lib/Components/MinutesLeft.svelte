<script>
	export let minutesLeft;
	export let actualHour;
</script>

<div class="flex items-baseline space-x-3">
	<span class="font-semibold font-mono text-teal-900">{minutesLeft}´</span>
	<span class="font-mono text-teal-500 text-xs">{actualHour}</span>
</div>
