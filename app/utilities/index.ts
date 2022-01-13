import cfg from './config';

export { default as cfg } from './config';

export async function getData(param: string | undefined) {
  const data = await fetch(`${cfg.apiUrl}/${param}`, {
    cf: {
      cacheTtl: 15, // Always cache this fetch regardless of content type for a max of 15 seconds before revalidating the resource
      cacheEverything: true,
    },
  });

  return data.json();
}
