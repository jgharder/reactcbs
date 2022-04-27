import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import ReduxThunk from "redux-thunk";
import chatReducer from "./store/reducers/chat.reducer";
import userReducer from "./store/reducers/user.reducer";
import Index from "./components/index";




const rootReducer = combineReducers({
  chat: chatReducer,
  user: userReducer,
  // posts: PostReducer
});
export type RootState = ReturnType<typeof rootReducer>


const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
// const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Index/> 
      </NavigationContainer>
    </Provider>
  );
}
