import { FirebaseSignupSuccess } from "../../entities/FirebaseSignupSuccess";

export const SIGNUP = "SIGNUP";

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
      console.log("data from server", data);

      dispatch({
        type: SIGNUP,
        payload: { email: data.email, idToken: data.idToken },
      });
    }
  };
};

export const SIGNIN = "SIGNIN";


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
      console.log("data from server", data);

      dispatch({
        type: SIGNIN,
        payload: { email: data.email, idToken: data.idToken },
      });
    }
  };
};
