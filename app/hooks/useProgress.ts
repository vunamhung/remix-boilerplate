import { useEffect } from 'react';
import { useNavigation } from '@remix-run/react';
import progress from 'nprogress';

progress.configure({ showSpinner: false });

export function useProgress() {
  const { state } = useNavigation();

  useEffect(() => {
    if (state === 'idle') progress.done();
    else progress.start();
  }, [state]);
}
