import './ForumView.css'
const ForumView = ({
    name,
    description,
 

})=>{


return(
    <li className="Forums">
        <h1 className="forum-h1"> My car Problem with model:  {name}</h1>
        
            <p className="descriptions">description: {description}</p>
            
    </li>
)
};
    export default ForumView;