import React from "react";
import Title from "../Components/Title";
import AddInputGroup from "../Components/AddInputGroup";
import AddAccordian from "../Components/AddAccordian";
const Todo = () => {
  return (
    <>
      <Title title="TODO App" />
      <AddInputGroup
        label="Add new Task?"
        placeholder="Eg. Wash Clothes"
        button="Add New Todo"
      />
      <AddAccordian title="Wash Clothes" desc="Washing Clothes" />
    </>
  );
};

export default Todo;
