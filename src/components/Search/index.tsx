import { ChangeEvent, PureComponent } from 'react';
import SearchContext, { ISearchContextValue } from '../../context/SearchContext';

export const localStorageKey = '@rs-react/search-data';

export interface SearchState {
  searchValue: string;
}

class Search extends PureComponent<unknown, SearchState> {
  constructor(properties: unknown) {
    super(properties);

    const searchValue = localStorage.getItem(localStorageKey) ?? '';

    this.state = {
      searchValue: searchValue === 'error' ? '' : searchValue,
    };
  }

  private onClickHandler() {
    const { searchValue } = this.state;
    const { setSearchValue } = this.context as ISearchContextValue;

    setSearchValue(searchValue);
  }

  private changeHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value });
    localStorage.setItem(localStorageKey, event.target.value);
  }

  render() {
    const { searchValue } = this.state;

    if (searchValue === 'error') {
      throw new Error('Demo error! For demo purposes only.');
    }

    return (
      <div className="flex flex-row items-center justify-center">
        <input
          className="m-2 w-1/2 border-2 border-black"
          type="text"
          onChange={this.changeHandler.bind(this)}
          value={searchValue}
          placeholder='Search (Type "error" to cause an error.)...'
        />
        <button type="button" onClick={this.onClickHandler.bind(this)}>
          Search
        </button>
      </div>
    );
  }
}

Search.contextType = SearchContext;

export default Search;
