import { describe, expect } from 'vitest';
import { fireEvent, render, waitFor } from '@testing-library/react';
import SearchView from '@views/SearchView/index';
import { BrowserRouter, createMemoryRouter, RouterProvider } from 'react-router-dom';
import { routes } from '@services/router';

describe('SearchView', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <SearchView />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
  it('updates search value on input change', () => {
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <SearchView />
      </BrowserRouter>
    );
    const searchInput = getByPlaceholderText('Search...') as HTMLInputElement;

    fireEvent.change(searchInput, { target: { value: 'Rick' } });
    expect(searchInput.value).toBe('Rick');
  });

  it('saves search value to local storage', () => {
    const { getByText, getByPlaceholderText } = render(
      <BrowserRouter>
        <SearchView />
      </BrowserRouter>
    );
    const searchInput = getByPlaceholderText('Search...');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'Rick' } });
    fireEvent.click(searchButton);
    expect(localStorage.setItem).toHaveBeenCalledWith('@rs-react:search', 'Rick');
  });

  it('retrieves search value from local storage', () => {
    localStorage.setItem('@rs-react:search', 'Rick');
    const { getByPlaceholderText } = render(
      <BrowserRouter>
        <SearchView />
      </BrowserRouter>
    );
    const searchInput = getByPlaceholderText('Search...') as HTMLInputElement;

    expect(searchInput.value).toBe('Rick');
  });

  it('Check that clicking triggers an additional API call to fetch detailed information.', async () => {
    const { getByTestId, getAllByTestId } = render(
      <RouterProvider router={createMemoryRouter(routes)} />
    );

    await waitFor(() => {
      const card = getAllByTestId('card')[0];

      fireEvent.click(card!);

      expect(getByTestId('detail-view')).toBeInTheDocument();
    });
  });
});
