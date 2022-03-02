import { useState } from 'react';

export default function useModal() {
  const [visible, setVisible] = useState(false);

  const toggle = () => setVisible(!visible);

  return { toggle, visible };
}
