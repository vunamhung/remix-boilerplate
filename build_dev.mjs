#!/usr/bin/env node
import * as esbuild from 'esbuild';

try {
  await esbuild.build({
    entryPoints: ['./worker'],
    bundle: true,
    sourcemap: true,
    minify: false,
    outdir: 'dist',
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.API': '"http://0.0.0.0:3000"',
    },
  });
} catch (e) {
  console.log('Error building:', e.message);
  process.exit(1);
}
