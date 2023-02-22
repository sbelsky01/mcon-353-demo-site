import React from "react";
import "./App.css";
import Home from "./components/home/home";
import { Todo } from "./components/todo/todo";
import { Header } from "./components/header/header";
import { HashRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </HashRouter>
  );
}
