import { auth } from '../../utils/Firebase';
import './Register.css'


const Register = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;

        auth.createUserWithEmailAndPassword(username, password)
        .then((auth) => {
            if (auth) {
                history.push('/');
            }
        })
        .catch(error => alert(error.message))
            
    }
    
    return (
        <section className="register">
            <form onSubmit={onRegisterSubmitHandler}>
                
                    <legend>Register</legend>
                    <p className="field">
                        <label htmlFor="username">Username</label>
                        <span className="input">
                            <input type="text" name="username" id="username" placeholder="Email" />
                            <span className="actions"></span>
                            <i className="fas fa-user"></i>
                        </span>
                    </p>
                    <p className="field">
                        <label htmlFor="password">Password</label>
                        <span className="input">
                            <input type="password" name="password" id="password" placeholder="Password" />
                            <span className="actions"></span>
                            <i className="fas fa-key"></i>
                        </span>
                    </p>
                    <input className="button" type="submit" className="submit" value="Register" />
               
            </form>
        </section>
    );
}

export default Register;