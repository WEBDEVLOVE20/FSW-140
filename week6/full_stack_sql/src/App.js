
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Employees from './components/Employees';

function App() {
  const [employees, setEmployees] = useState([])

  const getEmployees = (() => {
      axios.get("http://localhost:7000/api/get")
          .then(res => setEmployees(res.data))
          .catch(err => console.log(err))
  })


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

export default App;
