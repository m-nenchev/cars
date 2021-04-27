import './CarsComponentCreate.css'
import * as fireStorService from '../../services/fireStorService';
import {auth} from '../../utils/Firebase'
import {useState,useEffect} from 'react'
const CarsView = ({
    history,
}) => {
    

const[user,setUser] = useState('')
    const onCreateCarSubmitHandler = (e) => {
        e.preventDefault();

        const { nameAutor, name, description, imageURL } = e.target;

        fireStorService.dataFierstor( nameAutor.value,name.value,imageURL.value, description.value,userId )
            .then(() => {
                history.push('/cars');
            })
    };
   
 useEffect(()=>{

        auth.onAuthStateChanged((user)=>{
            setUser(user);
            
        })
       

    },[])
    const userId=user.uid;
    return (
        
        <section className="create">
            <form onSubmit={onCreateCarSubmitHandler}>
              
                   
                    <h1>Add new Cras</h1>
                    
                    <p className="field">
                        <label htmlFor="nameAutor" >Name Autor</label>
                        <span className="input">
                            <input type="text" name="nameAutor" id="nameAutor" placeholder="Name Autor" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="name">Name Cars</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                     <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder=" Place URL: image" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="30" type="text" name="description" id="description"
                                placeholder="Description"></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    
                    
                    <input className="button submit" type="submit" value="Add Cars" />
                
            </form>
        </section>
    );
};

export default CarsView;