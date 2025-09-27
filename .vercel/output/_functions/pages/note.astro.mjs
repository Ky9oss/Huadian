/* empty css                                 */
import { c as createComponent, b as createAstro, r as renderComponent, a as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BzEfkZlu.mjs';
import 'kleur/colors';
import { a as actions } from '../chunks/_astro_actions_CTmQVsIc.mjs';
import { $ as $$Base, a as $$Icon } from '../chunks/Base_DvEESZyx.mjs';
import { e as ensure_array_like, a as escape_html, b as attr, c as attr_class } from '../chunks/_@astro-renderers_Uj78H50K.mjs';
export { r as renderers } from '../chunks/_@astro-renderers_Uj78H50K.mjs';
import { T as Time } from '../chunks/time_CriFtgfx.mjs';
/* empty css                                 */

function Note($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			locale,
			notes,
			pages,
			page,
			size,
			series_list,
			tag_list,
			series,
			tags,
			top,
			left,
			right,
			dots
		} = $$props;

		let list = notes;

		$$renderer.push(`<main class="flex flex-col-reverse sm:flex-row gap-10 grow"><article class="flex flex-col gap-4 grow svelte-1o5jcnp"><!--[-->`);

		const each_array = ensure_array_like(list);

		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let note = each_array[$$index_1];

			$$renderer.push(`<section class="flex flex-col sm:flex-row"><div class="flex flex-col gap-1"><div class="flex gap-1 items-center">`);

			if (note.data.top > 0) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<span>`);
				top($$renderer);
				$$renderer.push(`<!----></span>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> `);

			if (note.data.series) {
				$$renderer.push('<!--[-->');
				$$renderer.push(`<button>${escape_html(note.data.series)}</button><b>|</b>`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> <a${attr('href', `/note/${note.id.split("/")}`)} class="link">${escape_html(note.data.title)}</a></div> <time${attr('title', Time.full(note.data.timestamp))} class="font-mono text-2.6 c-remark">${escape_html(Time(note.data.timestamp))}</time></div> <span class="flex items-center gap-1 sm:ml-a c-remark"><!--[-->`);

			const each_array_1 = ensure_array_like(note.data.tags);

			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let tag = each_array_1[$$index];

				$$renderer.push(`<button class="text-3.5 sm:text-sm">#${escape_html(tag)}</button>`);
			}

			$$renderer.push(`<!--]--></span></section>`);
		}

		$$renderer.push(`<!--]--> `);

		if (pages > 1) {
			$$renderer.push('<!--[-->');
			$$renderer.push(`<footer class="sticky bottom-0 flex items-center justify-center gap-3 mt-a pb-1 c-weak bg-background font-mono svelte-1o5jcnp"><button class="svelte-1o5jcnp">`);
			left($$renderer);
			$$renderer.push(`<!----></button> <button${attr_class('svelte-1o5jcnp', void 0, { 'location': 1 == page })}>1</button> `);

			if (pages > 7 && page > 4) {
				$$renderer.push('<!--[-->');
				dots($$renderer);
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> <!--[-->`);

			const each_array_2 = ensure_array_like(Array.from({ length: Math.min(5, pages - 2) }, (_, i) => i + Math.max(2, Math.min(pages - 5, page - 2))));

			for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
				let P = each_array_2[$$index_2];

				$$renderer.push(`<button${attr_class('svelte-1o5jcnp', void 0, { 'location': P == page })}>${escape_html(P)}</button>`);
			}

			$$renderer.push(`<!--]--> `);

			if (pages > 7 && page < pages - 3) {
				$$renderer.push('<!--[-->');
				dots($$renderer);
				$$renderer.push(`<!---->`);
			} else {
				$$renderer.push('<!--[!-->');
			}

			$$renderer.push(`<!--]--> <button${attr_class('svelte-1o5jcnp', void 0, { 'location': pages == page })}>${escape_html(pages)}</button> <button class="svelte-1o5jcnp">`);
			right($$renderer);
			$$renderer.push(`<!----></button></footer>`);
		} else {
			$$renderer.push('<!--[!-->');
		}

		$$renderer.push(`<!--]--></article> <aside class="sm:flex-basis-200px flex flex-col gap-5 svelte-1o5jcnp"><section class="svelte-1o5jcnp"><h3>Series</h3> <p class="svelte-1o5jcnp"><!--[-->`);

		const each_array_3 = ensure_array_like(series_list);

		for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
			let series_item = each_array_3[$$index_3];

			$$renderer.push(`<button${attr_class('svelte-1o5jcnp', void 0, { 'selected': series_item == series })}>${escape_html(series_item)}</button>`);
		}

		$$renderer.push(`<!--]--></p></section> <section class="svelte-1o5jcnp"><h3>Tag</h3> <p class="svelte-1o5jcnp"><!--[-->`);

		const each_array_4 = ensure_array_like(tag_list);

		for (let $$index_4 = 0, $$length = each_array_4.length; $$index_4 < $$length; $$index_4++) {
			let tag = each_array_4[$$index_4];

			$$renderer.push(`<button${attr_class('svelte-1o5jcnp', void 0, { 'selected': tags.includes(tag) })}>${escape_html(tag)}</button>`);
		}

		$$renderer.push(`<!--]--></p></section></aside></main>`);
	});
}

const $$Astro = createAstro();
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const size = 20;
  const page = Number(Astro2.url.searchParams.get("page")) || 1;
  const series = Astro2.url.searchParams.get("series");
  const tags = Astro2.url.searchParams.getAll("tag");
  const { data, error } = await Astro2.callAction(actions.note.list, { size, page, series, tags });
  if (error) {
    switch (error.code) {
      default:
        return Astro2.redirect("/500", 302);
    }
  }
  const { notes, pages, page: index, series_list, tag_list } = data;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Note" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col grow"> ${renderComponent($$result2, "Note", Note, { "client:load": true, "notes": notes, "pages": pages, "page": index, "size": size, "series_list": series_list, "tag_list": tag_list, "series": series, "tags": tags, "client:component-hydration": "load", "client:component-path": "$components/note/Note.svelte", "client:component-export": "default" }, { "dots": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:ellipsis", "slot": "dots" })}`, "left": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:arrow-left", "slot": "left" })}`, "right": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:arrow-right", "slot": "right" })}`, "top": async ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon, { "name": "lucide:flag-triangle-right", "slot": "top" })}` })} </main> ` })}`;
}, "/root/tools/dev/astro/Huadian/src/pages/note/index.astro", void 0);

const $$file = "/root/tools/dev/astro/Huadian/src/pages/note/index.astro";
const $$url = "/note";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	prerender,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
