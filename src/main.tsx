import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import { browserRouter } from '@services/router.tsx';
import ErrorBoundary from '@hoc/ErrorBoundary.tsx';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <RouterProvider
        router={browserRouter}
        future={{
          v7_startTransition: true,
        }}
      />
    </ErrorBoundary>
  </React.StrictMode>
);
