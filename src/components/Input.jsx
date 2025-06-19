import React, { useState } from "react";

export default function Input({ onAdd }) {
  const [inputText, setInputText] = useState("");

  const handleAdd = () => {
    if (inputText.trim() !== "") {
      onAdd(inputText);
      setInputText("");
    }
  };

  return (
    <div className="flex gap-2">
      <input
        className="border border-black p-2 w-60"
        type="text"
        placeholder="Enter todo"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="bg-green-500 text-white px-4" onClick={handleAdd}>
        Add
      </button>
    </div>
  );
}
