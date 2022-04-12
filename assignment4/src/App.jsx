
import DisplayTodos from "./Components/DisplayTodos";
import Todos from "./Components/Todos";


function App() {
  return (
    <div className="App">
      <h1>
        Todo App
      </h1>
      <div>
        <Todos />
        <DisplayTodos />
      </div>
    </div>
  );
}

export default App;