
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

function mountApp() {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    return null;
  }

  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return root;
}

if (document.readyState === 'loading') {
  window.addEventListener('DOMContentLoaded', () => mountApp(), { once: true });
} else {
  mountApp();
}
