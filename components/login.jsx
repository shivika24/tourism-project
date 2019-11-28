import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Form from './registeration-form';
import '../stylesheet.css';
class Login extends Component
{
    render()
    {
        return (
        <div>
       <center><div className="card" style={{width:400}}>
       <div className="card-body">
       <p style={{fontSize:40}}>Signup With xyz!</p>
       <form>
       <div className="form-row">
       <div className="form-group col-md-12">
       <input type="email" className="form-control" id="email" placeholder="Your Email Address" required/>
       <input type="password" className="form-control" id="pass" placeholder="Choose Password" required/>
       
       </div>
       </div>
       <br/><button type="submit" className="button">LOG IN</button>
       <p><span  style={{fontSize:14,    marginLeft: "0px"}}><Link to="/Recover">Recover Password</Link></span><span  style={{fontSize:14,  marginLeft: "100px"}}>New to xyz?  <Link to="/Form" style={{color:"#EA5E8B",textDecoration:"none"}}>Register!!</Link></span></p>
       </form>         
       </div>       
       </div>
       </center>
       </div>
        )
    }
}
export default Login;