import { combineReducers } from "@reduxjs/toolkit";
import languagesReducer from "./languages/languages.reducer";
import navigationReducer from "./navigation/navigation.reducer";

const reducer = combineReducers({
  navigation: navigationReducer,
  language: languagesReducer,
});

export default reducer;
