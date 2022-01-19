import type { ReactNode } from 'react';
import type { MetaFunction, LinksFunction, ShouldReloadFunction, LoaderFunction } from 'remix';
import type { iError } from '~/utilities/types';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useCatch, LiveReload, useLoaderData } from 'remix';
import { DynamicLinks } from 'remix-utils';
import { createHooks } from '@wordpress/hooks';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';
import { organization } from '~/utilities/schema';
import { JsonLd } from '~/components';
import TheHeader from '~/modules/TheHeader';
import TheFooter from '~/modules/TheFooter';
import layout from '~/layout/default';
import stylesUrl from './style.css';

export const hooks = createHooks();
export const meta: MetaFunction = () => ({ title: 'POD Remix App' });
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesUrl }];
export const unstable_shouldReload: ShouldReloadFunction = () => false;
export const loader: LoaderFunction = () => ({ ENV: { GTM_ID: process.env.GTM_ID } });

function Document({ children, title }: { children: ReactNode; title?: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        {title ? <title>{title}</title> : null}
        <Meta />
        <DynamicLinks />
        <Links />
        {hooks.applyFilters('head')}
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <JsonLd data={organization} />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
      </body>
    </html>
  );
}

type iData = { ENV: { GTM_ID: string } };

export default function App() {
  const data = useLoaderData<iData>();

  layout();

  return (
    <Document>
      <GTMProvider state={{ id: data.ENV.GTM_ID }}>
        <TheHeader />
        <Outlet />
        <TheFooter />
      </GTMProvider>
    </Document>
  );
}

export function CatchBoundary() {
  const { status, statusText } = useCatch();

  switch (status) {
    case 401:
    case 404:
      return (
        <Document title={`${status} ${statusText}`}>
          <div className="container-fluid">
            <h1>
              {status} {statusText}
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
      <div className="container-fluid">
        <h1>App Error</h1>
        <pre>{error.message}</pre>
        <p>Replace this UI with what you want users to see when your app throws uncaught errors.</p>
      </div>
    </Document>
  );
}
