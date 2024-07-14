import Card from '@components/Card';
import { RickAndMortyApiResponse } from '@models/RickAndMortyApiResponse.ts';

function CardList({ data }: { data: RickAndMortyApiResponse }) {
  return (
    <div className="grid w-full items-center justify-center gap-3">
      {data.results.length === 0 ? (
        <p>No data</p>
      ) : (
        data.results.map((person) => <Card key={person.id} person={person} />)
      )}
    </div>
  );
}

export default CardList;
