import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import DetailView from '@views/DetailView/index';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { describe, expect, vitest } from 'vitest';
import * as useData from '@hooks/useData';
import mockResponse from '@tests/mock/mockResponse';

describe('DetailView', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <DetailView />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
  it('displays loading spinner while fetching data', () => {
    const useDataSpy = vitest.spyOn(useData, 'default');

    useDataSpy.mockReturnValue({
      isLoading: true,
      isSuccess: false,
      isError: false,
      data: null,
      error: null,
    });

    const { getByTestId } = render(
      <BrowserRouter>
        <DetailView />
      </BrowserRouter>
    );

    const spinnerElement = getByTestId('spinner');

    expect(spinnerElement).toBeInTheDocument();
  });
  it('Make sure the detailed card component correctly displays the detailed card data', () => {
    const useDataSpy = vitest.spyOn(useData, 'default');

    useDataSpy.mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: mockResponse.results[0],
      error: null,
    });

    render(
      <BrowserRouter>
        <DetailView />
      </BrowserRouter>
    );

    expect(screen.getByText('Abadango Cluster Princess')).toBeInTheDocument();
    expect(screen.getByText('Alive - Alien (Female)')).toBeInTheDocument();
    expect(screen.getByText('Abadango')).toBeInTheDocument();
  });

  it('hides component when close button is clicked', async () => {
    const useDataSpy = vitest.spyOn(useData, 'default');

    useDataSpy.mockReturnValue({
      isLoading: false,
      isSuccess: true,
      isError: false,
      data: mockResponse.results[0],
      error: null,
    });

    const { queryByTestId } = render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <DetailView />
      </MemoryRouter>
    );

    await waitFor(() => {
      const closeButton = queryByTestId('close-button');

      fireEvent.click(closeButton!);

      expect(window.location.href.includes('/detail/1')).toBe(false);
    });
  });
});
