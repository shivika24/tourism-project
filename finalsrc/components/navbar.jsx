import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '.././images/logo.png';
import './navbar.css';
class Navbar extends Component
{
      render()
    {
        return (

          <nav id="nav" className="navbar navbar-expand-lg navbar-light">
          <Link className="navbar-brand" to="/Home"><h1> Tourism</h1></Link>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
               <Link className="nav-item nav-link active hvr-grow-shadow" to="/Home">Home <span className="sr-only">(current)</span></Link>
               <Link className="nav-item nav-link hvr-grow-shadow" to="/Registeration">Register</Link>
               <Link className="nav-item nav-link hvr-grow-shadow" to="/Tourism">Tourism Form</Link>
             </div>
           </div>
         </nav>

        )
    }
}
export default Navbar;


