import React,{ Component } from 'react';
import {Redirect} from 'react-router-dom';
import './addtourist.css';
import 'hover.css/css/hover-min.css';
class Addtourist extends Component
{
  constructor()
  {
    super();
    this.fun1=this.fun1.bind(this);
    this.state={
      arr:[]
    }
  }
  fun1()
  {
    const ta=document.getElementById("tname").value;
    const tb=document.getElementById("tabout").value
    const tc=document.getElementById("timages").value;
    const td=document.getElementById("tlocation").value;
    const elem=
    {
      name:ta,
      info:tb,
      images:tc,
      location:td
    }     
    this.state.arr.push(elem);
    alert(`Tourist Place ${elem.name} succesfully added`);
    this.setState({arr:this.state.arr});
    document.getElementById("tname").value='';
    document.getElementById("tabout").value='';
    document.getElementById("timages").value='';
    document.getElementById("tlocation").value='';
    
  }
  fun2()
  {
    console.log(this.state.arr);
    this.props.ondata(this.state.arr);
  }
    render()
    {
        return <div className="container-fluid col-md-6" id="d112">
        <p className="formhead1">TOURIST PLACES</p>
        <div class="form-group"> 
          <label id="ilabel1"><b>Tourist Place Name</b></label>
          <input type="text" class="form-control" id="tname" placeholder="Tourist Place Name"/>
        </div> 
        <div class="form-group">
        <label id="ilabel1"><b>About</b></label>
        <textarea class="form-control" id="tabout" placeholder="About"/>
        </div>
        <div class="form-group">
        <label id="ilabel1"><b>Images</b></label>
        <input type="text" class="form-control" id="timages" placeholder="images"/>
        </div>
        <div class="form-group">
        <label id="ilabel1"><b>Location</b></label>
        <input type="text" class="form-control" id="tlocation" placeholder="Location"/>
        </div>
        <center><button  className="hvr-shutter-out-horizontal" onClick={() => this.fun1()} id="submitbut1" >Submit</button></center>
        <button  onClick={() => this.fun2()}>back</button>
        </div>
        
    }
}
export default Addtourist;