import { User } from "../../entities/User";
import {
  SAVE_SECURE_STORAGE_USER,
  SIGNIN,
  SIGNOUT,
  SIGNUP,
  UPDATE_DISPLAYNAME,
  UPDATE_EMAIL,
  UPDATE_IDTOKEN,
  FETCH_USER
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
        loggedInUser: action.payload
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
      return { ...state, loggedInUser: {...state.loggedInUser, refreshToken: action.payload.refreshToken, email: action.payload.email, idToken: action.payload.idToken} };

    case UPDATE_IDTOKEN:
      // console.log("action.payload", action.payload.email);
      return { ...state, loggedInUser: {...state.loggedInUser, refreshToken: action.payload.refreshToken, email: action.payload.email, idToken: action.payload.idToken} };

    case UPDATE_DISPLAYNAME:
      return { ...state, loggedInUser: {...state.loggedInUser, displayName: action.payload} };

    // case FETCH_USER:
    //   return { ...state, loggedInUser: action.payload }; 
    // virker ikke - får ikke idtoken retur fra firebase, så hvis den skal virke skal vi ikke overskrive idtoken

    default:
      return state;
  }
};

export default userReducer;
