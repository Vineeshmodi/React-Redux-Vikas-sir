// //at last we do these things ....likes action reduces and root reducers
import { connect } from "react-redux";
import Header from "../component/Header";

// const mapDispatchToProps = dispatch => {
//   return {
//     addToCartHandler:(data) => dispatch(AddToCart(data)),
//   }
// }
const mapStateToProps = (state) => {
  return {
    data: state.cartItems,
  };
};
//export default Home;
export default connect(mapStateToProps)(Header);

// button ->action-> get-> reduced-> filter-> addto-> cart-> store ->get -> headercon -> header
