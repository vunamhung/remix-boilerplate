import { proxy } from 'valtio';
import { devtools } from 'valtio/utils';

export const store = proxy({
  thinSidebar: false,
});

export const actions = {
  toggleThinSidebar: () => (store.thinSidebar = !store.thinSidebar),
};

const unsub = devtools(store, { name: 'state name', enabled: true });
