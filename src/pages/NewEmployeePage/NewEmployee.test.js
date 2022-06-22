import { render, screen } from '@testing-library/react';
import NewEmployeePage from './index';

test('renders learn react link', () => {
  render(<NewEmployeePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
