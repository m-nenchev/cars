import { auth } from '../../utils/Firebase';
import './Register.css'
import { FaRegUser, FaLock } from "react-icons/fa";

const Register = ({
    history
}) => {
    const onRegisterSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        const rePass = e.target.rePass.value;

        if (password != rePass){
            alert('Password missmatch');
        return;
        }
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
            <div className='wrapper'>
                <div className='title'>
                    <span>Register Form</span>
                </div>
                <form onSubmit={onRegisterSubmitHandler}>
                    <label className='rowLabel' htmlFor="username">Username</label>
                    <div className="input">
                        <FaRegUser className='icon'/>
                        <input className='rowText' type="text" name="username" id="username" placeholder="Email"  minlength="3" required/>
                    </div>
    
                    <label className='rowLabel' htmlFor="password">Password</label>
                    <div className="input">
                    <FaLock className='icon'/>
                        <input className='rowText' type="password" name="password" id="password" placeholder="Password" required />
                    </div>

                    <label className='rowLabel' htmlFor="rePass">Password</label>
                    <div className="input">
                        <FaLock className='icon'/>
                        <input className='rowText' type="password" name="rePass" id="rePass" placeholder="Repeat password" required />
                    </div>
                    <div className='input'>
                        <input type="submit" className="submit" value="Register" />
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Register;