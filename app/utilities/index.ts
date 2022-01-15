export async function fetchData(param: string | undefined, cacheControl = 'public, max-age=300') {
  let response = await fetch(`${process.env.API}/${param}`, {
    cf: {
      cacheTtl: 15, // Always cache this fetch regardless of content type for a max of 15 seconds before revalidating the resource
      cacheEverything: true,
    },
  });

  response = new Response(response.body, response);
  response.headers.set('Cache-Control', cacheControl);

  return response;
}
