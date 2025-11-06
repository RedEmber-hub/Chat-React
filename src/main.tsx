import { createRoot } from 'react-dom/client';
import App from './App.js';
import '@/assets/css/style.scss';
import { HashRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <HashRouter>
    <App />
  </HashRouter>
);
