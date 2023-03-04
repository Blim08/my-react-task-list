import Task from "./Task"

function TaskList(props){

    const { lista } = props
    
    return (
        <div>
          {
           lista.map((tarea)=> (
            <Task
              id={tarea.id} 
              descripcion={tarea.nombre} 
            />
           ))
          }  
        </div>
    )
}

export default TaskList