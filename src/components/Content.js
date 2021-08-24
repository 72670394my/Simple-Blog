import React, { useEffect,useContext, useState } from 'react';
const Content = (props) => {
   const [info,setInfo]=useState();
   const [author,setAuthor]=useState();
   let singleValue=props.user.find((val)=>{
       return  val.id==props.id;
   })
const getData=()=>{   fetch(`https://jsonplaceholder.typicode.com/posts/${props.id}`)
   .then(val=>
    {
        return val.json();
    })
    .then(res=>
        {
            setInfo(res);  
        })
    }
      fetch(`https://jsonplaceholder.typicode.com/users/${singleValue.userId}`)
      .then(val=>val.json())
        .then(res=>res.name)
        .then(res=>setAuthor(res));
    useEffect(()=>{    
          getData();   
    },[])
    return (
   <>
  {info?(
      <>
  <h1 className="text-success head mb-5">{info.title}</h1>
  <p className="para">{info.body}</p>
  <h5 className="text-primary author">author- <span className="text-danger">{author}</span></h5>
  </>
  )
  :null}
</>
    )
}

export default Content;
