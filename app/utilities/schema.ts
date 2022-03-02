import type { ContactPoint, Organization, WithContext } from 'schema-dts';
import type { iContact } from '~/types';
import { filter, find, flatten, pluck, propEq } from 'ramda';
import { getSettings } from '~/hooks';
import { getFullUrl } from '~/utilities';

export function organizationSchema(): WithContext<Organization> {
  const { brand, logo, socials, locations, env } = getSettings();
  const { detail } = find(propEq('isPrimary', true))(flatten(pluck('addresses', locations))) as iContact;
  const contact = filter(propEq('contactPoint', true))(flatten(pluck('phones', locations))) as unknown as ContactPoint[];

  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: brand,
    url: env.HOST,
    logo: logo.url.includes('http') ? logo.url : getFullUrl(logo.url),
    sameAs: socials.map(({ url }) => url),
    address: {
      '@type': 'PostalAddress',
      streetAddress: detail.address1,
      addressLocality: detail.country,
      addressRegion: detail?.state || detail.country,
      postalCode: detail.postcode,
      addressCountry: detail.country,
    },
    contactPoint: contact.map(({ telephone, contactOption, contactType, areaServed, availableLanguage }): ContactPoint => {
      return {
        '@type': 'ContactPoint',
        telephone,
        contactType,
        contactOption,
        areaServed,
        availableLanguage,
      };
    }),
  };
}
