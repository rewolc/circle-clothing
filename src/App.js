import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import { auth,createUserProfileDocument } from './firebase/firebase.utils';
import { Component } from 'react';
import { connect } from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';


class App extends Component {
  

  unsubscribeFromAuth = null;
   
  componentDidMount(){
    const{setCurrentUser} = this.props
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            
              id: snapShot.id,
              ...snapShot.data()
            
          });

          console.log(this.state);
        });
      }
      else{
        setCurrentUser( userAuth );}
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }
  
  render(){
  return (
    <div >
      <Header />
      <Switch>
      <Route exact path ='/' component ={HomePage}/>
      <Route exact path ='/shop' component = {ShopPage} />
      <Route exact path ='/sign' render={() => this.props.currentUser ? (<Redirect to ='/'/>) : (<SignInUp/>)} />
      </Switch>
      
    </div>
  );
};
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})


const mapDisplatchToProps = dispatch =>({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDisplatchToProps)(App);




