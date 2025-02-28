import { render, screen } from '@testing-library/react';
import { Header } from '@/app/components/Header';

describe('Header Component', () => {
  // Check if the header title is displayed
  it('renders the header title', () => {
    render(<Header />);
    expect(screen.getByText('Great Food')).toBeInTheDocument();
  });

  // Check if the header description is displayed
  it('renders the header description', () => {
    render(<Header />);
    expect(
      screen.getByText('Delicious meals made with fresh ingredients.')
    ).toBeInTheDocument();
  });
});
