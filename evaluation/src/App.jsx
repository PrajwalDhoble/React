import { useState } from 'react'
// import logo from './logo.svg'
import {Route} from "react-router-dom"
import './App.css'
import { City} from "./Components/City"
import {Country} from "./Components/Country"

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Route path="/" element={<Home/>}></Route>
      <Route path="/add-country" element={<Country/>}></Route>
      <Route path="/add-city" element={<City/>}></Route>

    </div>
  )
}

export default App
