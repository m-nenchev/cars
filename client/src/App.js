
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import { Route, Switch } from 'react-router-dom';
import CarsComponentCreate from './Components/CarsComponentCreate/CarsComponetCreate'
import Cars from './Components/CarsComponentCreate/CarsComponetCreate';
import './App.css';

function App() {
  return (
    <div>
       <Header/>
       
       <Switch>
          
           <Route path="/about/cars" component={Cars}/>
           <Route path="/cars/create" component={CarsComponentCreate} />
       </Switch>
       
       <Footer/>
    </div>
  );
}

export default App;
