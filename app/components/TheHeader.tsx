import { NavLink, useLocation } from '@remix-run/react';
import { useSettings } from '~/hooks';
import { cn } from '~/utilities';

export const TheHeader = () => {
  const { menu } = useSettings();
  const { pathname } = useLocation();

  return (
    <header>
      <div className="container py-4">
        <nav className="hidden flex-1 lg:block">
          <ul className="flex flex-wrap gap-x-6">
            <li>
              <NavLink className={cn('hover:underline dark:text-white', pathname === '/' && 'underline')} prefetch="intent" to={'/'}>
                Home
              </NavLink>
            </li>
            {menu?.primary?.map(({ title, path }, index) => (
              <li key={index}>
                <NavLink className={cn('hover:underline dark:text-white', pathname?.startsWith(path) && 'underline')} prefetch="intent" to={path}>
                  {title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
