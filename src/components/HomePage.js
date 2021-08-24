import React, { useState, useEffect } from "react";
import Content from "./Content";
const HomePage = (props) => {
  const [tempInfo, setTempInfo] = useState([]);
const [flag,setFlag]=useState(true);
const [id,setId]=useState();
const [userId,setUserId]=useState();
  const getData = async () => {
    try {
      let url = `https://jsonplaceholder.typicode.com/posts`;
      let res = await fetch(url);
      let data = await res.json();
      console.log(data)
      setTempInfo(data);    
    } catch (error) {
      console.log(error);
    }
  };
 let getEvent=(event)=>{
   event.preventDefault();
   setId(event.target.id);
    setFlag(false);  
  }
  useEffect(() => {
    getData();
  },[]);
  return (
    <div>
      {flag?
      <div onClick={getEvent}>
      {
        tempInfo?tempInfo.map(val=>{
         return(
             <a href="./Content" data={val.userId} id={val.id}  className='title'>{val.title}</a> 
            )
        }):<h1>loading.....</h1>
      } 
      </div>
      :
      <Content id={id} user={tempInfo} />
      }
      </div>
  );
};

export default HomePage;
