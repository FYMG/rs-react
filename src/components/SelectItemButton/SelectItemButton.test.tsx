import { describe } from 'vitest';
import { render } from '@testing-library/react';
import { BrowserRouterWrapper } from '@tests/wrappers.tsx';
import SelectItemButton from '@components/SelectItemButton/index';
import MockResponse from '@tests/mock/mockResponse';

describe('SelectItemButton component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouterWrapper>
        <SelectItemButton item={MockResponse.results[0]} />
      </BrowserRouterWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});
