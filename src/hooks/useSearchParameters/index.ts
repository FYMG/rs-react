import { useSearchParams } from 'react-router-dom';

function useSearchParameters() {
  const [searchParameters] = useSearchParams();

  const search = searchParameters.get('search') ?? undefined;
  const page = searchParameters.get('page') ?? undefined;
  const details = searchParameters.get('details') ?? undefined;

  return {
    search,
    page,
    details,
  };
}

export default useSearchParameters;
