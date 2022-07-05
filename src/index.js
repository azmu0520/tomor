import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from './root';
import { BrowserRouter as Router } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reduce from './store/reducer';
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
let store = createStore(reduce);
root.render(
  // <React.StrictMode>
  <Router>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <Root />
      </QueryClientProvider>
    </Provider>
  </Router>
  // </React.StrictMode>
);
