import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import '../bg.css';
class Addtourist extends Component
{
    render()
    {
        return <div className="container-fluid col-md-6" id="d111">
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
        <button  class="btn btn-secondary">Submit</button> 
        </div>
        
    }
}
export default Addtourist;