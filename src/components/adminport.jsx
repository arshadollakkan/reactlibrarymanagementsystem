import Adminnavbar from "./adminnavbar";
import Admindashbord from "./AdminDashbord";
import {Routes,Route } from "react-router-dom";
import Booklist from "./booklist";
import Userlist from "./userlist";
import Readbooks from "./readbooks";
import Addbooks from "./addbook";
import Adduser from "./adduser";

const Adminport = () => {
    return (
         <div className="adminport">
            <Adminnavbar/>
           <Routes>
            <Route path="/" element={<Admindashbord/>}/>
            <Route path='/book-list' element={<Booklist/>}/>
            <Route path='/user-list' element={<Userlist/>}/>
            <Route path='/book-list/:id' element={<Readbooks/>}/>
            <Route path='/addbook' element={<Addbooks/>}/>
            <Route path="/adduser" element={<Adduser/>}/>
            
           </Routes>
         </div>
      );
}
 
export default Adminport ;