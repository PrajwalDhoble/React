import {Route, Routes} from 'react-router-dom'
import {Navbar} from "./Components/navbar"
import {Admin} from "./Components/admin"
import {Classes} from "./Components/classes"
import {Teacher} from "./Components/teacher"

function App(){
    return (
      <div className="App">
            <Navbar/>
            <Routes>
                <Route path="/" element={<Navbar/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/teacher" element={<Teacher/>}/>
                <Route path="/classes" element={<Classes/>}/>
            </Routes>
        </div>
    )
}

export default App;