//Implement code for reducers

import { UPDATE_TEMPERATURE } from "./Actions";

const initialState = {
  temperature: 20,
};

const WeatherReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_TEMPERATURE:
      return { ...state, temperature: action.payload };
    default:
      return state;
  }
};

export default WeatherReducer;