import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { LanguageProvider } from './hooks/useLanguage.jsx';
import './styles/global.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <LanguageProvider>
        <App />
      </LanguageProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// Hide the initial loader once the app has mounted and fonts are ready.
// We wait for fonts so the page never flashes a fallback font.
function hideLoader() {
  const loader = document.getElementById('app-loader');
  if (!loader) return;
  loader.classList.add('is-hidden');
  setTimeout(() => loader.remove(), 700);
}

if (document.fonts && document.fonts.ready) {
  Promise.all([
    document.fonts.ready,
    new Promise((r) => setTimeout(r, 600)), // minimum loader display
  ]).then(hideLoader);
} else {
  setTimeout(hideLoader, 800);
}
