import "./checkout-item.scss";
import { removeI } from "../../redux/cart/cart.actions";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.actions";
import { delI } from "../../redux/cart/cart.actions";

const CheckoutItem = ({ cartItem, remove, add, dell }) => {
  const { name, imageUrl, price, quantity } = cartItem;

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dell(cartItem)}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" onClick={() => add(cartItem)}>
          &#10095;
        </div>
      </span>

      <span className="price">{price}</span>

      <div className="remove-button" onClick={() => remove(cartItem)}>
        {" "}
        &#10005;{" "}
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  remove: (i) => dispatch(removeI(i)),
  add: (i) => dispatch(addItem(i)),
  dell: (i) => dispatch(delI(i)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
