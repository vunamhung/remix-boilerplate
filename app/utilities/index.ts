import { isNil } from 'ramda';
import { snapshot } from 'valtio';
import currency from 'currency.js';
import { stringify } from 'querystring';
import { store } from './store';
import { config } from './_config';

export * from './_config';
export * from './store';
export * from './ramda-extenstion';
export * from './fetch';
export * from './loader';
export * from './http';

export const isDev = process.env.NODE_ENV === 'development';

export function trailingSlash(text: string) {
  return text.replace(/^\/|\/$/g, '');
}

export const randomInteger = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

export function getThumbnail(url: any, mockup?: string, selectedColor?: string, size = 735, whiteBg = false) {
  if (!isNil(url?.src)) return url.src;

  let thumb = url?.replace('[color]', selectedColor?.replace(/ /g, '_'));
  thumb = mockup ? thumb.replace('[mockup]', mockup) : thumb;
  thumb = whiteBg ? thumb?.replace('styles/', 'styles/bgw/') : thumb;
  if (size !== 550) thumb = thumb?.replace('550x550', `${size}x${size}`);

  return thumb;
}

export function getCFImageUrl(url: string, configs: { width?: number; height?: number; format?: 'webp' | 'avif' }) {
  return `${config.irUrl}?${stringify({ ...configs, image: url })}`;
}

export function getTitle(text?: string) {
  const { site } = snapshot(store);

  if (text) return `${text} | ${site}`;
  return site;
}

export function convertType(value: string) {
  const maps: { [index: string]: any } = { NaN, null: null, undefined, Infinity, '-Infinity': -Infinity };
  return value in maps ? maps[value] : value;
}

export function currencyFormat(amount: number, symbol: string, precision = 2) {
  if (symbol === '€') {
    return currency(amount, { symbol, separator: '.', decimal: ',', pattern: `# !`, precision }).format();
  } else if (symbol === 'US$') {
    return currency(amount, { symbol: '$', precision }).format();
  }
  return currency(amount, { symbol: symbol || '$', precision }).format();
}

export const favicon =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0nMTYnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMTYgMCA5NSAxMDUiIGZpbGw9ImN1cnJlbnRjb2xvciI+CiAgPHBhdGggZD0iTTQ3LjEsNzkuOWw3LjQsMTMuOGM1LjktMy42LDExLjYtNy40LDE3LjItMTEuNGwtMjMuMi00LjNDNDcsNzcuOCw0Ni40LDc4LjcsNDcuMSw3OS45eiIvPgogIDxwYXRoCiAgICBkPSJNMzguOSw3Ni4zYy0wLjMtMC4xLTEuNCwwLjYtMi42LDEuNGwtMTYuMSwxMmMtMS42LDEyLjIsOC41LDE5LjEsMjIuMSwxMS4xYzIuNi0xLjQsNS4yLTIuOSw3LjctNC40ICAgIGwtOS40LTE3LjdDMzkuOSw3Ny41LDM5LjEsNzYuNCwzOC45LDc2LjN6Ii8+CiAgPHBhdGggZD0iTTg0LjgsNDEuN2wtOS41LDdjLTEuMSwwLjgtMS4zLDIuNC0wLjIsMy40TDkxLjEsNjhjMTAtNy40LDExLjMtMTcuNSw0LjgtMjUuOWwtNi40LTEuNCAgICBDODgsNDAuNCw4Niw0MC45LDg0LjgsNDEuN3oiLz4KICA8cGF0aCBkPSJNNzAuOSw1NS4yYy0xLTEtMi44LTEuMS0zLjktMC4zTDQ2LjEsNzAuNWMtMS4xLDAuOC0wLjksMS44LDAuNSwybDMwLjksNS43YzMuMi0yLjMsNi4zLTQuNyw5LjQtNy4xICAgIEw3MC45LDU1LjJ6Ii8+CiAgPHBhdGggZD0iTTc3LjcsMzguMmwtMTguNS00Yy0xLjQtMC4zLTEuNywwLjMtMC43LDEuM2w5LjMsOS4zYzEsMSwyLjgsMS4xLDMuOSwwLjNsNi40LTQuOCAgICBDNzkuMywzOS40LDc5LjEsMzguNSw3Ny43LDM4LjJ6Ii8+CiAgPHBhdGggZD0iTTQxLjMsMjUuNUwyMS44LDYuMWMtMi40LDQtMi41LDEwLDAuNiwxNi44bDE4LjEsMy45QzQyLDI3LjEsNDIuMywyNi41LDQxLjMsMjUuNXoiLz4KICA8cGF0aCBkPSJNMzUsNjguM2wtOC41LTE1LjljMCw1LjQtMC40LDEwLjktMS4xLDE2LjJsOC4zLDEuNUMzNS4xLDcwLjQsMzUuNyw2OS42LDM1LDY4LjN6Ii8+CiAgPHBhdGgKICAgIGQ9Ik01NC45LDI5LjlsMjYuMiw1LjdjMS40LDAuMywzLjUtMC4xLDQuNi0xbDAuOS0wLjdDNzIuNCwyMyw1OC4xLDEzLjEsNDIuMyw0LjRjLTYuOC00LTEyLjgtNC4yLTE2LjgtMiAgICBsMjUuMSwyNS4xQzUxLjYsMjguNiw1My42LDI5LjYsNTQuOSwyOS45eiIvPgogIDxwYXRoIGQ9Ik0yOC45LDc0LjVsLTQuMy0wLjhjLTAuNSwyLjYtMS4xLDUuMi0xLjgsNy44bDYuNi00LjlDMzAuNSw3NS43LDMwLjMsNzQuOCwyOC45LDc0LjV6Ii8+CiAgPHBhdGgKICAgIGQ9Ik0zOS41LDY1LjhjMC43LDEuMywyLjEsMS42LDMuMywwLjdsMjAuNS0xNS4zYzEuMS0wLjgsMS4zLTIuNCwwLjItMy40TDQ5LjEsMzMuNGMtMS0xLTMtMi4xLTQuNC0yLjQgICAgbC0yMS40LTQuNmMxLjEsNC40LDEuOSw5LDIuNCwxMy42TDM5LjUsNjUuOHoiLz4KPC9zdmc+Cg==';
