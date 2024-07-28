import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@services/router';
import ErrorBoundary from '@hoc/ErrorBoundary';
import { Provider } from 'react-redux';
import { store } from '@services/redux/store';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <RouterProvider
          router={browserRouter}
          future={{
            v7_startTransition: true,
          }}
        />
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>
);
