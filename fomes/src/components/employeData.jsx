import React ,{ useState ,useEffect} from "react";

export const Employee = () => {
  const [Employee, setEmployeeData] = React.useState([]);
  useEffect(() => {
    const getHouses = async () => {
      try {
        let res = await fetch("http://localhost:3000/data");
        let data = await res.json();
        console.log(data);
        setEmployeeData(data);
      } catch (err) {
        console.log(err);
      }
    };
    getHouses();
  }, []);
  
  return(
      <>
       <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Name</th>
            <th>Age</th>
            <th>Address</th>
            <th>Department</th>
            <th>Salary</th>
            <th>Marital State</th>
          </tr>
        </thead>
        <tbody>
          {Employee.map((house, index) => {
            return (
              <tr key={house.id} className="houseDetails">
                <td className="houseId">{house.id}</td>
                <td className="houseName">{house.name} </td>
                <td className="ownersName">{house.age}</td>
                <td className="address">{house.address}</td>
                <td className="areaCode">{house.department}</td>
                <td className="rent">{house.salary}PM</td>
                <td className="preferredTenants">
                  {/* Show text Both or Bachelors or Married based on values */}
                  {house.maritalstate?(house.maritalstate):(house.married?("Married"):("Bachelor"))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    
      </>
  )
}