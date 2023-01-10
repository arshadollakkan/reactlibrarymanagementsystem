import '../styles/userlist.css'
import { useEffect, useState } from "react";
const Userlist = () => {
    let[user,setuser]=useState([])
    useEffect(()=>{
   let fetcdata=async()=>{
    let responce=await fetch('http://localhost:4000/users')
    let data=await responce.json();
    setuser(data)
   }
   fetcdata();
    },[])
    let asf=(id,name)=>{
       setuser(user.filter(x=>x.id!=id))
       alert(`${name} removed`)
    }
    return (  
        <div className="userlist">
            <h1>userlist</h1>
            <div className="usermain">
                {
                    user.map((data)=>(
                        <div className="user">
                            <h1>{data.name}</h1>
                            <h2>{data.age}</h2>
                            <h3>{data.email}</h3>
                            <h3>{data.phonenumber}</h3>
                            <button onClick={()=>asf(data.id,data.name)}>Remove</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
 
export default Userlist;