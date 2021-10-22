import React from 'react'
import { Link } from 'react-router-dom'
import ModalSignin from '../modals/ModalSignin'

const HeaderStd = () => {
    return (
        <div>
             <header>
   
   <div className="navbar navbar-dark bg-dark shadow-sm">
     <div className="container ">
       
       <a href="#" className="navbar-brand d-flex align-items-center justify-content-between">
         
         <strong className="text-warning">Album Movies</strong>
       </a>
      
    
         
    <strong> <Link to="/" className="text-decoration-none text-white">HOME </Link></strong>
     
       
       
    <button type="button" class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">
     SIGN IN<i class="fas fa-sign-in-alt"></i></button>
  
     </div>
   </div>
 </header>
 <ModalSignin/>
        </div>
    )
}

export default HeaderStd
