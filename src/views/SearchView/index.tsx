import Search from '@components/Search';
import CardList from '@components/CardList';
import { useState } from 'react';
import useData from '@hooks/useData';
import { RickAndMortyApiResponse } from '@models/RickAndMortyApiResponse';
import Spiner from '@components/Spiner';
import Pagination from '@components/Pagination';

function SearchView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const { isLoading, isError, data, error } = useData<
    RickAndMortyApiResponse,
    { error: string }
  >({
    url: 'https://rickandmortyapi.com/api/character',
    queryParams: {
      name: searchQuery.trim(),
      page: String(page),
    },
  });

  console.log(data?.info);

  return (
    <main className="grid h-full w-full">
      <Search
        submitSearchValue={(value) => {
          setSearchQuery(value);
          setPage(1);
        }}
      />
      {isLoading && <Spiner className="h-9 w-9 self-center justify-self-center" />}
      {isError && error && (
        <span className="self-center justify-self-center">Oops! {error.error}</span>
      )}
      {data && !isLoading && !isError && (
        <div>
          <CardList data={data} />
          <Pagination
            onPageChange={(value) => setPage(value)}
            pageTotal={data.info.pages}
            currentPage={page}
          />
        </div>
      )}
    </main>
  );
}

export default SearchView;
