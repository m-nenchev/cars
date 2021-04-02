

import { Route, Switch } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Forum from './Components/Forum/Forum';
import ForumPostsCreate from './Components/ForumPostsCreate/ForumPostsCreate';
import CarsComponentCreate from './Components/CarsComponentCreate/CarsComponetCreate';
import Cars from './Components/Cars/Cars';
import CarsView from './Components/CarsView/CrasView'
import {} from './utils/Firebase'
import Login from './Components/Login/Login'
import Register from './Components/Regieter/Register'
import './App.css';

function App() {
  return (
    <div>
       <Header/>
       
       <Switch>
         <Route path="/" exact component={Home}/>
         <Route path="/forum" exact component={Forum}/>
          <Route path="/cars" exact component={Cars}/>
          
          <Route path="/create/forum"exact component={ForumPostsCreate} /> 
           <Route path="/create/cars" exact component={CarsComponentCreate} />
           <Route path="/cars/view" exact component={CarsView}/>
           <Route path="/login" component={Login}/>
           <Route path="/register" component={Register} />
       </Switch>
       
       <Footer/>
    </div>
  );
}

export default App;
