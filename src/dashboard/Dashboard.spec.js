import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should exist', () => {
    const component = render(<Dashboard />);
    expect(component).toBeTruthy();
  });
});

// similar tests to controls spec, but also ensure display updates with values from clicking buttons