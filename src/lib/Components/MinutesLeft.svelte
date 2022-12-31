<script>
	export let minutesLeft;
	export let actualHour;
</script>

<div class="flex justify-between items-baseline">
	<span class="flex h-2 w-2 self-center mr-3">
		<span class="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-blue-500 opacity-75" />
		<span class="relative inline-flex rounded-full h-2 w-2 bg-blue-500" />
	</span>
	<span class="font-semibold font-mono text-inherit w-1/2">{minutesLeft}´</span>
	<span class="font-mono text-inherit text-sm w-1/2">{actualHour}</span>
</div>
