import './CarsView.css'
const CarView = ({
    name,
    description,
    imageURL,

})=>{


return(
    <li className="carsImg">
        <h1>Hello this is my Car:  {name}</h1>
        <p className="img"><img src={imageURL} /></p>
            <p className="description">{description}</p>
            
    </li>
)
};
    export default CarView;