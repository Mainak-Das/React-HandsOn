import { createStore } from 'redux';
import employeeApp from './EmployeeReducers';

const employeeStore = createStore(employeeApp);

export default employeeStore;