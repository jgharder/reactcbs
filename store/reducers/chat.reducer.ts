import { Chatroom } from "../../entities/Chatroom";
import { ADD_CHATROOM, ADD_MESSAGE, FETCH_CHATROOMS, FETCH_MESSAGES } from "../actions/chat.actions";
import { Message } from "../../entities/Message";

interface ReduxState {
    chatrooms: Chatroom[]
    counter: number
    name: string
    messages: Message[]
}

const initialState: ReduxState = {
    chatrooms: [],
    counter: 0,
    name: "",
    messages: []
}

interface ReduxAction {
    type: string,
    payload?: number | string | Chatroom | Message | any
}

const chatReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {

        case ADD_CHATROOM:
            return { ...state, chatrooms: [...state.chatrooms, action.payload] }
        // state.chatrooms.push(chatroom) // mutating state. Not allowed
        

        case FETCH_CHATROOMS:
            // create a new state object with the action.payload assigned to the chatrooms array.
            return { ...state, chatrooms: action.payload }

        case ADD_MESSAGE:
            let chatroom: any = state.chatrooms.find(room => room.id === action.payload.id)
           
            // console.log("chat reducer add message", chatroom);
            // console.log(action.payload.message);

            const chatmessages: Message[] = [...chatroom.messages, action.payload.message];
            

            const newChatRoom: Chatroom = { ...chatroom};
            newChatRoom.messages = chatmessages;
            // console.log("new chatroom", newChatRoom);

            // const chatroomArray: Chatroom[] = [...state.chatrooms];
            // chatroomArray.push(newChatRoom);
            // console.log(chatroomArray);
            const index: number = state.chatrooms.findIndex(room => room.id === action.payload.id);
            const chatroomArray: Chatroom[] = [...state.chatrooms];
            chatroomArray.splice(index, 1, newChatRoom);
            

                
            return { ...state, chatrooms: chatroomArray }
            // return { ...state, messages: [...state.messages, action.payload] }

        case FETCH_MESSAGES:
            // chatroom = state.chatrooms.find(room => room.id === action.payload.id)
            // // console.log(chatroom);
            // const AnotherNewChatroom = { ...chatroom};
            // console.log(AnotherNewChatroom.messages)
            // const chatRoomArray = [AnotherNewChatroom, action.payload.messages];
            // console.log(" chatroom array", chatRoomArray[0].messages);
            // // console.log(action.payload.messages);
            return { ...state, messages: action.payload}

        default:
            return state;
    }
};

export default chatReducer;