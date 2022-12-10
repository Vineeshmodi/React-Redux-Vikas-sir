import Home from "../component/Home";

// //at last we do these things ....likes action reduces and root reducers
 import { connect } from "react-redux";
 import { AddToCart } from "../Services/Actions/action";

const mapDispatchToProps = dispatch => {
  return {
    addToCartHandler:(data) => dispatch(AddToCart(data)),
  }
}
const mapStateToProps = (state) => {
  return {
    data: state.cartItems,
  };
};
//export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
