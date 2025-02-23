import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DlsUeq-U.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_BhrF7Kt2.mjs';
import 'clsx';

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

const manifest = deserializeManifest({"hrefRoot":"file:///D:/Matias/Facultad/Programacion/cursa-plan/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"[data-astro-image]{width:100%;height:auto;-o-object-fit:var(--fit);object-fit:var(--fit);-o-object-position:var(--pos);object-position:var(--pos);aspect-ratio:var(--w) / var(--h)}[data-astro-image=responsive]{max-width:calc(var(--w) * 1px);max-height:calc(var(--h) * 1px)}[data-astro-image=fixed]{width:calc(var(--w) * 1px);height:calc(var(--h) * 1px)}\n"}],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_carrera_.DSrSEDXe.css"}],"routeData":{"route":"/carreras/[carrera]","isIndex":false,"type":"page","pattern":"^\\/carreras\\/([^/]+?)\\/?$","segments":[[{"content":"carreras","dynamic":false,"spread":false}],[{"content":"carrera","dynamic":true,"spread":false}]],"params":["carrera"],"component":"src/pages/carreras/[carrera].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/_carrera_.DSrSEDXe.css"},{"type":"inline","content":".grayscale-emoji[data-astro-cid-f2aptxal]{filter:grayscale(100%)}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["D:/Matias/Facultad/Programacion/cursa-plan/src/components/TarjetaCarrera.astro",{"propagation":"in-tree","containsHead":false}],["D:/Matias/Facultad/Programacion/cursa-plan/src/sections/Carreras.astro",{"propagation":"in-tree","containsHead":false}],["D:/Matias/Facultad/Programacion/cursa-plan/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["D:/Matias/Facultad/Programacion/cursa-plan/src/components/HeaderCarrera.astro",{"propagation":"in-tree","containsHead":false}],["D:/Matias/Facultad/Programacion/cursa-plan/src/pages/carreras/[carrera].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/carreras/[carrera]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/carreras/[carrera]@_@astro":"pages/carreras/_carrera_.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","D:/Matias/Facultad/Programacion/cursa-plan/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","D:/Matias/Facultad/Programacion/cursa-plan/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BPqaMCKj.mjs","\u0000@astrojs-manifest":"manifest_CsZT6yGO.mjs","@components/BotonAño.jsx":"_astro/BotonAño.HftQFTjZ.js","D:/Matias/Facultad/Programacion/cursa-plan/src/components/ToggleMateria.jsx":"_astro/ToggleMateria.CKX8HyMs.js","@astrojs/react/client.js":"_astro/client.BA2GgrTr.js","D:/Matias/Facultad/Programacion/cursa-plan/src/components/BotonTema.astro?astro&type=script&index=0&lang.ts":"_astro/BotonTema.astro_astro_type_script_index_0_lang.B8MwXgeb.js","D:/Matias/Facultad/Programacion/cursa-plan/src/components/BotonArriba.astro?astro&type=script&index=0&lang.ts":"_astro/BotonArriba.astro_astro_type_script_index_0_lang.Bml3S6st.js","D:/Matias/Facultad/Programacion/cursa-plan/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","D:/Matias/Facultad/Programacion/cursa-plan/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.BaXdWEvT.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["D:/Matias/Facultad/Programacion/cursa-plan/src/components/BotonTema.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const t=typeof localStorage<\"u\"&&localStorage.getItem(\"picoPreferredColorScheme\")?localStorage.getItem(\"picoPreferredColorScheme\"):window.matchMedia(\"(prefers-color-scheme: dark)\").matches?\"dark\":\"light\";t===\"light\"?(document.documentElement.setAttribute(\"data-theme\",\"light\"),document.documentElement.classList.remove(\"dark\")):(document.documentElement.setAttribute(\"data-theme\",\"dark\"),document.documentElement.classList.add(\"dark\")),window.localStorage.setItem(\"picoPreferredColorScheme\",t);const d=()=>{const e=document.documentElement;e.classList.toggle(\"dark\");const o=e.classList.contains(\"dark\");o?e.setAttribute(\"data-theme\",\"dark\"):e.setAttribute(\"data-theme\",\"light\"),localStorage.setItem(\"picoPreferredColorScheme\",o?\"dark\":\"light\")};document.getElementById(\"themeToggle\").addEventListener(\"click\",d)});document.addEventListener(\"astro:after-swap\",()=>{localStorage.getItem(\"picoPreferredColorScheme\")===\"dark\"?(document.documentElement.setAttribute(\"data-theme\",\"dark\"),document.documentElement.classList.add(\"dark\")):(document.documentElement.setAttribute(\"data-theme\",\"light\"),document.documentElement.classList.remove(\"dark\"))});"],["D:/Matias/Facultad/Programacion/cursa-plan/src/components/BotonArriba.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"astro:page-load\",()=>{const o=document.getElementById(\"scrollToTop\"),e=()=>{window.scrollY>200?o?.classList.remove(\"hidden\"):o?.classList.add(\"hidden\")},t=()=>{window.scrollTo({top:0,behavior:\"smooth\"})};window.addEventListener(\"scroll\",e),o?.addEventListener(\"click\",t)});"],["D:/Matias/Facultad/Programacion/cursa-plan/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var l=\"@vercel/analytics\",f=\"1.4.1\",v=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function d(){return typeof window<\"u\"}function u(){try{const e=\"production\"}catch{}return\"production\"}function w(e=\"auto\"){if(e===\"auto\"){window.vam=u();return}window.vam=e}function m(){return(d()?window.vam:u())||\"production\"}function c(){return m()===\"development\"}function p(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[a,o]of t)if(!Array.isArray(o)){const i=s(o);i.test(n)&&(n=n.replace(i,`/[${a}]`))}for(const[a,o]of t)if(Array.isArray(o)){const i=s(o.join(\"/\"));i.test(n)&&(n=n.replace(i,`/[...${a}]`))}return n}catch{return e}}function s(e){return new RegExp(`/${y(e)}(?=[/?#]|$)`)}function y(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}var b=\"https://va.vercel-scripts.com/v1/script.debug.js\",g=\"/_vercel/insights/script.js\";function h(e={debug:!0}){var r;if(!d())return;w(e.mode),v(),e.beforeSend&&((r=window.va)==null||r.call(window,\"beforeSend\",e.beforeSend));const n=e.scriptSrc||(c()?b:g);if(document.head.querySelector(`script[src*=\"${n}\"]`))return;const t=document.createElement(\"script\");t.src=n,t.defer=!0,t.dataset.sdkn=l+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=f,e.disableAutoTrack&&(t.dataset.disableAutoTrack=\"1\"),e.endpoint&&(t.dataset.endpoint=e.endpoint),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const a=c()?\"Please check if any ad blockers are enabled and try again.\":\"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${a}`)},c()&&e.debug===!1&&(t.dataset.debug=\"false\"),document.head.appendChild(t)}function k({route:e,path:r}){var n;(n=window.va)==null||n.call(window,\"pageview\",{route:e,path:r})}customElements.define(\"vercel-analytics\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\");h({...r,disableAutoTrack:!0,framework:\"astro\",beforeSend:window.webAnalyticsBeforeSend});const t=this.dataset.pathname;k({route:p(t??\"\",n),path:t})}catch(r){throw new Error(`Failed to parse WebAnalytics properties: ${r}`)}}});"]],"assets":["/_astro/poppins-latin-100-normal.CY-M_i9k.woff2","/_astro/poppins-latin-ext-100-normal.BYGiT0vt.woff2","/_astro/poppins-latin-ext-200-normal.UNJ7d0fR.woff2","/_astro/poppins-latin-200-normal.B8tqA5oA.woff2","/_astro/poppins-latin-ext-300-normal.7Zg2msWE.woff2","/_astro/poppins-latin-300-normal.Dku2WoCh.woff2","/_astro/poppins-latin-400-normal.cpxAROuN.woff2","/_astro/poppins-latin-ext-400-normal.CIpeJEZw.woff2","/_astro/poppins-latin-ext-700-normal.DDaViAzG.woff2","/_astro/poppins-latin-700-normal.Qrb0O0WB.woff2","/_astro/poppins-latin-ext-500-normal.H4Q0z8D2.woff2","/_astro/poppins-latin-500-normal.C8OXljZJ.woff2","/_astro/poppins-latin-ext-900-normal.Bz6n_4o4.woff2","/_astro/poppins-latin-900-normal.BmL1zqjw.woff2","/_astro/poppins-latin-ext-600-normal.Cn4C8475.woff2","/_astro/poppins-latin-ext-800-normal.CTiPmeYq.woff2","/_astro/poppins-latin-600-normal.zEkxB9Mr.woff2","/_astro/poppins-latin-ext-200-italic.BPNuh9KU.woff2","/_astro/poppins-latin-200-italic.CeOz3Dg2.woff2","/_astro/poppins-latin-ext-100-italic.BPM7Osc_.woff2","/_astro/poppins-latin-800-normal.Bd8-pIP1.woff2","/_astro/poppins-latin-100-italic.DuNkhShJ.woff2","/_astro/poppins-latin-ext-300-italic.DdDvTq5-.woff2","/_astro/poppins-latin-300-italic.EWCPeN2Y.woff2","/_astro/poppins-latin-ext-400-italic.BiCGV3eO.woff2","/_astro/poppins-latin-400-italic.B4GYq972.woff2","/_astro/poppins-latin-ext-500-italic.CwrTHwbn.woff2","/_astro/poppins-latin-500-italic.o28Otv0U.woff2","/_astro/poppins-latin-ext-600-italic.BqeDa496.woff2","/_astro/poppins-latin-600-italic.CZ4wqKBi.woff2","/_astro/poppins-latin-ext-700-italic.BAdhB_WS.woff2","/_astro/poppins-latin-700-italic.RKf6esGj.woff2","/_astro/poppins-latin-ext-800-italic.DnE_k2k8.woff2","/_astro/poppins-latin-800-italic.B-yag6pl.woff2","/_astro/poppins-latin-ext-900-italic.D1-DXUS9.woff2","/_astro/poppins-latin-900-italic.DzxCezIC.woff2","/_astro/poppins-latin-ext-100-normal.DCo_AZ8Z.woff","/_astro/poppins-latin-100-normal.PssVh1UL.woff","/_astro/poppins-latin-ext-200-normal.DXUl_1bM.woff","/_astro/poppins-latin-200-normal.BxK-3Qw6.woff","/_astro/poppins-latin-ext-300-normal.C9p7gvmA.woff","/_astro/poppins-latin-300-normal.DCNuMXUj.woff","/_astro/poppins-latin-400-normal.BOb3E3N0.woff","/_astro/poppins-latin-ext-400-normal.Ce_uWq1Z.woff","/_astro/poppins-latin-ext-700-normal.CE2WFKmF.woff","/_astro/poppins-latin-700-normal.BVuQR_eA.woff","/_astro/poppins-latin-ext-500-normal.Bl1-S02S.woff","/_astro/poppins-latin-500-normal.DGXqpDMm.woff","/_astro/poppins-latin-ext-900-normal.CdmgbwZ2.woff","/_astro/poppins-latin-900-normal.By5LX1Cr.woff","/_astro/poppins-latin-ext-600-normal.DB6FJURc.woff","/_astro/poppins-latin-ext-800-normal.Dc5wQtSP.woff","/_astro/poppins-latin-600-normal.BJdTmd5m.woff","/_astro/poppins-latin-ext-200-italic.C2FOosxT.woff","/_astro/poppins-latin-200-italic.BgWkyn91.woff","/_astro/poppins-latin-ext-100-italic.CnTqRwhJ.woff","/_astro/poppins-latin-800-normal.YoItoZZV.woff","/_astro/poppins-latin-100-italic.C5n1jwGB.woff","/_astro/poppins-latin-ext-300-italic.CBzyU4Pf.woff","/_astro/poppins-latin-300-italic.4WBEAciR.woff","/_astro/poppins-latin-ext-400-italic.gsPYOGqV.woff","/_astro/poppins-latin-400-italic.BPejoDS-.woff","/_astro/poppins-latin-ext-500-italic.jdc8Bv4M.woff","/_astro/poppins-latin-500-italic.Ce_qjtl5.woff","/_astro/poppins-latin-ext-600-italic.C7MQPb_A.woff","/_astro/poppins-latin-600-italic.BhOZippK.woff","/_astro/poppins-latin-ext-700-italic.WKTwQMp8.woff","/_astro/poppins-latin-700-italic.CW91C-LJ.woff","/_astro/poppins-latin-800-italic.C1L4USJS.woff","/_astro/poppins-latin-ext-800-italic.Bf9uxA7a.woff","/_astro/poppins-latin-900-italic.CbHLOeDC.woff","/_astro/poppins-latin-ext-900-italic.NarrncdC.woff","/_astro/_carrera_.DSrSEDXe.css","/157shots_so.png","/Designer Working.svg","/favicon.svg","/MiLogo.svg","/Student Studying.svg","/_astro/BotonAño.HftQFTjZ.js","/_astro/client.BA2GgrTr.js","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.BScVxmeO.js","/_astro/index.Dy6lLLXr.js","/_astro/jsx-runtime.D_zvdyIk.js","/_astro/ToggleMateria.CKX8HyMs.js"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"YFiBJC1r0Thqqit92o39acxgWyr2Khgga26QeCZLG30="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
