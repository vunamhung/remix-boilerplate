import type { Params } from 'react-router-dom';
import cookie from 'cookie';
import { isNilOrEmpty } from 'ramda-adjunct';

export function getParams(params: Params) {
  return params['*']?.replace(/\/$/g, '').split('/') as string[];
}

export function getQuery({ url }: Request) {
  const { searchParams } = new URL(url);

  return searchParams;
}

export function getPageQuery(request: Request) {
  const query = getQuery(request);
  const page = query.get('page');
  return isNilOrEmpty(page) ? 1 : Number(page);
}

export function getCookies({ headers }: Request) {
  if (!headers.get('Cookie')) return {};
  return cookie.parse(headers.get('Cookie') as string);
}
