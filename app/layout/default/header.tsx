import { hooks } from '~/root';

export function beforeHeader() {
  hooks.addFilter('before_header', 'remix', () => (
    <div className="mb-2 bg-gray-100 py-1">
      <div className="container-fluid">top bar</div>
    </div>
  ));
}
