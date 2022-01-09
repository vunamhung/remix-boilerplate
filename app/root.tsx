import type { MetaFunction, LinksFunction } from 'remix';
import { Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData } from 'remix';
import stylesUrl from './style.css';

export const meta: MetaFunction = () => ({ title: 'New Remix App' });
export const links: LinksFunction = () => [{ rel: 'stylesheet', href: stylesUrl }];

export function loader() {
  return {
    ENV: {
      NODE_ENV: process.env.NODE_ENV,
    },
  };
}

export default function App() {
  const data = useLoaderData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        {process.env.NODE_ENV === 'development' && <LiveReload />}
        <script dangerouslySetInnerHTML={{ __html: `window.ENV = ${JSON.stringify(data.ENV)}` }} />
      </body>
    </html>
  );
}