import '../styles/adduser.css'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Adduser = () => {
    let[name,setname]=useState("")
    let[age,setage]=useState("")
    let[email,setemail]=useState("")
    let[phonenumber,setphonenumber]=useState("")
    let navig=useNavigate()
    let adduser=(e)=>{
        e.preventDefault()
           //data to be posted
        let userdata={name,age,email,phonenumber}
        //posting
        fetch('http://localhost:4000/users',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(userdata)
        })
        alert(`user added successfully`)
        navig('/admin/user-list')
    }
    return ( 
        <div className="adduser">
            <h1>Add User</h1>
            <div className="formrc">
                <form action="" onSubmit={adduser}>
                    <div className="adduser1">
                        <input type="text" required placeholder=" enter name" value={name} onChange={(e)=>setname(e.target.value)} />
                    </div>
                    <div className="adduser2">
                        <input type="number" required placeholder=" enter age" value={age} onChange={(e)=>setage(e.target.value)} />
                    </div>
                    <div className="adduser3">
                        <input type="email" required placeholder="email" value={email} onChange={(e)=>setemail(e.target.value)}/> 
                    </div>
                    <div className="adduser4">
                        <input type="tel" minLength='10' maxLength='10' required placeholder="phno" value={phonenumber} onChange={(e)=>setphonenumber(e.target.value)} />
                    </div>
                    <button>Add User</button>
                </form>
            </div>
        </div>
     );
}
 
export default Adduser;