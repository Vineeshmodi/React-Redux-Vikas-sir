import Home from "../component/Home";

// //at last we do these things ....likes action reduces and root reducers
 import { connect } from "react-redux";
 import { AddToCart } from "../Services/Actions/action";
// // mapDispatchToProps ye function h
// const mapDispatchToProps = (dispatch) => ({
//   addToCartHandler: (data) => dispatch(AddToCart(data)),
// });
const mapDispatchToProps = (dispatch) => {
  return {
    addToCartHandler: (data) => dispatch(AddToCart(data)),
  }
}
//export default Home;
 export default connect(mapDispatchToProps)(Home);
