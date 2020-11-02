import React from 'react';
import './employees.css';

function Employees(props){
    const { EmployeeID, EmpFirstName, EmpLastName, EmpStreetAddress, EmpCity, EmpState, EmpPhoneNumber, EmpZipCode, EmpAreaCode} = props

    return (
        <div>
            <h1 className="badge-title">Badge:</h1>
            <div className="container">
                <p className="badge-text">Employee ID: { EmployeeID }</p>
                <p className="badge-text">Full Name: { EmpFirstName } { EmpLastName }</p>
                <p className="badge-text"> Address: { EmpStreetAddress } { EmpCity } { EmpState } {EmpZipCode}</p>
                <p className="badge-text">Phone Number: {EmpAreaCode} { EmpPhoneNumber }</p>
            <div>
                <img src={"https://www.osiwa.org/wp-content/uploads/2019/02/Blank-Person.png"} alt="blank photo ID"/>
            </div>
            </div>
	    </div>
    )}

export default Employees;
