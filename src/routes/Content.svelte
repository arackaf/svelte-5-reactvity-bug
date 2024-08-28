<script lang="ts">
	import { setContext } from 'svelte';
	import { createTooltipState } from './tooltipState';
	import Tooltip from './Tooltip.svelte';
	import Box from './Box.svelte';

	const tooltipState = createTooltipState();
	setContext('tooltip-state', tooltipState);

	$: ({ currentState } = tooltipState);
</script>

<Tooltip x={$currentState.x} y={$currentState.y} />

<svg width="600" height="600">
	<Box x="100" y="100" setTo={100} fill="red" />
	<Box x="100" y="200" setTo={200} fill="blue" />
	<Box x="100" y="300" setTo={300} fill="purple" />
	<Box x="100" y="400" setTo={400} fill="green" />
</svg>
