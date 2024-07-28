import { Character } from '@models/RickAndMortyApiResponse';
import ProgressiveImage from '@components/ProgressiveImage';
import { Link, useLocation } from 'react-router-dom';
import SelectItemButton from '@components/SelectItemButton';

function Card({ person }: { person: Character }) {
  const location = useLocation();

  return (
    <Link to={`/details/${person.id}${location.search}`} data-testid="card">
      <article className="flex h-[220px] w-[600px] flex-row content-center rounded-2xl border border-black bg-zinc-800">
        <div className="h-full w-[230px] rounded-2xl">
          <ProgressiveImage
            placeholder={
              <div
                className="h-full w-full animate-pulse rounded-2xl bg-amber-900"
                data-testid="img-placeholder"
              />
            }
            className="h-full w-full rounded-2xl object-cover object-center"
            src={person.image}
            alt={person.name}
          />
        </div>
        <div className="p-3 text-white">
          <h3 className="text-4xl">{person.name}</h3>
          <div>
            <p>
              {person.status} - {person.species} ({person.gender})
            </p>
            <p>{person.type}</p>
          </div>
          <div>
            <p>Last known location:</p>
            <p>{person.location.name}</p>
          </div>
          <SelectItemButton key={person.id} item={person} />
        </div>
      </article>
    </Link>
  );
}

export default Card;
