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
    payload?: number | string | Chatroom | Message
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
            
            return { ...state, messages: [...state.messages, action.payload] }

        case FETCH_MESSAGES:

            return { ...state, messages: action.payload }

        default:
            return state;
    }
};

export default chatReducer;