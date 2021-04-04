import {Link} from 'react-router-dom'
import './Cars.css'

function Cars(){
    return(
        
       <div className="cars">
          
          <Link to="/create/cars"> <button>Add Cars</button></Link>
          <div>
          <img src="BMW-M140i.jpg" alt="BMW-140"/>
          </div>
      
      </div>
       
    )
};
export default Cars;

