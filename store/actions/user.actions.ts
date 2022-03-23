export const SIGNUP = "SIGNUP";

export const signup = (signupemail: string, signuppassword: string) => {
  return async (dispatch: (arg0: { type: string; payload: any }) => void) => {
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
          signupemail: signupemail,
          signuppassword: signuppassword,
          returnSecureToken: true,
        }),
      }
    );
    if (!response.ok) {
      console.log(response);
    } else {
      const signupdata = await response.json(); // json to javascript
      console.log("data from server", signupdata);

      dispatch({ type: SIGNUP, payload: signupdata });
    }
  };
};

