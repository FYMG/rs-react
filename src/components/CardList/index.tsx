import { PureComponent } from 'react';
import Card from '@components/Card';
import getPeopleData, { IPerson } from '@services/api/getPeopleData';
import Spinner from '@assets/spiner.svg?react';
import { ISearchContextValue, SearchContext } from '@hoc/SearchContext';

interface ICardListState {
  isPending: boolean;
  result: IPerson[];
  searchValue: string;
}

class CardList extends PureComponent<unknown, ICardListState> {
  constructor(properties: unknown) {
    super(properties);
    this.state = {
      isPending: false,
      searchValue: undefined,
      result: [],
    };
  }

  componentDidMount() {
    const { searchValue } = this.context as ISearchContextValue;

    this.setState({
      searchValue,
    });
  }

  componentDidUpdate(_, previousState: ICardListState) {
    const { isPending } = this.state;
    const { searchValue } = this.context as ISearchContextValue;

    if ((previousState.searchValue !== searchValue ?? '') && !isPending) {
      this.updateCardsData(searchValue).catch(() => {});
    }
  }

  private async updateCardsData(newSearchValue: string) {
    this.setState({ isPending: true, searchValue: newSearchValue });
    this.setState({
      result: await getPeopleData(newSearchValue).then((data) => data.results),
      isPending: false,
    });
  }

  render() {
    const { result, isPending } = this.state;

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
        <Spinner className="h-8 w-8 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600" />
      </div>
    );
  }
}

CardList.contextType = SearchContext;

export default CardList;
