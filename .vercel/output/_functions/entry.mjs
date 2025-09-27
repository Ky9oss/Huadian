import { r as renderers } from './chunks/_@astro-renderers_Uj78H50K.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CCJoWa5q.mjs';
import { manifest } from './manifest_Bx8vEp2J.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/_actions/_---path_.astro.mjs');
const _page2 = () => import('./pages/404.astro.mjs');
const _page3 = () => import('./pages/500.astro.mjs');
const _page4 = () => import('./pages/about.astro.mjs');
const _page5 = () => import('./pages/feed.xml.astro.mjs');
const _page6 = () => import('./pages/feed.xsl.astro.mjs');
const _page7 = () => import('./pages/note.astro.mjs');
const _page8 = () => import('./pages/note/_---id_.astro.mjs');
const _page9 = () => import('./pages/preface.astro.mjs');
const _page10 = () => import('./pages/robots.txt.astro.mjs');
const _page11 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["node_modules/astro/dist/actions/runtime/route.js", _page1],
    ["src/pages/404.astro", _page2],
    ["src/pages/500.astro", _page3],
    ["src/pages/about.astro", _page4],
    ["src/pages/feed.xml.ts", _page5],
    ["src/pages/feed.xsl.ts", _page6],
    ["src/pages/note/index.astro", _page7],
    ["src/pages/note/[...id].astro", _page8],
    ["src/pages/preface.astro", _page9],
    ["src/pages/robots.txt.ts", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_astro-internal_actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "658ee20f-750f-47eb-8a4d-f8e5289791a8",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
