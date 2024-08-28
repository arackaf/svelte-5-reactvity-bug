<script lang="ts">
	import { setContext } from 'svelte';
	import { createTooltipState } from './tooltipState';
	import Tooltip from './Tooltip.svelte';

	const tooltipState = createTooltipState();
	setContext('tooltip-state', tooltipState);

	$: ({ currentState } = tooltipState);
</script>

<Tooltip x={$currentState.x} y={$currentState.y} />

<svg width="600" height="600">
	<rect
		role="alert"
		x="100"
		y="100"
		fill="red"
		width="100"
		height="100"
		on:mouseenter={() => tooltipState.set(100, 50)}
	/>
	<rect
		role="alert"
		x="100"
		y="200"
		fill="blue"
		width="100"
		height="100"
		on:mouseenter={() => tooltipState.set(200, 50)}
	/>
	<rect
		role="alert"
		x="100"
		y="300"
		fill="purple"
		width="100"
		height="100"
		on:mouseenter={() => tooltipState.set(300, 50)}
	/>
	<rect
		role="alert"
		x="100"
		y="400"
		fill="green"
		width="100"
		height="100"
		on:mouseenter={() => tooltipState.set(400, 50)}
	/>
</svg>
