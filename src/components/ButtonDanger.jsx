const ButtonDanger = ({ onClickClear, taskPending }) => {
    return (
      <div className="buttonDanger">
          <p>Tienes {taskPending} pendientes estas tareas</p>
          <button type="button"  onClick={onClickClear}>Eliminar todo</button>
      </div>
    )
  }
  
  export default ButtonDanger;