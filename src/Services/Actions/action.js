import { Remove_To_Cart, Add_To_Cart } from "../Constants";
export const AddToCart = (data) => {
  // console.log("Action ==", data);
  // console.log("price ==", data.price);
  // console.log("name ==", data.name);
  return {
    type: Add_To_Cart,
    data: data,
  };
};
export const RemoveToCart = (data) => {
  return {
    type: Remove_To_Cart,
    data: data,
  };
};
