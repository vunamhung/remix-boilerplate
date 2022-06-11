import type { iSettings } from '~/types';
import { Link, NavLink } from "@remix-run/react";
import { isNilOrEmpty } from 'ramda-adjunct';
import { hooks } from '~/root';
import { useHeadroom, useStore } from '~/hooks';
import { Logo, SearchBox } from '~/components';

export function TheHeader({ settings: { logo, brand, isMobile, menus } }: { settings: iSettings }) {
  useHeadroom();

  if (isMobile) {
    return (
      <>
        {hooks.applyFilters('before_header')}
        <header className="fixed left-0 right-0 top-0 z-10">
          <div className="z-50 bg-white">
            <div className="header-container container-fluid flex items-center justify-between py-4">
              <div className="flex items-center">
                <i className="icon-menu text-xl" />
                <i className="icon-search text-xl" />
              </div>
              <Logo logo={logo} brand={brand} />
              <div className="flex items-center">
                <Link prefetch="intent" to="/favorite">
                  <i className="icon-heart text-xl" />
                </Link>
                <MiniCart />
              </div>
            </div>
          </div>
        </header>
        {hooks.applyFilters('after_header')}
      </>
    );
  }

  return (
    <>
      {hooks.applyFilters('before_header')}
      <header className="fixed left-0 right-0 top-0 z-10">
        <div className="z-50 bg-white">
          <div className="header-container container-fluid flex items-center justify-between py-4">
            <Logo logo={logo} brand={brand} />
            <Menu menu={menus.main} />
            <div className="flex items-center">
              <SearchBox />
              <Link prefetch="intent" to="/favorite">
                <i className="icon-heart text-xl" />
              </Link>
              <MiniCart />
            </div>
          </div>
        </div>
      </header>
      {hooks.applyFilters('after_header')}
    </>
  );
}

function MiniCart() {
  const [{ cartCount }] = useStore();

  return (
    <Link to="/cart" className="mini-cart ml-2 xl:ml-4">
      {cartCount}
    </Link>
  );
}

function Menu({ menu }: { menu: iSettings['menus']['main'] }) {
  return (
    <nav className="dlg:hidden">
      <ul className="flex flex-wrap space-x-2">
        {menu.map(({ title, path, child }, index) => (
          <li className="menu-item" key={index}>
            <NavLink prefetch="intent" to={path}>
              {title}
            </NavLink>
            {!isNilOrEmpty(child) && (
              <ul className="submenu space-y-2">
                {child.map(({ title, path }, index) => (
                  <li key={index}>
                    <NavLink prefetch="intent" to={path}>
                      {title}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
