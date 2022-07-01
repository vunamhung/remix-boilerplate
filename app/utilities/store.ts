import Cookie from 'js-cookie';
import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';
import emitter from 'tiny-emitter/instance';
import { convertType } from '~/utilities';

export const store = proxy({
  site: convertType(Cookie.get('site') || '') ? Cookie.get('site') : 'Remix Boilerplate',
  thinSidebar: false,
});

export const actions = {
  toggleThinSidebar: () => (store.thinSidebar = !store.thinSidebar),
  setSite: (payload: string) => {
    store.site = payload;
    Cookie.set('site', payload);
    emitter.emit('revalidate');
  },
};

const unsub = devtools(store, { name: 'state name', enabled: true });
