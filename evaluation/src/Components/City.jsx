import {useEffect,useState} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";


export const AddCity=()=>{
    const [city, setCity] =useState([]);

    const [data, setData] = useState({});

    const [form,setForm] = useState({
        city:"",
        population:"",
        country:"",
    })
    const { id } = useParams();

    useEffect(()=>{
        getCountry()
        if (id) {
            getcityData();
        }
    },[])
    const getCountry=()=>{
        axios.get(`http://localhost:3002/country`).then((res)=>{
            setCity([...res.data])
        })
    }

    const getcityData = () => {
        axios.get(`http://localhost:3002/city/${id}`).then((res) => {
          console.log(res.data);
          setData({ ...res });
        });
    };

    const handleChange=(e)=>{
        const {id,value}=e.target;
        setForm({...form,[id]:value})
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(`http://localhost:3002/city`,form).then(()=>{
            alert(`${form.city} added successfully!`);
        }).then(()=>window.location.reload());
    };

    return(
        <div>
            <h1>ADD CITY</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <input type="text" id={"city"} onChange={(e)=>handleChange(e)} placeholder="City"/>
                <input type="text" id={"population"} onChange={(e)=>handleChange(e)} placeholder="Population"/>
                <select name="" id={"country"} onChange={(e)=>handleChange(e)}>
                    <option value="">Select</option>
                    {city.map((element)=>(
                        <option value={element.name}>{element.name}</option>
                    ))}
                </select>
                <input type="submit" value="Save"></input>
            </form>
        </div>
    )
}