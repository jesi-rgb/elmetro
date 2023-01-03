<script>
	export let minutesLeft;
	export let actualHour;

	let color;
	if (minutesLeft >= 7) color = '#22c55e';
	else if (minutesLeft < 7 && minutesLeft > 2) color = '#eab308';
	else if (minutesLeft <= 2) color = '#dc2626';
</script>

<div class="flex justify-between items-baseline">
	<span class="flex h-2 w-2 self-center mr-3">
		<span
			class="animate-ping absolute inline-flex h-2 w-2 rounded-full opacity-75"
			style="background-color: {color};"
		/>
		<span class="relative inline-flex rounded-full h-2 w-2" style="background-color: {color};" />
	</span>
	<span class="font-semibold font-mono text-inherit w-1/2">{minutesLeft}´</span>
	<span class="font-mono text-inherit text-sm w-1/2">{actualHour}</span>
</div>
