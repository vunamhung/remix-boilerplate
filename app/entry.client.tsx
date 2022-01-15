import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';

if ('serviceWorker' in navigator && window.ENV.NODE_ENV !== 'development') {
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js')); // we will register it after the page complete the load
}

hydrate(<RemixBrowser />, document);
