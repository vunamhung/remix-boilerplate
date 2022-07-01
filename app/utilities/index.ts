export * from './_config';
export * from './store';
export * from './fetch';
export * from './loader';
export * from './axios';
export * from './ramda-extenstion';

export const isDev = process.env.NODE_ENV === 'development';

export function trailingSlash(text: string) {
  return text.replace(/^\/|\/$/g, '');
}

export const randomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export function convertType(value: string) {
  const maps: { [index: string]: any } = { NaN, null: null, undefined, Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}
