import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Display from './Display';

describe('<Display />', () => {
  it('should exist', () => {
    const component = render(<Display />);
    expect(component).toBeTruthy();
  });
});

// defaults to unlocked/open display

// test different render methods by passing in props