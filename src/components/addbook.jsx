import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/addbook.css'
const Addbooks = () => {
    let[title,settitle]=useState("")
    let[authors,setauthors]=useState("")
    let[categories,setcategories]=useState("")
    let[pageCount,setpagecount]=useState("")
    let[shortDescription,setshortdescription]=useState("")
    let[longDescription,setlongdescription]=useState("")
    let[thumbnailUrl,setthumburl]=useState("")
    let navi=useNavigate()

    let submit=(e)=>{
        e.preventDefault();
        //data to be posted
        let bookdata={title,authors,categories,pageCount,shortDescription,longDescription,thumbnailUrl}
        //posting the data
        fetch('http://localhost:4000/books',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(bookdata)
        })
        alert(`added successfully`)
        navi('/admin/book-list')
    }
    return ( 
        <div className="addbook">
            <h1>add a book</h1>
            <div className="form123">
                <form action="" onSubmit={submit}>
                    <div className="title">
                        <input type="text" required placeholder="enter book title" value={title} onChange={(e)=>settitle(e.target.value)}/>
                    </div>
                    <div className="authors">
                        <input type="text" required placeholder="enter book title"value={authors} onChange={(e)=>setauthors(e.target.value)}/>
                    </div>
                    <div className="categories">
                        <input type="text" required placeholder="enter book categories" value={categories} onChange={(e)=>setcategories(e.target.value)} />
                    </div>
                    <div className="pagecount">
                        <input type="number" required placeholder="enter pagecount" value={pageCount} onChange={(e)=>setpagecount(e.target.value)}/>
                    </div>
                    <div className="shortdescription">
                       <textarea cols="35" rows="5"placeholder="write short description" value={shortDescription} onChange={(e)=>setshortdescription(e.target.value)}></textarea>
                    </div>
                    <div className="longdescription">
                        <textarea  cols="35" rows="5"placeholder="write long description" value={longDescription} onChange={(e)=>setlongdescription(e.target.value)}></textarea>
                    </div>
                    <div className="thumbnailUrl">
                        <input type="text" required placeholder="enter book image link" value={thumbnailUrl} onChange={(e)=>setthumburl(e.target.value)}/>
                    </div>
                    <button>AddBook</button>
                </form>
            </div>
        </div>
     );
}
 
export default Addbooks;