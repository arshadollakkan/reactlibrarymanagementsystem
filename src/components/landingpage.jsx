import '../styles/landingpage.css'
import { Link } from "react-router-dom";
const Landingpage=()=>{
    return(
        <div className="landingpage2">
            <img height='200' width='100' src="data:image/png;base64,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" alt="" />
             
         <div className="selectlogin">
            <h1>Library Management System</h1>
            
            <Link  to='/admin-login' id="yo" >Admin Login</Link>
            <Link  to='/user-login'>User Login</Link>
         </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqNIOff5AuP0YdnbId7smDM0mrE4_Etc-_dA&usqp=CAU" alt="" id="okk"/>
        </div>
    )
}
export default Landingpage;