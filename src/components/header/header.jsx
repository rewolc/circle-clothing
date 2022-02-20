import './header.scss'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo} from '../../assets/circle.svg'
const Header = () => (

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
         <Link className='option' to='/sign'>
            SIGN IN
         </Link>
      </div>
   </div>
)

export default Header;