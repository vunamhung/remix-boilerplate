import type { FC } from 'react';
import type { Thing } from 'schema-dts';

export const JsonLd: FC<{ data: Thing }> = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
);
