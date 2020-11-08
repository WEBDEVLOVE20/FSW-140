import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Employees from './components/Employees';
//import AddEmployees from './components/AddEmployees';

function MainData() {

    const [employees, setEmployees] = useState([])
  
    const getEmployees = (() => {
        axios.get("http://localhost:7000/api/get")
            .then(res => setEmployees(res.data))
            .catch(err => console.log(err))
    })
  
  /* const addEmployee = ((newEmployee) => {
      axios.post("http://localhost:7000/api/get", newEmployee)
          .then(res => {
              setEmployees(prevEmployees => [...prevEmployees, res.data])
          })
          .catch(err => console.log(err))
    })
  
    const deleteEmployee = ((employeeId) => {
      axios.delete(`/bounties/${employeeId}`)
          .then(res => {
              setEmployees(prevEmployees => prevEmployees.filter(employee => employee._id !== employeeId))
          })
          .catch(err => console.log(err))
    })
  
    const editBounty = ((updates, employeeId) => {
      axios.put(`/bounties/${employeeId}`, updates)
          .then(res => {
              setEmployees(prevEmployees => prevEmployees.map (employee => employee._id !== employeeId ? employee : res.data))
          })
          .catch(err => console.log(err))
    })
  
  */
  
  
  
  useEffect(() => {
        getEmployees()
    }, [])
  
  
  return (
      <div>
          <h1 className='title'>New Hire Badge Database</h1>
        {employees.map(employee => 
          {
            return <Employees
            EmployeeID={employee.EmployeeID}
            EmpFirstName={employee.EmpFirstName}
            EmpLastName={employee.EmpLastName}
            EmpStreetAddress={employee.EmpStreetAddress}
            EmpCity={employee.EmpCity}
            EmpState={employee.EmpState}
            EmpPhoneNumber={employee.EmpPhoneNumber}
            EmpZipCode={employee.EmpZipCode}
            EmpAreaCode={employee.EmpAreaCode}
  
            />}) 
          }
      </div>
    )
  }
  
  export default MainData;