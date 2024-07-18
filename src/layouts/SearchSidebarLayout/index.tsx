import SearchView from '@views/SearchView';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

function SearchSidebarLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const wrapper = useRef<HTMLDivElement>(null);

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
    <div className="grid grid-cols-[auto,auto]">
      <div ref={wrapper}>
        <SearchView />
      </div>
      <Outlet />
    </div>
  );
}

export default SearchSidebarLayout;
