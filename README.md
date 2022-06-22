# Chrome Extension Boilerplate

A project template for building Google Chrome Extensions.

## Tools and Features

- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/)
- [Yarn v3 (Zero-Installs)](https://yarnpkg.com/features/zero-installs)
- [Yarn Workspaces (monorepo)](https://yarnpkg.com/features/workspaces): put code files in different packages to enforce code isolation.
- [TypeScript v4](https://www.typescriptlang.org/)
- [React v18](https://reactjs.org)
- [ESBuild v0.14](https://esbuild.github.io/): for building background service worker and content scripts.
- [ESLint v8](https://eslint.org/) + [Prettier v2](https://prettier.io/) + [Airbnb](https://github.com/airbnb/javascript).
- [Jest v28](https://jestjs.io/)
- [Husky v8](https://github.com/typicode/husky) + [lint-staged v13](https://github.com/okonet/lint-staged): format code files before committing.

## Update Dependencies

- Update Yarn to the latest version: `yarn set version stable`
- Update dependencies interactively: `yarn up -i`
- Update installed SDKs and editor settings: `yarn sdks`

## Available Scripts

- `clean` - removes any cache, coverage reports, and build outputs.
- `format` - format source files.
- `lint` - lint source files.
- `test` - run tests.
- `coverage` - run tests and reports code coverage.
- `build` - transpile TypeScript to ES6, bundle, minify...etc.
- `build:watch` - interactive watch mode to automatically transpile source files,

Build steps:

```sh
# run the following commands in the root directory
export GIT_COMMIT_HASH=$(git rev-parse HEAD)
yarn clean
yarn lint
yarn coverage
yarn build
```
