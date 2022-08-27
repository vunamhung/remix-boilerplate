import { json, redirect } from '@remix-run/cloudflare';
import { reject } from 'ramda';
import { stringify } from 'query-string';
import { isNilOrEmpty } from 'ramda-adjunct';
import { badRequest, forbidden, notFound, serverError, unauthorized } from 'remix-utils';
import { config, trailingSlash } from '~/utilities';

async function rawFetch(url: string, options?: { params?: object; accessToken?: string }) {
  const uri = url.startsWith('http') ? url : `${config.apiBaseUrl}/${trailingSlash(url)}`;
  let query = options?.params ? '?' + stringify(reject(isNilOrEmpty)(options.params)) : '';
  let requestInitr = options?.accessToken ? { headers: { Authorization: `Bearer ${options?.accessToken}` } } : undefined;

  const response = await fetch(uri + query, requestInitr);

  const data = await response.text();

  if (isNilOrEmpty(data)) return {};

  return JSON.parse(data);
}

export async function fetcher(
  url: string,
  options?: { params?: object; accessToken?: string; rawData?: boolean; cacheControl?: 'public, max-age=300' | string },
) {
  let data = await rawFetch(url, { params: options?.params, accessToken: options?.accessToken });

  if (options?.rawData) return data;

  if (data?.statusCode === 400 || isNilOrEmpty(data)) throw badRequest({ message: 'Bad request' });
  if (data?.statusCode === 401) {
    const { token } = await rawFetch('/token');
    if (token) {
      data = await rawFetch(url, { params: options?.params, accessToken: token });
      if (options?.rawData) return data;
    } else {
      throw redirect('/login');
    }
  }
  if (data?.statusCode === 403) throw forbidden({ message: 'Forbidden' });
  if (data?.statusCode === 404) throw notFound({ message: 'Not Found' });
  if (data?.statusCode === 500) throw serverError({ message: 'Internal Server Error' });

  let tokenCookie = `token=${options?.accessToken}; SameSite=Strict; Secure`;
  if (options?.cacheControl && options?.accessToken)
    return json(data, { headers: { 'Cache-Control': options.cacheControl, 'Set-Cookie': tokenCookie } });
  if (options?.cacheControl) return json(data, { headers: { 'Cache-Control': options.cacheControl } });
  if (options?.accessToken) return json(data, { headers: { 'Set-Cookie': tokenCookie } });

  return json(data);
}
