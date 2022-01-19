import { json } from 'remix';
import { isNil } from 'ramda';
import { stringify } from 'query-string';

export async function fetchData(param: string | undefined, params?: object, cacheControl = 'public, max-age=300') {
  let request = params ? `${process.env.API}/${param}?${stringify(params)}` : `${process.env.API}/${param}`;
  // cacheTtl: 15 Always cache this fetch regardless of content type for a max of 15 seconds before revalidating the resource
  let response = await fetch(request, { cf: { cacheTtl: 15, cacheEverything: true } });

  let data = await response.json();

  return json(data, { headers: { 'Cache-Control': cacheControl } });
}

export function getThumb(url: any, selectedColor: string, size = 550, whiteBg = false) {
  if (!isNil(url.src)) return url.src;

  let thumb = url.replace('[color]', selectedColor?.replace(/ /g, '_'));
  thumb = whiteBg ? thumb.replace('styles/', 'styles/bgw/') : thumb;
  if (size !== 550) thumb = thumb.replace('550x550', `${size}x${size}`);

  return thumb;
}

export function convertType(value: string) {
  const maps: { [index: string]: any } = { NaN, null: null, undefined, Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}
