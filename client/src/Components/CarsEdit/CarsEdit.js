import React,{useState,useEffect} from 'react'
import {db} from '../../utils/Firebase'
import { useHistory } from 'react-router-dom';


export default function EditCars({
    match
}){
    const idPost = match.params.id
    
    const [data, setData] = useState([])
    const [error, setError] = useState(false)

    const history =useHistory();

   
    const getInfo = () => {
        db.collection("cars").doc(idPost).get()
            .then((doc) => {
                //console.log(doc.data());

                setData(doc.data());
          })
         
    }

    const OnChangeSubmit=(e)=>{
        setData({...data, [e.target.name]:e.target.value})
    }

    const OnSubmitChanges=(e)=>{
        e.preventDefault();
        const nameAutor = e.target.nameAutor.value
        const name = e.target.name.value;
        const description = data.description
        const imageURL = data.imageURL
       console.log(nameAutor);

        
            if(name!==''&& description!=='' && imageURL!=='' ){
                db.
                collection("cars").doc(idPost).set({
                    ...data,
                    nameAutor,
                    name,
                    description,
                    imageURL,
                    
                })
                .then(res=>{
                    //console.log(res.id);
                })
                .catch(err=>console.log(err));
              
        
                console.log();
                history.push('/cars')
              
            }
            else{
               setError(true);
            }

    }

    
    useEffect(() => {
        
        
        getInfo();
    }, [])
console.log(idPost
    );
return(
    <section className="create">
            <form onSubmit={OnSubmitChanges}>
              
                   
                    <h1>Add new Cras</h1>
                    <p className="field">
                        <label htmlFor="nameAutor" >Name Author</label>
                        <span className="input">
                            <input type="text" name="nameAutor" id="nameAutor" placeholder="Name Autor" />
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" value={data.name} onChange={OnChangeSubmit}/>
                            <span className="actions"></span>
                        </span>
                    </p>
                     <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" value={data.imageURL} onChange={OnChangeSubmit}/>
                            <span className="actions"></span>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="description">Description</label>
                        <span className="input">
                            <textarea rows="4" cols="30" type="text" name="description" id="description"
                                placeholder="Description" value={data.description} onChange={OnChangeSubmit}></textarea>
                            <span className="actions"></span>
                        </span>
                    </p>
                    
                    
                    <input className="button submit" type="submit" value="Save Changes" />
                    {error==true ? <h1 className="error">You have to fill all fields</h1> : ''}
            </form>
        </section>
)

}