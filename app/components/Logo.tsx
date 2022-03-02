import type { FC } from 'react';
import type { iSettings } from '~/types';
import { Link } from 'remix';

export const Logo: FC<{ logo: iSettings['logo']; brand: string }> = ({ logo, brand }) => (
  <Link prefetch="intent" className="text-2xl uppercase leading-none tracking-[0.2em]" to="/">
    {logo?.url ? <img src={logo.url} alt={brand} width={logo?.width} height={logo.height} /> : brand}
  </Link>
);
