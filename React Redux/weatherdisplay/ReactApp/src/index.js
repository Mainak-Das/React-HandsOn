// import React from 'react';
// import { render } from 'react-dom';
// import { Provider } from 'react-redux';
// import App from './App';
// // import store
// import WeatherStore from "./Store";

// // integrate redux store with App
// render(
//   <Provider store={WeatherStore}>
//     <App />
//   </Provider>,
//   document.getElementById("root")
// );



import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import employeeStore from "./EmployeeStore";

render(
  <Provider store={employeeStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);