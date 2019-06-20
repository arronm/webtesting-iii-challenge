export const TOGGLE_CLOSED = 'TOGGLE_CLOSED';
export const toggleClosed = payload => ({
  type: TOGGLE_CLOSED,
  payload,
});

export const TOGGLE_LOCKED = 'TOGGLE_LOCKED';
export const toggleLocked = payload => ({
  type: TOGGLE_LOCKED,
  payload,
});
