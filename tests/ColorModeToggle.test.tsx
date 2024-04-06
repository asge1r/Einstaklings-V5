import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ColorModeToggle from '../app/components/ColorModeToggle';

describe('ColorModeToggle component', () => {
  test('renders without errors', () => {
    render(<ColorModeToggle />);
  });

  test('toggles color mode when clicked', () => {
    const { getByRole } = render(<ColorModeToggle />);

    const toggleButton = getByRole('button');

    // Initial state: checked should be false
(expect(toggleButton) as any).toHaveClass('dark:hidden');
   expect(document.documentElement.classList).not.toContain('dark'); // Root element should not have dark class initially

    // Click to toggle
    fireEvent.click(toggleButton);

    // After click: checked should be true
    (expect(toggleButton) as any).toHaveClass('dark:block'); 
        expect(document.documentElement.classList).toContain('dark'); // Root element should have dark class after click

    // Click again to toggle back
    fireEvent.click(toggleButton);

    // After second click: checked should be false again
    (expect(toggleButton) as any).toHaveClass('dark:hidden');
    expect(document.documentElement.classList).not.toContain('dark'); // Root element should not have dark class after second click
  });
});
