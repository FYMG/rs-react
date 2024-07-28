import { render } from '@testing-library/react';
import { BrowserRouterWrapper } from '@tests/wrappers';
import ItemsActionsModal from '@components/ItemsActionsModal/index';

describe('ItemsActionsModal component', () => {
  it('renders correctly', () => {
    const { container } = render(
      <BrowserRouterWrapper>
        <ItemsActionsModal />
      </BrowserRouterWrapper>
    );

    expect(container).toMatchSnapshot();
  });
});
