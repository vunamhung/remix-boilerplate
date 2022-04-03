import { vsprintf } from 'sprintf-js';
import language from '~/language';

export function __(format: string, ...args: any[]): string {
  if (language?.[format]) {
    if (args) return vsprintf(language[format], args);
    return language[format];
  }

  if (args) return vsprintf(format, args);
  return format;
}

export function _n(singular: string, plural: string, count: number, ...args: any[]): string {
  if (count > 1) return __(plural, args);
  return __(singular, args);
}
