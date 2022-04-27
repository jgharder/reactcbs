import { Message } from "../../entities/Message";
import {FETCH_MESSAGES, ADD_MESSAGE} from '../actions/messages.actions'

interface ReduxState {
    messages: Message[],   
}

const initialState: ReduxState = {
    messages: []
}

interface ReduxAction {
    type: string,
    payload?:  Message
}

const messageReducer = (state: ReduxState = initialState, action: ReduxAction) => {
    switch (action.type) {
        case ADD_MESSAGE:
            return { ...state, messages: [...state.messages, action.payload] }

        case FETCH_MESSAGES:
            return { ...state, messages: action.payload }
        default:
            return state;
    }
}

