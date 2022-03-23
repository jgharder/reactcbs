import { User } from "../../entities/User";
import { SIGNIN, SIGNUP } from "../actions/user.actions";

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
    case SIGNUP:
      const user = new User(action.payload.email, "", "");
      //state.loggedInUser = user; // MUTATION!!!!
      return { ...state, loggedInUser: user, idToken: action.payload.idToken };

    case SIGNIN:
        const signedinUser = new User(action.payload.email, "", "");
        return {...state, loggedInUser: signedinUser, idToken: action.payload.idToken}

    default:
      return state;
  }
};

export default userReducer;
