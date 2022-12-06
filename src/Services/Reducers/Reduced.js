import { Add_To_Cart } from "../Constants.js";

const initialState= {
  cardData: [],
};

export default function cartItems(StateOne =initialState, action) {
  switch (action.type) {
    case Add_To_Cart:
      console.log("reduced",action)
      return {
        StateOne,
        cardData: action.data,
      };
      // break;

      default:
      return StateOne;
  }
}
