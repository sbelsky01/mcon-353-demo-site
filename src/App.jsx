import "./App.css";
import React, { useReducer } from "react";
import Home from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import { TodoContext } from "./state/todo/todo-context";
import { todoReducer } from "./state/todo/todo.reducer";
import { Chat } from "./components/chat/chat";

export default function App() {
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  return (
    <HashRouter>
      <Header />
      <TodoContext.Provider value={{ todoState, todoDispatch }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </TodoContext.Provider>
    </HashRouter>
  );
}
