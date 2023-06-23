import { useState } from "react";
import { Input, Button, Text } from '@chakra-ui/react'


export const Modal = ({ dataTask, onClickUpdate }) => {
  const miStorage = window.localStorage;
  var dataTasks = JSON.parse(miStorage.getItem("dataTasks"));

  const [valueInput, setValueInput] = useState(dataTask.task);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setValueInput({ ...valueInput, [name]: value });
  };

  const handleChangeClose = () => {
    setValueInput(dataTask.task);
  };

  const handleChangeSave = () => {
    if (
      valueInput.name !== "" &&
      valueInput.name !== 0 &&
      valueInput.name.length > 3
    ) {
      var newList = [];
      dataTasks.map((task) => {
        if (task.id == dataTask.id) {
          task.task.name = valueInput.name;
          task.task.description = valueInput.description;
        }
        newList.push(task);
      });
      onClickUpdate(newList);
    } else {
      setValueInput(dataTask.task);
    }
  };

  return (
    <div
      id={`exampleModalCenter${dataTask.id}`}
      tabIndex={-1}
      role="dialog"
      aria-labelledby="exampleModalCenterTitle"
      aria-hidden="true">
      <div>
        <div>
          <div>
          <Text fontSize='lg' color='cornflowerblue'>
            Editar tarea
          </Text>
            <button
              type="button"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Input
              mb='5'
              size='sm'
              textColor='black'
              bg='white'
              type="text"
              name="name"
              placeholder="Edita la tarea"
              value={valueInput.name}
              onChange={(e) => handleChangeInput(e)}
            />
            <Input
              size='sm'
              textColor='black'
              type="text"
              bg='white'
              errorBorderColor='blue'
              name="description"
              placeholder="Escribe una descripcion"
              value={valueInput.description}
              onChange={(e) => handleChangeInput(e)}
            />
          </div>
          <div className="modal-footer">
            <Button size='xs'
              bg='lightseagreen'
              color='white'
              _hover={{
                background:'blue'
              }}
              type="button"
              className="btn btn-primary"
              data-dismiss="modal"
              onClick={() => handleChangeSave()}
            >
              Guardar
            </Button> 
            <Button size='xs'
              m='2'
              bg='lightsalmon'
              color='white'
              _hover={{
                background:'indianred'
              }}
              type="button"
              onClick={() => handleChangeClose()}
            >
              Cancelar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};