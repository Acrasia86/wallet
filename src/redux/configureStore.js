import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import CardSlice from './cardSlice';

const reducer = combineReducers({
  cardsData: CardSlice,
});
const store = configureStore({
  reducer,
});

export default store;
