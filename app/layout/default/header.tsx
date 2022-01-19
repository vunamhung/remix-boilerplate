import { hooks } from '~/root';

export default function () {
  hooks.addFilter('before_header', 'remix', () => (
    <div className="bg-gray-100 py-1 mb-2">
      <div className="container-fluid">top bar</div>
    </div>
  ));
}
