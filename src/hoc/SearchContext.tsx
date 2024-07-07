import { createContext, PureComponent, ReactNode } from 'react';

export interface ISearchContextValue {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export interface ISearchContextState {
  searchValue: string;
}

export interface ISearchContextProperties {
  children: ReactNode;
}

export const SearchContextLocalStorageKey = '@rs-react/search-data';

export const SearchContext = createContext<ISearchContext>({
  searchValue: localStorage.getItem(SearchContextLocalStorageKey) ?? '',
  setSearchValue: () => {},
});

export class SearchContextProvider extends PureComponent<
  ISearchContextProperties,
  ISearchContextState
> {
  constructor(properties: ISearchContextProperties) {
    super(properties);
    this.state = {
      searchValue: localStorage.getItem(SearchContextLocalStorageKey) ?? '',
    };
  }

  render() {
    const { searchValue } = this.state;
    const { children } = this.props;

    return (
      <SearchContext.Provider
        value={{
          searchValue,
          setSearchValue: (value: string) => {
            localStorage.setItem(SearchContextLocalStorageKey, value);
            this.setState({ searchValue: value });
          },
        }}
      >
        {children}
      </SearchContext.Provider>
    );
  }
}
