"use client";

import { useState } from "react";
import Menu from "./components/menu";
import TodoList from "./components/todo-list";

export default function Home() {
  const [tab, settab] = useState<"menu" | "todo">("menu");

  return (
    <div className="items-center justify-center flex w-screen h-screen text-black ">
      <main className="bg-neutral-100 rounded-md w-64 h-72 p-4">
        <div role="tablist" className="border-b border-neutral-700 mb-2 flex justify-between gap-4">
          <button
            className="flex-1 shadow-md bg-neutral-200 my-2 rounded"
            onClick={() => settab("menu")}
          >
            Menu
          </button>
          <button
            className="flex-1 shadow-md bg-neutral-200 my-2 rounded"
            onClick={() => settab("todo")}
          >
            Todo
          </button>
        </div>

        {/* content */}
        {tab === "menu" ? <Menu /> : <TodoList />}
      </main>
    </div>
  );
}
