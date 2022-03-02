/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/cloudflare-workers/globals" />
/// <reference types="@cloudflare/workers-types" />

interface Window {
  env: {
    HOST: string;
    API_BASE_URL: string;
  };
}

declare module 'ramda-extension';
declare module 'react-slick';
declare module 'react-lazyload';
declare module 'headroom.js';
declare module 'canvas-confetti';
declare module 'tiny-emitter/instance';
