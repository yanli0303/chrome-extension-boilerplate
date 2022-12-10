# see https://github.com/casey/just

alias bu := build-utils
alias bb := build-background
alias bc := build-content-script
alias bo := build-options
alias bp := build-popup

# clean and build the @localhost/utils package.
build-utils:
  yarn build:lib

# clean and build the background package.
build-background: build-utils
  yarn workspace background rebuild

# clean and build the content-script package.
build-content-script: build-utils
  yarn workspace content-script rebuild

# clean and build the options package.
build-options: build-utils
  yarn workspace options rebuild

# clean and build the popup package.
build-popup: build-utils
  yarn workspace popup rebuild

# test all packages.
test:
  yarn test

# lint, clean, test, and build all packages.
ci:
  yarn lint
  yarn clean
  yarn coverage
  yarn build

# build with docker
docker-build:
  docker run -v $(pwd):/mnt/workspace \
    -e VITE_APP_VERSION=1.0.0 \
    -e VITE_GIT_REVISION=$(git rev-parse HEAD) \
    -w /mnt/workspace \
    node:18-alpine \
    /bin/sh -c /mnt/workspace/build.sh
