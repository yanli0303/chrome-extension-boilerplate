/** @type {import("snowpack").SnowpackUserConfig } */

export default {
  workspaceRoot: '../',
  mount: {
    public: { url: '/', static: true },
    src: { url: '/a' },
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-typescript',
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    // {"match": "routes", "src": ".*", "dest": "/index.html"},
  ],
  // https://www.snowpack.dev/guides/optimize-and-bundle
  optimize: {
    // bundle: true,
    // sourcemap: 'external',
    // splitting: true,
    // treeshake: true,
    // minify: true,
    // target: 'es2018',
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    baseUrl: '.',
    out: '../extension/popup',
    metaUrlPath: 'meta',
  },
};
