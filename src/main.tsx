import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles.ts';
import GlobalReset from './styles/globalReset.ts';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
    <GlobalReset/>
    <GlobalStyles/>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
