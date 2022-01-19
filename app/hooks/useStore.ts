import Cookie from 'js-cookie';
import { createStore, createHook } from 'react-sweet-state';
import { convertType } from '~/utilities';

//prettier-ignore
const store = createStore({
  initialState: {
    cartCount: convertType(Cookie.get('cartCount') as string) ? Cookie.get('cartCount') : 0
  },
  actions: {
    setCartCount: (cartCount) => ({ setState }) => setState({ cartCount: cartCount || 0 }),
  },
});

export default createHook(store);
