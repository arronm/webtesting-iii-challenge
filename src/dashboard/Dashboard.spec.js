import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should exist', () => {
    const component = render(<Dashboard />);
    expect(component).toBeTruthy();
  });

  it('should render display correctly when clicking "Close Gate"', () => {
    const { queryByText } = render(<Dashboard />);
    const closedBtn = queryByText(/close gate/i);
    const closedDisplay = queryByText(/open/i);
    expect(closedBtn).toBeTruthy();
    expect(closedDisplay).toBeTruthy();
    expect(closedDisplay.classList).toContain('green-led');
    
    const lockedBtn = queryByText(/lock gate/i);
    const lockedDisplay = queryByText(/unlocked/i);
    expect(lockedBtn).toBeTruthy();
    expect(lockedBtn.disabled).toBeTruthy();
    expect(lockedDisplay).toBeTruthy();
    expect(lockedDisplay.classList).toContain('green-led');
    
    fireEvent.click(closedBtn);
    expect(closedBtn.textContent).toContain('Open Gate');
    expect(closedDisplay.classList).toContain('red-led');

    expect(lockedBtn.disabled).toBeFalsy();
    expect(lockedDisplay.classList).toContain('green-led');
  });

  it('should render display correctly when clicking "Lock Gate"', () => {
    const { queryByText } = render(<Dashboard />);
    const closedBtn = queryByText(/close gate/i);
    expect(closedBtn).toBeTruthy();
    fireEvent.click(closedBtn);
    
    const closedDisplay = queryByText(/closed/i);
    const lockedBtn = queryByText(/lock gate/i);
    const lockedDisplay = queryByText(/unlocked/i);
    expect(lockedBtn).toBeTruthy();
    expect(lockedDisplay).toBeTruthy();
    fireEvent.click(lockedBtn);

    expect(closedBtn.disabled).toBeTruthy();
    expect(closedDisplay.classList).toContain('red-led');
    expect(lockedBtn.textContent).toContain('Unlock Gate');
    expect(lockedDisplay.classList).toContain('red-led');
  });
});
