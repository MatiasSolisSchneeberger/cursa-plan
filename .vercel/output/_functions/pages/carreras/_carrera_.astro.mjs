/* empty css                                        */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as addAttribute, g as renderSlot, e as createAstro, b as renderTransition, f as renderComponent } from '../../chunks/astro/server_BhrF7Kt2.mjs';
import 'kleur/colors';
import { a as $$Icon, c as carreras, $ as $$Layout } from '../../chunks/Layout_C8Ip5NWX.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
export { renderers } from '../../renderers.mjs';

const $$Astro$5 = createAstro();
const $$AoCarrera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$AoCarrera;
  const { a\u00F1o, orientacion } = Astro2.props;
  function obtenerSufijo(a\u00F1o2) {
    if (a\u00F1o2 === 1) return "ro";
    if (a\u00F1o2 === 2) return "do";
    if (a\u00F1o2 === 3) return "ro";
    return "to";
  }
  const sufijo = obtenerSufijo(a\u00F1o);
  let id;
  if (orientacion) {
    id = `${a\u00F1o}-${orientacion}`;
  } else {
    id = `${a\u00F1o}`;
  }
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(`${id}`, "id")} class="flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative w-full overflow-hidden"> <!-- encabezado año --> <h3 class="text-headline-medium text-on-background text-center w-full"> ${a\u00F1o}<span>${sufijo}</span> Año${orientacion && ` - ${orientacion}`} </h3> <div class="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 w-full gap-4"> <!-- Contenido del slot --> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/components/A\xF1oCarrera.astro", void 0);

const $$Astro$4 = createAstro();
const $$HeaderCarrera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$HeaderCarrera;
  const { carrera, emoji } = Astro2.props;
  const NombreCarrera = carrera.replace(/-/g, " ");
  return renderTemplate`${maybeRenderHead()}<header${addAttribute(`rounded-full border border-outline p-3 flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden`, "class")}${addAttribute({
    background: `linear-gradient(to left, var(--carrera-${carrera}) 25%, transparent)`
  }, "style")}${addAttribute(renderTransition($$result, "xo3zsqa6", "", `header-${carrera}`), "data-astro-transition-scope")}> ${renderComponent($$result, "md-filled-icon-button", "md-filled-icon-button", { "href": "/" }, { "default": () => renderTemplate` ${renderComponent($$result, "Icon", $$Icon, { "name": "arrow-left", "size": 22 })} ` })} <h2 class="text-on-background text-headline-small relative flex-1 flex items-center justify-center text-center"${addAttribute(renderTransition($$result, "wliqsuav", "", `nombre-${carrera}`), "data-astro-transition-scope")}> ${NombreCarrera} </h2> <div class="bg-surface-variant rounded-full p-3 flex flex-row gap-2.5 items-center justify-center shrink-0 w-10 h-10 relative"> <div class="text-on-primary text-center text-title-medium relative flex items-center justify-center"${addAttribute(renderTransition($$result, "dyhsrzot", "", `emoji-${carrera}`), "data-astro-transition-scope")}> ${emoji} </div> </div> </header>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/components/HeaderCarrera.astro", "self");

const $$Astro$3 = createAstro();
const $$MateriaRequisito = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MateriaRequisito;
  const { condicion, materia } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`#${materia}`, "href")} class="outline outline-outline outline-1 rounded-full flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden py-1.5 pr-3 pl-1.5"> <div class="bg-tertiary rounded-full p-[5px] flex flex-col gap-2.5 items-center justify-center shrink-0 w-6 h-6 relative"> <p class="text-on-tertiary text-center text-title-medium relative flex items-center justify-center"> ${condicion} </p> </div> <div class="flex flex-row pr-2 items-center justify-start flex-1 relative"> <p class="text-on-secondary-container text-title-small relative flex items-center text-start justify-center"> ${materia} </p> </div> </a>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/components/MateriaRequisito.astro", void 0);

const $$Astro$2 = createAstro();
const $$RequisitosPara = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$RequisitosPara;
  const { CursarRendir, requisitos } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-secondary-container md:flex-1 rounded-2xl flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"> <header class="bg-secondary py-2 px-6 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden"> <p class="text-on-secondary text-center text-title-medium relative flex-1 flex items-center justify-center">
Requisitos Para ${CursarRendir}:
</p> </header> <div class="p-2.5 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden">  ${requisitos.length > 0 ? requisitos.map(({ cond, mat }) => {
    return renderTemplate`${renderComponent($$result, "MateriaRequisito", $$MateriaRequisito, { "condicion": cond, "materia": mat })}`;
  }) : renderTemplate`<div class="flex flex-row pr-2 items-center justify-start flex-1 relative"> <p class="text-on-secondary-container text-title-small relative flex items-center text-center justify-center">
No hay correlativas
</p> </div>`} </div> </div>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/components/RequisitosPara.astro", void 0);

const ToggleMateria = ({ materia, mesas, planDeEstudio }) => {
  const baseURL = "https://www.google.com/calendar/render?action=TEMPLATE";
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => {
    setIsVisible((prevState) => !prevState);
  };
  const formatDate = (date) => new Date(date).toLocaleDateString("es-ES");
  return /* @__PURE__ */ jsxs("article", { className: "flex flex-col gap-2.5 h-min w-full", children: [
    /* @__PURE__ */ jsxs("header", { className: "bg-primary text-on-primary rounded-br-2xl rounded-bl-2xl p-1.5 flex flex-row gap-2.5 items-center w-full justify-center self-stretch shrink-0 relative", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-on-primary text-center text-headline-small relative flex-1 flex items-center justify-center text-pretty", children: materia }),
      /* @__PURE__ */ jsx("md-filled-tonal-icon-button", { toggle: true, "trailing-icon": true, onClick: toggleVisibility, children: isVisible ? /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx("path", { d: "M11.293 7.293a1 1 0 0 1 1.32 -.083l.094 .083l6 6l.083 .094l.054 .077l.054 .096l.017 .036l.027 .067l.032 .108l.01 .053l.01 .06l.004 .057l.002 .059l-.002 .059l-.005 .058l-.009 .06l-.01 .052l-.032 .108l-.027 .067l-.07 .132l-.065 .09l-.073 .081l-.094 .083l-.077 .054l-.096 .054l-.036 .017l-.067 .027l-.108 .032l-.053 .01l-.06 .01l-.057 .004l-.059 .002h-12c-.852 0 -1.297 -.986 -.783 -1.623l.076 -.084l6 -6z" })
          ]
        }
      ) : /* @__PURE__ */ jsxs(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          width: "24",
          height: "24",
          viewBox: "0 0 24 24",
          fill: "currentColor",
          children: [
            /* @__PURE__ */ jsx(
              "path",
              {
                stroke: "none",
                d: "M0 0h24v24H0z",
                fill: "none"
              }
            ),
            /* @__PURE__ */ jsx("path", { d: "M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" })
          ]
        }
      ) })
    ] }),
    isVisible && /* @__PURE__ */ jsxs("footer", { className: "flex w-full flex-col sm:flex-row gap-2 p-2", children: [
      /* @__PURE__ */ jsxs("section", { className: "md:w-full md:flex-1 border border-outline rounded-xl p-2 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("div", { className: "bg-secondary text-on-secondary rounded-2xl p-2.5 flex flex-wrap gap-2.5 items-center justify-center self-stretch shrink-0 relative", children: mesas?.length > 0 ? /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx("p", { className: "text-title-medium relative flex-1 flex items-center text-nowrap justify-center", children: "Próxima Mesa:" }),
          /* @__PURE__ */ jsx("p", { className: "text-center text-title-small flex-1 relative flex items-center justify-center", children: mesas[0].fecha > /* @__PURE__ */ new Date() ? formatDate(mesas[0].fecha) : formatDate(/* @__PURE__ */ new Date()) })
        ] }) : /* @__PURE__ */ jsx("p", { className: "text-title-medium relative flex-1 flex items-center justify-center", children: "No hay fechas" }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2.5 w-full", children: [
          /* @__PURE__ */ jsx("md-filled-tonal-button", { disabled: !mesas?.length, className: "w-full flex-1 text-on-primary", children: "Ver Mas" }),
          /* @__PURE__ */ jsx(
            "md-filled-button",
            {
              href: mesas?.length > 0 && mesas[0]?.fecha ? `${baseURL}&text=Mesa+de+${materia}&dates=${new Date(mesas[0].fecha).toISOString().replace(/-|:|\.\d+/g, "")}` : "#",
              target: "_blank",
              rel: "noopener noreferrer",
              className: "w-full flex-1",
              disabled: !mesas?.length,
              children: "Agendar"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ jsxs("section", { className: "md:w-full md:flex-1 border border-outline rounded-xl p-2 flex flex-col gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden", children: [
        /* @__PURE__ */ jsx("header", { className: "bg-secondary text-on-secondary rounded-2xl p-2.5 flex flex-col lg:flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative", children: /* @__PURE__ */ jsx("p", { className: "text-title-medium relative self-stretch flex items-center justify-center", children: "Plan de Estudio:" }) }),
        /* @__PURE__ */ jsxs("footer", { className: "flex flex-wrap gap-2.5 items-start justify-start self-stretch shrink-0 relative", children: [
          /* @__PURE__ */ jsx("md-filled-tonal-button", { disabled: !planDeEstudio, className: "w-1/2 flex-1 sm:w-full text-on-primary", children: "Ver" }),
          /* @__PURE__ */ jsx("md-elevated-button", { disabled: !planDeEstudio, className: "w-1/2 flex-1 sm:w-full", children: "Descargar" })
        ] })
      ] })
    ] })
  ] });
};

const $$Astro$1 = createAstro();
const $$TarjetaMateria = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TarjetaMateria;
  const { materia, codigo, paraCursar, paraRendir, planDeEstudio, mesas } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<article${addAttribute(materia, "id")} class="w-full rounded-3xl border-solid border-outline border p-2 flex flex-col gap-2 items-center justify-start flex-1 relative overflow-hidden"> <!-- Info de la materia --> <div class="flex flex-row w-full gap-2.5 items-center justify-center relative"> <!-- Nombre de la Materia --> <div class="bg-primary-container w-full rounded-2xl flex flex-col gap-2 items-start justify-start self-stretch shrink-0 relative overflow-hidden"> <!-- Titulo Materia --> ${renderComponent($$result, "ToggleMateria", ToggleMateria, { "materia": materia, "mesas": mesas, "planDeEstudio": planDeEstudio, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "D:/Matias/Facultad/Programacion/cursa-plan/src/components/ToggleMateria.jsx", "client:component-export": "default" })} </div> </div> <!-- Requisitos --> <div class="flex w-full flex-col lg:flex-row gap-2.5 items-start justify-start flex-1 relative"> ${renderComponent($$result, "RequisitosPara", $$RequisitosPara, { "CursarRendir": "Cursar", "requisitos": paraCursar })} ${renderComponent($$result, "RequisitosPara", $$RequisitosPara, { "CursarRendir": "Rendir", "requisitos": paraRendir })} </div> </article>`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/components/TarjetaMateria.astro", void 0);

function Carrera({ carreraData }) {
  function obtenerSufijo(p_año) {
    if (p_año === 1) return "ro";
    if (p_año === 2) return "do";
    if (p_año === 3) return "ro";
    return "to";
  }
  useEffect(() => {
    carreraData.cursada.forEach(({ año }) => {
      const anchorEl = document.querySelector(`#usage-anchor-${año}`);
      const menuEl = document.querySelector(`#usage-menu-${año}`);
      if (anchorEl && menuEl) {
        menuEl.anchorElement = anchorEl;
        anchorEl.addEventListener("click", () => {
          menuEl.open = !menuEl.open;
        });
      }
    });
  }, [carreraData]);
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-3 justify-center", children: carreraData.cursada.map(({ año, orientaciones }) => {
    const sufijo = obtenerSufijo(año);
    const tieneOrientaciones = orientaciones && orientaciones.length > 0;
    return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsxs(
        "md-outlined-button",
        {
          className: "w-min",
          id: `usage-anchor-${año}`,
          href: tieneOrientaciones ? null : `#${año}`,
          "trailing-icon": true,
          children: [
            año,
            sufijo,
            " Año",
            tieneOrientaciones && /* @__PURE__ */ jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", viewBox: "0 0 24 24", fill: "currentColor", slot: "icon", children: [
              /* @__PURE__ */ jsx("path", { stroke: "none", d: "M0 0h24v24H0z", fill: "none" }),
              /* @__PURE__ */ jsx("path", { d: "M18 9c.852 0 1.297 .986 .783 1.623l-.076 .084l-6 6a1 1 0 0 1 -1.32 .083l-.094 -.083l-6 -6l-.083 -.094l-.054 -.077l-.054 -.096l-.017 -.036l-.027 -.067l-.032 -.108l-.01 -.053l-.01 -.06l-.004 -.057v-.118l.005 -.058l.009 -.06l.01 -.052l.032 -.108l.027 -.067l.07 -.132l.065 -.09l.073 -.081l.094 -.083l.077 -.054l.096 -.054l.036 -.017l.067 -.027l.108 -.032l.053 -.01l.06 -.01l.057 -.004l12.059 -.002z" })
            ] })
          ]
        }
      ),
      tieneOrientaciones && /* @__PURE__ */ jsx(
        "md-menu",
        {
          id: `usage-menu-${año}`,
          anchor: `usage-anchor-${año}`,
          className: "absolute top-full left-0 mt-2 z-10",
          children: orientaciones.map((orientacion, index) => /* @__PURE__ */ jsx("md-menu-item", { href: `#${año}-${orientacion.nombre}`, children: /* @__PURE__ */ jsx("div", { slot: "headline", children: orientacion.nombre }) }))
        }
      )
    ] });
  }) });
}

const $$Astro = createAstro();
const getStaticPaths = () => {
  return carreras.filter(({ cursada }) => cursada.length > 0).map(({ carrera }) => ({
    params: { carrera }
  }));
};
const $$carrera = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$carrera;
  const { carrera } = Astro2.params;
  const carreraData = carreras.find((c) => c.carrera === carrera);
  if (!carreraData) {
    throw new Error(`Carrera no encontrada: ${carrera}`);
  }
  const NombreCarrera = carreraData.carrera.replace(/-/g, " ");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": `${NombreCarrera} | Plan de estudio` }, { "default": ($$result2) => renderTemplate`  ${renderComponent($$result2, "HeaderCarrera", $$HeaderCarrera, { "carrera": carreraData.carrera, "emoji": carreraData.emoji })} ${renderComponent($$result2, "BotonAnno", Carrera, { "carreraData": carreraData, "client:visible": true, "client:component-hydration": "visible", "client:component-path": "@components/BotonA\xF1o.jsx", "client:component-export": "default" })}  ${carreraData.cursada?.map(({ a\u00F1o, materias, orientaciones }) => {
    if (orientaciones) {
      return orientaciones.map(
        ({
          nombre: orientacionNombre,
          materias: orientacionMaterias
        }) => renderTemplate`${renderComponent($$result2, "A\xF1oCarrera", $$AoCarrera, { "a\xF1o": a\u00F1o, "orientacion": orientacionNombre }, { "default": ($$result3) => renderTemplate`${orientacionMaterias.map(
          ({
            materia,
            codigo,
            paraCursar,
            paraRendir,
            planDeEstudio,
            mesas
          }) => renderTemplate`${renderComponent($$result3, "TarjetaMateria", $$TarjetaMateria, { "materia": materia, "codigo": codigo, "paraCursar": paraCursar, "paraRendir": paraRendir, "planDeEstudio": planDeEstudio, "mesas": mesas })}`
        )}` })}`
      );
    } else {
      return renderTemplate`${renderComponent($$result2, "A\xF1oCarrera", $$AoCarrera, { "a\xF1o": a\u00F1o }, { "default": ($$result3) => renderTemplate`${materias?.map(
        ({
          materia,
          codigo,
          paraCursar,
          paraRendir,
          planDeEstudio,
          mesas
        }) => renderTemplate`${renderComponent($$result3, "TarjetaMateria", $$TarjetaMateria, { "materia": materia, "codigo": codigo, "paraCursar": paraCursar, "paraRendir": paraRendir, "planDeEstudio": planDeEstudio, "mesas": mesas })}`
      )}` })}`;
    }
  })}` })}`;
}, "D:/Matias/Facultad/Programacion/cursa-plan/src/pages/carreras/[carrera].astro", void 0);

const $$file = "D:/Matias/Facultad/Programacion/cursa-plan/src/pages/carreras/[carrera].astro";
const $$url = "/carreras/[carrera]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$carrera,
	file: $$file,
	getStaticPaths,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
