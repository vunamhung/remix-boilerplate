import { useOutletContext } from '@remix-run/react';

export const useSettings = () => useOutletContext<iSettings>();
