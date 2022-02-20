
import './custom-button.style.scss';


const CustomButton = ({children,isGoogleSignIn, ...props}) => (

   <button className={`${isGoogleSignIn ? 'google-sign-in' : '' } custom-button`} {...props}>

   {children}      
   </button>
)

export default CustomButton;