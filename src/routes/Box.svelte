<script lang="ts">
	import { getContext } from 'svelte';
	import type { createTooltipState } from './tooltipState';

	export let fill: string;
	export let x: string;
	export let y: string;
	export let setTo: number;

	const tooltipState = getContext('tooltip-state') as ReturnType<typeof createTooltipState>;
</script>

<rect
	role="alert"
	{x}
	{y}
	{fill}
	width="100"
	height="100"
	on:mouseenter={() => tooltipState.set(setTo, 50)}
/>
