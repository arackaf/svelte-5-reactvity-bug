import { derived, get, writable } from 'svelte/store';

export function createTooltipState() {
	const state = writable({
		x: 0,
		y: 0
	});

	const result = {
		set(x: number, y: number) {
			state.update((val) => ({ ...val, x, y }));
		},
		tooltipVisible() {
			state.update((val) => ({ ...val, onScreen: true }));
		}
	};

	return result;
}
