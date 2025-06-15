

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.CkdwFOgF.js","_app/immutable/chunks/D8Pq6A11.js","_app/immutable/chunks/BezkS9w-.js","_app/immutable/chunks/34bkBYqM.js"];
export const stylesheets = [];
export const fonts = [];
