import React from "react";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "react-query";
import { getTodos } from "./my-api";

export default function QuickStart() {
  const queryClient = useQueryClient();

  const query = useQuery("todos", getTodos);

  const mutation = useMutation(postTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  if (query.isLoading) {
    return "Loading...";
  }

  if (query.error) {
    return "Error...";
  }

  return (
    <div>
      <ul>
        {query.data.map((todo) => {
          <li key={todo.id}>{todo.titile}</li>;
        })}
      </ul>
    </div>
  );
}
