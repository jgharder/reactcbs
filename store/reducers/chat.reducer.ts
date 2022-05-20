import { Chatroom } from "../../entities/Chatroom";
import {
  ADD_CHATROOM,
  ADD_MESSAGE,
  FETCH_CHATROOMS,
  FETCH_MESSAGES,
} from "../actions/chat.actions";
import { Message } from "../../entities/Message";

interface ReduxState {
  chatrooms: Chatroom[];
  counter: number;
  name: string;
  messages: Message[];
}

const initialState: ReduxState = {
  chatrooms: [],
  counter: 0,
  name: "",
  messages: [],
};

interface ReduxAction {
  type: string;
  payload?: number | string | Chatroom | Message | any;
}

const chatReducer = (state: ReduxState = initialState, action: ReduxAction) => {
  switch (action.type) {
    case ADD_CHATROOM:
      return { ...state, chatrooms: [...state.chatrooms, action.payload] };

    case FETCH_CHATROOMS:
      return { ...state, chatrooms: action.payload };

    case ADD_MESSAGE:
      let chatroom: any = state.chatrooms.find(
        (room) => room.id === action.payload.id
      );
      const chatmessages: Message[] = [
        ...chatroom.messages,
        action.payload.message,
      ];

      const newChatRoom: Chatroom = { ...chatroom };
      newChatRoom.messages = chatmessages;
      const index: number = state.chatrooms.findIndex(
        (room) => room.id === action.payload.id
      );
      const chatroomArray: Chatroom[] = [...state.chatrooms];
      chatroomArray.splice(index, 1, newChatRoom);

      return { ...state, chatrooms: chatroomArray };
    case FETCH_MESSAGES:
      return { ...state, messages: action.payload };

    default:
      return state;
  }
};

export default chatReducer;
