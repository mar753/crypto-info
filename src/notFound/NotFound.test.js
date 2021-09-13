import { render, screen } from '@testing-library/react';

import NotFound from './NotFound';

test('renders text properly', () => {
  render(<NotFound />);
  const element = screen.getByText(/404 Error. This URL does not exist./i);
  expect(element).toBeInTheDocument();
});
