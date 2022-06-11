import { json } from '@remix-run/cloudflare';
import { stringify } from 'query-string';
import { isNilOrEmpty } from 'ramda-adjunct';
import { isEmpty, isNil, reject } from 'ramda';
import { badRequest, forbidden, notFound, serverError, unauthorized } from 'remix-utils';
import { fields } from '~/hooks';

export async function rawFetch(url: string, params?: object) {
  const uri = url?.startsWith('http') ? url : `${API_BASE_URL}/${url}`;
  const response = await fetch(params ? `${uri}?${stringify(reject(isNil)(params))}` : uri);

  const data = await response.text();

  if (isNilOrEmpty(data)) return {};

  return JSON.parse(data);
}

export async function fetcher(url: string, params?: object) {
  const data = await rawFetch(url, params);

  if (data?.statusCode === 400 || isNilOrEmpty(data)) throw badRequest({ message: 'Bad request' });
  if (data?.statusCode === 401) throw unauthorized({ message: 'Unauthorized' });
  if (data?.statusCode === 403) throw forbidden({ message: 'Forbidden' });
  if (data?.statusCode === 404) throw notFound({ message: 'Not Found' });
  if (data?.statusCode === 500) throw serverError({ message: 'Internal Server Error' });

  return data;
}

export async function fetchData(url: string, params?: object, cacheControl = 'public, max-age=300', additionalData?: object | null) {
  const data = await fetcher(url, params);

  if (additionalData) return json({ ...data, ...additionalData }, { headers: { 'Cache-Control': cacheControl } });

  return json(data, { headers: { 'Cache-Control': cacheControl } });
}

export async function fetchProductsData(params?: object) {
  return await fetchData('products/search2', reject(isEmpty)({ ...params, fields }));
}
