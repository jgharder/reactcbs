import { Chatroom } from "../../entities/Chatroom";
import { Message } from "../../entities/Message";

export const ADD_CHATROOM = "ADD_CHATROOM";
export const FETCH_CHATROOMS = "FETCH_CHATROOMS";

export const fetchChatrooms = () => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;

    const response = await fetch(
      "https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?=auth" +
        token,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      //There was a problem..
      //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
      dispatch({ type: FETCH_CHATROOMS, payload: [] });
    } else {
      const data = await response.json(); // json to javascript
      let chatrooms: Chatroom[] = [];
      for (const key in data) {
        let obj = data[key];
        // create Chatroom objects and push them into the array chatrooms.
        chatrooms.push(
          new Chatroom(obj.title, [], new Date(obj.timestamp), key)
        );
      }

      // console.log("data from server", chatrooms);

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
          //javascript to json
          //key value pairs of data you want to send to server
          // ...
          ...chatroom,
        }),
      }
    );

    // console.log(await response.json());

    if (!response.ok) {
      console.log("error");
      console.log(await response.json());

      //There was a problem..
      //dispatch({type: SIGNUP_FAILED, payload: 'something'})
    } else {
      const data = await response.json(); // json to javascript
      // let chatrooms = []
      // for (const key in data) {
      //     console.log(data[key].name)​
      // }

      chatroom.id = data.name;
      // console.log("data from server", chatroom);

      dispatch({ type: ADD_CHATROOM, payload: chatroom });
    }
  };
};

export const FETCH_MESSAGES = "FETCH_MESSAGES";
export const ADD_MESSAGE = "ADD_MESSAGE";

export const fetchMessages = (id: string) => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;

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
      console.log("error fetching messages");
      //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
      dispatch({ type: FETCH_MESSAGES, payload: [] });
    } else {
      const data = await response.json(); // json to javascript
      let messages: Message[] = [];
      for (const key in data) {
        const obj = data[key];
        messages.push(
          new Message(
            obj.title,
            obj.status,
            obj.message,
            new Date(obj.timestamp),
            key
          )
        );
      }

      dispatch({ type: FETCH_MESSAGES, payload: messages });

      // console.log("data from server", messages);
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
          //key value pairs of data you want to send to server
          // ...
          ...message,
        }),
      }
    );
    if (!response.ok) {
      //There was a problem..
      //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
    } else {
      const data = await response.json(); // json to javascript
      console.log("data from server", data);

      message.id = data.name;

      dispatch({ type: ADD_MESSAGE, payload: message });
    }
  };
};
