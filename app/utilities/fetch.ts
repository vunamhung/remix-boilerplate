import { json } from "@remix-run/cloudflare";
import { stringify } from 'query-string';
import { isEmpty, reject } from 'ramda';
import { badRequest, forbidden, notFound, serverError, unauthorized } from 'remix-utils';

export async function fetching(url: string, params?: object) {
  const uri = url?.startsWith('http') ? url : `${API_BASE_URL}/${url}`;
  const response = await fetch(params ? `${uri}?${stringify(params)}` : uri);

  const data: any = await response.json();

  if (data?.statusCode === 400) throw badRequest({ message: 'Bad request' });
  if (data?.statusCode === 401) throw unauthorized({ message: 'Unauthorized' });
  if (data?.statusCode === 403) throw forbidden({ message: 'Forbidden' });
  if (data?.statusCode === 404) throw notFound({ message: 'Not Found' });
  if (data?.statusCode === 500) throw serverError({ message: 'Internal Server Error' });

  return data;
}

export async function fetchData(url: string, params?: object, cacheControl = 'public, max-age=300', additionalData?: object | null) {
  const data = await fetching(url, params);

  if (additionalData) return json({ ...data, ...additionalData }, { headers: { 'Cache-Control': cacheControl } });

  return json(data, { headers: { 'Cache-Control': cacheControl } });
}

export async function fetchProductsData(params?: object) {
  return await fetchData('products/search2', reject(isEmpty)({ ...params, fields: 'id,type,name,slug,price,style,productType,totalColors,image' }));
}
