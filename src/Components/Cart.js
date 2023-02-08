import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../Utils/cartSlice";

import FoodItem from "./FoodItem";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.cartItems);
  const dispatch = useDispatch();

  const handleCleaarItems = () => {
    dispatch(clearCart());
  };

  return (
    <div>
      <h1 className="font-bold text-2xl p-3">Car page</h1>
      <button className="bg-green-100 p-2" onClick={() => handleCleaarItems()}>
        Clear Item
      </button>
      <div className="flex">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
