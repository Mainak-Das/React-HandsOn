export const CREATE_NEW_EMPLOYEE = 'CREATE_NEW_EMPLOYEE';
export const REMOVE_EMPLOYEE = 'REMOVE_EMPLOYEE';

export function createEmployee(employee) {
  return {
    type: CREATE_NEW_EMPLOYEE,
    employee:employee,
  };
}

export function deleteEmployee(id) {
  return { 
    type: REMOVE_EMPLOYEE, 
    id:id 
  };
}