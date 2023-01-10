import '../styles/adminlogin.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const AdminLogin=()=>{

    let[email,setemail]=useState("")
    let[password,setpassword]=useState("")
    let navigate=useNavigate() //navigate is method

    let as=(e)=>{
       e.preventDefault();
       
       let data={email,password}
     if (email=="arshad@gmail.com" && password==1234) {  //password 0000 kodukkaruth
        navigate('/admin/')
     } else {
      alert(`invalid credential`)  
     }
    }
    return( 
        <div className="userlogin">
            <div className="form">
                <h1>Login as Admin</h1>
                <div className="forminput">
                    <form onSubmit={as}>
                       <div className="email"> <input type="email" placeholder="🔑 enter email address" value={email} onChange={(e)=>setemail(e.target.value)} required=""/></div>
                       <div className="password"><input type="password"placeholder="🔒  enter password" value={password} onChange={(e)=>setpassword(e.target.value)} required /></div>
                       <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AdminLogin; 