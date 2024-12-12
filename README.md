# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/basics)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/basics)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/basics/devcontainer.json)

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

![just-the-basics](https://github.com/withastro/astro/assets/2244813/a0a5533c-a856-4198-8470-2d67b1d7c554)

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   └── Card.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).








<article
	class="bg-surface-variant rounded-3xl w-1/2 border-solid border-outline border p-1.5 flex flex-row gap-1.5 items-center justify-start flex-1 relative overflow-hidden">
	<!-- encabezado -->
	<header class="flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
		<!-- Nombre de la materia -->
		<div
			class="bg-primary w-full rounded-[18px] p-2.5 flex flex-col gap-1.5 items-center justify-start flex-1 relative overflow-hidden">
			<div
				class="bg-primary-container rounded-[14px] flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative">
				<!-- Nombre -->
				<div
					class="bg-on-primary rounded-xl p-1.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative">
					<h3
						class="text-primary text-headline-small text-center text-2xl relative flex-1 flex items-center justify-center">
						{materia}
					</h3>
				</div>
				<!-- codigo -->
				<div
					class="pt-1 pr-3.5 pb-1 pl-3.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 relative">
					<p
						class="text-on-primary-container text-center text-label-large relative self-stretch flex items-center justify-center">
						Código: {codigo}
					</p>
				</div>
			</div>

			<md-filled-select class="text-tertiary">
				<md-select-option value="Cursando">
					<div slot="headline">Cursando</div>
				</md-select-option>
				<md-select-option value="Regular">
					<div slot="headline">Regular</div>
				</md-select-option>
				<md-select-option value="Aprobado">
					<div slot="headline">Aprobado</div>
				</md-select-option>
			</md-filled-select>
		</div>
		<!-- Proxima Mesa -->
		<div
			class="bg-surface-tint md:w-1/3 w-full rounded-3xl p-3 flex flex-col gap-2 items-center justify-between self-stretch flex-1 relative overflow-hidden">
			<div
				class="bg-on-primary-container rounded-xl flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 p-2 relative">
				<p
					class="text-primary-container text-center text-title-large relative self-stretch flex items-center justify-center">
					Proxima Mesa:
				</p>
			</div>
			<div
				class="bg-surface-variant rounded-xl p-2 flex flex-col gap-2 items-center justify-center self-stretch shrink-0 relative">
				<p
					class="text-on-surface-variant text-label-large text-center relative self-stretch flex items-center justify-center">
					{mesas[0].dia} / {mesas[0].mes} / {mesas[0].año}
				</p>
			</div>
			<div class="flex flex-row gap-2.5 w-full">
				<md-filled-tonal-button class="w-full text-on-primary"> Ver Mas </md-filled-tonal-button>
				<md-elevated-button class="w-full"> Agendar </md-elevated-button>
			</div>
		</div>
		<!-- Plan de estudio -->
		<div
			class="bg-surface-tint md:w-1/3 w-full rounded-3xl p-3 flex flex-col gap-2 items-center justify-between self-stretch shrink-0 relative overflow-hidden">
			<div
				class="bg-on-primary-container rounded-xl flex flex-col gap-2.5 items-center justify-center p-2 self-stretch shrink-0 relative">
				<p
					class="text-primary-container text-center text-title-large relative self-stretch flex items-center justify-center">
					Plan de Estudio:
				</p>
			</div>
			<div class="flex flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
				<md-filled-tonal-button class="w-full text-on-primary"> Ver </md-filled-tonal-button>
				<md-elevated-button class="w-full"> Descargar </md-elevated-button>
			</div>
		</div>
	</header>

	<md-divider inset style="--md-divider-thickness: 2px; --md-sys-color-outline-variant: var(--md-sys-color-primary);">
	</md-divider>

	<div class="flex flex-col md:flex-row gap-2.5 items-start justify-start self-stretch shrink-0 relative">
		<div
			class="bg-secondary-fixed rounded-3xl w-full md:w-1/3 flex flex-col gap-0 items-start justify-start flex-1 relative overflow-hidden">
			<header
				class="bg-secondary p-2.5 gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
				<p class="text-on-primary text-center text-title-large relative flex items-center justify-center">
					Requisitos Para Cursar:
				</p>
			</header>
			<div class="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
				<!-- Materia -->
				{
					paraCursar.map(({cond, mat}) => {
						return <MateriaRequisito condicion={cond} materia={mat} />
					})
				}
			</div>
		</div>

		<div
			class="bg-secondary-fixed rounded-3xl w-full md:w-1/3 flex flex-col gap-0 items-start justify-start flex-1 relative overflow-hidden">
			<header
				class="bg-secondary p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
				<p class="text-on-primary text-center text-title-large relative flex items-center justify-center">
					Requisitos Para el Final:
				</p>
			</header>

			<div class="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
				<!-- Materia -->
				{
					paraRendir.map(({cond, mat}) => {
						return <MateriaRequisito condicion={cond} materia={mat} />
					})
				}
			</div>
		</div>

		<div
			class="bg-tertiary-fixed rounded-3xl w-full md:w-1/3 flex flex-col gap-0 items-start justify-start flex-1 relative overflow-hidden">
			<header
				class="bg-tertiary p-2.5 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden">
				<p class="text-on-primary text-center text-title-large relative flex items-center justify-center">
					Podes Cursar:
				</p>
			</header>

			<div class="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden">
				<!-- Materia -->
				<MateriaHabilitada materia="Algebra I" />
			</div>
		</div>
	</div>
</article>

<!-- <div class="flex flex-col gap-2.5 items-start justify-start flex-1 relative">
  <div
    class="bg-light-secondary-fixed rounded-3xl flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
    style="
      box-shadow: var(
        --elevation-light-1-box-shadow,
        0px 1px 3px 1px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3)
      );
    "
  >
    <div
      class="bg-light-secondary pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden"
    >
      <div
        class="text-light-on-primary text-center font-['Poppins-Bold',_sans-serif] text-base font-bold relative flex-1 flex items-center justify-center"
      >
        Requisitos Para Cursar:
      </div>
    </div>
    <div
      class="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
    >
      <div
        class="bg-light-secondary-fixed-dim rounded-xl flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
      >
        <div
          class="bg-light-surface-tint p-1.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-9 relative overflow-hidden"
        >
          <div
            class="text-light-on-primary text-center font-['Poppins-SemiBold',_sans-serif] text-base font-semibold relative flex items-center justify-center"
          >
            A
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center justify-start flex-1 relative"
        >
          <div
            class="text-light-on-secondary-fixed-variant text-center font-['Poppins-Regular',_sans-serif] text-base font-normal relative flex items-center justify-center"
          >
            Materia I
          </div>
        </div>
      </div>
      <div
        class="bg-light-secondary-fixed-dim rounded-xl flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
      >
        <div
          class="bg-light-surface-tint p-1.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-9 relative overflow-hidden"
        >
          <div
            class="text-light-on-primary text-center font-['Poppins-SemiBold',_sans-serif] text-base font-semibold relative flex items-center justify-center"
          >
            A
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center justify-start flex-1 relative"
        >
          <div
            class="text-light-on-secondary-fixed-variant text-center font-['Poppins-Regular',_sans-serif] text-base font-normal relative flex items-center justify-center"
          >
            Materia I
          </div>
        </div>
      </div>
      <div
        class="bg-light-secondary-fixed-dim rounded-xl flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
      >
        <div
          class="bg-light-surface-tint p-1.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-9 relative overflow-hidden"
        >
          <div
            class="text-light-on-primary text-center font-['Poppins-SemiBold',_sans-serif] text-base font-semibold relative flex items-center justify-center"
          >
            R
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center justify-start flex-1 relative"
        >
          <div
            class="text-light-on-secondary-fixed-variant text-center font-['Poppins-Regular',_sans-serif] text-base font-normal relative flex items-center justify-center"
          >
            Materia I
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    class="bg-light-secondary-container rounded-3xl flex flex-col gap-0 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
    style="
      box-shadow: var(
        --elevation-light-1-box-shadow,
        0px 1px 3px 1px rgba(0, 0, 0, 0.15),
        0px 1px 2px 0px rgba(0, 0, 0, 0.3)
      );
    "
  >
    <div
      class="bg-light-secondary pt-2.5 pr-6 pb-2.5 pl-6 flex flex-row gap-2.5 items-center justify-center self-stretch shrink-0 relative overflow-hidden"
    >
      <div
        class="text-light-on-primary text-center font-['Poppins-Bold',_sans-serif] text-base font-bold relative flex-1 flex items-center justify-center"
      >
        Requisitos Para Rendir:
      </div>
    </div>
    <div
      class="p-2.5 flex flex-col gap-2.5 items-start justify-start self-stretch shrink-0 relative overflow-hidden"
    >
      <div
        class="bg-light-secondary-fixed-dim rounded-xl flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
      >
        <div
          class="bg-light-surface-tint p-1.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-9 relative overflow-hidden"
        >
          <div
            class="text-light-on-primary text-center font-['Poppins-SemiBold',_sans-serif] text-base font-semibold relative flex items-center justify-center"
          >
            A
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center justify-start flex-1 relative"
        >
          <div
            class="text-light-on-secondary-fixed-variant text-center font-['Poppins-Regular',_sans-serif] text-base font-normal relative flex items-center justify-center"
          >
            Materia I
          </div>
        </div>
      </div>
      <div
        class="bg-light-secondary-fixed-dim rounded-xl flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
      >
        <div
          class="bg-light-surface-tint p-1.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-9 relative overflow-hidden"
        >
          <div
            class="text-light-on-primary text-center font-['Poppins-SemiBold',_sans-serif] text-base font-semibold relative flex items-center justify-center"
          >
            A
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center justify-start flex-1 relative"
        >
          <div
            class="text-light-on-secondary-fixed-variant text-center font-['Poppins-Regular',_sans-serif] text-base font-normal relative flex items-center justify-center"
          >
            Materia I
          </div>
        </div>
      </div>
      <div
        class="bg-light-secondary-fixed-dim rounded-xl flex flex-row gap-2.5 items-center justify-start self-stretch shrink-0 relative overflow-hidden"
      >
        <div
          class="bg-light-surface-tint p-1.5 flex flex-col gap-2.5 items-center justify-center self-stretch shrink-0 w-9 relative overflow-hidden"
        >
          <div
            class="text-light-on-primary text-center font-['Poppins-SemiBold',_sans-serif] text-base font-semibold relative flex items-center justify-center"
          >
            R
          </div>
        </div>
        <div
          class="flex flex-row gap-2.5 items-center justify-start flex-1 relative"
        >
          <div
            class="text-light-on-secondary-fixed-variant text-center font-['Poppins-Regular',_sans-serif] text-base font-normal relative flex items-center justify-center"
          >
            Materia I
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
 -->