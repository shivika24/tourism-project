import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import '../stylesheet.css';
class Form extends Component
{
    render()
    {
       return<div>
       <center><div className="card" style={{width:400}}>
       <div className="card-body">
       <p style={{fontSize:40}}>Signup With xyz!</p>
       <form>
       <div className="form-row">
       <div className="form-group col-md-12">
       <input type="email" className="form-control" id="email" placeholder="Your Email Address" required/>
       <input type="password" className="form-control" id="pass" placeholder="Choose Password" required/>
       <input type="text" className="form-control" id="inputNumber" placeholder="Mobile Number(For Order Status Updates)"/>
      
       <fieldset data-type="horizontal" className="register-gender">
       <legend className="title">I'm a</legend>
       <div className="custom-control custom-radio custom-control-inline">
       <input type="radio" className="custom-control-input" id="male" name="gender" value="male"/>
       <label className="custom-control-label" for="male">Male</label>
       </div>
       <div className="custom-control custom-radio custom-control-inline">
       <input type="radio" className="custom-control-input" id="female" name="gender" value="female"/>
       <label className="custom-control-label" for="female">Female</label>
       </div>
       </fieldset>

       </div>
       </div>
       <button type="submit" className="button">REGISTER</button>
       <p style={{fontSize:14}}>Already have an account?  <Link to="/Login" style={{color:"#EA5E8B",textDecoration:"none"}}>Login!!</Link></p>
       </form>         
       </div>       
       </div>
       </center>
       </div>
    }
}
export default Form;