import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);
  root.render(<App />);
  root.unmount(); // 使用 root.unmount() 替代 unmountComponentAtNode
});
    describe('Addition', () => {
      it('knows that 2 and 2 make 4', () => {
        expect(2 + 2).toBe(4);
      });
    });