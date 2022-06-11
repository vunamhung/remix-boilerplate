import { hydrate } from 'react-dom';
import { RemixBrowser } from "@remix-run/react";

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js')); // we will register it after the page complete the load
}

hydrate(<RemixBrowser />, document);
