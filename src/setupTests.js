// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Configure testing library
import { configure } from '@testing-library/react';

configure({
  testIdAttribute: 'data-testid',
});

// Mock react-modal
jest.mock('react-modal', () => {
  const Modal = ({ isOpen, children, onRequestClose }) => {
    if (!isOpen) return null;
    return (
      <div data-testid="modal">
        {children}
        <button onClick={onRequestClose}>Close</button>
      </div>
    );
  };
  Modal.setAppElement = () => {};
  return Modal;
});

// Mock localStorage
const mockLocalStorage = (() => {
  let store = {};
  return {
    getItem: jest.fn(key => store[key] || null),
    setItem: jest.fn((key, value) => {
      store[key] = value;
    }),
    clear: jest.fn(() => {
      store = {};
    })
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: mockLocalStorage
});

// Mock Date.now
const mockDate = new Date('2024-01-01T00:00:00.000Z');
global.Date = class extends Date {
  constructor() {
    super();
    return mockDate;
  }
  static now() {
    return mockDate.getTime();
  }
};

// Mock react-hot-toast
jest.mock('react-hot-toast', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn()
  }
})); 