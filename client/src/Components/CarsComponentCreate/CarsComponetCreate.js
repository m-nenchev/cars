import './CarsComponentCreate.css'
import * as carsService from '../../services/carsService';

const CarsView = ({
    history,
}) => {
    const onCreateCarSubmitHandler = (e) => {
        e.preventDefault();

        const { name, description, imageURL } = e.target;

        carsService.create(name.value, description.value, imageURL.value)
            .then(() => {
                history.push('/cars');
            })
    };
    return (
        
        <section className="create">
            <form onSubmit={onCreateCarSubmitHandler}>
              
                   
                    <h1>Add new Cras</h1>
                    <p className="field">
                        <label htmlFor="name">Name</label>
                        <span className="input">
                            <input type="text" name="name" id="name" placeholder="Name" />
                            <span className="actions"></span>
                        </span>
                    </p>
                     <p className="field">
                        <label htmlFor="image">Image</label>
                        <span className="input">
                            <input type="text" name="imageURL" id="image" placeholder="Image" />
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