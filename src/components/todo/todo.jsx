import React, { useState, useContext } from "react";
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
import { TodoContext } from "../../state/todo/todo-context";
import { TodoActions } from "../../state/todo/todo.reducer";

export const Todo = () => {
  const [input, setInput] = useState("");

  const { todoState, todoDispatch } = useContext(TodoContext);

  const onInput = (event) => {
    setInput(event.target.value);
  };

  const addTodo = () => {
    if (input.trim() !== "") {
      todoDispatch({
        type: TodoActions.ADD,
        todo: { title: input, isComplete: false },
      });
    }

    setInput("");
  };

  const toggleChecked = (todo) => {
    todoDispatch({
      type: TodoActions.TOGGLE,
      todo,
    });
  };

  const deleteTodo = (todo) => {
    todoDispatch({
      type: TodoActions.DELETE,
      todo,
    });
  };

  const checkEnter = (event) => {
    if (event.keyCode == 13) {
      addTodo();
    }
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
          onKeyDown={checkEnter}
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
              todoState.todos.length === 0
                ? { display: "relative" }
                : { display: "none" }
            }
          >
            No tasks to complete.
          </ListItem>
          {todoState.todos.map((todo, index) => (
            <ListItem
              key={index}
              className={todo.isComplete ? "complete" : "still-to-do"}
              sx={{ paddingRight: "96px" }}
              secondaryAction={
                <>
                  <IconButton onClick={() => toggleChecked(todo)}>
                    <CheckCircleOutlineIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteTodo(todo)}>
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
