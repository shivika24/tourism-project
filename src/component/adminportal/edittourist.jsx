import React,{ Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import '../tourism_department/tourismdataform/addtourist.css';

class Edittourist extends Component
{
  constructor()
  {
    super();
    this.fun1=this.fun1.bind(this);
    this.state={
      arr:[]
    }
  }
  fun1(e,iid)
  {
    e.preventDefault();
    const ta=document.getElementById("tname").value;
    const tb=document.getElementById("tabout").value
    const tc=document.getElementById("timages").value;
    const td=document.getElementById("tlocation").value;
    const elem=
    {
      id:iid,
      name:ta,
      info:tb,
      images:tc,
      location:td
    }   
    console.log(elem.id);  
   this.props.onedit(elem);
  }

    render()
    {
        {console.log(this.props.editplace._id)}
        return <div className="container-fluid col-md-6" id="d112">
        <p className="formhead1">TOURIST PLACES</p>
        <div className="form-group"> 
          <label id="ilabel1"><b>Tourist Place Name</b></label>
          <input type="text" className="form-control" id="tname" placeholder="Tourist Place Name" defaultValue={this.props.editplace.name}/>
        </div> 
        <div className="form-group">
        <label id="ilabel1"><b>About</b></label> 
        <textarea className="form-control" id="tabout" placeholder="About" defaultValue={this.props.editplace.info}/>
        </div>
        <div className="form-group">
        <label id="ilabel1"><b>Images</b></label>
        <input type="text" className="form-control" id="timages" placeholder="images" defaultValue={this.props.editplace.images}/>
        </div>
        <div className="form-group">
        <label id="ilabel1"><b>Location</b></label>
        <input type="text" className="form-control" id="tlocation" placeholder="Location" defaultValue={this.props.editplace.location}/>
        </div>
        <button  className="hvr-shutter-out-horizontal" onClick={(e) => this.fun1(e,this.props.editplace._id)} id="submitbut1" >SUBMIT</button>
        </div>
        
    }
}
export default Edittourist;