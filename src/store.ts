import { type Writable, writable } from "svelte/store";

export const isOnHome: Writable<boolean> = writable(true);
export const searchTerm: Writable<undefined> = writable(undefined);
