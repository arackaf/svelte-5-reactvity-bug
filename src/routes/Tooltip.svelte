<script lang="ts">
	import { getContext } from 'svelte';
	import { spring } from 'svelte/motion';
	import type { createTooltipState } from './tooltipState';

	export let x: number;
	export let y: number;

	const positionSpring = spring({ x, y }, { stiffness: 0.1, damping: 0.5 });

	const tooltipState = getContext('tooltip-state') as ReturnType<typeof createTooltipState>;

	$: {
		if (x !== 0 && y !== 0) {
			positionSpring.set({
				x: x,
				y: y
			});
			tooltipState.tooltipVisible();
			// setTimeout(() => tooltipState.tooltipVisible());
		}
	}
</script>

<div
	role="contentinfo"
	class="tooltip-root flex flex-col gap-3 bg-white border rounded md:p-2 p-[6px] fixed"
	style="left: {$positionSpring.x}px; top: 200px;"
>
	<h1>Hello World</h1>
</div>
