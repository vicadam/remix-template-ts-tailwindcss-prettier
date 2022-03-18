# Welcome to my Remix template!

- [Remix Docs](https://remix.run/docs)
- [TypeScript Docs](https://www.typescriptlang.org/docs/)
- [TailwindCSS Docs](https://tailwindcss.com/docs/utility-first)
- [Prettier Docs](https://prettier.io/docs/en/index.html)
- [ESLint Config Docs](https://eslint.org/docs/user-guide/configuring/)

This is a slightly opinionated template for use with Remix.run. It includes the latest React (18rc2 as of now), TypeScript, Tailwind CSS, ESLint and Prettier, with a handful of styles and rules to get started. Feel free to change at will.

From your terminal:

```sh
yarn create remix --template vicadam/remix-template-ts-tailwindcss-prettier
```

## Yarn or NPM

The scripts are setup for `yarn` but can easily be modified for `npm run`.

Some helpful scripts:

- tsc - typecheck your project without emitting any files.
- clean - delete the `.cache`, `build` and `public/build` folders.

## React

With React 18 there are a number of changes, so the `entry.client.tsx` file has been updated to account for the new `hydrateRoot` function. Unfortunately the `@types/react @types/react-dom` are still on 17 so that will have to be updated at some point.

## TypeScript

Using the latest TypeScript, with a handful of `@typescript-eslint` rules. There is also an optional `local.d.ts` file included for globals such as `interface Window {}` or `interface Navigator {}`. Feel free to delete (also from `tsconfig.json`). Finally there is a `global.ts` file in `app/types/` with a couple of global types to use in your project. This can be deleted also.

## Tailwind CSS

CSS files are compiled using `postcss-cli`. Any `css` files in the `/styles` folders will be compiled into the `app/styles` folder for inclusion in your project. Tailwind is incorporated using a few individual files (`_custom-x.css`), plus optional `_animations.css` and `_variables.css` files which can be removed, and compiled to a `global.css` file.

Also, the included `tailwind.config.js` includes a few customizations that I have found helpful. These can be removed easily.

## ESLint & Prettier

Some basic linting rules are included, plus a basic prettier config. Adjust as needed.

## Misc

Included basic `.eslintignore` and `.gitignore` files. Adjust as needed.

## Development

From your terminal:

```sh
yarn dev
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
yarn build
```

Then run the app in production mode:

```sh
yarn start
```

Now you"ll need to pick a host to deploy it to.

### DIY

If you"re familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
