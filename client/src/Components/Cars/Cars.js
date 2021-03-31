import {Link} from 'react-router-dom'


function Cars(){
    return(
        
       <div>
          <Link to="/create/cars"> <button>Add Cars</button></Link>
          <div>
          <img src="BMW-M140i.jpg" alt="BMW-140"/>
          </div>
      </div>
       
    )
};
export default Cars;

