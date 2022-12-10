/* eslint-disable import/no-extraneous-dependencies */

require('esbuild')
  .build({
    bundle: true,
    format: 'cjs',
    platform: 'browser',
    target: ['chrome99', 'edge99'],
    watch: process.env.ESBUILD_WATCH === 'true',
    entryPoints: ['src/index.ts'],
    outdir: '../dist/background',
  })
  .catch((e) => {
    console.error('esbuild error', e);
    process.exit(1);
  });
