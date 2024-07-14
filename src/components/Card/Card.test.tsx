import { render, screen } from '@testing-library/react';
import Card from '@components/Card/index';
import { BrowserRouter } from 'react-router-dom';
import mockResponse from '@tests/mock/mockResponse';
import { describe } from 'vitest';

const mockPerson = mockResponse.results[0]!;

describe('Card component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouter>
        <Card person={mockPerson} />
      </BrowserRouter>
    );

    expect(container).toMatchSnapshot();
  });
  it('displays loading indicator while fetching data', () => {
    const { getByTestId } = render(
      <BrowserRouter>
        <Card person={mockPerson} />
      </BrowserRouter>
    );
    const loadingIndicator = getByTestId('img-placeholder');

    expect(loadingIndicator).toBeInTheDocument();
  });

  it('displays correct character information', () => {
    render(
      <BrowserRouter>
        <Card person={mockPerson} />
      </BrowserRouter>
    );

    expect(screen.getByText('Abadango Cluster Princess')).toBeInTheDocument();
    expect(screen.getByText('Alive - Alien (Female)')).toBeInTheDocument();
    expect(screen.getByText('Abadango')).toBeInTheDocument();
  });
});
