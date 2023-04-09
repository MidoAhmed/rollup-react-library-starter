# rollup-react-library-starter

Template and quick-starter to create your own modern React libraries using Rollup. 

*Note: At date of writing this (April 2023), since the [create-react-library](https://github.com/transitive-bullshit/create-react-library) tool is no longer actively maintained (https://github.com/transitive-bullshit/create-react-library#readme) then I thought about creating this boilerplate to help bootstrap a modern react library with some nice features*

## Intro
- This boilerplate uses [Rollup](https://rollupjs.org/) as a bundler https://rollupjs.org/

*As mentioned in [readme of create-react-library](https://github.com/transitive-bullshit/create-react-library#readme) there are some others tools(you can use it as a bundler) as an alternative to Rollup like [tsup](https://github.com/egoist/tsup), [tsdx](https://github.com/jaredpalmer/tsdx), or [microbundle](https://github.com/developit/microbundle).*

## Features
- [Rollup](https://rollupjs.org/) for bundling
- Bundles `commonjs` and `es` module formats
- [React Testing Library](https://testing-library.com/) & [Jest](https://facebook.github.io/jest/): For testing our components
- Optional support for [TypeScript](https://www.typescriptlang.org/)
- Sourcemap creation
- Support of CSS: For exporting components with style
- Storybook: For testing our components within the library itself as we design them
- Supports complicated peer-dependencies

## Getting started

- Copy over the template by cloning this repository and install its dependencies:

```bash
git clone https://github.com/MidoAhmed/rollup-react-library-starter.git
cd rollup-react-library-starter
npm install
```
### Development:

Local development first run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```bash
npm run dev # runs rollup with watch flag
```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

### Scripts:
- `npm run build` : builds the library to `dist`
- `npm run dev`  : builds the library, then keeps rebuilding it whenever the source files change.
- `npm test` : builds the library, then tests it.

### Publishing to npm:
//TODO:

## License

[MIT](LICENSE).
