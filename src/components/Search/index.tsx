import { useState } from 'react';

function Search({ submitSearchValue }: { submitSearchValue: (value: string) => void }) {
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="flex flex-row items-center justify-center gap-2">
      <input
        className="m-2 w-1/2 border-2 border-black"
        type="text"
        onChange={(event) => setSearchValue(event.target.value)}
        value={searchValue}
        placeholder="Search..."
      />
      <button type="button" onClick={() => submitSearchValue(searchValue)}>
        Search
      </button>
    </div>
  );
}

export default Search;
