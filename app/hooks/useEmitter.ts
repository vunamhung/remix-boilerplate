import { useEffect } from 'react';
import { useRevalidate } from 'remix-utils';
import emitter from 'tiny-emitter/instance';

export function useEmitter() {
  return {
    emitRevalidateCart: () => emitter.emit('revalidateCart'),
    emitRevalidateCheckout: () => emitter.emit('revalidateCheckout'),
    emitRevalidateProduct: () => emitter.emit('revalidateProduct'),
  };
}

export function useRevalidateCart() {
  const revalidateCart = useRevalidate();
  useEffect(() => emitter.on('revalidateCart', () => revalidateCart()), []);
}

export function useRevalidateCheckout() {
  const revalidateCheckout = useRevalidate();
  useEffect(() => emitter.on('revalidateCheckout', () => revalidateCheckout()), []);
}

export function useRevalidateProduct() {
  const revalidateProduct = useRevalidate();
  useEffect(() => emitter.on('revalidateProduct', () => revalidateProduct()), []);
}
