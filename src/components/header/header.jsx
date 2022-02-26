import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/circle.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';


import CartIcon from '../cart-icon/cart-icon.component';
import CartDrop from '../cart-component/cart-component';


import { createStructuredSelector } from 'reselect';
import { SelectCartHidden } from '../../redux/cart/cart.selectors';
import { CurUser } from '../../redux/user/user.selector';

const Header = ({currentUser, hidden}) => (

   <div className='header'>
      <Link to='/'className='logo-container'>
         <Logo className='logo'/>
      </Link>
      <div className="options">
         <Link className='option' to='/shop'>
            SHOP
         </Link>
         <Link className='option' to='/contact'>
            CONTACT
         </Link>
         
            {
                currentUser ?   
               <div className='option' onClick={() => auth.signOut()} >SIGN OUT</div>
               :
               <Link className='option' to='/sign'>SIGN IN</Link>


            }
            <CartIcon/>
            </div>
            {
              hidden ? 
           null
           :
           <CartDrop/>
   }
      </div>
)

const mapStateToProps = createStructuredSelector({
   currentUser : CurUser,
   hidden: SelectCartHidden

})

export default connect(mapStateToProps)(Header);