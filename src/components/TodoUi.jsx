import React, { useState } from "react";

import Input from "./Input";
import Items from "./Items";
import TodoAppHeading from "./TodoAppHeading";

export default function TodoUi() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos((prev) => [...prev, text]);
  };

  const deleteTodo = (index) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="mt-20 flex flex-col items-center gap-4">
      <TodoAppHeading />
      <Input onAdd={addTodo} />
      <Items todos={todos} onDelete={deleteTodo} />
    </div>
  );
}
