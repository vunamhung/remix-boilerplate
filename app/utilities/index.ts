import axios from 'axios';
import slugify from 'slugify';
import currency from 'currency.js';
import { stringify } from 'querystring';
import { getSettings } from '~/hooks';
import { canUseDOM } from './conditional';

export * from './fetch';
export * from './seo';
export * from './schema';
export * from './conditional';
export * from './i18n';
export * from './loader';

export const http = axios.create({ baseURL: canUseDOM ? window.env.API_BASE_URL : '' });

export function scrollToTop() {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

export function slugi(string: string | undefined, replacement = '-') {
  if (!string) return '';
  return slugify(string, { replacement, lower: true, trim: true, remove: /[*+=~.,()/\\<>%`'"#!:;?@]/g });
}

export function getCFImageUrl(url: string, config: { width?: number; height?: number; format?: 'webp' | 'avif' }) {
  const { irUrl } = getSettings();
  if (!irUrl) return url;
  return `${irUrl}?${stringify({ ...config, image: url })}`;
}

export function getApiUrl(path: string) {
  const { env } = getSettings();

  return env.API_BASE_URL + path;
}

export function getFullUrl(path: string) {
  const { env } = getSettings();

  return env.HOST + path;
}

export function getProductPath(slug: string, id: string) {
  return `/products/${slug}-${id}`;
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
