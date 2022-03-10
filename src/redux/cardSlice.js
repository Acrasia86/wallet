import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: [
    {
      id: '1',
      firstName: 'Jacob',
      lastName: 'Påhlsson',
      cardNumber: '5555 5555 5555 5555',
      expireMonth: '05',
      expireYear: '25',
      bank: 'Visa',
      ccv: '555'
    },
  ],
};
const CardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addNewCard: (state, action) => {
      state.cards.splice(0, 0, action.payload)
    },
    setActiveCard: (state, { payload }) => {
      let setActiveCards = state.cards.filter(
        (x) => x.id !== payload.id
      );
      setActiveCards.splice(0, 0, payload);

      return { ...state, cards: setActiveCards };
    },
  },
 
});
export const { addNewCard, setActiveCard } = CardSlice.actions;
export default CardSlice.reducer;
