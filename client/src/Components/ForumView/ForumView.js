import './ForumView.css'
const ForumView = ({
    name,
    description,
 

})=>{


return(
    <li className="Forums">
        <h1> My car Problem whit model:  {name}</h1>
        
            <p className="descriptions">{description}</p>
            
    </li>
)
};
    export default ForumView;