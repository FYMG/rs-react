import { describe } from 'vitest';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';
import { render } from '@testing-library/react';
import { routes } from '@services/router.tsx';

describe('ErrorView', () => {
  it('renders correctly', () => {
    const { container } = render(
      <RouterProvider
        router={createMemoryRouter(routes, {
          initialEntries: ['/error51512512'],
        })}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
