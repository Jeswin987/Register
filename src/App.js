import {TextField, Button } from '@mui/material';
import './App.css';
import { useState } from 'react';


function App() {
  const[name,setName]=useState("");
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[verifypass,setVerifypass]=useState("");
  const[isnamevalid,setIsNamevalid]=useState(true)
  const[isemailvalid,setIsEmailvalid]=useState(true)
  const[ispassvalid,setIsPassvalid]=useState(true)
  const[isverpassvalid,setIsVerpassvalid]=useState(true)

const handleInput=(e)=>{
  e.preventDefault()
  if(!name || !email || !password || !verifypass){
    alert(`please fill the form completly`)

  }
  else{
    alert(`Name:${name} Email:${email} Password:${password} Confirm:${verifypass}`)
  }

}
  const validateInput=(e)=>{
    const{name,value}=e.target
    if(name==="name")
    {
      if(value.match(/^[A-Za-z]+$/)){
        setName(value)
        setIsNamevalid(true)
      }else{
        setName(value)
        setIsNamevalid(false)
      }
      }else if(name==="email"){
        if(value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
          setEmail(value)
          setIsEmailvalid(true)
        }else{
          setEmail(value)
          setIsEmailvalid(false)
        }
    }else if(name==="password"){
      setPassword(value)
    }else{
      if(value===password){
        setVerifypass(value)
        setIsVerpassvalid(true)
      }else{
        setVerifypass(value)
        setIsVerpassvalid(false)
      }
    }
  }
  console.log(isnamevalid);
  
  return (
    <section className="jeswin  " >
    <div className="container py-5 h-100 ">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div style={{backgroundColor:"#2E4F4F"}} className="card   shadow-2-strong " >
            <div className="card-body p-5 text-center h-40">
  
              <form onSubmit={(e)=>handleInput(e)} >
                <h3 className="mb-5 text-dark">Sign in Here</h3>
                <div className="form-outline mb-4" style={{width:"100%"}}>
                <TextField id="outlined-basic" label="Name" variant="outlined" className="form-control form-control-lg" name='name' onChange={(e)=>validateInput(e)} />
                </div>
               {  !isnamevalid &&
                  <div className='mb-3 text-danger'>
                    Must be characters
                  </div>
               }
    
                <div className="form-outline mb-4" style={{width:"100%"}}>
                <TextField id="outlined-basic" label="Email" variant="outlined" className="form-control form-control-lg" name='email'  onChange={(e)=>validateInput(e)}  />
                </div>
                {  !isemailvalid &&
                  <div className='mb-3 text-danger'>
                    Invalid email id
                  </div>
               }
    
                <div className="form-outline mb-4" style={{width:"100%"}}>
                <TextField id="outlined-basic" label="Password" variant="outlined" className="form-control form-control-lg" name='password' onChange={(e)=>validateInput(e)}  />
                </div>
                {  !ispassvalid &&
                  <div className='mb-3 text-danger'>
                    Must be atleast 6 characters
                  </div>
               }
                <div className="form-outline mb-4" style={{width:"100%"}}>
                <TextField id="outlined-basic" label="Confirm password" variant="outlined" className="form-control form-control-lg" name='verifypass' onChange={(e)=>validateInput(e)}  />
                </div>
                {  !isverpassvalid &&
                  <div className='mb-3 text-danger'>
                    Password doesn't match
                  </div>
               }
    
                
                <div className="form-check d-flex justify-content-start mb-4 text-light">
                  <input className="form-check-input" type="checkbox" value="" id="form1Example3" />
                  <label className="form-check-label" for="form1Example3"> Remember password </label>
                </div>
    
                
                  <div >
                    <Button type='submit' className='bg-dark' variant="contained">Sign in</Button></div>
                
    
                    </form>
              </div>
              
          </div>
        </div>
      </div>
    </div>
  </section>
    
  )
}

export default App;
