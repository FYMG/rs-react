import { PureComponent } from 'react';
import { IPerson } from '@services/api/getPeopleData';

export interface ICardProperties {
  person: IPerson;
}

class Card extends PureComponent<ICardProperties> {
  render() {
    const { person } = this.props;

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
}

export default Card;
