export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {start:"_app/immutable/entry/start.DWN5khEd.js",app:"_app/immutable/entry/app.BySbT-M2.js",imports:["_app/immutable/entry/start.DWN5khEd.js","_app/immutable/chunks/nSnMMfdc.js","_app/immutable/chunks/BezkS9w-.js","_app/immutable/chunks/BPIsnExL.js","_app/immutable/entry/app.BySbT-M2.js","_app/immutable/chunks/BezkS9w-.js","_app/immutable/chunks/BEokvRgz.js","_app/immutable/chunks/D8Pq6A11.js","_app/immutable/chunks/BPIsnExL.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
