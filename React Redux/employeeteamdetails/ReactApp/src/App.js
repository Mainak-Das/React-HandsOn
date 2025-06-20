import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createEmployee, deleteEmployee } from './EmployeeActions';
import './style.css';

function App() {
  const [employeeName, setEmployeeName] = useState('');
  const [teamName, setTeamName] = useState('');
  const [position, setPosition] = useState('');

  const dispatch = useDispatch();

  // Updated: Accessing employees from state properly
  const employees = useSelector(state => state.employees);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (employeeName && teamName && position) {
      dispatch(
        createEmployee({
          name: employeeName,
          team: teamName,
          position: position,
        })
      );
      setEmployeeName('');
      setTeamName('');
      setPosition('');
    }
  };

  return (
    <div>
      <h1>Soft Solutions</h1>
      <div className="wrapper">
        <h2>Employee Details</h2>

        <form onSubmit={handleSubmit}>
          <input
            id="ename"
            type="text"
            placeholder="Employee Name"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
          <input
            id="tname"
            type="text"
            placeholder="Team Name"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
          />
          <input
            id="position"
            type="text"
            placeholder="Position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          />
          <button id="add" type="submit">Add</button>
        </form>

        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Team</th>
              <th>Position</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp, index) => (
              <tr key={index}>
                <td>{emp.name}</td>
                <td>{emp.team}</td>
                <td>{emp.position}</td>
                <td>
                  <button
                    id="delete"
                    onClick={() => dispatch(deleteEmployee(index))}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;