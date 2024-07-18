import { afterEach, vitest } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';

const localStorageMock = {
  getItem: vitest.fn(),
  setItem: vitest.fn(),
  clear: vitest.fn(),
};

Object.defineProperty(window, 'localStorage', { value: localStorageMock });
Object.defineProperty(window, 'scrollTo', { value: () => {}, writable: true });

afterEach(() => {
  cleanup();
});
