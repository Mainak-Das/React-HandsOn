import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
// Import store
import employeeStore from './EmployeeStore';

// Integrate Redux store with App
render(
  <Provider store={employeeStore}>
    <App />
  </Provider>,
  document.getElementById('root')
);