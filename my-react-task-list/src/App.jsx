import Header from "./components/Header"
import TaskList from "./components/TaskList"

let tareas = [
  { id:1, nombre:"Cocinar"},
  { id:2, nombre:"Jugar"},
  { id:3, nombre:"Comer"},
]

function App() {

  return (
    <div>
      <Header titulo='ToDo App' />
      <form action="">
        <input type="text" placeholder="Agrega tu nueva tarea" />
        <button>+</button>
      </form>
      <TaskList lista={tareas} />
    </div>
  )
}

export default App
