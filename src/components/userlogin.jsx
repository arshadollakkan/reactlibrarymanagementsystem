import '../styles/userloginpage.css'
import { useNavigate } from "react-router-dom";
const Userlogin = () => {
    let navigate=useNavigate()
    let login=()=>{
    navigate('/user/')
    }
    return ( 
        <div className="userlogin">
            
            <div className="form">
                <h1>Login as User</h1>
                <div className="forminput">
                    <form onSubmit={login}>
                       <div className="email"> <input type="email" placeholder="🔑enter email address" required=""/></div>
                       <div className="password"><input type="password"placeholder=" 🔒 enter password" required="" /></div>
                       <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    
     );
}
 
export default Userlogin;
