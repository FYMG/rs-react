import useSearchParameters from '@hooks/useSearchParameters';
import { useSearchParams } from 'react-router-dom';

function useSearch(): [string, (value: string) => void] {
  const [searchParameters, setSearchParameters] = useSearchParams();
  const { search } = useSearchParameters();

  const setSearch = (value: string) => {
    setSearchParameters({ ...searchParameters, search: value.trim() });
    localStorage.setItem('@rs-react:search', value.trim());
  };

  return [search ?? localStorage.getItem('@rs-react:search') ?? '', setSearch];
}

export default useSearch;
