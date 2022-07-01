import type { FC, ReactNode } from 'react';
import { Suspense } from 'react';
import { ClientOnly as CO } from 'remix-utils';
import { Skeleton } from '~/components';

export const ClientOnly: FC<{ children: ReactNode; className: string }> = ({ children, className }) => (
  <CO fallback={<Skeleton className={className || 'h-12 w-full'} />}>
    {() => <Suspense fallback={<Skeleton className={className || 'h-12 w-full'} />}>{children}</Suspense>}
  </CO>
);
