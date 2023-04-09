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
- Support for [TypeScript](https://www.typescriptlang.org/)
- Sourcemap creation
- Support of CSS: For exporting components with style
- Storybook: For testing our components within the library itself as we design them
- Supports complicated peer-dependencies
- Optimizing bundle size: [@rollup/plugin-terser](https://www.npmjs.com/package/@rollup/plugin-terser) A Rollup plugin to generate a minified bundle with terser.
- Automatically externalize peerDependencies in a rollup bundle, thanks to [rollup-plugin-peer-deps-external](https://www.npmjs.com/package/rollup-plugin-peer-deps-external)

## Getting started

- Copy over the template by cloning this repository and install its dependencies:

```bash
git clone https://github.com/MidoAhmed/rollup-react-library-starter.git
cd rollup-react-library-starter
npm install
```
### Development:

- Storybook:
    - Storybook gives you an easy way to see and use your components while working on them in your library project, without having to build an unnecessary testing page just to display them.

        ```bash
        npm run storybook # runs the host Storybook application locally for quick and easy testing
        ```
Now, anytime you make a change to your library or the stories, the storybook will live-reload your local dev server so you can iterate on your component in real-time.

- Rollup watch and build:

    - for Local development run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

        ```bash
        npm run dev # runs rollup with watch flag
        ```

Now, anytime you make a change to your library in `src/` or to the example app's `example/src`, `create-react-app` will live-reload your local dev server so you can iterate on your component in real-time.

### Scripts:
- `npm run build` : builds the library to `dist`
- `npm run dev`  : builds the library, then keeps rebuilding it whenever the source files change.
- `npm test` : tests the library and show the coverage.
- `npm run storybook` : runs the host Storybook application locally for quick and easy testing
- `npm run build-storybook` : builds a static HTML/JS bundle that can easily be hosted on a remote server, so all members of your team can try your components.

### Publishing to npm:
//TODO:

## Tutorials and inspirations used to create this boilerplate 
- big thanks to this tuto and his author : https://dev.to/alexeagleson/how-to-create-and-publish-a-react-component-library-2oe#adding-scss

## License

[MIT](LICENSE).
