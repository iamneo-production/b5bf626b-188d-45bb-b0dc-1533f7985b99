


import React,{ useState } from 'react'
import Axios from 'axios';


function SignUp(){
  const url='http://localhost:8080/response'
  const [data,setData]=useState({
    name:'',
    email:'',
    phone:'',
    password:''
  })
  function submit(e){
 e.preventDefault();
 Axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  Axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';     
 Axios.post(url,{
    name:data.name,
    email:data.email,
    phone:data.phone,
    password:data.password
 }).then
  (res=>{
    console.log(res);
  });
}
  function handle(e){
const newdata={...data}
newdata[e.target.id]=e.target.value
setData(newdata)
console.log(newdata)
  }
  return(
      <form onSubmit={(e)=> submit(e)} >
        <h3>Sign Up</h3>

        <div className="mb-3">
          <label>Username</label>

          <input
          onChange={(e)=>handle(e)} 
          id='name'
          value={data.name}
          placeholder='name'
          type='text'
          />
        </div>

        <div className="mb-3">
          <label>Email address</label>
          <input
          onChange={(e)=>handle(e)} 
          id='email'
          value={data.email}
          placeholder='email'
          type='text'
          />

        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            onChange={(e)=>handle(e)} 
            type="password"
            id="password"
            value={data.password}
            placeholder="Password"
          />
        </div>
        <div className="mb-3">
          <label>Phone Number</label>
          <input
            onChange={(e)=>handle(e)} 
            type="integer"
    id="phone"
            placeholder="Enter Phone Number"
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
      </form>
  )
}
export default SignUp