import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchView from '@views/SearchView';
import './styles/tailwindcss.css';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <SearchView />
  </React.StrictMode>
);
