import { PureComponent } from 'react';
import Card from '@components/Card';
import getPeopleData, { IPerson } from '@services/api/getPeopleData';
import Spinner from '@assets/spiner.svg?react';
import SearchContext, { ISearchContextValue } from '../../context/SearchContext';

interface ICardListState {
  isPending: boolean;
  lastSearchValue: string;
  result: IPerson[];
}

class CardList extends PureComponent<unknown, ICardListState> {
  constructor(properties: unknown) {
    super(properties);
    this.state = {
      isPending: true,
      lastSearchValue: '',
      result: [],
    };
  }

  componentDidMount() {
    const { searchValue } = this.context as ISearchContextValue;

    this.setNewCardData(searchValue).catch(() => {});
  }

  private async setNewCardData(newSearchValue: string) {
    this.setState({ isPending: true });
    this.setState({
      lastSearchValue: newSearchValue,
      result: await getPeopleData(newSearchValue)
        .then((data) => data.results)
        .finally(() => {
          this.setState({ isPending: false });
        }),
    });
  }

  render() {
    const { searchValue } = this.context as ISearchContextValue;
    const { lastSearchValue, result, isPending } = this.state;

    if (searchValue !== lastSearchValue) {
      this.setNewCardData(searchValue).catch(() => {});
    }

    if (!isPending) {
      return (
        <div>
          {result.length === 0 ? (
            <p>No data</p>
          ) : (
            result.map((person) => <Card key={person.name} person={person} />)
          )}
        </div>
      );
    }

    return (
      <div className="flex content-center justify-center">
        <Spinner className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600">
          Loading...
        </Spinner>
      </div>
    );
  }
}

CardList.contextType = SearchContext;

export default CardList;
