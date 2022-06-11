import type { iSettings } from '~/types';
import { useOutletContext } from "@remix-run/react";

export default () => useOutletContext<iSettings>();
