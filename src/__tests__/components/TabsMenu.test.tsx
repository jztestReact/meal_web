import { render, screen, fireEvent } from '@testing-library/react';
import { TabsMenu } from '@/app/components/TabsMenu';

describe('TabsMenu Component', () => {
  // Render the component before each test
  beforeEach(() => {
    render(<TabsMenu />);
  });

  // Check if all tab buttons are displayed
  test('renders all tab buttons', () => {
    expect(screen.getByRole('button', { name: 'Home' })).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'Breakfast' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Lunch' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Dinner' })).toBeInTheDocument();
  });

  // Check if clicking a tab makes it active
  test('changes active tab on click', () => {
    const breakfastTab = screen.getByRole('button', { name: 'Breakfast' });
    const lunchTab = screen.getByRole('button', { name: 'Lunch' });

    fireEvent.click(breakfastTab);
    expect(breakfastTab).toHaveClass('bg-primary text-white');

    fireEvent.click(lunchTab);
    expect(lunchTab).toHaveClass('bg-primary text-white');
  });

  // Check if clicking a tab displays the correct content
  test('displays correct content for each tab', () => {
    fireEvent.click(screen.getByRole('button', { name: 'Breakfast' }));
    expect(screen.getAllByText(/breakfast/i)[0]).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Lunch' }));
    expect(screen.getAllByText(/lunch/i)[0]).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Dinner' }));
    expect(screen.getAllByText(/dinner/i)[0]).toBeInTheDocument();
  });
});
