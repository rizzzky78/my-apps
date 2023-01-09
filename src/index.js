import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Application from './App';
import reportWebVitals from './reportWebVitals';
import { ContextProviders } from './components/context/ContextProvider';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ContextProviders>
        <Application />
      </ContextProviders>
    </QueryClientProvider>
  // </React.StrictMode>

  // <QueryClientProvider client={queryClient}>
  // <App />
  // </QueryClientProvider>
);

reportWebVitals();
