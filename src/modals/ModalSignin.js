import React, { useState } from 'react'

import { Credential } from '../models/Credentiel';
// import "./login.css"
const ModalSignin = () => {
    const [credentials,setCredentials] = useState(new Credential())
    const isFormValid = () =>
    credentials.email!="_" 
    && credentials.password!="_";

    const handleChangeInput =(e)=>{
      let { name, value } = e.target
      setCredentials({ ...credentials, [name]: value })
    }
    const login =(e)=>{
      e.preventDefault()
        if(isFormValid)
        alert("login ...")
        else
        setCredentials({...new Credential("","")})
    }
    // const validerinput = () => {
     
    // //  const user=USERS.find(u=>u.login === inputLogin.current.value && u.password === inputPassword.current.value)
     
    // //    if(user)
    // //      valid=true
       
    // // 
     
    // };
    return (
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Authentification</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form className="w-100 mx-auto p-5 border border-5" onSubmit={login}>
              <span classname="border rounded-circle mx-auto" style={{fontSize: 70}}>
  <i className="fas fa-users" />
</span>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Login:</label>
    <input type="email" name="login"  onChange={handleChangeInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <p className={credentials.email == "" ? "error" : "d-none"}>
                Email Invalid !!</p>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    <input type="password" name="password" onChange={handleChangeInput} className="form-control" id="exampleInputPassword1" />
    <p className={credentials.password == "" ? "error" : "d-none"}>
                Password Invalid !!</p>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit"
       
        class="btn btn-primary" >Connexion</button>
      </div>
    </form>
    </div>
  </div>
        </div>
        </div>
    )
}

export default ModalSignin
