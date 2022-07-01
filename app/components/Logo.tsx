import type { FC } from 'react';

export const Logo: FC<{ className?: string }> = ({ className }) => <img className={className} src="/images/logo.svg" alt="logo" />;
