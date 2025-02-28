import { render, screen } from '@testing-library/react';
import { Footer } from '../../app/components/Footer';

describe('Footer Component', () => {
  // Check if the business name is displayed correctly
  test('renders the business name', () => {
    render(<Footer />);
    expect(screen.getByText('🍽️ Greate Food')).toBeInTheDocument();
  });

  // Check if contact information is displayed
  test('shows contact information', () => {
    render(<Footer />);
    expect(
      screen.getByText('123 Street, San Francisco, CA')
    ).toBeInTheDocument();
    expect(screen.getByText('Call us: (123) 456-7890')).toBeInTheDocument();
  });

  // Check if social media links are present
  test('renders social media links', () => {
    render(<Footer />);
    expect(screen.getByText('Facebook')).toBeInTheDocument();
    expect(screen.getByText('Instagram')).toBeInTheDocument();
    expect(screen.getByText('Twitter')).toBeInTheDocument();
  });

  // Check if the copyright notice contains the correct year
  test('displays copyright notice with current year', () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(
      screen.getByText(`© ${currentYear} Greate. All rights reserved.`)
    ).toBeInTheDocument();
  });
});
