#!/usr/bin/env node
import { build, analyzeMetafile } from 'esbuild';

const options = {
  entryPoints: ['./worker'],
  bundle: true,
  sourcemap: false,
  minify: true,
  outdir: 'dist',
  metafile: true,
  define: {
    'process.env.NODE_ENV': '"production"',
    'process.env.API': '"https://api.remix.run"',
    'process.env.GTM_ID': '"GTM-P7L43JT"',
  },
};

const result = await build(options).catch(() => process.exit(1));
console.log(await analyzeMetafile(result.metafile));
