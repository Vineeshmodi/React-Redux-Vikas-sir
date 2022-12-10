import { Add_To_Cart } from "../Constants.js";

// const initialState= {
//   cardData: [],
// };

export default function cartItems(StateOne =[], action) {
  switch (action.type) {
    case Add_To_Cart:
     console.log("reduced ==", action);
      // console.log(action.data.name);
      // console.log(action.data.price);
      return [
        ...StateOne,
        {cardData: action.data},
        
  ];
    // break;

    default:
      return StateOne;
  }
}
