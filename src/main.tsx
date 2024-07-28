import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@services/router';
import ErrorBoundary from '@hoc/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@services/redux/store';
import ThemeContextProvider from './context/ThemeContext';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeContextProvider>
          <RouterProvider
            router={browserRouter}
            future={{
              v7_startTransition: true,
            }}
          />
        </ThemeContextProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
