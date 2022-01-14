#!/usr/bin/env node

require('esbuild')
  .build({
    entryPoints: ['./worker'],
    bundle: true,
    sourcemap: true,
    outdir: 'dist',
    define: {
      'process.env.NODE_ENV': '"development"',
      'process.env.API': '"http://0.0.0.0:3000"',
    },
  })
  .then(() => console.log('Build succeeded.'))
  .catch((e) => {
    console.log('Error building:', e.message);
    process.exit(1);
  });
