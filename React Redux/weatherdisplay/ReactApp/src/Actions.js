//Implement action creators and type
export const UPDATE_TEMPERATURE = "UPDATE_TEMPERATURE";

export const updateTemperature = (newTemperature) => ({
  type: UPDATE_TEMPERATURE,
  payload: newTemperature,
});