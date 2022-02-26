import './checkout.scss'
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../components/checkout-item/checkout-item';

const ChecoutPage = ({items,total}) => (
   <div className="checkout-page">
      <div className="checkout-header">
         <div className="header-block">
            <span>Product</span>
         </div>
         <div className="header-block">
            <span>Description</span>
         </div>
         <div className="header-block">
            <span>Quantity</span>
         </div>
         <div className="header-block">
            <span>Price</span>
         </div>
         <div className="header-block">
            <span>Remove</span>
         </div>
         </div>
         {
         items.map(i =>(
            <CheckoutItem key={i.id} cartItem={i} />
         ) )
      }
      <div className="total">
         <span>TOTAL : ${total} </span>
      </div>
   </div>
  )
 
  const mapStateToProps = createStructuredSelector({
     items : selectCartItems,
     total : selectCartTotal
  })

export default connect(mapStateToProps)(ChecoutPage);