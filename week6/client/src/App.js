import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Employees from './components/Employees';
import AddEmployees from './components/AddEmployees';
import './App.css';

function App() {


return (
  
  <div className="App">
      <Navbar />
        <Switch>
          <Route exact path='/' component={AddEmployees} />
          <Route path='/employees' component={Employees} />
        </Switch>
    </div>
)}

export default App;