<script>
	export let orden;
</script>

<span
	style="background-color: hsl({orden * 70} 80% 90%);border-color:hsl({orden *
		70} 80% 25%); border-width: 2px;"
	class="node flex absolute -left-[22.4px] justify-center items-center w-[40px] h-[40px] rounded-full"
>
	<span style="color: hsl({orden * 70} 80% 25%);" class="font-bold text-xl">{orden}</span>
</span>
