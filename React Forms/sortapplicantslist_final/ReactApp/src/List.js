// Please do not make any changes in the given code template
import React, { useState } from 'react';
import './styles.css';

//DO NOT CHANGE THE BELOW applicantsList INITIALIZATION
const applicantsList = [
	{
	   rollNo: 114,
	   name: 'Dean',
	   age: 22
	},
	{
	   rollNo: 325,
	   name: 'Carl Marx',
	   age: 25
	},
	{
	    rollNo: 120,
	    name: 'Bobby', 
	    age: 24
	},
	{
	    rollNo: 23,
	    name: 'Alice Dyana',
	    age: 22
	},
	{
	    rollNo: 35,
	    name: 'Ethan Donald',
	    age: 21
	},
  ];
 
function List() {
	
	//IMPLEMENT YOUR CODE HERE.
	const sortedList = [...applicantsList].sort((a, b) => a.rollNo - b.rollNo);


	return (
		<>
			<h1>ZION - The Training Academy</h1>
			<table border="1">
				<thead>
					<tr>
						<th>Roll No</th>
						<th>Applicant Name</th>
						<th>Age</th>
					</tr>
				</thead>
				<tbody>
					{sortedList.map((applicant) => (
						<tr key={applicant.rollNo}>
							<td>{applicant.rollNo}</td>
							<td>{applicant.name}</td>
							<td>{applicant.age}</td>
						</tr>
					))}
				</tbody>
			</table>
		</>
	);
}
   

export default List;
