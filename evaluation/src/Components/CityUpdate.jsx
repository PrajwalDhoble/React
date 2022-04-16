import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export const CityUpdate = () => {
  const [city, setcity] = useState([]);
  const [data, setData] = useState({});
  const [form, setForm] = useState({
    city: "",
    population: "",
    country: "",
  });

  const { id } = useParams();

  useEffect(() => {
    getCountries();
    if (id) {
      fetchCurrentData();
    }
  }, []);
  const fetchCurrentData = () => {
    axios.get(`http://localhost:3002/city/${id}`).then((res) => {
      console.log(res.data);
      setData({ ...res.data });
    });
  };

  const getCountries = () => {
    axios.get(`http://localhost:3002/country`).then((res) => {
      setcity([...res.data]);
    });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    setForm({ ...form, [id]: value });
    console.log(form);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .patch(`http://localhost:3002/city/${id}`, form)
      .then(() => alert(`${form.city} added`))
      .then(() => window.location.reload());
  };
  return (
    <div>
      <h1>Update City</h1>

      <form action="" onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          id={"city"}
          defaultValue={data.city}
          onChange={(e) => handleChange(e)}
          placeholder="City"
          required
        />
        <input
          type="text"
          id={"population"}
          defaultValue={data.population}
          onChange={(e) => handleChange(e)}
          placeholder="Population"
          required
        />

        <select
          name=""
          id={"country"}
          onChange={(e) => handleChange(e)}
        >
          <option value="">Select</option>
          {city.map((el) => (
            <option value={el.name} key={el.id}>
              {el.name}
            </option>
          ))}
        </select>
        <input type="submit" value={"Update City"} />
      </form>
    </div>
  );
};