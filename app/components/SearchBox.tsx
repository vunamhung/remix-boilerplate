import { useState } from 'react';

export function SearchBox() {
  const [term, setTerm] = useState('');
  const [searchFocus, setSearchFocus] = useState(false);

  return (
    <div className="relative mr-4 flex items-center dlg:hidden">
      <i className="icon-search z-20 -mr-9 text-xl" />
      <input
        autoFocus
        onFocus={() => setSearchFocus(true)}
        placeholder="Search ..."
        onChange={({ target }) => setTerm(target.value)}
        value={term}
        className="search w-48 rounded-full bg-gray-100 py-2 pl-10 pr-3 focus:outline-none"
      />
    </div>
  );
}
