import { useCallback, useEffect, useRef } from 'react';

export default function useOutsideClick(callback: Function) {
  const ref = useRef<HTMLInputElement>(null);

  const listener = useCallback(
    ({ target }) => {
      const inside = ref.current?.contains(target);
      if (inside) return;
      callback();
    },
    [callback, ref],
  );

  useEffect(() => {
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [listener]);

  return [ref];
}
