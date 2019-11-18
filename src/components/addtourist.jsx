import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './addtourist.css';
import 'hover.css/css/hover-min.css';
class Addtourist extends Component
{
    render()
    {
        return <div className="container-fluid col-md-6" id="d112">
        <p className="formhead1">TOURIST PLACES</p>
        <div class="form-group"> 
          <label><b>Tourist Place Name</b></label>
          <input type="text" class="form-control" id="tname" placeholder="Tourist Place Name"/>
        </div> 
        <div class="form-group">
        <label><b>About</b></label>
        <textarea class="form-control" id="about" placeholder="About"/>
        </div>
        <div class="form-group">
        <label><b>Images</b></label>
        <input type="text" class="form-control" id="images" placeholder="images"/>
        </div>
        <div class="form-group">
        <label><b>Location</b></label>
        <input type="text" class="form-control" id="location" placeholder="Location"/>
        </div>
        <center><button  className="hvr-shutter-out-horizontal" id="submitbut1">Submit</button></center>
        </div>
        
    }
}
export default Addtourist;