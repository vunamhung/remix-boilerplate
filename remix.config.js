/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  postcss: true,
  tailwind: true,
  devServerBroadcastDelay: 1000,
  ignoredRouteFiles: ['.*', '**/_components/*', '**/helper.ts'],
  server: './server.ts',
  serverConditions: ['worker'],
  serverDependenciesToBundle: 'all',
  serverMainFields: ['browser', 'module', 'main'],
  serverMinify: true,
  serverModuleFormat: 'esm',
  serverPlatform: 'neutral',
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // serverBuildPath: "build/index.js",
  // publicPath: "/build/",
  future: {
    v2_errorBoundary: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
