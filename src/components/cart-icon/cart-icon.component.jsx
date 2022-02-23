import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/bag.svg';

import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { selectCount } from '../../redux/cart/cart.selectors';

const CartIcon = ({B,num}) => (

   <div className='cart-icon' onClick={B}>
      <ShoppingIcon className='shopping-icon'/>
      <span className='item-count'> {num} </span>
   </div>
)

const mapDispatchToProps = dispatch => ({
   B: () => dispatch(toggleCartHidden())
})
const mapStateToProps = (state) =>({
   num : selectCount(state)
})



export default connect(
   mapStateToProps,
   mapDispatchToProps)(CartIcon);