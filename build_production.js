#!/usr/bin/env node

require('esbuild')
  .build({
    entryPoints: ['./worker'],
    bundle: true,
    sourcemap: true,
    minify: true,
    outdir: 'dist',
    define: {
      'process.env.NODE_ENV': '"production"',
      'process.env.API': '"https://api.remix.run"',
    },
  })
  .then(() => console.log('Build succeeded.'))
  .catch((e) => {
    console.log('Error building:', e.message);
    process.exit(1);
  });
