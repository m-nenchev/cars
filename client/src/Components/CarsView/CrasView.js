import { useEffect, useState } from 'react';
import * as carsService from '../../services/carsService';



const CarDetails = () => {
    let [car, setCar] = useState({});

    useEffect(() => {
        carsService.getAll()
            .then(res => setCar(res));
    }, [car]);

    


return(
    <div>
        <p>
            
            Car name:{car.name}
        </p>
    </div>
)
};
    export default CarDetails;