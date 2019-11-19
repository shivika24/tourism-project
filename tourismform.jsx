import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Addtourist from './addtourist';
import Addproducts from './addfamousproducts';
import './tourismform.css';
import 'hover.css/css/hover-min.css';
let count=1;
let max=6;
class Tourismform extends Component
{
    constructor()
    {
      super();
      this.f1=this.f1.bind(this);
      this.addImages=this.addImages.bind(this);
      this.state={
        image:[]
      }
    }
    f1(ef)
    {
      ef.preventDefault();
      const a=document.getElementById("iid").value;
      const b=document.getElementById("state").value;
      const c=document.getElementById("capital").value;
      const d=document.getElementById("about").value;
      const e=document.getElementById("climate").value;
      const f=document.getElementById("history").value;
      const g=document.getElementById("time").value;
      const h=document.getElementById("images").value;
      const prop={
        id:a,
        name:b,
        capital:c,
        about:d,
        climate:e,
        history:f,
        time:g,
        tourist:this.props.data        
      }
      //this.props.onadd(prop);     

    }
    addImages(e)
    {
      e.preventDefault();
      count=count+1;
      var im=document.getElementById("images").value;
      this.state.image.push(im);
      this.setState({image:this.state.image});
      console.log(this.state.image)
      console.log(count)
      if(count<=max)
      {
      const x=document.getElementById("imagediv");
      const y=document.createElement("div");
      y.innerHTML='<br/><input type="text" class="form-control" id="images" placeholder="Images Link"/>';
      x.appendChild(y);
      }
      else
      {
        alert("Maximum Limit Of Adding Images Exceeded");
      }

    }
    render()
    {
        return <div>
        
        <div className="container-fluid col-md-6" id="d111">
        <p className="formhead">STATE DETAILS</p>
        <form>
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
          <input type="text" class="form-control" id="capital" placeholder="capital"/>
        </div>
        <div class="form-group">
          <label><b>About</b></label>
          <textarea class="form-control" id="about" placeholder="About"/>
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
        <div className="row">
        <div className="col-9" id="imagediv">
        <input type="text" class="form-control" id="images" placeholder="Images Link"/>
        </div>
        <div className="col-3">
        <button id="addbutton" style={{marginTop:"15px"}} onClick={(e) => this.addImages(e)}>Add</button>
        </div>
        </div>
        </div>

        <button class="btn hvr-rectangle-out" id="addbutton"><Link to="/Addtourist" style={{color:"white",textDecoration:"none"}}>Add Tourist Places</Link></button> <br/><br/>
        <button class="btn hvr-rectangle-out" id="addbutton"><Link to="/Addproducts" style={{color:"white",textDecoration:"none"}}>Add Famous Products</Link></button> <br/><br/>

        <center><button  class="hvr-shutter-out-vertical" id="submitbut"  onClick={(e) => this.f1(e)}>Submit</button></center> 
        </form>    
        </div>
        </div>
    }
}
export default Tourismform;