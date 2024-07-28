import { render, screen } from '@testing-library/react';
import Card from '@components/Card/index';
import mockResponse from '@tests/mock/mockResponse';
import { describe } from 'vitest';
import { BrowserRouterWrapper } from '@tests/wrappers.tsx';

const mockPerson = mockResponse.results[0]!;

describe('Card component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouterWrapper>
        <Card person={mockPerson} />
      </BrowserRouterWrapper>
    );

    expect(container).toMatchSnapshot();
  });
  it('displays loading indicator while fetching data', () => {
    const { getByTestId } = render(
      <BrowserRouterWrapper>
        <Card person={mockPerson} />
      </BrowserRouterWrapper>
    );
    const loadingIndicator = getByTestId('img-placeholder');

    expect(loadingIndicator).toBeInTheDocument();
  });

  it('displays correct character information', () => {
    render(
      <BrowserRouterWrapper>
        <Card person={mockPerson} />
      </BrowserRouterWrapper>
    );

    expect(screen.getByText('Abadango Cluster Princess')).toBeInTheDocument();
    expect(screen.getByText('Alive - Alien (Female)')).toBeInTheDocument();
    expect(screen.getByText('Abadango')).toBeInTheDocument();
  });
});
