import CardList from '@components/CardList';
import Spiner from '@components/Spiner';
import Pagination from '@components/Pagination';
import { useSearchParams } from 'react-router-dom';
import useSearchParameters from '@hooks/useSearchParameters';
import useSearch from '@hooks/useSearch';
import ItemsActionsModal from '@components/ItemsActionsModal';
import { useGetAllCharacterQuery } from '@services/redux/query/rickAndMortyApi';

function SearchView() {
  const [searchParameters, setSearchParameters] = useSearchParams();
  const { page = '1' } = useSearchParameters();
  const [search] = useSearch();

  const { isLoading, isError, data, error } = useGetAllCharacterQuery({
    name: search,
    page,
  });

  return (
    <main className="grid h-full w-full">
      {isLoading && <Spiner className="h-9 w-9 self-center justify-self-center" />}
      {isError && error && (
        <span className="self-center justify-self-center">Oops! Data not fetched</span>
      )}
      {data && !isLoading && !isError && (
        <div>
          <CardList data={data} />
          <Pagination
            onPageChange={(value) => {
              setSearchParameters({
                ...searchParameters,
                page: value.toString(),
                search,
              });
            }}
            pageTotal={data.info.pages}
            currentPage={Number.parseInt(page, 10)}
          />
          <ItemsActionsModal />
        </div>
      )}
    </main>
  );
}

export default SearchView;
