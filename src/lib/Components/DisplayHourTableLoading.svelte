<script>
	import { ArrowUp, ArrowDown } from 'phosphor-svelte';
	import { dateFromHour } from '../utils';

	import MinutesLeft from './MinutesLeft.svelte';
</script>

<div>
	<div class="flex flex-row gap-4 items-start">
		<div
			class="flex flex-col w-1/2 px-4 py-2 text-violet-900 bg-violet-100 bg-opacity-60 rounded-sm ring-1 ring-violet-600"
		>
			<span class="flex items-center font-medium text-violet-900">Albolote </span>
			<div class="mt-3">
				<div class="h-1 bg-purple-700 animate-pulse rounded-full mb-2.5" />
				<div class="h-1 bg-purple-700 animate-pulse rounded-full mb-2.5" />
			</div>
		</div>
		<div
			class="flex flex-col w-1/2 px-4 py-2 bg-orange-100 rounded-sm ring-1 ring-orange-600 text-orange-900"
		>
			<span class="flex items-center font-medium text-orange-900">Armilla </span>
			<div class="mt-3">
				<div class="h-1 bg-orange-700 animate-pulse rounded-full mb-2.5" />
				<div class="h-1 bg-orange-700 animate-pulse rounded-full mb-2.5" />
			</div>
		</div>
	</div>
</div>
