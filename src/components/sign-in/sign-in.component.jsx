
import FormInput from '../form-input/form-input.component'
import { Component } from 'react';
import './sign-in.style.scss';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends Component{
   constructor(props){
      super(props) 

         this.state = {
            email : '',
            password: ''

         }
        }
         handleSubmit = e => {
         e.preventDefault();
         this.setState({email :'' , password : ''})
      }
      
        handleChange = e =>{
         const {value,name } = e.target;
      
         this.setState({[name]: value})
      }
        
      render(){
         return(
            <div className='sign-in'>
               <h2>I already have an account</h2>
               <span>Sign in with your email and password</span>

               <form onSubmit={this.handleSubmit}>
                  
                  <FormInput 
                  type="email" 
                  name='email' 
                  label ='Email'
                  value={this.state.email} 
                  required 
                  handleChange={this.handleChange}
                  
                  />
                  <FormInput 
                  type="password" 
                  name='password' 
                  label ='Password'
                  value={this.state.password} 
                  required 
                  handleChange={this.handleChange}
                   />
                  <CustomButton type="submit" >SIGN IN</CustomButton>
                  <CustomButton onClick={signInWithGoogle} >SIGN IN WITH GOOGLE</CustomButton>
                 
               </form>
            </div>
         )
      }
   }

   export default SignIn;