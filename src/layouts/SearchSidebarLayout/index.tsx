import SearchView from '@views/SearchView';
import { Outlet } from 'react-router-dom';

function SearchSidebarLayout() {
  return (
    <div>
      <SearchView />
      <Outlet />
    </div>
  );
}

export default SearchSidebarLayout;
