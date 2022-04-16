import axios from "axios";
import { useEffect, useState } from "react";
import { CityTable } from "../Table/citytable";
import { Link } from "react-router-dom";

export const Home = () => {
  const [city, setCity] = useState([]);
  useEffect(() => getData(), []);

  const getData = () => {
    axios.get(`http://localhost:3002/city`).then((res) => {
      console.log("res data", res.data);
      setCity([...res.data]);
    });
  };

  
  return (
    <MainDiv>
      <div className="subDiv">
        <h1>Data</h1>
        <div>
          <Link to={`/add-country`}>Add Country</Link>
          <Link to={`/add-city`}>Add City</Link>
        </div>

        <table>
          <tr>
            <th>id</th>
            <th>Country</th>
            <th>City</th>
            <th>Population</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
          {city.map((el) => (
            <CityTable key={el.id} data={el} />
          ))}
        </table>
      </div>
    </MainDiv>
  );
};