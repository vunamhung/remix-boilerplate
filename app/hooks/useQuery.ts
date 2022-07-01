import { useLocation, useSearchParams } from '@remix-run/react';
import { parse } from 'querystring';

export function useQuery() {
  const { search } = useLocation();
  const [, setSearchParams] = useSearchParams();

  const query: any = parse(search.replace('?', ''));
  const setQuery = (value: any) => setSearchParams({ ...query, ...value });

  return [query, setQuery];
}
