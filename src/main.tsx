import { createRoot } from 'react-dom/client';
import App from './App.js';
import '@/assets/css/style.scss';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
