<script>
	export let minutesLeft;
	export let actualHour;
	export let color;
</script>

<div class="flex items-baseline">
	<span class="font-semibold font-mono text-{color}-900 w-1/2">{minutesLeft}´</span>
	<span class="font-mono text-{color}-500 text-xs w-1/2">{actualHour}</span>
</div>
