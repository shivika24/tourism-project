import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '.././images/logo.png';
import '../stylesheet.css';
class Navbar extends Component
{
    render()
    {
        return (
            <nav className="navbar navbar-expand-lg navbar-light" id="nav">
  <a className="navbar-brand" href="#">LOGO</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item,hvr-float-shadow" role="presentation">
        <Link className="nav-link" to="/Home" id="navtext">Home <span class="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="navtext"><p>About</p></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" id="navtext">Buy</a>
      </li>
      <li className="nav-item">
      <a className="nav-link" href="#" id="navtext">Contact</a>
    </li>
    <li className="nav-item">
    <Link className="nav-link" to="/Form" id="navtext">Register</Link>
  </li>
    </ul>
  </div>
</nav>
        )
    }
}
export default Navbar;