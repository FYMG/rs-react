import { ReactNode } from 'react';
import { BrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '@services/redux/store';
import type { Router as RemixRouter } from '@remix-run/router';
import ThemeContextProvider from '../context/ThemeContext';

export function BrowserRouterWrapper({ children }: { children: ReactNode }) {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <BrowserRouter>{children}</BrowserRouter>
      </Provider>
    </ThemeContextProvider>
  );
}

export function MemoryRouterWrapper({ router }: { router: RemixRouter }) {
  return (
    <ThemeContextProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ThemeContextProvider>
  );
}
