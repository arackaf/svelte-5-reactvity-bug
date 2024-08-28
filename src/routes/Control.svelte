<script lang="ts">
	import { getContext } from 'svelte';
	import type { createTooltipState } from './tooltipState';

	const tooltipState = getContext('tooltip-state') as ReturnType<typeof createTooltipState>;
</script>

<button on:click={() => tooltipState.set(200, 400)}>A</button>
<button on:click={() => tooltipState.set(300, 400)}>B</button>
<button on:click={() => tooltipState.set(400, 400)}>C</button>
<button on:click={() => tooltipState.set(500, 400)}>D</button>
