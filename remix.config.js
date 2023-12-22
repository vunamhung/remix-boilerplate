/** @type {import('@remix-run/dev').AppConfig} */
export default {
  postcss: true,
  tailwind: true,
  ignoredRouteFiles: ["**/.*"],
  serverDependenciesToBundle: [/^react-icons/],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
