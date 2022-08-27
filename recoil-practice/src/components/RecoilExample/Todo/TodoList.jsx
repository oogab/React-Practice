import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import TodoItem from "./TodoItem";
import { TodoItemCreator } from "./TodoListCreator";
import { TodoListFilters } from "./TodoListFilters";
import { TodoListStats } from "./TodoListStats";
import { filteredTodoListState, todoListState } from "./TodoStore";

export function TodoList() {
  const todoList = useRecoilValue(filteredTodoListState);

  useEffect(() => {
    console.log(`todoList: ${JSON.stringify(todoList)}`);
  }, [todoList]);

  return (
    <>
      <TodoListStats />
      <TodoListFilters />
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </>
  );
}
