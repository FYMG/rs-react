import Card from '@components/Card';
import { IPeopleData } from '@hooks/useData';

function CardList({ data }: { data: IPeopleData }) {
  return (
    <div>
      {data.results.length === 0 ? (
        <p>No data</p>
      ) : (
        data.results.map((person) => <Card key={person.name} person={person} />)
      )}
    </div>
  );
}

export default CardList;
