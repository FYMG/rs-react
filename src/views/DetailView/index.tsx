import useData from '@hooks/useData';
import { json, Link, useLocation, useParams } from 'react-router-dom';
import Spiner from '@components/Spiner';
import { Character } from '@models/RickAndMortyApiResponse.ts';
import ProgressiveImage from '@components/ProgressiveImage';

function DetailView() {
  const { id } = useParams();
  const { data, isError, error, isLoading } = useData<Character, { error: string }>({
    url: `https://rickandmortyapi.com/api/character/${id ?? ''}`,
  });
  const location = useLocation();

  if (isError) {
    throw json(
      { message: "page doesn't exist" },
      { status: 404, statusText: 'Not Found' }
    );
  }

  return (
    <div className="relative" data-testid="detail-view">
      {isLoading && <Spiner className="h-9 w-9 self-center justify-self-center" />}
      {isError && error && (
        <span className="self-center justify-self-center">Oops! {error.error}</span>
      )}
      {data && !isLoading && !isError && (
        <div className="sticky top-0 rounded-2xl bg-zinc-800 p-8 text-white">
          <div className="flex justify-between">
            <div className="text-xl">Details:</div>
            <Link to={`/${location.search}`} data-testid="close-button">
              close
            </Link>
          </div>
          <div className="h-[230px] w-[230px] rounded-2xl">
            <ProgressiveImage
              placeholder={
                <div
                  className="h-full w-full animate-pulse rounded-2xl bg-amber-900"
                  data-testid="img-placeholder"
                />
              }
              className="h-full w-full rounded-2xl object-cover object-center"
              src={data.image}
              alt={data.name}
            />
          </div>
          <div className="p-3">
            <h3 className="text-4xl">{data.name}</h3>
            <div>
              <p>
                {data.status} - {data.species} ({data.gender})
              </p>
              <p>{data.type}</p>
            </div>
            <div>
              <p>Last known location:</p>
              <p>{data.location.name}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default DetailView;
