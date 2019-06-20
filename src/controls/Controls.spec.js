import React from 'react';
import { render, fireEvent, } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import Controls from './Controls';

describe('<Controls />', () => {
  it('should exist', () => {
    const component = render(<Controls />);
    expect(component).toBeTruthy();
  });

  it('should default to unlocked and open on render', () => {
    const { queryByText } = render(<Controls />);
    const lockBtn = queryByText(/lock gate/i);
    expect(lockBtn).toBeTruthy();
    expect(lockBtn.disabled).toBeTruthy();

    const closeBtn = queryByText(/close gate/i);
    expect(closeBtn).toBeTruthy();
    expect(closeBtn.disabled).toBeFalsy();
  });
  
  it('should fire the `toggleClosed` callback when "Close Gate" is clicked', () => {
    const spy = jest.fn();
    const { queryByText } = render(<Controls toggleClosed={spy} />);

    const closeBtn = queryByText(/close gate/i);
    fireEvent.click(closeBtn);
    expect(spy).toHaveBeenCalled();
  });

  it('should fire the `toggleClosed` callback when "Open Gate" is clicked', () => {
    const spy = jest.fn();
    const { queryByText } = render(<Controls toggleClosed={spy} closed={true} />);
    const lockBtn = queryByText(/lock gate/i);
    expect(lockBtn).toBeTruthy();
    expect(lockBtn.disabled).toBeFalsy();

    const openBtn = queryByText(/open gate/i);
    expect(openBtn).toBeTruthy();
    expect(openBtn.disabled).toBeFalsy();
    fireEvent.click(openBtn);
    expect(spy).toHaveBeenCalled();
  })

  it('should fire the `toggleLocked` callback when "Lock Gate" is clicked', () => {
    const spy = jest.fn();
    const { queryByText } = render(<Controls toggleLocked={spy} closed={true} />);
    const lockBtn = queryByText(/lock gate/i);
    expect(lockBtn).toBeTruthy();
    fireEvent.click(lockBtn);
    expect(spy).toHaveBeenCalled();
  });
  
  it('should fire the `toggleLocked` callback when "Unlock Gate" is clicked', () => {
    const spy = jest.fn();
    const { queryByText } = render(<Controls toggleLocked={spy} closed={true} locked={true} />);
    let openBtn = queryByText(/open gate/i);
    expect(openBtn).toBeTruthy();
    expect(openBtn.disabled).toBeTruthy();

    const unlockBtn = queryByText(/unlock gate/i);
    expect(unlockBtn).toBeTruthy();
    fireEvent.click(unlockBtn);
    expect(spy).toHaveBeenCalled();
  })
});
