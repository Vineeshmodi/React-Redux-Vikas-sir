import { Add_To_Cart } from "../Constants.js";

const StateOne = {
  cardData: [],
};

export default function cartItems(StateOne, action) {
  switch (action.type) {
    case Add_To_Cart:
      return {
        StateOne,
        cardData: action.data,
      };
      break;

    default:
      return StateOne;
  }
}
