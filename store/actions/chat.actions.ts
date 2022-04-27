import { Chatroom } from "../../entities/Chatroom";

export const ADD_CHATROOM = 'ADD_CHATROOM';
export const FETCH_CHATROOMS = 'FETCH_CHATROOMS';



export const fetchChatrooms = () => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;

        const response = await fetch(
            'https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?=auth' + token, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            //There was a problem..
            //dispatch({type: FETCH_CHATROOM_FAILED, payload: 'something'})
            dispatch({ type: FETCH_CHATROOMS, payload: [] });
        } else {
            const data = await response.json(); // json to javascript
            let chatrooms: Chatroom[] = []
            for (const key in data) {

                const obj = data[key]
                // create Chatroom objects and push them into the array chatrooms.
                chatrooms.push(new Chatroom((obj.title, obj.status, obj.message), new Date(obj.timestamp)))
            }

            // console.log("data from server", chatrooms);
            //chatroom.id = data.name;
            

            dispatch({ type: 'FETCH_CHATROOMS', payload: chatrooms })
        }
    };
}

export const addChatroom = (chatroom: Chatroom) => {
    return async (dispatch: any, getState: any) => {
        const token = getState().user.idToken;


        const response = await fetch(
            'https://cbs-react-native-46638-default-rtdb.europe-west1.firebasedatabase.app/chatrooms.json?auth=' + token, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ //javascript to json
                //key value pairs of data you want to send to server
                // ...
                ...chatroom,
            })
        });

        // console.log(await response.json());

        if (!response.ok) {
            console.log("error");
            console.log(await response.json());
          

            //There was a problem..
            //dispatch({type: SIGNUP_FAILED, payload: 'something'})
        } else {
            const data = await response.json(); // json to javascript
            // let chatrooms = []
            // for (const key in data) {
            //     console.log(data[key].name)​
            // }

            // console.log("data from server", data);
    
            chatroom.id = data.name;

            dispatch({ type: ADD_CHATROOM, payload: chatroom })
        }
    };
}