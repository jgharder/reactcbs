import { FirebaseSignupSuccess } from "../../entities/FirebaseSignupSuccess";
import * as SecureStore from "expo-secure-store";
import { User } from "../../entities/User";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SAVE_SECURE_STORAGE_USER = "SAVE_SECURE_STORAGE_USER";

export const signup = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDbKYBfJU472IlP9A5kE3FuW44-ukm_FBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //javascript to json
          //key value pairs of data you want to send to server
          // ...
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      //There was a problem..
      //dispatch({type: SIGNUP_FAILED, payload: 'something'})
    } else {
      const data: FirebaseSignupSuccess = await response.json(); // json to javascript
      // console.log("data from server", data);

      const user = new User(data.email, "", "");

      await SecureStore.setItemAsync("idToken", data.idToken);
      await SecureStore.setItemAsync("user", JSON.stringify(user)); // convert user js-obj. to json

      dispatch({ type: SIGNUP, payload: { user, idToken: data.idToken } });
      
    }
  };
};

export const signin = (email: string, password: string) => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDbKYBfJU472IlP9A5kE3FuW44-ukm_FBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //javascript to json
          //key value pairs of data you want to send to server
          // ...
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      //There was a problem..
      //dispatch({type: SIGNUP_FAILED, payload: 'something'})
    } else {
      const data: FirebaseSignupSuccess = await response.json(); // json to javascript
      // console.log("data from server", data);

      const user = new User(data.email, "", "");

      await SecureStore.setItemAsync("idToken", data.idToken);
      await SecureStore.setItemAsync("user", JSON.stringify(user)); // convert user js-obj. to json

      dispatch({ type: SIGNIN, payload: { user, idToken: data.idToken } });
    }
  };
};

export const saveSecureStorageUser = (user: User, idToken: string) => {
  return { type: SAVE_SECURE_STORAGE_USER, payload: { user, idToken } };
};

export const signout = () => {
  SecureStore.deleteItemAsync("idToken");
  SecureStore.deleteItemAsync("user");

  return { type: SIGNOUT };
};
