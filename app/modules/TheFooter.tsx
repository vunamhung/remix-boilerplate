import { hooks } from '~/root';

export default function TheFooter() {
  hooks.doAction('footer');
  return (
    <>
      {hooks.applyFilters('before_footer')}
      <footer>
        <div className="container-fluid py-2">
          <p className="text-sm text-gray-500">All rights reserved.</p>
        </div>
      </footer>
      {hooks.applyFilters('after_footer')}
    </>
  );
}
