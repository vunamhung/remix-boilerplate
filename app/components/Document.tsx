import type { ReactNode } from 'react';
import { Links, Meta } from '@remix-run/react';

export function Document({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}
