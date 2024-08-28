import { derived, get, writable } from 'svelte/store';

function createTooltipState() {
	const state = writable({
		x: 0,
		y: 0
	});

	const readOnlyState = derived(state, (currentState) => currentState);

	const result = {
		set(x: number, y: number) {
			state.update((val) => ({ ...val, x, y }));
		},
		tooltipVisible() {
			state.update((val) => ({ ...val, onScreen: true }));
		},
		currentState: readOnlyState
	};

	return result;
}

export const tooltipState = createTooltipState();
