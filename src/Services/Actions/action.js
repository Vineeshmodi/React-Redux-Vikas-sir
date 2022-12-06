import { Remove_To_Cart, Add_To_Cart } from "../Constants";
export const AddToCart = (data) => {
  console.log(data)
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
