import { useLocation } from "@remix-run/react";
import { parse } from 'querystring';

export default function useQuery(): any {
  const { search } = useLocation();
  return parse(search.replace('?', ''));
}
