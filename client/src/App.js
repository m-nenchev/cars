

import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home'
import CarsComponentCreate from './Components/CarsComponentCreate/CarsComponetCreate'
import Cars from './Components/Cars/Cars';
import './App.css';

function App() {
  return (
    <div>
       <Header/>
       
       <Switch>
         <Route path="/" exact component={Home}/>
          <Route path="/cars" component={Cars}/>
           <Route path="/create/cars" component={CarsComponentCreate} />
           
       </Switch>
       
       <Footer/>
    </div>
  );
}

export default App;
