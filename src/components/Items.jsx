import React from "react";

export default function Items({ todos, onDelete }) {
  return (
    <ul className="w-[300px] flex flex-col gap-2">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between border p-2 bg-gray-100 rounded"
        >
          {todo}
          <button className="text-red-500" onClick={() => onDelete(index)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
