"use client";

import { useState } from "react";

const initialTodos = [
  { id: 1, name: "Buy milk", isCompleted: false },
  { id: 2, name: "Visit doctor", isCompleted: false },
  { id: 3, name: "Go jogging", isCompleted: false },
];

export default function TodoList() {
  const [list, setList] = useState(initialTodos);

  function handleClick(index: number) {
    setList((prevList) =>
      prevList.map((item, i) =>
        i === index ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  }

  return (
    <>
      {list.map((item, index) => (
        <Button
          key={item.id}
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
    <button className="flex gap-2" onClick={() => handleClick(index)}>
      {isCompleted ? <p>✅</p> : <p>❌</p>}
      <p>{name}</p>
    </button>
  );
}
