import SearchView from '@views/SearchView';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import Search from '@components/Search';
import useSearch from '@hooks/useSearch';
import { createPortal } from 'react-dom';

function SearchSidebarLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const wrapper = useRef<HTMLDivElement>(null);

  const [search, setSearch] = useSearch();

  useEffect(() => {
    const wrapperCurrent = wrapper.current;

    const onClick = () => {
      navigate(`/${location.search}`);
    };

    wrapperCurrent?.addEventListener('click', onClick);

    return () => {
      wrapperCurrent?.removeEventListener('click', onClick);
    };
  }, [navigate, location.search]);

  return (
    <div className="flex flex-col">
      <div className="col-span-2">
        <Search
          defaultValue={search}
          submitSearchValue={(value) => {
            setSearch(value);
          }}
        />
      </div>
      <div ref={wrapper}>
        <SearchView />
      </div>
      {createPortal(
        <div className="fixed right-4 top-4">
          <Outlet />
        </div>,
        document.body
      )}
    </div>
  );
}

export default SearchSidebarLayout;
