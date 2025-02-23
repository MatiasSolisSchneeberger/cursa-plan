/* empty css                                     */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, b as renderTransition, e as createAstro, f as renderComponent } from '../chunks/astro/server_BhrF7Kt2.mjs';
import 'kleur/colors';
import { c as carreras, $ as $$Layout } from '../chunks/Layout_iI79nCHB.mjs';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$HeroTitle = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="rounded-3xl w-full bg-gradient-to-r from-primary-container to-secondary-container p-8 flex flex-col gap-6 items-center justify-center self-stretch shrink-0 relative"> <h1 class="text-center text-display-small text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary relative flex items-center justify-center md:text-display-medium lg:text-display-large">
CursaPlan - Plan de estudios de FaCENA
</h1> <p class="text-primary text-center text-title-small relative self-stretch flex items-center justify-center md:text-body-medium lg:text-headline-small">
Entrá para conocer cada materia, sus correlativas y requisitos, además del plan de estudios, las próximas mesas de examen y toda la información que necesitás para avanzar en tu carrera universitaria.
</p> </div>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/sections/HeroTitle.astro", void 0);

const $$Astro = createAstro();
const $$TarjetaCarrera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$TarjetaCarrera;
  const { carrera, emoji, cursada } = Astro2.props;
  const nombreCarrera = carrera.replace(/-/g, " ");
  return renderTemplate`${cursada ? renderTemplate`${maybeRenderHead()}<a${addAttribute(`/carreras/${carrera}`, "href")} aria-disabled="true" class="rounded-3xl hover:shadow-1 from-25% hover:scale-[1.01] outline-solid outline-outline outline-1 outline p-3 flex flex-row sm:flex-col items-start justify-between flex-1 h-min sm:h-56 relative overflow-hidden transition-all duration-100"${addAttribute({
    background: `linear-gradient(to right, var(--carrera-${carrera}) 25%, transparent)`
  }, "style")} data-astro-cid-f2aptxal${addAttribute(renderTransition($$result, "4hcvoycs", "", `header-${carrera}`), "data-astro-transition-scope")}><div class="bg-surface-variant rounded-full p-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-10 h-10 relative" data-astro-cid-f2aptxal><label class="text-on-primary text-center text-title-large relative flex items-center justify-center" data-astro-cid-f2aptxal${addAttribute(renderTransition($$result, "726sduab", "", `emoji-${carrera}`), "data-astro-transition-scope")}>${emoji}</label></div><h2 class="text-on-background text-center text-title-large relative self-stretch flex items-center justify-center w-full" data-astro-cid-f2aptxal${addAttribute(renderTransition($$result, "gczyi6cr", "", `nombre-${carrera}`), "data-astro-transition-scope")}>${nombreCarrera}</h2></a>` : renderTemplate`<div class="rounded-3xl opacity-50 outline-solid outline-outline outline-1 outline p-3 flex flex-row sm:flex-col justify-between flex-1 h-min sm:h-56 relative overflow-hidden bg-gradient-to-r from-gray-400 items-center sm:items-start" data-astro-cid-f2aptxal><div class="bg-surface-variant rounded-full p-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-10 h-10 relative" data-astro-cid-f2aptxal><label class="text-on-primary text-center text-title-small relative flex items-center justify-center grayscale-emoji" data-astro-cid-f2aptxal${addAttribute(renderTransition($$result, "3ahzc4kh", "", `emoji-${carrera}`), "data-astro-transition-scope")}>${emoji}</label></div><div class="flex w-full flex-col gap-2.5  justify-center items-center sm:items-start self-stretch shrink-0 relative" data-astro-cid-f2aptxal><label class="text-error text-center text-label-large relative self-stretch flex items-center sm:items-start justify-center w-full " data-astro-cid-f2aptxal>
Próximamente
</label><h2 class="text-on-background text-center text-title-large relative self-stretch flex items-center sm:items-start justify-center w-full" data-astro-cid-f2aptxal${addAttribute(renderTransition($$result, "mt4jn4ry", "", `nombre-${carrera}`), "data-astro-transition-scope")}>${nombreCarrera}</h2></div></div>`}`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/components/TarjetaCarrera.astro", "self");

const $$Carreras = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-6 items-center justify-start flex-wrap content-start self-stretch shrink-0 relative"> <h2 class="text-headline-medium text-surface-tint text-center">
Carreras
</h2> <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start justify-start flex-wrap content-start self-stretch shrink-0 relative"> ${carreras.map(({ carrera, emoji, cursada }) => {
    return renderTemplate`${renderComponent($$result, "TarjetaCarrera", $$TarjetaCarrera, { "carrera": carrera, "emoji": emoji, "cursada": cursada.length > 0 })}`;
  })} </ul> </section>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/sections/Carreras.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "CursaPlan | Plan de estudios" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroTitle", $$HeroTitle, {})} ${renderComponent($$result2, "Carreras", $$Carreras, {})} ` })} <!-- 
Bioquímica: rgb(71, 103, 48)
Ingenierías
Ingeniería en Agrimensura: rgb(140, 79, 39)
Ingeniería Eléctrica: rgb(111, 93, 14)
Ingeniería en Electrónica: rgb(51, 105, 64)
Licenciaturas
Licenciatura en Ciencias Biológicas: rgb(62, 104, 55)
Licenciatura en Ciencias Físicas: rgb(60, 96, 144)
Licenciatura en Ciencias Químicas: rgb(143, 75, 56)
Licenciatura en Matemática: rgb(110, 82, 138)
Licenciatura en Sistemas de Información: rgb(46, 98, 140)
Licenciatura en Didáctica de la Matemática: rgb(139, 74, 98)
Profesorados
Profesorado en Biología: rgb(62, 104, 55)
Profesorado en Ciencias Químicas y del Ambiente: rgb(144, 75, 61)
Profesorado en Física: rgb(0, 105, 107)
Profesorado en Matemática: rgb(76, 92, 146)
Profesorado Universitario en Informática: rgb(28, 101, 133)
Otras Carreras -->`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/pages/index.astro", void 0);

const $$file = "D:/Matias/Facultad/Programacion/cursa-plan/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
