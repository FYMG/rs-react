import { ChangeEvent, PureComponent } from 'react';
import { ISearchContextValue, SearchContext } from '@hoc/SearchContext';

export interface SearchState {
  searchValue: string;
}

class Search extends PureComponent<unknown, SearchState> {
  constructor(properties: unknown) {
    super(properties);

    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
    const { searchValue } = this.context as ISearchContextValue;

    this.setState({ searchValue });
  }

  private onClickHandler() {
    const { searchValue } = this.state;
    const { setSearchValue } = this.context as ISearchContextValue;

    setSearchValue(searchValue);
  }

  private changeHandler(event: ChangeEvent<HTMLInputElement>) {
    this.setState({ searchValue: event.target.value.trim() });
  }

  render() {
    const { searchValue } = this.state;

    if (searchValue === 'error') {
      throw new Error('Demo error! For demo purposes only.');
    }

    return (
      <div className="flex flex-row items-center justify-center gap-2">
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
        <button
          type="button"
          onClick={() => {
            this.setState({
              searchValue: 'error',
            });
          }}
        >
          make error
        </button>
      </div>
    );
  }
}

Search.contextType = SearchContext;

export default Search;
