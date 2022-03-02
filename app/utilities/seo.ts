import { iSettings } from '~/types';

export function getMeta(data: any, root: iSettings) {
  const final = { title: data?.title || root?.brand };

  if (data?.robots) {
    Object.assign(final, { robots: data?.robots });
    Object.assign(final, { googlebot: data?.robots });
  }

  return final;
}
