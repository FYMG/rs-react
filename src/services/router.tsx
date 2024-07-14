import { createBrowserRouter, RouteObject } from 'react-router-dom';
import SearchView from '@views/SearchView';
import DetailView from '@views/DetailView';
import SearchSidebarLayout from '../layouts/SearchSidebarLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SearchView />,
  },
  {
    path: '/details/',
    element: <SearchSidebarLayout />,
    children: [
      {
        path: ':id',
        element: <DetailView />,
      },
    ],
  },
];

const browserRouter = createBrowserRouter(routes, {
  basename: '/rs-react/',
});

export { browserRouter, routes };
