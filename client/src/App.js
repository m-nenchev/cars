

import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import Forum from './Components/Forum/Forum';
import ForumPostsCreate from './Components/ForumPostsCreate/ForumPostsCreate';
import CarsComponentCreate from './Components/CarsComponentCreate/CarsComponetCreate';
import Cars from './Components/Cars/Cars';
import CarsEdit from './Components/CarsEdit/CarsEdit'
import Delete from './Components/DeleteCarPost/DeleteCarPost'
import { useState,useEffect } from 'react'
import {UserContext} from './Context/Context'
import {} from './utils/Firebase';
import Login from './Components/Login/Login';
import Register from './Components/Regieter/Register';
import {useHistory} from 'react-router-dom'
import { auth } from './utils/Firebase';
import './App.css';


function App() {
  const [user, setUser] = useState('')
  const history = useHistory();
  

  return (
    <div>
      <UserContext.Provider value={ [user, setUser]}>
        
       <Header/>

         <Switch>

             <Route path="/" exact component={Home}/>
             <Route path="/forum"  component={Forum}/>
             <Route path="/cars"  component={Cars}/>
             <Route path="/create/forum" component={ForumPostsCreate} /> 
             <Route path="/create/cars"  component={CarsComponentCreate} />
             <Route path="/login" component={Login}/>
             <Route path="/register"  component={Register} />
             <Route path="/edite/cars/:id" component={CarsEdit}/>
             <Route path= "/delete/cars/:id" component={Delete}/>
             <Route path="/logOut" render={() =>{
               auth.signOut().then(()=>{
                 setUser('')
               })
                
               return <Redirect to="/"/>
               }
               
            }
             />
        </Switch>  
       
       <Footer/>
       </UserContext.Provider>
    </div>
  );
}

export default App;
