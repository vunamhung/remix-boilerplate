import type { HeadersFunction } from 'remix';

export let headers: HeadersFunction = () => ({ 'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=600' });

export default function Index() {
  return (
    <div className="container my-20">
      <h1 className="text-blue-700">Welcome to Remix</h1>
      <ul>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/blog" rel="noreferrer">
            15m Quickstart Blog Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/tutorials/jokes" rel="noreferrer">
            Deep Dive Jokes App Tutorial
          </a>
        </li>
        <li>
          <a target="_blank" href="https://remix.run/docs" rel="noreferrer">
            Remix Docs
          </a>
        </li>
      </ul>
    </div>
  );
}
