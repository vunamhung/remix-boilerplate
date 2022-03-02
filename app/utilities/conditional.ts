export const canUseDOM: boolean =
  typeof window !== 'undefined' && typeof window.document !== 'undefined' && typeof window.document.createElement !== 'undefined';

export function isExternalUrl(str: string) {
  return /^((https?:|s?ftp:|file:\/|chrome:)?\/\/|mailto:|tel:)/.test(str.toLowerCase());
}

export function isObject(value: any): value is object {
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}

export function isFunction(val: any): val is Function {
  return typeof val === 'function';
}

export function isPlainObject(value: any): boolean {
  let tag: string;
  if (value == null) {
    tag = value === undefined ? '[object Undefined]' : '[object Null]';
  } else {
    tag = Object.prototype.toString.call(value);
  }

  if (!isObjectLike(value) || tag != '[object Object]') {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}

export function isObjectLike(value: any): boolean {
  return typeof value === 'object' && value !== null;
}
