import './cart-component.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartI from '../cart-item/cart-item';
import { selectCartItems } from '../../redux/cart/cart.selectors';

const CartDrop = ({cartItems}) => (
  <div className="cart-dropdown">
     <div className="cart-items">{
     cartItems.map(i => (
       <CartI key = {i.id} item={i}/>
     ))
    }
     </div>
        <CustomButton>GO TO CHECK OUT</CustomButton>
     
  </div> 
)

const mapStateToProps = (state) => ({

  cartItems : selectCartItems(state)
})
 
export default connect (mapStateToProps)(CartDrop);