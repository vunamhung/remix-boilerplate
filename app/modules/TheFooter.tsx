import type { iSettings } from '~/types';
import { Link } from "@remix-run/react";
import { hooks } from '~/root';
import { Logo } from '~/components';

export function TheFooter({ settings: { logo, brand, footer, menus, country } }: { settings: iSettings }) {
  return (
    <>
      {hooks.applyFilters('before_footer')}
      <footer>
        <div className="bg-gray-100 py-8">
          <div className="container-fluid grid justify-between gap-4 lg:grid-cols-[2fr,3fr,3fr]">
            <div>
              <Logo logo={logo} brand={brand} />
              <ul className="my-4">
                {footer.description?.map((content, index) => (
                  <li className="flex items-center" key={index}>
                    <i className="icon-check mr-1 text-sm text-gray-400" />
                    {content}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="container-fluid grid grid-cols-2 gap-4 py-8 lg:grid-cols-4">
            {menus.footer.map(({ title, links }, index) => (
              <div key={index}>
                <h3 className="mb-2 lg:mb-4 dlg:text-2xl">{title}</h3>
                <ul className="space-y-1 lg:space-y-2">
                  {links.map(({ title, href }, index) => (
                    <li key={index}>
                      <Link prefetch="intent" className="hover:underline" rel="nofollow" to={href}>
                        {title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="dmd:col-span-full">
              <div>
                <div>
                  ©2021 {brand}. {footer.copyrightText}.
                </div>
                {hooks.applyFilters(
                  'footer_country_currency',
                  <div className="my-4 flex items-center ">
                    {country.flag} {country.name} | {country.currency}
                  </div>,
                )}
              </div>
            </div>
          </div>
        </div>
      </footer>
      {hooks.applyFilters('after_footer')}
    </>
  );
}
