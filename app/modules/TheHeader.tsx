import { NavLink } from '@remix-run/react';
import { hooks } from '~/root';

export default function TheHeader() {
  hooks.doAction('header');

  return (
    <>
      {hooks.applyFilters('before_header')}
      <header className="header-wrap pb-2 mb-4 border-b border-gray-300">
        <div className="container-fluid">
          <nav className="flex space-x-2">
            <NavLink prefetch="intent" to="/">
              Home
            </NavLink>
          </nav>
        </div>
      </header>
      {hooks.applyFilters('after_header')}
    </>
  );
}
