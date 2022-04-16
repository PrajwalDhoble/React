import { Link } from "react-router-dom";

export const CityTable = ({ data }) => {
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
        <button>
          <Link to={`/delete/${data.id}`}>Delete</Link>
        </button>
      </td>
    </tr>
  );
};