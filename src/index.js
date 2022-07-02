import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import AddProductsContextProvider from './context/GetCategories/getcategory';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <React.StrictMode>
    <Router>
      {/* <AddProductsContextProvider> */}
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
      {/* </AddProductsContextProvider> */}
    </Router>
  </React.StrictMode>
);
