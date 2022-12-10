/* eslint-disable */

const makeCommand = (relativePath) => ({
  command: 'yarn dev',
  name: relativePath.split('/').pop(),
  cwd: `./${relativePath}`,
  env: {
    HMR: 'true', // set process.env.HMR to true to disable manualChunks for faster build speed
  },
  killOthers: ['success', 'failure'],
  maxProcesses: 1,
  prefixLength: 30,
});

const { concurrently } = require('concurrently');
const { result } = concurrently(
  [
    'lib/chrome',
    'lib/ui',
    'lib/utils',
    'extension/background',
    'extension/content-script',
    'extension/options',
    'extension/popup',
  ].map(makeCommand),
  {
    raw: true,
  }
);

result
  .then((result) => console.warn('concurrently success', result))
  .catch((error) => console.warn('concurrently error', error));
