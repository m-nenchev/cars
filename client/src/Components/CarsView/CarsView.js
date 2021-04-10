import './CarsView.css'
const CarView = ({
    name,
    description,
    imageURL,

})=>{


return(
    <li className="carsImg">
        <h1>Hello:{name}</h1>
        <p className="img"><img src={imageURL} /></p>
            <p className="description">{description}</p>
            
    </li>
)
};
    export default CarView;