import { hydrate } from 'react-dom';
import { RemixBrowser } from 'remix';

if ('serviceWorker' in navigator) {
  // we will register it after the page complete the load
  window.addEventListener('load', () => navigator.serviceWorker.register('/sw.js'));
}

hydrate(<RemixBrowser />, document);
