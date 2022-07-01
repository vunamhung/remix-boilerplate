import { useEffect } from 'react';
import { useTransition } from '@remix-run/react';
import { configure, done, start } from 'nprogress';

configure({ showSpinner: false });

export function useProgress() {
  const { state } = useTransition();

  useEffect(() => {
    if (state === 'idle') done();
    else start();
  }, [state]);
}
