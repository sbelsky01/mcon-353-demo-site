import { cloneDeep } from "lodash";

export const TodoActions = {
  ADD: "ADD",
  TOGGLE: "TOGGLE",
  DELETE: "DELETE",
};

export const todoReducer = (state, action) => {
  switch (action.type) {
    case TodoActions.ADD: {
      return { todos: [...state.todos, action.todo] };
    }
    case TodoActions.TOGGLE: {
      let newTodos = cloneDeep(state.todos);
      const updatedTodo = newTodos.find((X) => X.title === action.todo.title);
      updatedTodo.isComplete = !updatedTodo.isComplete;
      return {
        todos: newTodos,
      };
    }
    case TodoActions.DELETE: {
      const newTodos = state.todos.filter((x) => x.title !== action.todo.title);
      return {
        todos: newTodos,
      };
    }
  }
};
