import './cart-component.scss';
import { connect } from 'react-redux';
import CustomButton from '../custom-button/custom-button.component';
import CartI from '../cart-item/cart-item';

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

const mapStateToProps = ({ cart : {cartItems} }) => ({

cartItems
})
 
export default connect (mapStateToProps)(CartDrop);