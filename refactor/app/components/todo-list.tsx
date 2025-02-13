"use client";

import { useState } from "react";

const todo = [
  {
    id: 1,
    name: "Buy milk",
    isCompleted: false,
  },
  {
    id: 2,
    name: "Visit doctor",
    isCompleted: false,
  },
  {
    id: 3,
    name: "Go jogging",
    isCompleted: false,
  },
];

export default function TodoList() {
  const [list, setList] = useState(todo);

  function handleClick(index: number) {
    todo[index].isCompleted = !todo[index].isCompleted;
    setList(todo);
  }

  return (
    <>
      {todo.map((item, index) => (
        <Button
          key={index}
          index={index}
          name={item.name}
          isCompleted={item.isCompleted}
          handleClick={handleClick}
        />
      ))}
    </>
  );
}

function Button({
  index,
  name,
  isCompleted,
  handleClick,
}: {
  index: number;
  name: string;
  isCompleted: boolean;
  handleClick: (index: number) => void;
}) {
  return (
    <button key={index} className="flex gap-2" onClick={() => handleClick(index)}>
      {isCompleted ? <p>✅</p> : <p>❌</p>}
      <p>{name}</p>
    </button>
  );
}
