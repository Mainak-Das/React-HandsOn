import { combineReducers } from 'redux';
import { CREATE_NEW_EMPLOYEE, REMOVE_EMPLOYEE } from './EmployeeActions';

const initialState = {
  employees: [
    {
      name: 'Alan',
      team: 'Management',
      position: 'CEO',
    },
  ],
};

const employees = (state = initialState.employees, action) => {
  switch (action.type) {
    case CREATE_NEW_EMPLOYEE:
      return [...state, Object.assign({}, action.employee)];

    case REMOVE_EMPLOYEE:
      return state.filter((_, i) => i !== action.id);

    default:
      return state;
  }
};

const employeeApp = combineReducers({
  employees,
});

export default employeeApp;