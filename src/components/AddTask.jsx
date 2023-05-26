import React, { useState } from "react";

const initialState = {
  name: "",
  description: "",
};

const AddTask = ({ onClickAdd }) => {
  const [data, setData] = useState(initialState);

  const handleChange = (e) => {
    const { value, name } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleClick = (e) => {
    e.preventDefault();
    onClickAdd(data);
    setData(initialState);
  };

  return (
    <form
      className="containerAddTask "
      onSubmit={(e) => {
        handleClick(e);
      }}
    >
      <input
        type="text"
        className="form-control mr-3"
        placeholder="Escriba una tarea *"
        name="name"
        value={data.name}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <input
        type="text"
        className="form-control"
        name="description"
        placeholder="Escriba una descripcion"
        value={data.description}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button type="submit" className="btn btn-primary">
        Agregar
      </button>
    </form>
  );
};

export default AddTask;