import useSWRImmutable from 'swr/immutable';
import { isEmpty, reject } from 'ramda';
import { stringify } from 'query-string';
import { useStore } from '~/hooks';
import { http } from '~/utilities';

//prettier-ignore
export const fetcher = (url: string) => http(url).then(({ data }) => data).catch(({ response }) => response.data);
export const fields = 'id,name,slug,price,regularPrice,discountPercent,runningHours,promotionId,style,productType,isCustom,totalColors,image';

// @ts-ignore
const onErrorRetry = (error, key, config, revalidate, { retryCount }) => {
  if (error.status === 404) return; // Never retry on 404.
  if (key === '/api/user') return; // Never retry for a specific key.
  if (retryCount >= 5) return; // Only retry up to 5 times.
};

export function useRecommendationProducts(params: object) {
  const [{ currency }] = useStore();
  const key = `/products/recommendations?${stringify(reject(isEmpty)({ ...params, currency, fields }))}`;
  const { data, error } = useSWRImmutable(key, fetcher, { onErrorRetry });

  return {
    data: data?.results,
    currency: data?.currency,
    isLoading: !error && !data,
    isError: error,
  };
}
