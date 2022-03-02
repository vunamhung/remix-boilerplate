import type { ReactNode } from 'react';
import type { MetaFunction, LinksFunction, ShouldReloadFunction, LoaderFunction } from 'remix';
import type { iSettings, iError } from '~/types';
import { Links, Meta, Outlet, Scripts, ScrollRestoration, useCatch, LiveReload, useLoaderData, json } from 'remix';
import isbot from 'isbot';
import md from 'is-mobile';
import { Toaster } from 'react-hot-toast';
import { DynamicLinks } from 'remix-utils';
import { createHooks } from '@wordpress/hooks';
import { GTMProvider } from '@elgorditosalsero/react-gtm-hook';
import settings from '~/utilities/settings';
import { TheHeader, TheFooter } from '~/modules';

import layout from '~/layout/default';

import stylesUrl from './style.css';

export const hooks = createHooks();
export const meta: MetaFunction = ({ data }: { data: iSettings }) => ({ title: data?.brand, ...data?.meta });
export const links: LinksFunction = () => [
  { rel: 'preload', href: '/fonts/seseable-icons.ttf', as: 'font', type: 'font/ttf' },
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'use-credentials' },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap',
  },
  { rel: 'stylesheet', href: stylesUrl },
];
export const unstable_shouldReload: ShouldReloadFunction = () => false;
export const loader: LoaderFunction = ({ request: { headers } }) => {
  const ua = headers.get('user-agent') as string;
  const isBot = isbot(ua);
  const isMobile = md({ ua, tablet: true });
  const isPhone = md({ ua });
  const isTablet = isMobile && !isPhone;
  const env = { API_BASE_URL, HOST };

  return json({
    ...settings,
    brand: BRAND,
    irUrl: IR_URL,
    env,
    isBot,
    isMobile,
    isPhone,
    isTablet,
  });
};

function Document({ children, title }: { children: ReactNode; title: string }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>{title}</title>
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
}

export default function App() {
  const settings = useLoaderData<iSettings>();

  layout();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href={settings.favicon} />
        <Meta />
        <DynamicLinks />
        <Links />
        <script dangerouslySetInnerHTML={{ __html: 'window.dataLayer = window.dataLayer || [];window.uetq = window.uetq || [];' }} />
        {hooks.applyFilters('head')}
      </head>
      <body className="pt-16">
        <Toaster position="top-right" toastOptions={{ style: { borderRadius: '0', background: '#222', color: '#fff' } }} />
        <GTMProvider state={{ id: process.env.NODE_ENV === 'development' ? 'GTM-P7L43JT' : settings.gtmId }}>
          <TheHeader settings={settings} />
          <Outlet context={settings} />
          <TheFooter settings={settings} />
        </GTMProvider>
        <ScrollRestoration />
        <script dangerouslySetInnerHTML={{ __html: `window.env = ${JSON.stringify(settings.env)}` }} />
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
          <div className="container-fluid flex h-screen items-center justify-center">
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
      <div className="container-fluid flex h-screen items-center">
        <div>
          <h1>App Error</h1>
          <pre>{error.message}</pre>
        </div>
      </div>
    </Document>
  );
}
