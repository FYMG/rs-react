import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchView from '@views/SearchView';
import './index.css';
import ErrorBoundary from '@hoc/ErrorBoundary.tsx';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <SearchView />
    </ErrorBoundary>
  </React.StrictMode>
);
