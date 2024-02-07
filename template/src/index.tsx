import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('app');
const root = container ? createRoot(container as HTMLElement) : null;

root?.render(<App />);
