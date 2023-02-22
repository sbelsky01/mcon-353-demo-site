import React, { useState } from "react";
import "./todo.css";
import {
  Typography,
  IconButton,
  List,
  ListItem,
  ListItemText,
  TextField,
  Fab,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const Todo = () => {
  const [input, setInput] = useState("");

  const [todos, setTodos] = useState([]);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    if (input !== "") {
      setTodos([...todos, { title: input, isComplete: false }]);
      setInput("");
    }
  };

  const toggleChecked = (todo) => {
    const newTodos = [...todos];
    const updatedTodo = newTodos.find((x) => x.title === todo.title);
    updatedTodo.isComplete = !todo.isComplete;
    setTodos(newTodos);
  };

  const deleteTodo = (todo) => {
    const newTodos = [...todos].filter((x) => x.title !== todo.title);
    setTodos(newTodos);
  };

  return (
    <div className="App">
      <div className="todo-body page-content">
        <Typography variant="h2" sx={{ marginLeft: "10px", color: "#1c2229" }}>
          To do
        </Typography>
        <TextField
          sx={{ width: "87%", marginLeft: "10px" }}
          label="Enter task"
          variant="standard"
          onInput={onInput}
          value={input}
        />
        <Fab color="primary" size="small" sx={{ backgroundColor: "#0f4a8d" }}>
          <AddIcon onClick={addTodo} />
        </Fab>
        <List
          dense
          sx={{
            border: "solid medium #1c2229",
            borderRadius: "10px",
            marginTop: "10px",
            minHeight: "420px",
            backgroundColor: "#fff",
          }}
        >
          <ListItem
            sx={
              todos.length === 0 ? { display: "relative" } : { display: "none" }
            }
          >
            No tasks to complete.
          </ListItem>
          {todos.map((todo, index) => (
            <ListItem
              key={index}
              sx={
                todo.isComplete
                  ? { color: "#c7c5c5", paddingRight: "96px" }
                  : { color: "black", paddingRight: "96px" }
              }
              secondaryAction={
                <>
                  <IconButton
                    aria-label="complete"
                    onClick={() => toggleChecked(todo)}
                    disabled={todo.isComplete}
                  >
                    <CheckCircleOutlineIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteTodo(todo)}
                    sx={todo.isComplete ? { opacity: ".5" } : { opacity: "1" }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </>
              }
              divider={true}
            >
              <ListItemText>{todo.title}</ListItemText>
            </ListItem>
          ))}
        </List>
      </div>
    </div>
  );
};
