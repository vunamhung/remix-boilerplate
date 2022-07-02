import type { FC } from 'react';
import type { Thing } from 'schema-dts';
import { Helmet } from 'react-helmet';

export const JsonLd: FC<{ data: Thing }> = ({ data }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);
