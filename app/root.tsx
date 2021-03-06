import type { ReactNode } from 'react';
import type { iError } from '~/types';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch } from '@remix-run/react';
import { Toaster } from 'react-hot-toast';
import { DynamicLinks } from 'remix-utils';
import { useProgress, useRevalidate } from '~/hooks';
import stylesUrl from './style.css';

export const meta = { title: 'Remix Boilerplate' };
export const links = () => [{ rel: 'stylesheet', href: stylesUrl }];

function Document({ children, title }: { children: ReactNode; title: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default function App() {
  useProgress();
  useRevalidate();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" type="image/svg+xml" href="/images/favicon.ico" />
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body className="flex min-h-screen">
        <Toaster position="top-right" toastOptions={{ style: { borderRadius: '0', background: '#333', color: '#fff' } }} />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  const { status } = useCatch();

  switch (status) {
    case 404:
      return (
        <Document title="404: This page could not be found.">
          <div className="container flex h-screen items-center justify-center">
            <h1 className="inline-flex items-center">
              <span className="border-r-2 border-black pr-2">404</span> <span className="ml-2 text-base">This page could not be found.</span>
            </h1>
          </div>
        </Document>
      );

    default:
      throw new Error(`Unexpected caught response with status: ${status}`);
  }
}

export function ErrorBoundary({ error }: iError) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <div className="container flex h-screen items-center">
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
        </div>
      </div>
    </Document>
  );
}
