import Search from '@components/Search';
import CardList from '@components/CardList';
import { useState } from 'react';
import { useData } from '@hooks/useData';

function SearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  const { isLoading, isError, data } = useData({
    url: 'https://swapi.dev/api/people',
    queryParams: {
      search: searchQuery,
    },
  });

  return (
    <main>
      <Search submitSearchValue={setSearchQuery} />
      {isLoading && <p>Loading...</p>}
      {isError && <p>Error</p>}
      {data && !isLoading && <CardList data={data} />}
    </main>
  );
}

export default SearchView;
