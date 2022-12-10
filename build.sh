set -e
export CI=true

date

echo
echo VITE_APP_VERSION=$VITE_APP_VERSION
echo VITE_GIT_REVISION=$VITE_GIT_REVISION

echo
which node
node --version

echo
which yarn
yarn --version

yarn install
yarn lint
yarn clean
yarn coverage
yarn build
sed -i "s/1.0/$VITE_APP_VERSION/" extension/manifest.json

echo
date
