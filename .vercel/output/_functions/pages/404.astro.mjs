/* empty css                                 */
import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BzEfkZlu.mjs';
import 'kleur/colors';
import { $ as $$Base } from '../chunks/Base_DvEESZyx.mjs';
/* empty css                               */
export { r as renderers } from '../chunks/_@astro-renderers_Uj78H50K.mjs';

const prerender = false;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "404", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate`${maybeRenderHead()}<main class="contents" data-astro-cid-zetdm5md><div class="inline-flex flex-col items-center justify-center gap-2 text-center grow-0.5" data-astro-cid-zetdm5md><span class="text-6xl font-bold" data-astro-cid-zetdm5md>404</span><span class="text-2xl" data-astro-cid-zetdm5md>Not Found</span></div><a href="/" class="text-lg text-center link" data-astro-cid-zetdm5md>&gt; <span data-astro-cid-zetdm5md>back</span></a></main>` })}`;
}, "/root/tools/dev/astro/Huadian/src/pages/404.astro", void 0);

const $$file = "/root/tools/dev/astro/Huadian/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$404,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
