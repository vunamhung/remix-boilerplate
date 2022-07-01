import { useEffect } from 'react';
import { useDataRefresh } from 'remix-utils';
import emitter from 'tiny-emitter/instance';

export function useRevalidate() {
  const { refresh } = useDataRefresh();
  useEffect(() => emitter.on('revalidate', () => refresh()), []);
}
