import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [credentials, setCredentials] = useState({name:"", email:"", password:"", cpassword:""})
  let navigate = useNavigate();
  const handleSubmit = async (e)=>{
      e.preventDefault();
      const response = await fetch("http://localhost:5000/api/auth/createuser", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password}) 
        });
        const json = await response.json()
        console.log(json)
        
        if (json.success){
          // Save the auth and redirect
          localStorage.setItem("token", json.authtoken);
          navigate("/")
          props.showAlert("Account Created successfully", "success")
        }else{
          props.showAlert("Invalid Credentials", "danger")
        }
        console.log(json)
  }
  const onChange = (e) => {
      setCredentials({...credentials, [e.target.name]: e.target.value })
    }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Your Name</label>
          <input type="text" name='name' className="form-control" onChange={onChange} id="name" aria-describedby="emailHelp"/>
        </div>
        
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input type="email" className="form-control" name='email' id="email" onChange={onChange} aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" className="form-control" name='password' onChange={onChange} id="password" minLength={5} required/>
        </div>

        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">Confirm Password</label>
          <input type="password" className="form-control" name='cpassword' onChange={onChange} id="cpassword1" minLength={5} required/>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}

export default Signup