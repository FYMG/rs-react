import { describe } from 'vitest';
import ProgressiveImage from '@components/ProgressiveImage/index';
import { render } from '@testing-library/react';

describe('ProgressiveImage', () => {
  it('renders correctly', () => {
    const { container } = render(<ProgressiveImage />);

    expect(container).toMatchSnapshot();
  });

  it('displays loading indicator while fetching data', () => {
    const { getByTestId } = render(
      <ProgressiveImage
        placeholder={<div data-testid="img-placeholder" />}
        src="/img.jpg"
      />
    );

    const loadingIndicator = getByTestId('img-placeholder');

    expect(loadingIndicator).toBeInTheDocument();
  });
});
