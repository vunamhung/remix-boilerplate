import type { PluginOption } from 'vite';
import { unstable_vitePlugin as remix } from '@remix-run/dev';
import viteAnalyze from 'rollup-plugin-analyzer';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import viteEnv from 'vite-plugin-environment';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    remix(),
    tsconfigPaths(),
    viteAnalyze({ summaryOnly: true }) as PluginOption,
    visualizer({ gzipSize: true }) as PluginOption,
    viteEnv({
      VITE_API_BASE_URL: undefined,
    }),
  ],
});
