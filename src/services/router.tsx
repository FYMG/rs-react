import { createBrowserRouter, RouteObject } from 'react-router-dom';
import SearchView from '@views/SearchView';
import DetailView from '@views/DetailView';
import ErrorView from '@views/ErrorView';
import SearchSidebarLayout from '../layouts/SearchSidebarLayout';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <SearchView />,
    errorElement: <ErrorView />,
  },
  {
    path: '/details/',
    element: <SearchSidebarLayout />,
    errorElement: <ErrorView />,
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
