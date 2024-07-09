import IPerson from '@models/IPerson';

function Card({ person }: { person: IPerson }) {
  return (
    <div className="flex flex-col content-center border border-black">
      <p className="text-xl">
        {person.name} ({person.birth_year})
      </p>
      <p>height {person.height}</p>
      <p>mass {person.mass}</p>

      <p>gender {person.gender}</p>
    </div>
  );
}

export default Card;
