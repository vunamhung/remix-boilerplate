import { useEffect } from 'react';
import { useDataRefresh } from 'remix-utils';
import emitter from 'tiny-emitter/instance';

export function useEmitter() {
  return {
    emitRevalidateCart: () => emitter.emit('revalidateCart'),
    emitRevalidateCheckout: () => emitter.emit('revalidateCheckout'),
    emitRevalidateProduct: () => emitter.emit('revalidateProduct'),
    emitValidatePodProductSize: () => emitter.emit('validatePodProductSize'),
  };
}

export function useRevalidateCart() {
  const { refresh } = useDataRefresh();
  useEffect(() => emitter.on('revalidateCart', () => refresh()), []);
}

export function useRevalidateCheckout() {
  const { refresh } = useDataRefresh();
  useEffect(() => emitter.on('revalidateCheckout', () => refresh()), []);
}

export function useRevalidateProduct() {
  const { refresh } = useDataRefresh();
  useEffect(() => emitter.on('revalidateProduct', () => refresh()), []);
}

export function useValidatePodProductSize(func: Function) {
  useEffect(() => emitter.on('validatePodProductSize', func), []);
}
