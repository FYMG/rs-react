import { createContext } from 'react';

export interface ISearchContextValue {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchContext = createContext<ISearchContext>({
  searchValue: '',
  setSearchValue: () => {},
});

export default SearchContext;
