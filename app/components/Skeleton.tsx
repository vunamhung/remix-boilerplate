import type { FC } from 'react';

export const Skeleton: FC<{ className: string }> = ({ className }) => (
  <div className={`skeleton relative overflow-hidden bg-gray-200 leading-none ${className}`} />
);
