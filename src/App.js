import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header';
import SignInUp from './pages/sign-in-up/sign-in-up.component';
import './App.css';
import { Route, Switch } from 'react-router-dom';



function App() {
  return (
    <div >
      <Header/>
      <Switch>
      <Route exact path ='/' component ={HomePage}/>
      <Route exact path ='/shop' component = {ShopPage} />
      <Route exact path ='/sign' component = {SignInUp} />
      </Switch>
      
    </div>
  );
}

export default App;
