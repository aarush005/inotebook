import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [credentials, setCredentials] = useState({email:"", password:""})
    let navigate = useNavigate();
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/auth/login", {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({email:credentials.email, password:credentials.password})
          });
          const json = await response.json()
          if (json.success){
            // Save the auth and redirect
            localStorage.setItem("token", json.authtoken);
            props.showAlert("Logged In successfully", "success")
            navigate("/")
          }else{
            props.showAlert("Invalid Credentials", "success")
          }

          console.log(json)
    }
    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value })
      }

    return (
        <div>
          <h2 className='m-3'>Login to Continue to iNotebook</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" value={credentials.password} onChange={onChange} id="password" name='password'/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Login