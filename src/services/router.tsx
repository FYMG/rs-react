import { createBrowserRouter, RouteObject } from 'react-router-dom';
import DetailView from '@views/DetailView';
import ErrorView from '@views/ErrorView';
import SearchSidebarLayout from '../layouts/SearchSidebarLayout';

const routes: RouteObject[] = [
  {
    path: '',
    element: <SearchSidebarLayout />,
    errorElement: <ErrorView />,
    children: [
      {
        path: '',
      },
      {
        path: '/details/:id',
        element: <DetailView />,
      },
    ],
  },
];

const browserRouter = createBrowserRouter(routes, {
  basename: '/rs-react/',
});

export { browserRouter, routes };
