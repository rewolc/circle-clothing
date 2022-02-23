import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
const CartIcon = ({B}) => (

   <div className='cart-icon' onClick={B}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'> 0 </span>
   </div>
)

const mapDispatchToProps = dispatch => ({
   B: () => dispatch(toggleCartHidden())
})



export default connect(
   null,
   mapDispatchToProps)(CartIcon);