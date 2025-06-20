import "./styles.css";
import React, { useState } from 'react';

const DealerBoard = () => {
	const [flag, setFlag] = useState(0);

	const changeHandler = (event) => {
		const name = event.target.name;
		if (name === "sales") {
			setFlag(1);
		} else {
			setFlag(2);
		}
	};
	const getReport = () => {
		return flag === 1 ? <SalesReport /> : <ServiceReport />;
	};

	return (
		<div>
			<h3 className="bg-info text-white d-inline-block">ZeeZee Automobiles</h3>
			<br />
			<button className="btn btn-warning" name="sales" onClick={changeHandler}>Sales Report</button>
			<button className="btn btn-info" name="service" onClick={changeHandler}>Service Report</button>
			<div>{getReport()}</div>
		</div>
	);
};

const SalesReport = () => {
	return (
		<table className="table table-hover bg-secondary w-50 text-white">
			<thead>
				<tr className="font-weight-bold">
					<th>Owner Name</th>
					<th>Contact Number</th>
					<th>Model</th>
					<th>Date of Purchase</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Alwin</td>
					<td>13044000354</td>
					<td>Hundai Creta</td>
					<td>23-07-2021</td>
				</tr>
				<tr>
					<td>Hendry</td>
					<td>15044000354</td>
					<td>Ford Eco sport</td>
					<td>01-07-2022</td>
				</tr>
			</tbody>
		</table>
	);
};

const ServiceReport = () => {
	return (
		<table className="table table-hover bg-secondary w-50 text-white">
			<thead>
				<tr className="font-weight-bold">
					<th>Vehicle Number</th>
					<th>Contact Number</th>
					<th>Service Type</th>
					<th>Service Charge</th>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>85863NY16</td>
					<td>12044000354</td>
					<td>Ac service</td>
					<td>25$</td>
				</tr>
				<tr>
					<td>120665NY16</td>
					<td>15544000354</td>
					<td>Wheel alignment</td>
					<td>12$</td>
				</tr>
			</tbody>
		</table>
	);
};



export  {SalesReport};
export  {ServiceReport};
export default DealerBoard;