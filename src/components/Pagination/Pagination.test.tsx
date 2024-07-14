import { render, fireEvent } from '@testing-library/react';
import Pagination from '@components/Pagination/index';
import { describe, vitest } from 'vitest';

describe('Pagination component', () => {
  it('renders correctly', () => {
    const { container } = render(<Pagination currentPage={1} pageTotal={5} />);

    expect(container).toMatchSnapshot();
  });

  it('updates URL query parameter on page change', () => {
    const mockOnPageChange = vitest.fn();
    const { getByText } = render(
      <Pagination onPageChange={mockOnPageChange} pageTotal={10} currentPage={3} />
    );

    const page5Button = getByText('5');

    fireEvent.click(page5Button);

    expect(mockOnPageChange).toHaveBeenCalledWith(5);
  });
});
