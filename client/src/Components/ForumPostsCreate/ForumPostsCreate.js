import * as forumService from '../../services/forumService';
import './ForumPostsCreate.css'
const ForumPost = ({
    history,
}) => {
    const onCreateCarSubmitHandlers = (e) => {
        e.preventDefault();

        const { name, description } = e.target;

        forumService.createForum(name.value, description.value)
            .then(() => {
                history.push('/forum');
            })
    };
  return (
   
      <div>
        <h1>Add Forum Text</h1>
    <form onSubmit={onCreateCarSubmitHandlers}>
      
            <div className="field">
                <label htmlFor="name">Name</label>
                     <span className="input">
                         <input type="text" name="name" id="name" placeholder="Name" />
                           <span className="actions"></span>
                     </span>
            </div>
            
            <div className="fiel">
               <label htmlFor="description">Description</label>
                   <span className="input">
                      <textarea rows="4" cols="45" type="text" name="description" id="description"
                              placeholder="Description">
                        </textarea>
                   <span className="actions"></span>
                   </span>
            </div>
            <input className="button submit" type="submit" value="Add Forum Text" />
    </form>   
    </div>
    
    
  );
}

export default ForumPost;