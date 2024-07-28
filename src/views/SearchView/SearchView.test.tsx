import { describe, expect } from 'vitest';
import { render } from '@testing-library/react';
import SearchView from '@views/SearchView/index';

import { BrowserRouterWrapper } from '@tests/wrappers.tsx';

describe('SearchView', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouterWrapper>
        <SearchView />
      </BrowserRouterWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});
