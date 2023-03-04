function Task(props){

    const { id, descripcion } = props
    
    return (
        <div>
            <input id={id} type="checkbox" />
            <label htmlFor={id}>{descripcion}</label>
            <button>Editar</button>
            <button>Borrar</button>
        </div>
    )
}

export default Task