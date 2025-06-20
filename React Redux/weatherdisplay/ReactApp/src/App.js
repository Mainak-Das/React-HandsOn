// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { updateTemperature } from './Actions';
// import './App.css';

// function App() {
  
//   return (
//     <div className="weather-wrapper">
//       <h1>Weather Display</h1>
//       <div className="temperature-display">
//             {/*   write code for temperature display inside h2 element */}
//       </div>
//         {/*   implement form to handle submit for temperature updation */}
//     </div>
//   );
// }

// export default App;


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createEmployee, deleteEmployee } from "./EmployeeActions";
import "./style.css";

function App() {
  const employees = useSelector((state) => state.employees.employees.sort((a, b) => a.name.localeCompare(b.name)));
  const dispatch = useDispatch();
  const [employeeName, setEmployeeName] = useState("");
  const [teamName, setTeamName] = useState("");
  const [position, setPosition] = useState("");

  const handleAddEmployee = (e) => {
    e.preventDefault();
    if (employeeName && teamName && position) {
      dispatch(createEmployee({ name: employeeName, team: teamName, position }));
      setEmployeeName("");
      setTeamName("");
      setPosition("");
    }
  };

  return (
    <div>
      <h1>Soft Solutions</h1>
      <div className="wrapper">
        <h2>Employee Details</h2>
        <form onSubmit={handleAddEmployee}>
          <input
            id="ename"
            type="text"
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
            placeholder="Employee Name"
          />
          <input
            id="tname"
            type="text"
            value={teamName}
            onChange={(e) => setTeamName(e.target.value)}
            placeholder="Team Name"
          />
          <input
            id="position"
            type="text"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="Position"
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
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.name}</td>
                <td>{employee.team}</td>
                <td>{employee.position}</td>
                <td>
                  <button id="delete" onClick={() => dispatch(deleteEmployee(index))}>Remove</button>
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