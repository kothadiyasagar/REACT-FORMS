import React ,{ useState } from "react";
import { Employee } from "./employeData";

export const Addemployee = () => {
    let[FromData, setFromData]=useState([{}])
    const handdone=(e)=>{
 
        const inpuName=e.target.className
        if(e.target.type==="checkbox"){
          console.log(e.target.value,e.target.checked)
          
          setFromData({...FromData,[inpuName]:e.target.checked,})
        }
        setFromData({...FromData,[inpuName]:e.target.value})
        console.log(FromData)
      }
    
      const handsubm=(e)=>{
        e.preventDefault(e)
        const pods = async(FromData)=>{
          let response=await fetch("http://localhost:3000/data",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body :JSON.stringify({
              name:FromData.name ,
              age:FromData.age ,
              address:FromData.address,
              department:FromData.department,
              salary:FromData.salary,
               married:FromData.married,
              
            })
          })
          let data1=await response.json()
    
        }
        pods(FromData)
        console.log(FromData)
       
    }
  return( <div className="addHouseContainer">
  <form onSubmit={handsubm}>
    <label>name</label>
    <input type="text" className="name"   onChange={handdone} required />
    <br />
    <label>Age</label>
    <input  type="number" className="age" onChange={handdone} required />
    <br />
    <label>address</label>
    <input  type="text" className="address"  onChange={handdone}required />
    <br />
    <label>Department</label>
    <select className="department" onChange={handdone}>
      <option value=""></option>
        <option value="Engineer">Engineer</option>
        <option value="Hr">HR</option>
        <option value="Administration">Administration</option>
    </select>
    <br/>
    <label>Salary</label>
    <input  type="number" className="salary" onChange={handdone} required />
    <br />
    <label>marital state</label>
    <br />
    <label>bachelor</label>
    <input checked={FromData.className} type="checkbox" onChange={handdone} className="bachelor" />
    <br />
    <label>married</label>
    <input checked={FromData.className} type="checkbox"  onChange={handdone} className="married" />
    <br />
    <input className="submitBtn" type="submit" />
  </form>
</div>
);
    
}