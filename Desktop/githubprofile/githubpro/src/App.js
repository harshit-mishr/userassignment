import React from "react";
import {useState} from 'react'
import {Link} from 'react-router-dom'


export default function App() {
  const[list , setList] = useState([])
  const[fetching , setFetching] = useState(false)
async function gettingData(){
  if(fetching){
    alert("DATA FETCH IN PROGRESS WAIT")
  }
  setFetching(true)
  console.log("click")
  for(let i = 0 ; i < 50 ; i++){
  const res = await fetch("https://randomuser.me/api/")
  const data = await res.json()
  list.push(data.results[0])
  setList(list)
  
}
console.log(list)
localStorage.setItem("userList" , JSON.stringify(list))
alert("done")

}

function deleteData(){
  alert("USER DETAILS WILL BE DELETED")
  localStorage.removeItem('userList');
}

  return (
    <div>
    <button onClick={gettingData}>Feetch user</button>
    <button onClick={deleteData}>delete user</button>
    <Link to='/userdetails'><button>UserDetails</button></Link>

    </div>
  );
}
