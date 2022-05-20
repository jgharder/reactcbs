import { Chatroom } from "../../entities/Chatroom";
import { Message } from "../../entities/Message";

export const ADD_CHATROOM = "ADD_CHATROOM";
export const FETCH_CHATROOMS = "FETCH_CHATROOMS";
export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const fetchChatrooms = () => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;
    const response = await fetch(
      `https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=${token}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      dispatch({ type: FETCH_CHATROOMS, payload: [] });
    } else {
      const data = await response.json();
      let chatrooms: Chatroom[] = [];
      for (const key in data) {
        let obj = data[key];
        let messages = [];
        for (const key2 in obj.messages) {
          let message = obj.messages[key2];
          messages.push(
            new Message(
              message.title,
              message.status,
              new Date(message.timestamp),
              message.User,
              key2
            )
          );
        }
        chatrooms.push(
          new Chatroom(obj.title, messages, new Date(obj.timestamp), key)
        );
      }
      dispatch({ type: "FETCH_CHATROOMS", payload: chatrooms });
    }
  };
};

export const addChatroom = (chatroom: Chatroom) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;

    const response = await fetch(
      "https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=" +
        token,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...chatroom,
        }),
      }
    );
    if (!response.ok) {
      
    } else {
      const data = await response.json();
      chatroom.id = data.name;
      dispatch({ type: ADD_CHATROOM, payload: chatroom });
    }
  };
};

export const fetchMessages = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;
    const user = getState().user;
    const response = await fetch(
      `https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/${id}/messages.json?auth=` +
        token,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!response.ok) {
    } else {
      const data = await response.json();
      let messages: Message[] = [];
      for (const key in data) {
        let obj = data[key];
        messages.push(
          new Message(obj.title, obj.status, new Date(obj.timestamp), user, key)
        );
      }
      dispatch({ type: FETCH_MESSAGES, payload: { messages, id } });
    }
  };
};

export const addMessage = (id: string, message: Message) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;
    const response = await fetch(
      `https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms/${id}/messages.json?auth=` +
        token,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...message,
        }),
      }
    );
    if (!response.ok) {
    } else {
      const data = await response.json();
      message.id = data.name;
      dispatch({ type: ADD_MESSAGE, payload: { message, id } });
    }
  };
};
