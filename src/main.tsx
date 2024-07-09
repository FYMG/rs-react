import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchView from '@views/SearchView';
import './index.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <SearchView />
  </React.StrictMode>
);
