import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './loginform.css';
import 'hover.css/css/hover-min.css';
class Loginform extends Component {
  render() {
    return (
      <div id="formpackage">
        <center><div id="Loginform">
          <div className="container1">
            <center>
              <h1>Login Form</h1>
            </center>
            <form action="">
              <div className="row">
                <div className="col-25">
                  <label >E-mail Id</label>
                </div>
                <div className="col-75">
                  <input
                    type="email"
                    id="lemail"
                    name="e-mail"
                    placeholder="E-mail Id"
                    className="sinput"
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-25">
                  <label>Password</label>
                </div>
                <div className="col-75">
                  <input
                    type="password"
                    id="lpass"
                    name=""
                    placeholder="Password"
                    className="sinput"
                  />
                </div>
              </div>
              <p style={{color:"purple"}}><b>New To OurTourism?</b><Link to="/Registeration" style={{color:"white",textDecoration:"none"}}>Register Now</Link></p>
              <div className="row">                
                  <button defaultValue="Submit" className="hvr-shutter-out-vertical" id="ssubmit" style={{width:"79vw"}}>Submit</button>
            </div>
            </form>
            
            <center>
              <p>Powered by Indian tourisum</p>
            </center>
          </div>
        </div></center>
      </div>
    );
  }
}
export default Loginform;