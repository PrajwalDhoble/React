import { Link } from "react-router-dom";

export const CityTable = ({ deleteCity,data }) => {
  return (
    <tr>
      <td>{data.id}</td>
      <td>{data.country}</td>
      <td>{data.city}</td>
      <td>{data.population}</td>
      <td>
        <button>
          <Link to={`/update/${data.id}`}>Edit</Link>
        </button>
      </td>
      <td>
        <button onClick={()=>deleteCity(data.id)}>
          Delete
        </button>
      </td>
    </tr>
  );
};