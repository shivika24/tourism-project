import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import '../bg.css';
class Tourismform extends Component
{
    render()
    {
        return <div className="container-fluid col-md-6" id="d111">
        <div class="form-group">
          <label><b>Id</b></label>
          <input type="text" class="form-control" id="iid" placeholder="id"/>
        </div>
        <div class="form-group">
        <label><b>State</b></label>
        <input type="text" class="form-control" id="state" placeholder="State"/>
        </div>
        <div class="form-group">
          <label><b>Capital</b></label>
          <input type="text" class="form-control" id="name" placeholder="capital"/>
        </div>
        <div class="form-group">
          <label><b>About</b></label>
          <textarea class="form-control" id="author" placeholder="About"/>
        </div>
        <div class="form-group">
        <label><b>Climate & Geography </b></label>
        <textarea class="form-control" id="climate" placeholder="Climate & Geography"/>
        </div>
        <div class="form-group">
        <label><b>History</b></label>
        <textarea class="form-control" id="history" placeholder="History"/>
        </div>
        <div class="form-group">
        <label><b>Best Time To Visit</b></label>
        <textarea class="form-control" id="time" placeholder="Best Time To Visit"/>
        </div>

        <div class="form-group">
        <label><b>Images</b></label>
        <input type="text" class="form-control" id="images" placeholder="Images Link"/>
        </div>

        <button class="btn btn-outline-info"><Link to="/Addtourist" style={{color:"white",textDecoration:"none"}}>Add Tourist Places</Link></button> <br/><br/>

        <button  class="btn btn-secondary">Submit</button>       
        </div>
    }
}
export default Tourismform;