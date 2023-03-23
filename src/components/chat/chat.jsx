import { useEffect, useState } from "react";
import { useInterval } from "../../hooks/use-interval";
import "./chat.css";
import {
  Typography,
  List,
  ListItem,
  TextField,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@mui/material";

export const Chat = () => {
  const [chats, setChats] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [username, setUsername] = useState("");
  const [newChat, setNewChat] = useState("");
  const [open, setOpen] = useState(false);

  function getChats() {
    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats")
      .then((response) => response.json())
      .then((data) => {
        console.log("chats:");
        console.log(data);

        setChats(data.Items);
      });
  }

  function setChat(chat) {
    setCurrentChat(chat);
    getMessages(chat.id);
  }

  function getMessages(chatId) {
    fetch(
      `https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats/${chatId}/messages`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("messages: ");
        console.log(data);

        const posts = data.Items.reverse();
        setMessages(posts);
      });
  }

  function postMessage() {
    if (currentChat) {
      const message = {
        chatId: currentChat.id, // required, must be an existing chat id
        username: username.trim(), // required
        text: inputMessage, // required
      };

      fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/messages", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json", // tells REST that we will send the body data in JSON format
        },
        body: JSON.stringify(message),
      });
    } else {
      console.log("cannot post a message because currentChat is null");
    }

    setInputMessage("");
  }

  function postNewChat() {
    const newChatName = {
      name: newChat,
    };

    fetch("https://z36h06gqg7.execute-api.us-east-1.amazonaws.com/chats", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newChatName),
    }).then(() => getChats());

    handleClose();
  }

  function onMessageInput(event) {
    setInputMessage(event.target.value);
  }

  function onUsernameInput(event) {
    setUsername(event.target.value);
  }

  function onNewChatInput(event) {
    setNewChat(event.target.value);
  }

  useEffect(() => {
    getChats();
  }, []);

  useInterval(
    (params) => {
      const chatId = params[0];
      if (chatId) {
        getMessages(chatId);
      }
    },
    1000,
    currentChat && currentChat.id
  );

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNewChat("");
  };

  const checkEnter = (event) => {
    if (event.keyCode == 13) {
      event.target.blur();
      postMessage();
    }
  };

  return (
    <div className="App">
      <div className="chat-body page-content">
        <Typography variant="h4">Chat</Typography>
        <div
          style={{
            border: "solid medium #1c2229",
            borderRadius: "10px",
            marginTop: "10px",
            backgroundColor: "#ebf0ed",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              padding: "15px",
            }}
          >
            <div>
              <FormControl
                variant="standard"
                sx={{ minWidth: 150 }}
                color="success"
              >
                <InputLabel id="input-label">Selected Chat</InputLabel>
                <Select labelId="input-label">
                  {chats.map((chat) => (
                    <MenuItem
                      key={chat.id}
                      value={chat.name}
                      onClick={() => setChat(chat)}
                    >
                      {chat.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <Button
                color="success"
                sx={{
                  fontSize: "28px",
                  padding: "0",
                  verticalAlign: "bottom",
                }}
                onClick={handleClickOpen}
              >
                +
              </Button>
              <Dialog open={open} onClose={handleClose}>
                <DialogTitle>Enter new chat name:</DialogTitle>
                <DialogContent>
                  <TextField
                    autoFocus={true}
                    margin="dense"
                    variant="standard"
                    dense="true"
                    onInput={onNewChatInput}
                    value={newChat}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={postNewChat}>Add</Button>
                </DialogActions>
              </Dialog>
            </div>

            <TextField
              label="Username"
              variant="standard"
              onInput={onUsernameInput}
              value={username}
              color="success"
            />
          </div>
          <List className="messages">
            <ListItem
              sx={!currentChat ? { display: "relative" } : { display: "none" }}
            >
              No chat selected.
            </ListItem>
            <ListItem
              sx={
                currentChat && messages.length === 0
                  ? { display: "relative" }
                  : { display: "none" }
              }
            >
              No messages in current chat.
            </ListItem>
            {messages.map((message) => (
              <ListItem
                key={message.id}
                className={
                  message.username === username
                    ? "message my-messages"
                    : "message"
                }
              >
                {message.username === username ? "" : message.username + ": "}
                {message.text}
              </ListItem>
            ))}
          </List>
          <div
            style={{
              padding: "15px",
              display: "flex",
            }}
          >
            <TextField
              variant="standard"
              onInput={onMessageInput}
              value={inputMessage}
              disabled={username.trim() === "" || !currentChat}
              sx={{
                width: "1000px",
                marginRight: "30px",
              }}
              label={
                !currentChat
                  ? "Please select a chat to post messages."
                  : username.trim() === ""
                  ? "Please enter a username to post messages."
                  : ""
              }
              color="success"
              onKeyDown={checkEnter}
            />
            <Button
              color="success"
              variant="contained"
              onClick={() => postMessage()}
              disabled={username.trim() === "" || !currentChat}
            >
              POST
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
