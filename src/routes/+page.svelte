<script lang="ts">
	import { setContext } from 'svelte';
	import { createTooltipState } from './tooltipState';
	import Tooltip from './Tooltip.svelte';
	import Control from './Control.svelte';

	const tooltipState = createTooltipState();
	setContext('tooltip-state', tooltipState);
</script>

<Tooltip x={100} y={400} />

<Control />
