import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const Readbooks = () => {
    let [book,setbook]=useState([])
    let parms=useParams();
    useEffect(()=>{
        let fetchdata=async()=>{
            // console.log(parms);
            let responce =await fetch(`http://localhost:4000/books/${parms.id}`)
            let data=await responce.json()
            setbook(data)

        }
    fetchdata()
    })
 

   
    return (  
        <div className="readbook1">
            <h1>read books</h1>
            <h2>{book.title}</h2>

            <p>{book.shortDescription}</p>
            <p>{book.longDescription}</p>
         
            
            
        </div>
    );
}
 
export default Readbooks;