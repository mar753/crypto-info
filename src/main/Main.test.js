import { render, screen } from '@testing-library/react';

import Main from './Main';

test('renders title', () => {
  render(<Main />);
  const title = screen.getByText(/Select crypto coin to get more info:/i);
  expect(title).toBeInTheDocument();
});

test('renders select box', () => {
  render(<Main />);
  const select = screen.getByTestId('select-main');
  expect(select).toBeInTheDocument();
});
