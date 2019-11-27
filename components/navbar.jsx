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
          <a className="navbar-brand" href="#"><h1> Tourism</h1></a>
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
             <span className="navbar-toggler-icon"></span>
           </button>
           <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
             <div className="navbar-nav">
               <Link className="nav-item nav-link active" to="/Home">Home <span className="sr-only">(current)</span></Link>
               <Link className="nav-item nav-link" to="/Registeration">Register</Link>
               <Link className="nav-item nav-link" to="/Tourism">Tourism Form</Link>
             </div>
           </div>
         </nav>

        )
    }
}
export default Navbar;


