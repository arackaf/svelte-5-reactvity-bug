<script lang="ts">
	import { tooltipState } from './tooltipState';
	import Tooltip from './Tooltip.svelte';

	$: ({ currentState } = tooltipState);

	// $: ({ x, y } = $currentState);
</script>

<Tooltip x={$currentState.x} y={$currentState.y} />
<!-- <Tooltip {x} {y} /> -->

<div class="flex flex-col gap-1 mt-44 ml-10">
	<div
		role="alert"
		class="w-20 h-20 bg-red-500"
		on:mouseenter={() => tooltipState.set(100, 50)}
	></div>
	<div
		role="alert"
		class="w-20 h-20 bg-blue-500"
		on:mouseenter={() => tooltipState.set(200, 50)}
	></div>
	<div
		role="alert"
		class="w-20 h-20 bg-purple-500"
		on:mouseenter={() => tooltipState.set(300, 50)}
	></div>
	<div
		role="alert"
		class="w-20 h-20 bg-green-500"
		on:mouseenter={() => tooltipState.set(400, 50)}
	></div>
</div>
