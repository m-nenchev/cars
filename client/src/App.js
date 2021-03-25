import Main from './Components/Main/Main';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';

import Cars from './Components/CarsComponent/CarsComponet';
import './App.css';

function App() {
  return (
    <div>
       <Header/>
       
       <Switch>
           <Route path="/" exact component={Main} /> 
           <Route path="/about/cars" component={Cars}/>
       </Switch>
       
       <Footer/>
    </div>
  );
}

export default App;
