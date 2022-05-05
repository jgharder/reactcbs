import { User } from "../../entities/User";
import {
  SAVE_SECURE_STORAGE_USER,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  UPDATE_EMAIL,
} from "../actions/user.actions";

interface ReduxState {
  loggedInUser: User | undefined;
  idToken: string | undefined;
}

const initialState: ReduxState = {
  loggedInUser: undefined,
  idToken: undefined,
};

const userReducer = (state: ReduxState = initialState, action: any) => {
  switch (action.type) {
    case SAVE_SECURE_STORAGE_USER:
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    case SIGNUP:
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    case SIGNIN:
      return {
        ...state,
        loggedInUser: action.payload.user,
        idToken: action.payload.idToken,
      };

    case SIGNOUT:
      return { ...state, loggedInUser: null, idToken: null };

    case UPDATE_EMAIL:
      // console.log("action.payload", action.payload.email);
      return { ...state, loggedInUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
