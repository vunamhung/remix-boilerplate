import type { HeadersFunction, MetaFunction } from '@remix-run/node';

export const headers: HeadersFunction = ({ loaderHeaders }) => ({ 'Cache-Control': loaderHeaders.get('Cache-Control') || '' });

export const meta: MetaFunction<any> = ({ data }) => SEO(data);

export function SEO(data: iPage) {
  return [
    { title: data?.yoast_head_json?.title },
    { name: 'description', content: data?.yoast_head_json?.description },
    { name: 'og:locale', content: data?.yoast_head_json?.og_locale },
    { name: 'og:type', content: data?.yoast_head_json?.og_type },
    { name: 'og:title', content: data?.yoast_head_json?.og_title },
    { name: 'og:description', content: data?.yoast_head_json?.og_description },
    { name: 'og:site_name', content: data?.yoast_head_json?.og_site_name },
    { name: 'article:modified_time', content: data?.yoast_head_json?.article_modified_time },
  ];
}
