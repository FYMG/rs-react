import SearchView from '@views/SearchView';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useRef } from 'react';
import Search from '@components/Search';
import useSearch from '@hooks/useSearch';
import { createPortal } from 'react-dom';
import { themeContext } from '../../context/ThemeContext';

function SearchSidebarLayout() {
  const navigate = useNavigate();
  const location = useLocation();
  const { toggleTheme } = useContext(themeContext);

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
    <div className="flex flex-col dark:bg-zinc-800 dark:text-white">
      <div className="col-span-2 flex w-full flex-row">
        <Search
          defaultValue={search}
          submitSearchValue={(value) => {
            setSearch(value);
          }}
        />
        <button type="button" onClick={toggleTheme}>
          toggle theme
        </button>
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
