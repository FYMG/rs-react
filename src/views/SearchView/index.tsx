import { PureComponent } from 'react';
import Search from '@components/Search';
import CardList from '@components/CardList';
import { SearchContextProvider } from '@hoc/SearchContext';

class SearchView extends PureComponent {
  render() {
    return (
      <div>
        <SearchContextProvider>
          <Search />
          <CardList />
        </SearchContextProvider>
      </div>
    );
  }
}

export default SearchView;
