import axios from "axios";
import React, { useEffect, useState } from "react";

const Api = () => {

  const[record,setRecord] = useState([])

  

  // fetch('https://jsonplaceholder.typicode.com/posts')
  // .then(res => res.json())
  // .then(data => {
  //   setRecord(data);
  // }) 
  
  const api = async() => {
    try {
      let {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
      setRecord(data)
    } catch (error) {
      console.log(error);
      return false
    }
  }

  useEffect(()=>{
    api()
  },[])
      
  return (
    <center>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {
            record.map((val)=>{
              return(
                <tr>
                  <td>{val.id}</td>
                  <td>{val.title}</td>
                  <td>{val.body}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </center>
  );
};

export default Api;
