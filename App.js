import * as React from 'react'
import { useGetAllpostQuery } from './services/post';




export default function App() {
  const response = useGetAllpostQuery();
  console.log("the data is Here",response.data);

 
  return (
    <div className="App">
       <h1>Hello React Developer</h1>
        
       {
         response.data.map((singleitem) => {
           return (
             <>
              <div>{singleitem.body}</div>
              <div>{singleitem.id}</div>
              <div>{singleitem.title}</div>
              <div>{singleitem.userId}</div>
             </>
           )
         })
       }
    </div>
  )
}