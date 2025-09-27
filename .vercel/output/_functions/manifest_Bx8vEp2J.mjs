import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_BzEfkZlu.mjs';
import 'clsx';
import 'cookie';
import './chunks/astro-designed-error-pages_BfiXknDG.mjs';
import 'es-module-lexer';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_B7rFxO_0.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///root/tools/dev/astro/Huadian/","cacheDir":"file:///root/tools/dev/astro/Huadian/node_modules/.astro/","outDir":"file:///root/tools/dev/astro/Huadian/dist/","srcDir":"file:///root/tools/dev/astro/Huadian/src/","publicDir":"file:///root/tools/dev/astro/Huadian/public/","buildClientDir":"file:///root/tools/dev/astro/Huadian/dist/client/","buildServerDir":"file:///root/tools/dev/astro/Huadian/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"500.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/500","isIndex":false,"type":"page","pattern":"^\\/500$","segments":[[{"content":"500","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/500.astro","pathname":"/500","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"feed.xml","links":[],"scripts":[],"styles":[],"routeData":{"route":"/feed.xml","isIndex":false,"type":"endpoint","pattern":"^\\/feed\\.xml\\/?$","segments":[[{"content":"feed.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/feed.xml.ts","pathname":"/feed.xml","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"feed.xsl","links":[],"scripts":[],"styles":[],"routeData":{"route":"/feed.xsl","isIndex":false,"type":"endpoint","pattern":"^\\/feed\\.xsl\\/?$","segments":[[{"content":"feed.xsl","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/feed.xsl.ts","pathname":"/feed.xsl","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"preface/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/preface","isIndex":false,"type":"page","pattern":"^\\/preface$","segments":[[{"content":"preface","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/preface.astro","pathname":"/preface","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DYbHRI75.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DYbHRI75.js"}],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DYbHRI75.js"}],"styles":[{"type":"external","src":"/_astro/about.BazzQymV.css"},{"type":"inline","content":"@keyframes shaky{0%{transform:translate(0) rotate(0)}10%{transform:translate(-1px,-2px) rotate(-1deg)}20%{transform:translate(-3px,1px) rotate(1deg)}30%{transform:translate(2px,-1px) rotate(0)}40%{transform:translate(1px,2px) rotate(1deg)}50%{transform:translate(-1px,-1px) rotate(-1deg)}60%{transform:translate(-3px,1px) rotate(0)}70%{transform:translate(2px,1px) rotate(-1deg)}80%{transform:translate(-1px,-2px) rotate(1deg)}90%{transform:translate(2px,2px) rotate(0)}to{transform:translate(0) rotate(-1deg)}}div[data-astro-cid-zetdm5md]{animation:shaky .6s infinite}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/page.DYbHRI75.js"}],"styles":[{"type":"external","src":"/_astro/about.BazzQymV.css"},{"type":"inline","content":"article.svelte-1o5jcnp footer:where(.svelte-1o5jcnp) button:where(.svelte-1o5jcnp){display:flex;align-items:center;justify-content:center;width:30px;height:30px;margin-top:.25rem 0rem .5rem;border-bottom:2px solid;font-style:var(--monospace);font-size:.875rem;transition:color .15s ease-in-out}article.svelte-1o5jcnp footer:where(.svelte-1o5jcnp) button:where(.svelte-1o5jcnp):hover,article.svelte-1o5jcnp footer:where(.svelte-1o5jcnp) button.location:where(.svelte-1o5jcnp){color:var(--primary-color)}aside.svelte-1o5jcnp section:where(.svelte-1o5jcnp){display:flex;flex-direction:column;gap:5px}aside.svelte-1o5jcnp section:where(.svelte-1o5jcnp) p:where(.svelte-1o5jcnp){display:flex;flex-direction:row;flex-wrap:wrap;gap:5px}aside.svelte-1o5jcnp section:where(.svelte-1o5jcnp) p:where(.svelte-1o5jcnp) button:where(.svelte-1o5jcnp){border-bottom:1px solid var(--primary-color);padding:0rem .2rem;font-size:.9rem;transition:color .1s ease-in-out,background-color .1s ease-in-out}aside.svelte-1o5jcnp section:where(.svelte-1o5jcnp) p:where(.svelte-1o5jcnp) button.selected:where(.svelte-1o5jcnp){color:var(--background-color);background-color:var(--primary-color)}\n"}],"routeData":{"route":"/note","isIndex":true,"type":"page","pattern":"^\\/note$","segments":[[{"content":"note","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/note/index.astro","pathname":"/note","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"never"}}}],"site":"http://127.0.0.1:4321","base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/actions/note.ts",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/actions/index.ts",{"propagation":"in-tree","containsHead":false}],["\u0000astro-internal:actions",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/pages/feed.xml.ts",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/feed.xml@_@ts",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/pages/note/[...id].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/note/[...id]@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/pages/preface.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/preface@_@astro",{"propagation":"in-tree","containsHead":false}],["/root/tools/dev/astro/Huadian/src/pages/404.astro",{"propagation":"none","containsHead":true}],["/root/tools/dev/astro/Huadian/src/pages/500.astro",{"propagation":"none","containsHead":true}],["/root/tools/dev/astro/Huadian/src/pages/note/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000astro-internal:actions":"_astro-internal_actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/500@_@astro":"pages/500.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/feed.xml@_@ts":"pages/feed.xml.astro.mjs","\u0000@astro-page:src/pages/feed.xsl@_@ts":"pages/feed.xsl.astro.mjs","\u0000@astro-page:src/pages/note/index@_@astro":"pages/note.astro.mjs","\u0000@astro-page:src/pages/note/[...id]@_@astro":"pages/note/_---id_.astro.mjs","\u0000@astro-page:src/pages/preface@_@astro":"pages/preface.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Bx8vEp2J.mjs","/root/tools/dev/astro/Huadian/.astro/content-assets.mjs":"chunks/content-assets_nYBqzdSC.mjs","/root/tools/dev/astro/Huadian/.astro/content-modules.mjs":"chunks/content-modules_Dz-S_Wwv.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_D9lcpPrn.mjs","/root/tools/dev/astro/Huadian/node_modules/astro/dist/assets/services/noop.js":"chunks/noop_Dckr9pE2.mjs","@astrojs/svelte/client.js":"_astro/client.svelte._hBhjlyn.js","/root/tools/dev/astro/Huadian/src/components/note/TOC.astro?astro&type=script&index=0&lang.ts":"_astro/TOC.astro_astro_type_script_index_0_lang.D0gMWnAF.js","/root/tools/dev/astro/Huadian/node_modules/@swup/astro/dist/client/SwupProgressPlugin.js":"_astro/SwupProgressPlugin.DMVCNyPs.js","/root/tools/dev/astro/Huadian/node_modules/@swup/astro/dist/client/SwupBodyClassPlugin.js":"_astro/SwupBodyClassPlugin.DU0ijZyF.js","/root/tools/dev/astro/Huadian/node_modules/@swup/astro/dist/client/SwupHeadPlugin.js":"_astro/SwupHeadPlugin.DvOZNxAa.js","/root/tools/dev/astro/Huadian/node_modules/@swup/astro/dist/client/SwupScriptsPlugin.js":"_astro/SwupScriptsPlugin.DeeT9ppa.js","/root/tools/dev/astro/Huadian/src/layouts/Base.astro?astro&type=script&index=0&lang.ts":"_astro/Base.astro_astro_type_script_index_0_lang.DXb6DvjY.js","/root/tools/dev/astro/Huadian/node_modules/@swup/astro/dist/client/SwupA11yPlugin.js":"_astro/SwupA11yPlugin.8nhhmOtR.js","/root/tools/dev/astro/Huadian/node_modules/@swup/astro/dist/client/SwupFadeTheme.js":"_astro/SwupFadeTheme.k61LzBHP.js","astro:scripts/page.js":"_astro/page.DYbHRI75.js","$layouts/header/Navigator.svelte":"_astro/Navigator.CbveaGMI.js","$components/note/Note.svelte":"_astro/Note.NPno4Cyj.js","$components/Tip.svelte":"_astro/Tip.D4oNKXkv.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/root/tools/dev/astro/Huadian/src/components/note/TOC.astro?astro&type=script&index=0&lang.ts","let t;function r(){const n=new Map(document.querySelectorAll(\"li[id^='indicator-']\").values().map(e=>[e.id.replace(/^indicator-/,\"\"),e]));t?.disconnect(),t=new IntersectionObserver(e=>e.forEach(({target:a,isIntersecting:o})=>n.get(a.getAttribute(\"aria-labelledby\"))?.classList.toggle(\"indicate\",o))),document.querySelector(\"#markdown-content\")?.querySelectorAll(\"section[data-heading-rank]\").forEach(e=>t?.observe(e))}r();document.addEventListener(\"astro:after-swap\",r);"]],"assets":["/_astro/white_sailboat_on_water.CYupSRtF.jpg","/_astro/about.BazzQymV.css","/apple-touch-icon.png","/favicon-96x96.png","/favicon.ico","/favicon.svg","/feed.css","/site.webmanifest","/web-app-manifest-192x192.png","/web-app-manifest-512x512.png","/_astro/Base.astro_astro_type_script_index_0_lang.DXb6DvjY.js","/_astro/Navigator.CbveaGMI.js","/_astro/Note.NPno4Cyj.js","/_astro/Swup.CDQnS4HC.js","/_astro/SwupA11yPlugin.8nhhmOtR.js","/_astro/SwupBodyClassPlugin.DU0ijZyF.js","/_astro/SwupFadeTheme.k61LzBHP.js","/_astro/SwupHeadPlugin.DvOZNxAa.js","/_astro/SwupProgressPlugin.DMVCNyPs.js","/_astro/SwupScriptsPlugin.DeeT9ppa.js","/_astro/Tip.1330IoPk.js","/_astro/Tip.D4oNKXkv.js","/_astro/about.BZWZGhcP.css","/_astro/class.DyBlyJuK.js","/_astro/client.svelte._hBhjlyn.js","/_astro/index.CeL5-wOp.css","/_astro/index.modern.D46RI4Wq.js","/_astro/page.DYbHRI75.js","/_astro/props.BdoDH8iw.js","/_astro/render.vllfOqDk.js","/_astro/snippet.BiVP1OAP.js","/_astro/page.DYbHRI75.js","/500.html","/about/index.html","/feed.xml","/feed.xsl","/preface/index.html","/robots.txt","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"3g9iPcENvYzGG2O5QKBhRggGx271soJuwLwn4XW+HIk="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
