import { c as createComponent, b as createAstro, m as maybeRenderHead, s as spreadAttributes, e as addAttribute, a as renderTemplate, r as renderComponent, u as unescapeHTML, F as Fragment, i as renderSlot, j as renderHead, d as renderScript } from './astro/server_BzEfkZlu.mjs';
import 'kleur/colors';
import { getIconData, iconToSVG } from '@iconify/utils';
import { c as config } from './site.config_DlaBXc_d.mjs';
import 'clsx';
import { n as noop, d as bind_props, c as attr_class, e as ensure_array_like, f as store_get, a as escape_html, u as unsubscribe_stores } from './_@astro-renderers_Uj78H50K.mjs';
/* empty css                         */

/** @import { Equals } from '#client' */


/**
 * @param {unknown} a
 * @param {unknown} b
 * @returns {boolean}
 */
function safe_not_equal(a, b) {
	return a != a
		? b == b
		: a !== b || (a !== null && typeof a === 'object') || typeof a === 'function';
}

/** @import { Readable, StartStopNotifier, Subscriber, Unsubscriber, Updater, Writable } from '../public.js' */
/** @import { Stores, StoresValues, SubscribeInvalidateTuple } from '../private.js' */

/**
 * @type {Array<SubscribeInvalidateTuple<any> | any>}
 */
const subscriber_queue = [];

/**
 * Create a `Writable` store that allows both updating and reading by subscription.
 *
 * @template T
 * @param {T} [value] initial value
 * @param {StartStopNotifier<T>} [start]
 * @returns {Writable<T>}
 */
function writable(value, start = noop) {
	/** @type {Unsubscriber | null} */
	let stop = null;

	/** @type {Set<SubscribeInvalidateTuple<T>>} */
	const subscribers = new Set();

	/**
	 * @param {T} new_value
	 * @returns {void}
	 */
	function set(new_value) {
		if (safe_not_equal(value, new_value)) {
			value = new_value;
			if (stop) {
				// store is ready
				const run_queue = !subscriber_queue.length;
				for (const subscriber of subscribers) {
					subscriber[1]();
					subscriber_queue.push(subscriber, value);
				}
				if (run_queue) {
					for (let i = 0; i < subscriber_queue.length; i += 2) {
						subscriber_queue[i][0](subscriber_queue[i + 1]);
					}
					subscriber_queue.length = 0;
				}
			}
		}
	}

	/**
	 * @param {Updater<T>} fn
	 * @returns {void}
	 */
	function update(fn) {
		set(fn(/** @type {T} */ (value)));
	}

	/**
	 * @param {Subscriber<T>} run
	 * @param {() => void} [invalidate]
	 * @returns {Unsubscriber}
	 */
	function subscribe(run, invalidate = noop) {
		/** @type {SubscribeInvalidateTuple<T>} */
		const subscriber = [run, invalidate];
		subscribers.add(subscriber);
		if (subscribers.size === 1) {
			stop = start(set, update) || noop;
		}
		run(/** @type {T} */ (value));
		return () => {
			subscribers.delete(subscriber);
			if (subscribers.size === 0 && stop) {
				stop();
				stop = null;
			}
		};
	}
	return { set, update, subscribe };
}

const icons = {"fa6-brands":{"prefix":"fa6-brands","icons":{"creative-commons":{"body":"<path fill=\"currentColor\" d=\"m245.83 214.87l-33.22 17.28c-9.43-19.58-25.24-19.93-27.46-19.93c-22.13 0-33.22 14.61-33.22 43.84c0 23.57 9.21 43.84 33.22 43.84c14.47 0 24.65-7.09 30.57-21.26l30.55 15.5c-6.17 11.51-25.69 38.98-65.1 38.98c-22.6 0-73.96-10.32-73.96-77.05c0-58.69 43-77.06 72.63-77.06c30.72-.01 52.7 11.95 65.99 35.86m143.05 0l-32.78 17.28c-9.5-19.77-25.72-19.93-27.9-19.93c-22.14 0-33.22 14.61-33.22 43.84c0 23.55 9.23 43.84 33.22 43.84c14.45 0 24.65-7.09 30.54-21.26l31 15.5c-2.1 3.75-21.39 38.98-65.09 38.98c-22.69 0-73.96-9.87-73.96-77.05c0-58.67 42.97-77.06 72.63-77.06c30.71-.01 52.58 11.95 65.56 35.86M247.56 8.05C104.74 8.05 0 123.11 0 256.05c0 138.49 113.6 248 247.56 248c129.93 0 248.44-100.87 248.44-248c0-137.87-106.62-248-248.44-248m.87 450.81c-112.54 0-203.7-93.04-203.7-202.81c0-105.42 85.43-203.27 203.72-203.27c112.53 0 202.82 89.46 202.82 203.26c-.01 121.69-99.68 202.82-202.84 202.82\"/>","width":496},"creative-commons-by":{"body":"<path fill=\"currentColor\" d=\"M314.9 194.4v101.4h-28.3v120.5h-77.1V295.9h-28.3V194.4c0-4.4 1.6-8.2 4.6-11.3c3.1-3.1 6.9-4.7 11.3-4.7H299c4.1 0 7.8 1.6 11.1 4.7c3.1 3.2 4.8 6.9 4.8 11.3m-101.5-63.7c0-23.3 11.5-35 34.5-35s34.5 11.7 34.5 35q0 34.5-34.5 34.5c-34.5 0-34.5-11.5-34.5-34.5M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256C0 123.1 104.7 8 247.6 8m.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8c103.2 0 202.8-81.1 202.8-202.8c.1-113.8-90.2-203.3-202.8-203.3\"/>","width":496},"creative-commons-sa":{"body":"<path fill=\"currentColor\" d=\"M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256C0 123.1 104.7 8 247.6 8m.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8c103.2 0 202.8-81.1 202.8-202.8c.1-113.8-90.2-203.3-202.8-203.3M137.7 221c13-83.9 80.5-95.7 108.9-95.7c99.8 0 127.5 82.5 127.5 134.2c0 63.6-41 132.9-128.9 132.9c-38.9 0-99.1-20-109.4-97h62.5c1.5 30.1 19.6 45.2 54.5 45.2c23.3 0 58-18.2 58-82.8c0-82.5-49.1-80.6-56.7-80.6q-49.65 0-55.8 43.8h18.2l-49.2 49.2l-49-49.2z\"/>","width":496},"creative-commons-nc":{"body":"<path fill=\"currentColor\" d=\"M247.6 8C387.4 8 496 115.9 496 256c0 147.2-118.5 248-248.4 248C113.1 504 0 393.2 0 256C0 123.1 104.7 8 247.6 8M55.8 189.1Q44.7 219.7 44.7 256c0 110.9 92.1 202.4 203.7 202.4c122.4 0 177.2-101.8 178.5-104.1l-93.4-41.6c-7.7 37.1-41.2 53-68.2 55.4v38.1h-28.8V368q-41.25-.45-75.3-29.7l34.1-34.5c31.7 29.4 86.4 31.8 86.4-2.2c0-6.2-2.2-11.2-6.6-15.1c-14.2-6-1.8-.1-219.3-97.4M248.4 52.3c-38.4 0-112.4 8.7-170.5 93l94.8 42.5c10-31.3 40.4-42.9 63.8-44.3v-38.1h28.8v38.1c22.7 1.2 43.4 8.9 62 23L295 199.7c-42.7-29.9-83.5-8-70 11.1c53.4 24.1 43.8 19.8 93 41.6l127.1 56.7c4.1-17.4 6.2-35.1 6.2-53.1c0-57-19.8-105-59.3-143.9c-39.3-39.9-87.2-59.8-143.6-59.8\"/>","width":496},"creative-commons-nd":{"body":"<path fill=\"currentColor\" d=\"M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256C0 123.1 104.7 8 247.6 8m.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8c103.2 0 202.8-81.1 202.8-202.8c.1-113.8-90.2-203.3-202.8-203.3m94 144.3v42.5H162.1V197zm0 79.8v42.5H162.1v-42.5z\"/>","width":496},"creative-commons-zero":{"body":"<path fill=\"currentColor\" d=\"M247.6 8C389.4 8 496 118.1 496 256c0 147.1-118.5 248-248.4 248C113.6 504 0 394.5 0 256C0 123.1 104.7 8 247.6 8m.8 44.7C130.2 52.7 44.7 150.6 44.7 256c0 109.8 91.2 202.8 203.7 202.8c103.2 0 202.8-81.1 202.8-202.8c.1-113.8-90.2-203.3-202.8-203.3m-.4 60.5c-81.9 0-102.5 77.3-102.5 142.8S166.1 398.8 248 398.8S350.5 321.5 350.5 256S329.9 113.2 248 113.2m0 53.9c3.3 0 6.4.5 9.2 1.2c5.9 5.1 8.8 12.1 3.1 21.9l-54.5 100.2c-1.7-12.7-1.9-25.1-1.9-34.4c0-28.8 2-88.9 44.1-88.9m40.8 46.2c2.9 15.4 3.3 31.4 3.3 42.7c0 28.9-2 88.9-44.1 88.9c-13.5 0-32.6-7.7-20.1-26.4z\"/>","width":496}},"lastModified":1734421834,"width":448,"height":512},"lucide":{"prefix":"lucide","icons":{"align-justify":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 12h18M3 18h18M3 6h18\"/>","hidden":true},"arrow-left":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m12 19l-7-7l7-7m7 7H5\"/>"},"arrow-right":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 12h14m-7-7l7 7l-7 7\"/>"},"arrow-up-to-line":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M5 3h14m-1 10l-6-6l-6 6m6-6v14\"/>"},"at-sign":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8\"/></g>"},"calendar":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M8 2v4m8-4v4\"/><rect width=\"18\" height=\"18\" x=\"3\" y=\"4\" rx=\"2\"/><path d=\"M3 10h18\"/></g>"},"circle-alert":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 8v4m0 4h.01\"/></g>"},"circle-check":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m9 12l2 2l4-4\"/></g>"},"circle-question-mark":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3m.08 4h.01\"/></g>"},"circle-x":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"m15 9l-6 6m0-6l6 6\"/></g>"},"clock-arrow-down":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 6v6l2 1\"/><path d=\"M12.337 21.994a10 10 0 1 1 9.588-8.767\"/><path d=\"m14 18l4 4l4-4m-4-4v8\"/></g>"},"clock-arrow-up":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12 6v6l1.56.78\"/><path d=\"M13.227 21.925a10 10 0 1 1 8.767-9.588\"/><path d=\"m14 18l4-4l4 4m-4 4v-8\"/></g>"},"copyright":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M14.83 14.83a4 4 0 1 1 0-5.66\"/></g>"},"earth":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M21.54 15H17a2 2 0 0 0-2 2v4.54M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05\"/><circle cx=\"12\" cy=\"12\" r=\"10\"/></g>"},"ellipsis":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"1\"/><circle cx=\"19\" cy=\"12\" r=\"1\"/><circle cx=\"5\" cy=\"12\" r=\"1\"/></g>"},"feather":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1zM16 8L2 22m15.5-7H9\"/>"},"file-search":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M14 2v4a2 2 0 0 0 2 2h4\"/><path d=\"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3m5 11l-1.5-1.5\"/><circle cx=\"5\" cy=\"14\" r=\"3\"/></g>"},"flag-triangle-right":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M6 22V2.8a.8.8 0 0 1 1.17-.71l11.38 5.69a.8.8 0 0 1 0 1.44L6 15.5\"/>"},"hash":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M4 9h16M4 15h16M10 3L8 21m8-18l-2 18\"/>"},"history":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 12a9 9 0 1 0 9-9a9.75 9.75 0 0 0-6.74 2.74L3 8\"/><path d=\"M3 3v5h5m4-1v5l4 2\"/></g>"},"house":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8\"/><path d=\"M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z\"/></g>"},"info":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M12 16v-4m0-4h.01\"/></g>"},"layers":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z\"/><path d=\"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12\"/><path d=\"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17\"/></g>"},"list":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3 5h.01M3 12h.01M3 19h.01M8 5h13M8 12h13M8 19h13\"/>"},"log-out":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 17l5-5l-5-5m5 5H9m0 9H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4\"/>"},"message-square":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z\"/>"},"moon":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401\"/>"},"pencil":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497zM15 5l4 4\"/>"},"pilcrow":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M13 4v16m4-16v16m2-16H9.5a4.5 4.5 0 0 0 0 9H13\"/>"},"refresh-cw":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M3 12a9 9 0 0 1 9-9a9.75 9.75 0 0 1 6.74 2.74L21 8\"/><path d=\"M21 3v5h-5m5 4a9 9 0 0 1-9 9a9.75 9.75 0 0 1-6.74-2.74L3 16\"/><path d=\"M8 16H3v5\"/></g>"},"reply":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M20 18v-2a4 4 0 0 0-4-4H4\"/><path d=\"m9 17l-5-5l5-5\"/></g>"},"rss":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16\"/><circle cx=\"5\" cy=\"19\" r=\"1\"/></g>"},"scale":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m16 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1M2 16l3-8l3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1m5 5h10M12 3v18M3 7h2c2 0 5-1 7-2c2 1 5 2 7 2h2\"/>"},"send":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11zm7.318-19.539l-10.94 10.939\"/>"},"share-2":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"18\" cy=\"5\" r=\"3\"/><circle cx=\"6\" cy=\"12\" r=\"3\"/><circle cx=\"18\" cy=\"19\" r=\"3\"/><path d=\"m8.59 13.51l6.83 3.98m-.01-10.98l-6.82 3.98\"/></g>"},"signature":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m21 17l-2.156-1.868A.5.5 0 0 0 18 15.5v.5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1c0-2.545-3.991-3.97-8.5-4a1 1 0 0 0 0 5c4.153 0 4.745-11.295 5.708-13.5a2.5 2.5 0 1 1 3.31 3.284M3 21h18\"/>"},"siren":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M7 18v-6a5 5 0 1 1 10 0v6M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2zm16-9h1m-3.5-7.5L18 5M2 12h1m9-10v1M4.929 4.929l.707.707M12 12v6\"/>"},"smile":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"10\"/><path d=\"M8 14s1.5 2 4 2s4-2 4-2M9 9h.01M15 9h.01\"/></g>"},"sun":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"12\" r=\"4\"/><path d=\"M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41\"/></g>"},"tent":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M3.5 21L14 3m6.5 18L10 3m5.5 18L12 15l-3.5 6M2 21h20\"/>"},"timer":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M10 2h4m-2 12l3-3\"/><circle cx=\"12\" cy=\"14\" r=\"8\"/></g>"},"trash":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2\"/>"},"triangle-alert":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01\"/>"},"user-round":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><circle cx=\"12\" cy=\"8\" r=\"5\"/><path d=\"M20 21a8 8 0 0 0-16 0\"/></g>"},"user-round-pen":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 10.821-7.487m8.557 3.113a1 1 0 0 0-3.004-3.004l-4.01 4.012a2 2 0 0 0-.506.854l-.837 2.87a.5.5 0 0 0 .62.62l2.87-.837a2 2 0 0 0 .854-.506z\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/></g>"},"user-round-x":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\"><path d=\"M2 21a8 8 0 0 1 11.873-7\"/><circle cx=\"10\" cy=\"8\" r=\"5\"/><path d=\"m17 17l5 5m0-5l-5 5\"/></g>"},"x":{"body":"<path fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-width=\"2\" d=\"M18 6L6 18M6 6l12 12\"/>"}},"lastModified":1757879424,"width":24,"height":24},"simple-icons":{"prefix":"simple-icons","icons":{"astro":{"body":"<path fill=\"currentColor\" d=\"M8.358 20.162c-1.186-1.07-1.532-3.316-1.038-4.944c.856 1.026 2.043 1.352 3.272 1.535c1.897.283 3.76.177 5.522-.678c.202-.098.388-.229.608-.36c.166.473.209.95.151 1.437c-.14 1.185-.738 2.1-1.688 2.794c-.38.277-.782.525-1.175.787c-1.205.804-1.531 1.747-1.078 3.119l.044.148a3.16 3.16 0 0 1-1.407-1.188a3.3 3.3 0 0 1-.544-1.815c-.004-.32-.004-.642-.048-.958c-.106-.769-.472-1.113-1.161-1.133c-.707-.02-1.267.411-1.415 1.09c-.012.053-.028.104-.045.165zm-5.961-4.445s3.24-1.575 6.49-1.575l2.451-7.565c.092-.366.36-.614.662-.614s.57.248.662.614l2.45 7.565c3.85 0 6.491 1.575 6.491 1.575L16.088.727C15.93.285 15.663 0 15.303 0H8.697c-.36 0-.615.285-.784.727z\"/>"},"svelte":{"body":"<path fill=\"currentColor\" d=\"M10.354 21.125a4.44 4.44 0 0 1-4.765-1.767a4.1 4.1 0 0 1-.703-3.107a4 4 0 0 1 .134-.522l.105-.321l.287.21a7.2 7.2 0 0 0 2.186 1.092l.208.063l-.02.208a1.25 1.25 0 0 0 .226.83a1.34 1.34 0 0 0 1.435.533a1.2 1.2 0 0 0 .343-.15l5.59-3.562a1.16 1.16 0 0 0 .524-.778a1.24 1.24 0 0 0-.211-.937a1.34 1.34 0 0 0-1.435-.533a1.2 1.2 0 0 0-.343.15l-2.133 1.36a4 4 0 0 1-1.135.499a4.44 4.44 0 0 1-4.765-1.766a4.1 4.1 0 0 1-.702-3.108a3.86 3.86 0 0 1 1.742-2.582l5.589-3.563a4 4 0 0 1 1.135-.499a4.44 4.44 0 0 1 4.765 1.767a4.1 4.1 0 0 1 .703 3.107a4 4 0 0 1-.134.522l-.105.321l-.286-.21a7.2 7.2 0 0 0-2.187-1.093l-.208-.063l.02-.207a1.25 1.25 0 0 0-.226-.831a1.34 1.34 0 0 0-1.435-.532a1.2 1.2 0 0 0-.343.15L8.62 9.368a1.16 1.16 0 0 0-.524.778a1.24 1.24 0 0 0 .211.937a1.34 1.34 0 0 0 1.435.533a1.2 1.2 0 0 0 .344-.151l2.132-1.36a4 4 0 0 1 1.135-.498a4.44 4.44 0 0 1 4.765 1.766a4.1 4.1 0 0 1 .702 3.108a3.86 3.86 0 0 1-1.742 2.583l-5.589 3.562a4 4 0 0 1-1.135.499m10.358-17.95C18.484-.015 14.082-.96 10.9 1.068L5.31 4.63a6.4 6.4 0 0 0-2.896 4.295a6.75 6.75 0 0 0 .666 4.336a6.4 6.4 0 0 0-.96 2.396a6.83 6.83 0 0 0 1.168 5.167c2.229 3.19 6.63 4.135 9.812 2.108l5.59-3.562a6.4 6.4 0 0 0 2.896-4.295a6.76 6.76 0 0 0-.665-4.336a6.4 6.4 0 0 0 .958-2.396a6.83 6.83 0 0 0-1.167-5.168\"/>"},"github":{"body":"<path fill=\"currentColor\" d=\"M12 .297c-6.63 0-12 5.373-12 12c0 5.303 3.438 9.8 8.205 11.385c.6.113.82-.258.82-.577c0-.285-.01-1.04-.015-2.04c-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729c1.205.084 1.838 1.236 1.838 1.236c1.07 1.835 2.809 1.305 3.495.998c.108-.776.417-1.305.76-1.605c-2.665-.3-5.466-1.332-5.466-5.93c0-1.31.465-2.38 1.235-3.22c-.135-.303-.54-1.523.105-3.176c0 0 1.005-.322 3.3 1.23c.96-.267 1.98-.399 3-.405c1.02.006 2.04.138 3 .405c2.28-1.552 3.285-1.23 3.285-1.23c.645 1.653.24 2.873.12 3.176c.765.84 1.23 1.91 1.23 3.22c0 4.61-2.805 5.625-5.475 5.92c.42.36.81 1.096.81 2.22c0 1.606-.015 2.896-.015 3.286c0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12\"/>"},"google":{"body":"<path fill=\"currentColor\" d=\"M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z\"/>"},"x":{"body":"<path fill=\"currentColor\" d=\"M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584l-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z\"/>"}},"lastModified":1758603977,"width":24,"height":24},"svg-spinners":{"prefix":"svg-spinners","icons":{"3-dots-move":{"body":"<circle cx=\"4\" cy=\"12\" r=\"0\" fill=\"currentColor\"><animate fill=\"freeze\" attributeName=\"r\" begin=\"0;SVGUppsBdVN.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"0;3\"/><animate fill=\"freeze\" attributeName=\"cx\" begin=\"SVGqCgsydxJ.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"4;12\"/><animate fill=\"freeze\" attributeName=\"cx\" begin=\"SVG3PwDNd6F.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"12;20\"/><animate id=\"SVG3V8yEdYE\" fill=\"freeze\" attributeName=\"r\" begin=\"SVG6wCQhd9Q.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"3;0\"/><animate id=\"SVGUppsBdVN\" fill=\"freeze\" attributeName=\"cx\" begin=\"SVG3V8yEdYE.end\" dur=\"0.001s\" values=\"20;4\"/></circle><circle cx=\"4\" cy=\"12\" r=\"3\" fill=\"currentColor\"><animate fill=\"freeze\" attributeName=\"cx\" begin=\"0;SVGUppsBdVN.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"4;12\"/><animate fill=\"freeze\" attributeName=\"cx\" begin=\"SVGqCgsydxJ.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"12;20\"/><animate id=\"SVG4PgJdbds\" fill=\"freeze\" attributeName=\"r\" begin=\"SVG3PwDNd6F.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"3;0\"/><animate id=\"SVG6wCQhd9Q\" fill=\"freeze\" attributeName=\"cx\" begin=\"SVG4PgJdbds.end\" dur=\"0.001s\" values=\"20;4\"/><animate fill=\"freeze\" attributeName=\"r\" begin=\"SVG6wCQhd9Q.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"0;3\"/></circle><circle cx=\"12\" cy=\"12\" r=\"3\" fill=\"currentColor\"><animate fill=\"freeze\" attributeName=\"cx\" begin=\"0;SVGUppsBdVN.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"12;20\"/><animate id=\"SVG38aCdcdI\" fill=\"freeze\" attributeName=\"r\" begin=\"SVGqCgsydxJ.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"3;0\"/><animate id=\"SVG3PwDNd6F\" fill=\"freeze\" attributeName=\"cx\" begin=\"SVG38aCdcdI.end\" dur=\"0.001s\" values=\"20;4\"/><animate fill=\"freeze\" attributeName=\"r\" begin=\"SVG3PwDNd6F.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"0;3\"/><animate fill=\"freeze\" attributeName=\"cx\" begin=\"SVG6wCQhd9Q.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"4;12\"/></circle><circle cx=\"20\" cy=\"12\" r=\"3\" fill=\"currentColor\"><animate id=\"SVGwaWzveSq\" fill=\"freeze\" attributeName=\"r\" begin=\"0;SVGUppsBdVN.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"3;0\"/><animate id=\"SVGqCgsydxJ\" fill=\"freeze\" attributeName=\"cx\" begin=\"SVGwaWzveSq.end\" dur=\"0.001s\" values=\"20;4\"/><animate fill=\"freeze\" attributeName=\"r\" begin=\"SVGqCgsydxJ.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"0;3\"/><animate fill=\"freeze\" attributeName=\"cx\" begin=\"SVG3PwDNd6F.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"4;12\"/><animate fill=\"freeze\" attributeName=\"cx\" begin=\"SVG6wCQhd9Q.end\" calcMode=\"spline\" dur=\"0.5s\" keySplines=\".36,.6,.31,1\" values=\"12;20\"/></circle>"},"pulse-3":{"body":"<circle cx=\"12\" cy=\"12\" r=\"0\" fill=\"currentColor\"><animate id=\"SVGHRb9bJhy\" fill=\"freeze\" attributeName=\"r\" begin=\"0;SVGUoIUme6Z.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"0;11\"/><animate fill=\"freeze\" attributeName=\"opacity\" begin=\"0;SVGUoIUme6Z.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"1;0\"/></circle><circle cx=\"12\" cy=\"12\" r=\"0\" fill=\"currentColor\"><animate id=\"SVGaun8abat\" fill=\"freeze\" attributeName=\"r\" begin=\"SVGHRb9bJhy.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"0;11\"/><animate fill=\"freeze\" attributeName=\"opacity\" begin=\"SVGHRb9bJhy.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"1;0\"/></circle><circle cx=\"12\" cy=\"12\" r=\"0\" fill=\"currentColor\"><animate id=\"SVGUoIUme6Z\" fill=\"freeze\" attributeName=\"r\" begin=\"SVGHRb9bJhy.begin+0.8s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"0;11\"/><animate fill=\"freeze\" attributeName=\"opacity\" begin=\"SVGHRb9bJhy.begin+0.8s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"1;0\"/></circle>"},"pulse-rings-3":{"body":"<path fill=\"currentColor\" d=\"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z\" transform=\"matrix(0 0 0 0 12 12)\"><animateTransform id=\"SVGr0dxBdJO\" attributeName=\"transform\" begin=\"0;SVG7Xy0ecki.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" type=\"translate\" values=\"12 12;0 0\"/><animateTransform additive=\"sum\" attributeName=\"transform\" begin=\"0;SVG7Xy0ecki.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" type=\"scale\" values=\"0;1\"/><animate attributeName=\"opacity\" begin=\"0;SVG7Xy0ecki.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"1;0\"/></path><path fill=\"currentColor\" d=\"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z\" transform=\"matrix(0 0 0 0 12 12)\"><animateTransform id=\"SVGp2dhBhxA\" attributeName=\"transform\" begin=\"SVGr0dxBdJO.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" type=\"translate\" values=\"12 12;0 0\"/><animateTransform additive=\"sum\" attributeName=\"transform\" begin=\"SVGr0dxBdJO.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" type=\"scale\" values=\"0;1\"/><animate attributeName=\"opacity\" begin=\"SVGr0dxBdJO.begin+0.4s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"1;0\"/></path><path fill=\"currentColor\" d=\"M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z\" transform=\"matrix(0 0 0 0 12 12)\"><animateTransform id=\"SVG7Xy0ecki\" attributeName=\"transform\" begin=\"SVGr0dxBdJO.begin+0.8s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" type=\"translate\" values=\"12 12;0 0\"/><animateTransform additive=\"sum\" attributeName=\"transform\" begin=\"SVGr0dxBdJO.begin+0.8s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" type=\"scale\" values=\"0;1\"/><animate attributeName=\"opacity\" begin=\"SVGr0dxBdJO.begin+0.8s\" calcMode=\"spline\" dur=\"1.2s\" keySplines=\".52,.6,.25,.99\" values=\"1;0\"/></path>"}},"lastModified":1754901419,"width":24,"height":24},"local":{"prefix":"local","lastModified":1758994414,"icons":{"site-logo":{"body":"<g fill=\"none\" stroke=\"currentColor\" stroke-linecap=\"round\" stroke-miterlimit=\"10\" stroke-width=\"9\"><path d=\"M267.8 608.8c-9.6-17.6-20.6-41.6-28.1-71.6-8.9-35.4-9.8-66.3-8.7-88.3 220.1 54.3 440.2 108.5 660.4 162.8-8.6 19.4-24.2 47.4-52.4 72.5a197 197 0 0 1-31.2 22.9M369.7 435.2c14.9-24.5 167.3-267.7 375.5-252.5 24.7 1.8 53.3 7.5 84.4 20.5M682.1 503.1c5.1-53.8 22.5-146.9 88.4-234.8 19.5-26 40.1-47.2 59.5-64.4\"/><path d=\"M803.6 547.7C787 506.6 762.1 427.8 776 331.1c6-41.5 17.6-76.2 29.4-103.3M130 641.5c20.6-21.9 26.3-45.6 17.6-56.8-7.3-9.4-23.4-8.1-29.8-7.6-31.5 2.5-51.3 29.8-57.2 37.9-8.3 11.5-21.2 29.3-19.1 54 .6 6.5 3.7 31.6 26 47.2 14.5 10.2 30.8 11.1 40.7 10.9 74.7-1.3 178.9-66.1 266.5-67.1 29.4-.3 74.4 6.3 130.5 45.1m-134 29c7.2 10.7 19.4 24.9 38.2 31.8 35.4 12.9 72.7-8.6 84.7-14.7 38.6-19.6 110.4-30 256.7 17.5m-98.7 18c7.1 8.2 19 19.5 36.2 26 41.3 15.8 78.6-8.7 121.2-19.3 32.8-8.2 81.8-11.4 149.3 14.1\"/></g>","width":1000,"height":845.9}}}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro$4 = createAstro();
const $$Icon$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Icon$1;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/root/tools/dev/astro/Huadian/node_modules/astro-icon/components/Icon.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$3 = createAstro();
const $$App = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$App;
  const { title, subtitle, description, author, article } = Astro2.props;
  return renderTemplate(_a || (_a = __template(["<html", "> <head><title>", " ", '</title><meta name="description"', '><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta property="og:title"', '><meta property="og:type"', '><meta property="og:image"', '><meta property="og:description"', '><meta property="og:url"', ">", '<link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96"><link rel="shortcut icon" href="/favicon.ico"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><meta name="apple-mobile-web-app-title"', `><link rel="manifest" href="/site.webmanifest"><link rel="sitemap" href="/sitemap-index.xml"><link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Serif+SC:wght@200..900&family=Noto+Serif:ital,wght@1,200..900&family=Playwrite+MX:wght@100..400&display=swap" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" as="style" href="https://fontsapi.zeoseven.com/442/main/result.css" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" as="style" href="https://fontsapi.zeoseven.com/556/main/result.css" onload="this.onload=null;this.rel='stylesheet'"><link rel="preload" as="style" href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.16.4/katex.min.css" onload="this.onload=null;this.rel='stylesheet'">`, "", "", "", '<script>\n			var theme = localStorage.getItem("theme");\n			if (theme) document.documentElement.dataset.theme = theme;\n		<\/script>', "</head> <body> ", " </body></html>"])), addAttribute(Astro2.currentLocale, "lang"), subtitle && `${subtitle} |`, title, addAttribute(description, "content"), addAttribute(Astro2.generator, "content"), addAttribute(`${subtitle && `${subtitle} | `}${title}`, "content"), addAttribute(article && "article" || "website", "content"), addAttribute(new URL("/favicon.svg", Astro2.site), "content"), addAttribute(description, "content"), addAttribute(new URL(Astro2.url.pathname, Astro2.site), "content"), article && [renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`, renderTemplate`<meta property="article:published_time"${addAttribute(article.timestamp.toISOString(), "content")}>`, article.section && renderTemplate`<meta property="article:section"${addAttribute(article.section, "content")}>`, article.tags?.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`)], addAttribute(title, "content"), (Astro2.currentLocale === "zh-hk" || Astro2.currentLocale === "zh-mo") && renderTemplate`<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Serif+HK:wght@200..900&display=swap" onload="this.onload=null;this.rel='stylesheet'">`, Astro2.currentLocale === "zh-tw" && renderTemplate`<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC:wght@200..900&display=swap" onload="this.onload=null;this.rel='stylesheet'">`, Astro2.currentLocale === "ja" && renderTemplate`<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@200..900&display=swap" onload="this.onload=null;this.rel='stylesheet'">`, Astro2.currentLocale === "ko" && renderTemplate`<link rel="preload" as="style" href="https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@200..900&display=swap" onload="this.onload=null;this.rel='stylesheet'">`, renderHead(), renderSlot($$result, $$slots["default"]));
}, "/root/tools/dev/astro/Huadian/src/layouts/App.astro", void 0);

function ThemeSwitcher($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { sun, moon, dark = false } = $$props;

		$$renderer.push(`<button class="items-center" aria-label="Toggle dark theme">`);

		if (dark) {
			$$renderer.push('<!--[-->');
			moon($$renderer);
			$$renderer.push(`<!---->`);
		} else {
			$$renderer.push('<!--[!-->');
			sun($$renderer);
			$$renderer.push(`<!---->`);
		}

		$$renderer.push(`<!--]--></button>`);
		bind_props($$props, { dark });
	});
}

function Navigator($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let {
			locale,
			route,
			home,
			note,
			about,
			globe,
			rss,
			sun,
			moon,
			bars,
			close
		} = $$props;

		$$renderer.push(`<div role="button"${attr_class('fixed top-0 left-0 w-screen h-screen pointer-events-auto bg-#aaaaaa88 transition-background-color sm:hidden', void 0, { 'pointer-events-none': true, 'bg-transparent': true })}></div> <nav${attr_class('fixed top-0 right-0 flex flex-col justify-between items-start gap-5 p-5 bg-background h-full sm:contents overflow-hidden transition-transform svelte-ja5klc', void 0, { 'transform-translate-x-full': true })}><header class="grid gap-5 c-secondary grid-rows-[repeat(5,1fr)] sm:grid-rows-none sm:grid-cols-[repeat(4,1fr)] svelte-ja5klc"><button class="sm:hidden">`);
		close($$renderer);
		$$renderer.push(`<!----></button> <a href="/"${attr_class('svelte-ja5klc', void 0, { 'location': route === "/" })}><span class="svelte-ja5klc">`);
		home($$renderer);
		$$renderer.push(`<!----></span> <p class="svelte-ja5klc">Home</p></a> <a href="/note"${attr_class('svelte-ja5klc', void 0, { 'location': route.startsWith("/note") })}><span class="svelte-ja5klc">`);
		note($$renderer);
		$$renderer.push(`<!----></span> <p class="svelte-ja5klc">Note</p></a> <a href="/about"${attr_class('svelte-ja5klc', void 0, { 'location': route.startsWith("/about") })}><span class="svelte-ja5klc">`);
		about($$renderer);
		$$renderer.push(`<!----></span> <p class="svelte-ja5klc">About</p></a></header> <footer class="flex flex-col gap-2 sm:gap-5 sm:flex-row sm:gap-7 svelte-ja5klc">`);
		ThemeSwitcher($$renderer, { sun, moon });
		$$renderer.push(`<!----> <a href="/feed.xml" target="_blank" aria-label="Subscription" class="inline-flex svelte-ja5klc">`);
		rss($$renderer);
		$$renderer.push(`<!----></a></footer></nav> <button class="sm:hidden">`);
		bars($$renderer);
		$$renderer.push(`<!----></button>`);
	});
}

const $$Astro$2 = createAstro();
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Icon;
  const { name, inline, size, title } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<figure class="relative inline-flex items-center font-normal contain-layout group"> ${renderComponent($$result, "I", $$Icon$1, { "name": name, "size": size, "is:inline": inline, "class": "relative top-0.05em" })} ${title && renderTemplate`<figcaption class="absolute bottom-full left-50% -transform-translate-x-50% mb-1 rd-1 py-1 px-1.25 w-max c-background bg-primary text-3.5 z-2 pointer-events-none opacity-0 invisible transition-[opacity,visibility,transform] translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0">${title}</figcaption>`} </figure>`;
}, "/root/tools/dev/astro/Huadian/src/components/Icon.astro", void 0);

const $$Astro$1 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  let { locale, author, copyright } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="flex flex-col sm:flex-row items-center justify-between gap-2 mt-8 mb-5 sm:mb-3 text-size-sm font-mono"> <div class="flex items-center gap-1"> ${copyright.type != "CC0 1.0" && [
    renderTemplate`<span> ${renderComponent($$result, "Icon", $$Icon, { "name": "lucide:copyright" })} </span>`,
    renderTemplate`<span>${copyright.year}</span>`
  ]} ${typeof author === "string" ? renderTemplate`<span>${author}</span>` : !author.link ? renderTemplate`<span>${author.name}</span>` : renderTemplate`<a${addAttribute(author.link, "href")} target="_blank" rel="noopener noreferrer"> ${author.name} </a>`} <span>|</span> <p>Powered by</p> <a href="https://github.com/Ky9oss/Huadian" aria-label="Theme" target="_blank" class="inline-flex">${renderComponent($$result, "Icon", $$Icon, { "name": "simple-icons:github", "title": "Huadian", "inline": true })}</a> </div> </footer>`;
}, "/root/tools/dev/astro/Huadian/src/layouts/Footer.astro", void 0);

const tips = writable([]);

function Tip($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		var $$store_subs;

		// Global reactive store containing array of active tips
		// This store is shared across all instances of the Tip component
		/**
		 * Remove a specific tip from the active tips list
		 * @param tip - The tip object to remove
		 */
		/**
		 * Public API function to display a new tip/notification
		 * This function can be imported and called from other components
		 * @param type - Type of notification (determines icon and styling)
		 * @param content - Text content to display in the notification
		 */
		// Add tip to the reactive store (triggers UI update)
		// Auto-remove tip after 2.5 seconds for better UX
		// Props: Icons object passed from parent containing icon renderers
		let { $$slots, $$events, ...icons } = $$props;

		$$renderer.push(`<figure class="fixed top-0 left-0 w-full h-full flex flex-col pr-5 z-3 pointer-events-none overflow-hidden"><!--[-->`);

		const each_array = ensure_array_like(store_get($$store_subs ??= {}, '$tips', tips));

		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let tip = each_array[$$index];

			$$renderer.push(`<section class="relative flex items-center gap-2 ml-a mt-7 b-2 b-solid b-weak rd-1 py-4 px-3 w-xs bg-background shadow-md pointer-events-initial"><span class="inline-flex">`);
			icons[tip.type]($$renderer);
			$$renderer.push(`<!----></span> <p>${escape_html(tip.content)}</p> <span class="ml-a"><button>`);
			icons.x($$renderer);
			$$renderer.push(`<!----></button></span></section>`);
		}

		$$renderer.push(`<!--]--></figure>`);

		if ($$store_subs) unsubscribe_stores($$store_subs);
	});
}

const $$Astro = createAstro();
const $$Base = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Base;
  let route = Astro2.url.pathname;
  const { locale = "zh_CN", title: subtitle, description = config.description, article } = Astro2.props;
  const title = config.title;
  return renderTemplate`${renderScript($$result, "/root/tools/dev/astro/Huadian/src/layouts/Base.astro?astro&type=script&index=0&lang.ts")} ${renderComponent($$result, "App", $$App, { "title": title, "subtitle": subtitle, "description": description, "article": article, "author": typeof config.author == "string" ? config.author : config.author.name }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Tip", Tip, { "client:load": true, "client:component-hydration": "load", "client:component-path": "$components/Tip.svelte", "client:component-export": "default" }, { "error": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:circle-x", "slot": "error", "is:inline": true })}`, "information": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:info", "slot": "information", "is:inline": true })}`, "question": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:circle-question-mark", "slot": "question", "is:inline": true })}`, "success": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:circle-check", "slot": "success", "is:inline": true })}`, "warning": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:circle-alert", "slot": "warning", "is:inline": true })}`, "x": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:x", "slot": "x", "is:inline": true })}` })} ${maybeRenderHead()}<div class="flex flex-col mx-a px-3 w-[min(100%,1000px)]"> <div id="body" class="flex flex-col min-h-screen"> <header class="sticky top-0 flex items-center justify-between pt-3 pb-1 mb-4 bg-background z-2 sm:static sm:pb-12"> <a href="/" class="text-size-lg sm:text-size-2xl font-bold">${title}</a> ${renderComponent($$result2, "Navigator", Navigator, { "locale": locale, "route": route, "client:load": true, "client:component-hydration": "load", "client:component-path": "$layouts/header/Navigator.svelte", "client:component-export": "default" }, { "about": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:at-sign", "slot": "about" })}`, "bars": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:align-justify", "slot": "bars" })}`, "close": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:x", "slot": "close", "is:inline": true })}`, "globe": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:earth", "slot": "globe" })}`, "home": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:tent", "slot": "home", "is:inline": true })}`, "moon": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:moon", "slot": "moon" })}`, "note": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:list", "slot": "note" })}`, "rss": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:rss", "slot": "rss" })}`, "sun": ($$result3) => renderTemplate`${renderComponent($$result3, "Icon", $$Icon$1, { "name": "lucide:sun", "slot": "sun" })}` })} </header> ${renderSlot($$result2, $$slots["default"])} </div> ${renderComponent($$result2, "Footer", $$Footer, { "locale": locale, "author": config.author, "copyright": config.copyright })} </div> ` })}`;
}, "/root/tools/dev/astro/Huadian/src/layouts/Base.astro", void 0);

export { $$Base as $, $$Icon as a, $$Icon$1 as b };
