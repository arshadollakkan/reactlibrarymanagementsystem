import { Routes,Route } from "react-router-dom";
import Booklist from "./booklist";
import Userdashbord from "./userdashbord";
import Usenavbar from "./usernavbar";
import Readbooks from "./readbooks";
const Userportal = () => {
    return ( 
        <div className="userports">
            <Usenavbar/>
            <Routes>
                <Route path='/'element={<Userdashbord/>}/>
                <Route path="/book-list" element={<Booklist/>}/>
                <Route path='/book-list/:id' element={<Readbooks/>}/>
            </Routes>

        </div>
     );
}
 
export default Userportal;