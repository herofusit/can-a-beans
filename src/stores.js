import { writable } from 'svelte/store';

export const selectedCan = writable(null);
export const selectedSeed = writable(null);
export const cans = writable([]);
export const seeds = writable([]);