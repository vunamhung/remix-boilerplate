import { useEffect } from 'react';
import Headroom from 'headroom.js';

export default function useHeadroom() {
  useEffect(() => {
    const onPin = () => document.body.classList.add('pin');
    const onUnpin = () => document.body.classList.remove('pin');
    new Headroom(document.querySelector('header'), { onPin, onUnpin }).init();
  }, []);
}
