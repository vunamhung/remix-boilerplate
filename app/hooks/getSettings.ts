import type { iSettings } from '~/types';
import { useOutletContext } from 'remix';

export default () => useOutletContext<iSettings>();
