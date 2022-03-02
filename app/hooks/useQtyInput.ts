import { useState } from 'react';
import { useDebounce } from 'ahooks';

export default function useQtyInput(defaultValue: number) {
  const [quantity, setQuantity] = useState(defaultValue);
  const [updateQuantity, setUpdateQuantity] = useState(false);

  const dec = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setUpdateQuantity(true);
    }
  };

  const icr = () => {
    setQuantity(quantity + 1);
    setUpdateQuantity(true);
  };

  const dQuantity = useDebounce(quantity, { wait: 400 });

  return { dec, icr, quantity, dQuantity, updateQuantity };
}
