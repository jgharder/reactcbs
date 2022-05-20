import { FirebaseSignupSuccess } from "../../entities/FirebaseSignupSuccess";
import * as SecureStore from "expo-secure-store";
import { User } from "../../entities/User";

export const SIGNUP = "SIGNUP";
export const SIGNIN = "SIGNIN";
export const SIGNOUT = "SIGNOUT";
export const SAVE_SECURE_STORAGE_USER = "SAVE_SECURE_STORAGE_USER";
export const UPDATE_EMAIL = "UPDATE_EMAIL";
export const UPDATE_IDTOKEN = "UPDATE_IDTOKEN";
export const UPDATE_DISPLAYNAME = "UPDATE_DISPLAYNAME";
export const FETCH_USER = "FETCH_USER";

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
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
    } else {
      const data: FirebaseSignupSuccess = await response.json();

      const user = new User(
        data.email,
        data.refreshToken,
        data.idToken,
        "Pick a display name"
      );

      await SecureStore.setItemAsync("idToken", data.idToken);
      await SecureStore.setItemAsync("user", JSON.stringify(user)); // convert user js-obj. to json

      dispatch({ type: SIGNIN, payload: { user, idToken: data.idToken } });
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
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
    } else {
      const data: FirebaseSignupSuccess = await response.json();
      const user = new User(
        data.email,
        data.refreshToken,
        data.idToken,
        data.displayName
      );

      await SecureStore.setItemAsync("idToken", data.idToken);
      await SecureStore.setItemAsync("refreshToken", data.refreshToken);
      await SecureStore.setItemAsync("user", JSON.stringify(user));

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

export const updateEmail = (email: string, idToken: string) => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDbKYBfJU472IlP9A5kE3FuW44-ukm_FBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: idToken,
          email: email,
          returnSecureToken: true,
        }),
      }
    );

    if (!response.ok) {
    } else {
      const data = await response.json();

      const user = new User(
        data.email,
        data.refreshToken,
        data.idToken,
        data.displayName
      );
      await SecureStore.setItemAsync("user", JSON.stringify(user));

      dispatch({ type: UPDATE_EMAIL, payload: user });
    }
  };
};

export const refreshIdToken = (
  email: string,
  refreshToken: string,
  displayName: string
) => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://securetoken.googleapis.com/v1/token?key=AIzaSyDbKYBfJU472IlP9A5kE3FuW44-ukm_FBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          grant_type: "refresh_token",
          refresh_token: refreshToken,
        }),
      }
    );

    if (!response.ok) {
    } else {
      const data = await response.json();
      const user = new User(
        email,
        data.refresh_token,
        data.id_token,
        displayName
      );
      await SecureStore.setItemAsync("user", JSON.stringify(user));

      dispatch({
        type: UPDATE_IDTOKEN,
        payload: user,
      });
    }
  };
};

export const updateDisplayName = (
  displayName: string,
  idToken: string,
  refreshToken: string
) => {
  return async (dispatch: any) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDbKYBfJU472IlP9A5kE3FuW44-ukm_FBE",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          idToken: idToken,
          displayName: displayName,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
    } else {
      const data = await response.json();
      const user = new User(
        data.email,
        refreshToken,
        idToken,
        data.displayName
      );

      await SecureStore.setItemAsync("user", JSON.stringify(user));
      dispatch({ type: UPDATE_DISPLAYNAME, payload: data.displayName });
    }
  };
};
