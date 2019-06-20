import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('should exist', () => {
    const component = render(<Display />);
    expect(component).toBeTruthy();
  });

  it('should render to unlocked/open by default', () => {
    const { queryByText } = render(<Display />);
    const closedDisplay = queryByText(/open/i);
    const lockedDisplay = queryByText(/unlocked/i);

    expect(closedDisplay).toBeTruthy();
    expect(closedDisplay.classList).toContain('green-led');
    expect(lockedDisplay).toBeTruthy();
    expect(lockedDisplay.classList).toContain('green-led');
  });
  
  it('should render unlocked/closed', () => {
    const { queryByText } = render(<Display closed={true} />);
    const closedDisplay = queryByText(/closed/i);
    const lockedDisplay = queryByText(/unlocked/i);
    
    expect(closedDisplay).toBeTruthy();
    expect(closedDisplay.classList).toContain('red-led');
    expect(lockedDisplay).toBeTruthy();
    expect(lockedDisplay.classList).toContain('green-led');
  });  
  
  it('should render locked/closed', () => {
    const { queryByText } = render(<Display closed={true} locked={true} />);
    const closedDisplay = queryByText(/closed/i);
    const lockedDisplay = queryByText(/locked/i);
    
    expect(closedDisplay).toBeTruthy();
    expect(closedDisplay.classList).toContain('red-led');
    expect(lockedDisplay).toBeTruthy();
    expect(lockedDisplay.classList).toContain('red-led');
  });  
});
