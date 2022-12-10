# Chrome Extension Boilerplate

A project template for building Google Chrome Extensions.

## Tools and Features

- [Chrome Extension Manifest V3](https://developer.chrome.com/docs/extensions/mv3/intro/mv3-overview/).
- [Yarn v1](https://yarnpkg.com).
- [Yarn Workspaces (monorepo)](https://yarnpkg.com/features/workspaces): put code files in different packages to enforce code isolation.
- [TypeScript v4](https://www.typescriptlang.org/).
- [React v18](https://reactjs.org).
- [Emotion v11](https://emotion.sh/).
- [Material UI v5](https://mui.com/).
- [Redux v4](https://redux.js.org/).
- [React Router v6](https://reactrouter.com/).
- [Vite v4](https://vitejs.dev/): for popup and options pages.
- [esbuild v0.16](https://esbuild.github.io/): for building background service worker and content scripts.
- [ESLint v8](https://eslint.org/) + [Prettier v2](https://prettier.io/) + [Airbnb](https://github.com/airbnb/javascript).
- [vitest v0.25](https://vitest.dev/).
- [lint-staged v13](https://github.com/okonet/lint-staged): format code files before committing.

## Development

- Install [Node.js](https://nodejs.org/), [Yarn](https://yarnpkg.com/), and [Visual Studio Code](https://code.visualstudio.com/)
- Launch [Visual Studio Code](https://code.visualstudio.com/) and open the root directory.

## Build

```sh
yarn install
yarn build
```

Using [docker](https://www.docker.com/):

See [build.sh](./build.sh)

  ```sh
  export VITE_APP_VERSION=1.0.0

  docker run -v $(pwd):/mnt/workspace \
    -e VITE_APP_VERSION=$VITE_APP_VERSION \
    -e VITE_GIT_REVISION=$(git rev-parse HEAD) \
    -w /mnt/workspace \
    node:18-alpine \
    /bin/sh -c /mnt/workspace/build.sh
  ```

## Unit Test

Unit test files are named as in `*.test.ts` or `*.test.tsx`, the test files should be put in the same directory as the source files.

To run Unit Tests:

```sh
yarn install
yarn test
```

### How to debug tests

1. Set a break point in your test case.
2. Go to the `Run and Debug` in VS Code.
3. Click the `JavaScript Debug Terminal` to launch a debug terminal.
4. In the debug terminal, run the test command, such as `yarn workspace utils test`.
5. Your break point would be hit.

## Available Scripts

- `yarn clean` - removes any cache, coverage reports, and build outputs.
- `yarn format` - format source files.
- `yarn lint` - lint source files.
- `yarn test` - run tests.
- `yarn coverage` - run tests and reports code coverage.
- `yarn build` - transpile TypeScript to ES6, bundle, minify..etc.
- `yarn rebuild` - `yarn clean && yarn build`.
- `yarn build:watch` - watch mode, automatically transpile source files when changed.

## Yarn workspace

This repo is a [Monorepo](https://en.wikipedia.org/wiki/Monorepo) managed by [`yarn workspaces`](https://yarnpkg.com/lang/en/docs/workspaces/), visit https://yarnpkg.com/lang/en/docs/workspaces/ know more.

Frequently used `yarn workspace` commands:

- Show workspace dependency tree:

  ```sh
  yarn workspaces info
  ```

- Run `yarn` commands in selected package:

  ```sh
  yarn workspace <package-name> <command>
  ```

  As an example, the following command adds `jest` as dev dependency to the `popup`:

  ```sh
  yarn workspace popup add --dev jest
  ```

  Up next is an example to remove a dependency from a particular package:

  ```sh
  yarn workspace <package-name> remove ts-lib
  ```

- Run `yarn` commands in all packages:

  ```sh
  yarn workspaces run <command>
  ```

  As an example, the following command runs `build` in each package:

  ```sh
  yarn workspaces run build
  ```
