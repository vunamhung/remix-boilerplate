import type { Action } from 'react-sweet-state';
import type { iCheckoutInfo, iVariableImage } from '~/types';
import Cookie from 'js-cookie';
import { createStore, createHook } from 'react-sweet-state';
import { convertType, scrollToTop } from '~/utilities';

export interface iStates {
  country: string | undefined;
  countryName: string | undefined;
  coupon: string | undefined;
  currency: string | undefined;
  cartCount: number;
  cartId: string | undefined;
  orderId: string | undefined;
  selectedColor: { name: string; code: string };
  selectedSize: { name: string; price: number };
  showTax: boolean;
  checkoutStep: number;
  checkoutInfo: iCheckoutInfo | undefined;
  paymentMethod: string;
  utm_source: string;
  showFilter: boolean;
  selectedVariant: { name?: string; price: number; sku: string };
  variantImages: iVariableImage[];
  keyword: string;
}

const actions = {
  setCountry: (country: string): Action<iStates> => {
    return ({ setState }) => {
      setState({ country });
      Cookie.set('country', country);
    };
  },
  setCountryName: (countryName: string): Action<iStates> => {
    return ({ setState }) => {
      setState({ countryName });
      Cookie.set('countryName', countryName);
    };
  },
  setCoupon: (coupon: string | undefined): Action<iStates> => {
    return ({ setState }) => {
      setState({ coupon });
      Cookie.set('coupon', coupon as string);
    };
  },
  setCurrency: (currency: string): Action<iStates> => {
    return ({ setState }) => {
      setState({ currency });
      Cookie.set('currency', currency);
    };
  },
  setCartCount: (cartCount: number): Action<iStates> => {
    return ({ setState }) => {
      if (cartCount >= 0) {
        setState({ cartCount });
        Cookie.set('cartCount', cartCount.toString());
      }
    };
  },
  setCartId: (cartId: string): Action<iStates> => {
    return ({ setState }) => {
      setState({ cartId });
      Cookie.set('cartId', cartId);
    };
  },
  setOrderId: (orderId: string): Action<iStates> => {
    return ({ setState }) => {
      setState({ orderId });
      Cookie.set('orderId', orderId);
    };
  },
  setSelectedColor: (selectedColor: iStates['selectedColor']): Action<iStates> => {
    return ({ setState }) => setState({ selectedColor });
  },
  setSelectedSize: (selectedSize: iStates['selectedSize']): Action<iStates> => {
    return ({ setState }) => setState({ selectedSize });
  },
  setShowTax: (showTax: boolean): Action<iStates> => {
    return ({ setState }) => setState({ showTax });
  },
  setCheckoutStep: (checkoutStep: number): Action<iStates> => {
    scrollToTop();
    return ({ setState }) => setState({ checkoutStep });
  },
  setCheckoutInfo: (checkoutInfo: iCheckoutInfo): Action<iStates> => {
    return ({ setState }) => setState({ checkoutInfo });
  },
  setPaymentMethod: (paymentMethod: string): Action<iStates> => {
    return ({ setState }) => setState({ paymentMethod });
  },
  setUtmSource: (utm_source: string): Action<iStates> => {
    return ({ setState }) => setState({ utm_source });
  },
  setShowFilter: (showFilter: boolean): Action<iStates> => {
    return ({ setState }) => setState({ showFilter });
  },
  setSelectedVariant: (selectedVariant: iStates['selectedVariant']): Action<iStates> => {
    return ({ setState }) => setState({ selectedVariant });
  },
  setVariantImages: (variantImages: iStates['variantImages']): Action<iStates> => {
    return ({ setState }) => setState({ variantImages });
  },
  setKeyword: (keyword: string): Action<iStates> => {
    return ({ setState }) => setState({ keyword });
  },
};

const store = createStore<iStates, typeof actions>({
  initialState: {
    country: convertType(Cookie.get('country') as string) ? Cookie.get('country') : '',
    countryName: convertType(Cookie.get('countryName') as string) ? Cookie.get('countryName') : '',
    coupon: convertType(Cookie.get('coupon') as string) ? Cookie.get('coupon') : '',
    currency: convertType(Cookie.get('currency') as string) ? Cookie.get('currency') : '',
    cartCount: Number(Cookie.get('cartCount')) > 0 ? Number(Cookie.get('cartCount')) : 0,
    cartId: convertType(Cookie.get('cartId') as string) ? Cookie.get('cartId') : '',
    orderId: convertType(Cookie.get('orderId') as string) ? Cookie.get('orderId') : '',
    selectedColor: { name: 'Black', code: '#000000' },
    selectedSize: { name: 'L', price: 0 },
    showTax: false,
    checkoutStep: 1,
    checkoutInfo: undefined,
    paymentMethod: 'stripe',
    utm_source: '',
    showFilter: true,
    selectedVariant: { name: '', price: 0, sku: '' },
    variantImages: [],
    keyword: '',
  },
  actions,
});

export default createHook(store);
