// import { createStore } from 'redux';
// import reducer
// implement code for store

import { createStore } from "redux";
import WeatherReducer from "./Reducers";

const WeatherStore = createStore(WeatherReducer);

export default WeatherStore;