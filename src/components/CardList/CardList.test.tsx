import CardList from '@components/CardList/index';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import mockResponse from '@tests/mock/mockResponse';
import { RickAndMortyApiResponse } from '@models/RickAndMortyApiResponse';

describe('CardList component', () => {
  it('renders the correct number of cards', () => {
    const { getAllByTestId } = render(
      <BrowserRouter>
        <CardList data={mockResponse} />
      </BrowserRouter>
    );
    const cards = getAllByTestId('card');

    expect(cards.length).toBe(mockResponse.results.length);
  });

  it('displays "No data" message when no cards are present', () => {
    const mockData = {
      info: {
        count: 0,
        pages: 0,
        next: null,
        prev: null,
      },
      results: [],
    } as RickAndMortyApiResponse;

    const { getByText } = render(<CardList data={mockData} />);
    const noDataMessage = getByText('No data');

    expect(noDataMessage).toBeInTheDocument();
  });
});
