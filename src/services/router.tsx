import { createBrowserRouter, RouteObject } from 'react-router-dom';
import SearchView from '@views/SearchView';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SearchView />,
  },
];

const browserRouter = createBrowserRouter(routes, {
  basename: '/rs-react/',
});

export { browserRouter, routes };
