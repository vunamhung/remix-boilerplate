import { useSnapshot } from 'valtio';
import { useDocumentTitle as useDocTitle } from '@mantine/hooks';
import { store } from '~/utilities';

export function useDocumentTitle(title: string) {
  const { site } = useSnapshot(store);
  useDocTitle(`${title} | ${site}`);
}
