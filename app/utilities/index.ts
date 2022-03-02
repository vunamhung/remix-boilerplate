import type { Params } from 'react-router-dom';
import axios from 'axios';
import slugify from 'slugify';
import { isNil } from 'ramda';
import cookie from 'cookie';
import currency from 'currency.js';
import { isNilOrEmpty } from 'ramda-adjunct';
import { getSettings } from '~/hooks';
import { canUseDOM } from './conditional';
import { stringify } from 'querystring';

export * from './fetch';
export * from './seo';
export * from './schema';
export * from './conditional';

export const http = axios.create({ baseURL: canUseDOM ? window.env.API_BASE_URL : '' });

export const __empty = () => '';

export const shuffle = (arr: any[]) => arr.sort(() => Math.random() - 0.5);
export const isDarkMode = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

export function addParameterToURL(key: string, value: string | number | boolean) {
  const urlParams = new URLSearchParams(window.location.search);
  urlParams.set(key, value.toString());

  window.history.pushState(null, '', '?' + urlParams);
}

export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

export function makeSlug(string: string | undefined) {
  if (!string) return '';
  return slugify(string, { lower: true, trim: true, remove: /[*+=~.,()/\\<>%`'"#!:;?@]/g });
}

export function getCFImageUrl(url: string, config: { width?: number; height?: number; format?: 'webp' | 'avif' }) {
  const { irUrl } = getSettings();
  if (!irUrl) return url;
  return `${irUrl}?${stringify({ ...config, image: url })}`;
}

export function getFullUrl(path: string) {
  const { env } = getSettings();

  return env.HOST + path;
}

export function getProductPath(slug: string, id: string) {
  return `/products/${slug}-${id}`;
}

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

export function getThumbnail(url: any, selectedColor: string, size = 550, whiteBg = false) {
  if (!isNil(url.src)) return url.src;

  let thumb = url.replace('[color]', selectedColor?.replace(/ /g, '_'));
  thumb = whiteBg ? thumb.replace('styles/', 'styles/bgw/') : thumb;
  if (size !== 550) thumb = thumb.replace('550x550', `${size}x${size}`);

  return thumb;
}

export function getSearchThumbnail(url: any, size = 550, whiteBg = false) {
  let thumb = whiteBg ? url?.replace('styles/', 'styles/bgw/') : url;
  if (size !== 550) thumb = thumb?.replace('550x550', `${size}x${size}`);

  return thumb;
}

export function convertType(value: string) {
  const maps: { [index: string]: any } = { NaN, null: null, undefined, Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}

export function currencyFormat(amount: number, symbol: string, precision = 2) {
  if (symbol === '€') {
    return currency(amount, { symbol, separator: '.', decimal: ',', pattern: `# !`, precision }).format();
  }
  return currency(amount, { symbol: symbol || '$', precision }).format();
}
