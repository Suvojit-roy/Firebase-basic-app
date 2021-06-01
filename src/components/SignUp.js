import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import {auth} from '../firebase'
import {useHistory} from 'react-router-dom'

const SignUp = () => {
  const [email,setEmail]=useState('')  
  const [password,setPassword]=useState('')  
  const history=useHistory()
  const handlesubmit= async (e)=>{
    e.preventDefault();
    console.log(email,password)
    try{
    
    const result = await auth.createUserWithEmailAndPassword(email,password)
    history.push('/profile')
    // Window.M.toast({html: 'Signed in'})
    }
    catch{
      // Window.M.toast({html: 'Error'})
    }
    
    
  }
  
  return (
        <div className="container" style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <form className="mt-5 py-5 px-5" autoComplete="off" onSubmit={(e)=>handlesubmit(e)}>
          <h1>
            Sign Up
          <Link className="title" to="/"></Link>
          </h1>
          <p className="lead">Fill in the form below to create an account.</p>
          <div className="form-group">
            <input className="form-control" placeholder="Email" name="email" type="email" onChange={(e)=>setEmail(e.target.value)} value={email}></input>
          </div>
          <div className="form-group">
            <input className="form-control" placeholder="Password" name="password" onChange={(e)=>setPassword(e.target.value)}  type="password" value={password}></input>
          </div>
          <div className="form-group">
            {/* {this.state.error ? <p className="text-danger">{this.state.error}</p> : null} */}
            <button className="btn btn-primary rounded-pill px-5">Sign up</button>
          </div>
          {/* <hr></hr> */}
          <p>Already have an account? <Link to="/login">Login</Link></p>
        </form>
      </div>
    )
}


export default SignUp