[![](https://dcbadge.limes.pink/api/server/864aya7h)](https://discord.gg/864aya7h)

# <img src="./underatom.svg" width="256"/>

**Multi-framework component library made to be fully owned.**

Build your Design System with your favorite stack. Choose between:

- frameworks
  - React
  - Dioxus (WIP)
  - Solid (TBD)
  - Angular (TBD)
  - Vue (TBD)
  - Svelte (TBD)
  - web-components (TBD)
  - React Native (TBD)
  - Flutter (TBD)
- styling libraries
  - Tailwind
  - PandaCSS (WIP)
  - CSS (TBD)
  - styled-components (TBD)
  - emotion (TBD)
  - vanilla-extract (TBD)
  - SCSS (TBD)
  - Pigment CSS (TBD)

# Installation

### Install dependencies

```bash
npm i
```

### Build CLI

```bash
npm run build
```

### Run CLI

```bash
npm run start
```

### Generate component library and docs

You can generate a component library and docs for your framework of choice.
For example, to generate a component library and docs for the `react-tailwind` combination:

```bash
npm run react:tv
```

Now you can find the generated project in the `./sandbox/react-tailwind` folder.

# Usage

Once the components are generated using the CLI, you can copy paste each component individually into your own project. Make sure to also install the necessary dependencies and to configure your tailwind.config the same way as the generated project.

This step is a little bit tedious at the moment but we plan to improve this soon.

# Components Anatomy

The biggest influences on Underatom are the Atomic Design methodology and the amazing article of Daniel Yuschick: [The Key To Good Component Design Is Selfishness](https://www.smashingmagazine.com/2023/01/key-good-component-design-selfishness/)

Here's a quote from the article:

> Unfortunately, components are often built to do too much. They are built to inherit the responsibilities and concerns of their content and surroundings. So many patterns that apply this level of consideration break down further each iteration until a component no longer works. At this point, the codebase splits, more technical debt is introduced, and inconsistencies creep into the UI.

The proposed solution is composability. And we went pretty hard on this one.

Each component is split into 3 parts:

- underatoms
- atoms
- styling

The underatom is what results after you break the atom into its smallest parts. Underatoms have styling built-in, but no layout decision. The atom is responsible for the layout in which the underatoms are used.

For example, a simple Button atom would be made of:

```
<UButtonRoot />
<UButtonLabel />
<UButtonIcon />
```

This approach unlocks new levels of flexibility and reusability. For example, using these underatoms, you can build multiple specialized Button atoms:

```
<Button />
<IconButton />
<ButtonWithIcons />
<ButtonWithLeftIcon />
<ButtonWithRightIcon />
```

This gets even more interesting when you start adding more underatoms into the mix:

```
<UButtonDot />
<UButtonLoader />
<UButtonCaret />
```

Now you can build more Button atoms:

```
<ButtonWithDot />
<LoadingButton />
<MenuButton />
<DropdownButton />
```

Let's see the benefits of working with specialized atoms instead of a single big Button component with a lot of props and conditional logic:

### Maintainability

Atoms are isolated so improving, deleting or refactoring one won't affect another - lowering the barrier of making changes (fearing that you might break the entire Button component)

### Expandability

Adding new features to a component is as easy as adding new underatoms and atoms - no need to refactor the entire component.

### Documentation

Specialized atoms are partially self-documenting because of their name.

### Flexibility

Use the underatoms directly in your app when you don't have time to build a new atom.

Also, each atom comes with its own layout. Conditional structure, paddings, dimensions etc. are a thing of the past, enabling any design requirement without the price of complicated components.

### Debugging

Most of the possible issues are isolated by design in the underatoms or atoms, making it easier to identify and fix bugs.

Also, the impact of a faulty `<LoadingButton />` atom is limited compared to a big `<Button />` component designed to be all things to all people.

## Styling

There are 2 types of styling properties:

- for stilistic purposes (used by Underatoms)
- for building layout (used by Atoms)

So, Underatoms don't decide how they are positioned into the page. This is the job of Atoms.
Also, Atoms don't have any styling properties. They only decide where to position the underatoms.

### Theming

Token based colors, spacing, fonts, shadows, border-radius etc. enable developers to create their own themes without having to touch the components.

# Future plans

### NPM package

We plan to publish a NPM package for each possible combination of framework and styling library.

### Figma

Figma file coming soon!

### More frameworks

There's virtually no limit to the frameworks Underatom can support. We rely on the community to decide what frameworks are of interest.

### More styling libraries

Same as with frameworks, we'll love the community to decide the path forward and to pick which styling libraries should be supported next.

### More design systems

We know is a pretty ambitious goal to add more design systems, but we designed Underatom to be extensible also from this standpoint.

We have some exciting design systems into the pipeline. Our plan is to make this a paid options but we might add new open source ones as well.

# Docs

Once you generate a component library, you can find the docs in the `./sandbox/react-tailwind/docs` folder.

### Run docs

```bash
cd ./sandbox/tailwind-variants
npm i
npm run dev
```

# Community

We believe in the power of the community to drive innovation and to create a more open ecosystem.

We welcome contributions from the community and we're excited to see what you build with Underatom.
