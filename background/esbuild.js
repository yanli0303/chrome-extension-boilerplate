const isDev = !process.env.VITE_APP_VERSION;

// eslint-disable-next-line
require('esbuild')
  .build({
    bundle: true,
    minify: !isDev,
    sourcemap: isDev ? 'external' : false,
    format: 'cjs',
    platform: 'browser',
    target: ['chrome99', 'edge99'],
    watch: process.env.ESBUILD_WATCH === 'true',
    entryPoints: ['src/index.ts'],
    outdir: '../extension/background',
  })
  .catch((e) => {
    console.error('esbuild error', e);
    process.exit(1);
  });
