import type { ReactNode } from 'react';
import type { MetaFunction, LinksFunction, LoaderFunction } from 'remix';
import type { iError } from '~/utilities/types';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useCatch, useLoaderData } from 'remix';
import { DynamicLinks } from 'remix-utils';
import TheHeader from '~/modules/TheHeader';
import TheFooter from '~/modules/TheFooter';
import stylesUrl from './style.css';

export const meta: MetaFunction = () => ({ title: 'New Remix App' });
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesUrl }];
export const loader: LoaderFunction = () => ({ ENV: { NODE_ENV: process.env.NODE_ENV } });

function Document({ children, title }: { children: ReactNode; title?: string }) {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(data.ENV)}` }} />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Document>
      <TheHeader />
      <Outlet />
      <TheFooter />
    </Document>
  );
}

export function CatchBoundary() {
  let caught = useCatch();

  switch (caught.status) {
    case 401:
    case 404:
      return (
        <Document title={`${caught.status} ${caught.statusText}`}>
          <div className="container-fluid">
            <h1>
              {caught.status} {caught.statusText}
            </h1>
          </div>
        </Document>
      );

    default:
      throw new Error(`Unexpected caught response with status: ${caught.status}`);
  }
}

export function ErrorBoundary({ error }: iError) {
  console.error(error);

  return (
    <Document title="Uh-oh!">
      <div className="container-fluid">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
        <p>Replace this UI with what you want users to see when your app throws uncaught errors.</p>
      </div>
    </Document>
  );
}
