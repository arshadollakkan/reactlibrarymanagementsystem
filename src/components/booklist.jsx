import '../styles/booklist.css'
import { useEffect, useState } from "react";

import { useNavigate } from 'react-router-dom';

const Booklist = () => {
    
    let[books,setbooks]=useState([])
    useEffect(()=>{
        let fetchdata=async()=>{
            let responce=await fetch('http://localhost:4000/books')
            let data=await responce.json()
            setbooks(data)
        }
        fetchdata();
    },[books])
    let handledelete=(id,title)=>{   //ui deletion only
        // setbooks(books.filter(x=>x.id!=id))
        // alert(`${title} removed`)
        //server deletion
       fetch(`http://localhost:4000/books/${id}`,{
        method:'DELETE'
       });
       alert(`delete${title} permenantely`)

    } 
    let navigation=useNavigate()
    let read=(id)=>{
        navigation(`/admin/book-list/${id}`)//path
    
    }


    return ( 
        <div className="booklist">
            <h1>Book List:{books.length}</h1>
            <div className="book_section"> 
                {
                    books.map((data1)=>(
                        <div className="book">
                          <div className="rayappan">
                                    <img src={data1.thumbnailUrl} alt="" />
                          </div>
                          <div className="gokul">
                          <h1>title:{data1.title}</h1>
                           <h4>authors:{data1.authors}</h4>
                           <h6>page count:-{data1.pageCount}</h6>
                           <h6>category:-{data1.categories}</h6>
                          
                           <button onClick={()=>read(data1.id)}>Read More</button>
                           
                           <button onClick={()=>handledelete(data1.id,data1.title)}>Delete</button>
                          </div>
                           
                        </div>
                    ))
                }
            </div>
        </div>
     );
}
 
export default Booklist;