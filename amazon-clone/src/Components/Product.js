import React from "react";
import "../Styles/product.css";
import StarIcon from "@mui/icons-material/Star";
import { useStateValue } from "../StateProvider/StateProvider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  // console.log(basket);
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  //-------------------------------------------------------------------
  return (
    <div className="product">
      <div className="product_info">
        {/* product_info" */}

        <p>{title}</p>
        <p className="product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product_rating">
          {[...Array(rating)].map((_, i) => (
            <StarIcon key={i} style={{ color: "gold" }} />
          ))}
        </div>
      </div>
      <img src={image} alt="" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
