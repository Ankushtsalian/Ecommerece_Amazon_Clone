import React from "react";
import "../Styles/CheckoutProduct.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider/StateProvider";
const CheckoutProduct = ({ id, title, image, price, rating }) => {
  const [{ basket }, dispatch] = useStateValue();
  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="CheckoutProduct">
      <img
        className="CheckoutProduct_image"
        src={image}
        alt="CheckoutProductimage"
      />
      <div className="CheckoutProduct_info">
        <p className="CheckoutProduct_title">{title}</p>
        <p className="CheckoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="CheckoutProduct_rating">
          {[...Array(rating)].map(() => (
            <StarIcon style={{ color: "gold" }} />
          ))}
        </div>
        <button onClick={removeFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
