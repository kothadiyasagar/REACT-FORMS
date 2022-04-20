import logo from './logo.svg';
import './App.css';
import React ,{ useState } from "react";
import { Addemployee } from './components/from';
import { Employee } from './components/employeData';

function App() {
  
  const [showTable, setShowTable] = useState(true)
  return (
    <div className="App">
    <button className="toggleForm" onClick = {()=>setShowTable(!showTable)}>
      
      {showTable ? "Add Employee Dettails" : "Show Employee Data"}
    </button>

    {showTable ? <Employee/> : <Addemployee/>}
    <br />
  </div>

  );
}

export default App;
