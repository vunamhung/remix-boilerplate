#!/usr/bin/env node
import * as esbuild from 'esbuild';

try {
  const result = await esbuild.build({
    entryPoints: ['./worker'],
    bundle: true,
    sourcemap: false,
    minify: true,
    outdir: 'dist',
    metafile: true,
    define: {
      'process.env.NODE_ENV': '"production"',
      'process.env.API': '"https://api.remix.run"',
    },
  });
  console.log(await esbuild.analyzeMetafile(result.metafile));
} catch (e) {
  console.log('Error building:', e.message);
  process.exit(1);
}
