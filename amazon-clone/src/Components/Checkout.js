import React from "react";
import "../Styles/checkout.css";
import checkout_Add from "../Assets/checkout_Add.jpg";
import Subtotal from "./Subtotal";
import { useStateValue } from "../StateProvider/StateProvider";
import CheckoutProduct from "./CheckoutProduct";
const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img className="checkout_add" src={checkout_Add} alt="img" />
        <div>
          {/* <BasketItem/> */}
          <h2 className="checkout_title">Your shopping Basket</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout_right">
        <Subtotal />
        <h2>This subtotal will go here</h2>
      </div>
    </div>
  );
};

export default Checkout;
