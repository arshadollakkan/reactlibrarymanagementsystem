
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Landingpage from './components/landingpage';
import AdminLogin from './components/adminlogin';
import Userlogin from './components/userlogin';
import Adminport from './components/adminport';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<Landingpage/>}/>
     <Route path='/admin-login' element={<AdminLogin/>}/>
     <Route path='/user-login' element={<Userlogin/>}/>
     <Route path='/admin/*' element={<Adminport/>}/>

    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
