
import './App.css';
import {Route, Routes} from 'react-router-dom'
import {AddCountry} from "./Components/Country"
import {AddCity} from "./Components/City"
import { Navbar } from "./Components/Navbar";
import {Home} from "./Components/Home"
import {CityUpdate} from  "./Components/CityUpdate"
import {CityDelete} from  "./Components/CityDelete"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route exact path="/add-country" element={<AddCountry/>}/>
          <Route exact path="/add-city" element={<AddCity/>}/>
          <Route path="/update/:id" element={<CityUpdate />} />
          <Route path="/delete/:id" element={<CityDelete />} />
      </Routes>
    </div>
  );
}

export default App;