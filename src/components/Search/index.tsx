import { useState } from 'react';

function Search({
  submitSearchValue,
  defaultValue = '',
}: {
  defaultValue?: string;
  submitSearchValue: (value: string) => void;
}) {
  const [searchValue, setSearchValue] = useState(defaultValue);

  return (
    <div className="flex w-full flex-row items-center justify-center gap-2">
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
