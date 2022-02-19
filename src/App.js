import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component.jsx';
import './App.css';
import { Route, Switch } from 'react-router-dom';

// const HatsPage = () => (
//   <div>
//     <h1>HATS PAGE</h1>
//   </div>
// );

function App() {
  return (
    <div >
      <Switch>
      <Route exact path ='/' component ={HomePage}/>
      <Route exact path ='/shop' component = {ShopPage} />
      </Switch>
      
    </div>
  );
}

export default App;
