import { User } from "../../entities/User";
import { SIGNUP } from "../actions/user.actions";

interface ReduxState {
    loggedInUser: User
}

const initialState: ReduxState = {
    loggedInUser: {} as User,
}

const userReducer = (state: ReduxState = initialState, action: any) => {
    switch (action.type) {
        case SIGNUP:

        const user = {email:action.payload.email, id: action.payload.localId, idToken: action.payload.idToken} as User

        return {...state, loggedInUser: user}
        default:
            return state;
    }
};

export default userReducer;