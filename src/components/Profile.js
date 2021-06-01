import React,{useState,useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {auth,db} from '../firebase'

 const Profile = ({user}) => {
    const [age,setAge]=useState('') 
    const history=useHistory()
    
    
    const addage=()=>{
        console.log(user.uid)
        db.collection('age').doc(user.uid).set({age:age})
    }

    useEffect(()=>{
    if(user){
       const val= db.collection('age').doc(user.uid)
       val.onSnapshot(docsnap=>{
           if(docsnap.exists){
            console.log(docsnap.data().age)
           setAge(docsnap.data().age)
           }
           else{
               console.log("need to add age")
           }
           
       })
    }
    },[])
    // const fetchage=async()=>{
    //     const response=db.collection('age').doc(user.id);
    //     const data=await response.get();
    //     setAge(data)
    // }

    // useEffect(() => {
    //     fetchage();
    //   }, [])

    return (
        <div>
            {user?
            <> Dashboard
            
            <h1>Age:{age}</h1>
            
            <div className="form-group">
            <input className="form-control" placeholder="age" name="age" type="age" onChange={(e)=>setAge(e.target.value)} value={age}></input>
            <button className="btn btn-primary rounded-pill px-5" onClick={()=>{addage()}}>Set age</button>
            </div>
            
            
            <button onClick={()=>{
                auth.signOut()
                history.push('/')
            }} className="btn btn-primary rounded-pill px-5">Logout</button>
            </>
            :
            history.push('/')}
            
        </div>
    )
}


export default Profile