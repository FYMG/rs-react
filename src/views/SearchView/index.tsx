import { PureComponent } from 'react';
import Search from '@components/Search';
import CardList from '@components/CardList';
import SearchContext from '../../context/SearchContext';

export interface SearchViewState {
  searchValue: string;
}

class SearchView extends PureComponent<unknown, SearchViewState> {
  constructor(properties: unknown) {
    super(properties);

    this.state = {
      searchValue: '',
    };
  }

  private setSearchValue(value: string) {
    this.setState({ searchValue: value });
  }

  render() {
    const { searchValue } = this.state;

    return (
      <div>
        <SearchContext.Provider
          value={{
            searchValue,
            setSearchValue: this.setSearchValue.bind(this),
          }}
        >
          <Search />
          <CardList />
        </SearchContext.Provider>
      </div>
    );
  }
}

export default SearchView;
