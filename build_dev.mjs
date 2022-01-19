#!/usr/bin/env node
import { build } from 'esbuild';

const options = {
  entryPoints: ['./worker'],
  bundle: true,
  sourcemap: true,
  minify: false,
  outdir: 'dist',
  define: {
    'process.env.NODE_ENV': '"development"',
    'process.env.API': '"http://0.0.0.0:3000"',
    'process.env.GTM_ID': '"GTM-P7L43JT"',
  },
};

build(options).catch(() => process.exit(1));
