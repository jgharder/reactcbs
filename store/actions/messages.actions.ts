import React from "react";
import { Message } from "../../entities/Message";

export const FETCH_MESSAGES = 'FETCH_CHATROOMS';
export const ADD_MESSAGE = 'ADD_MESSAGE';

export const fetchMessages = () => {
  return async (dispatch: any, getState: any) => {
    const token = getState().user.idToken;

    const response = await fetch(
      `https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=` +
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
      dispatch({ type: FETCH_MESSAGES, payload: [] });
    } else {
      const data = await response.json(); // json to javascript
      let messages: Message[] = [];
      for (const key in data) {
        const obj = data[key];
        messages.push(new Message(obj.title, obj.status, obj.message, new Date(obj.timestamp)));
      }

    //   console.log("data from server", messages);
    console.log(data)
    }
  };
};

export const addMessage = (message: Message) => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;
    
        const response = await fetch(
        "https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/messages.json?auth=" +
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
        dispatch({ type: ADD_MESSAGE, payload: message });
        } else {
        const data = await response.json(); // json to javascript
        console.log("data from server", data);
        }
    };
    }
