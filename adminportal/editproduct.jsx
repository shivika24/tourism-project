import React,{ Component } from 'react';
import {Redirect,Link} from 'react-router-dom';
import '../tourism_department/tourismdataform/addtourist.css';

class Editproduct extends Component
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
    const ta=document.getElementById("pname").value;
    const tb=document.getElementById("pdes").value
    const tc=document.getElementById("pimages").value;
    const td=document.getElementById("pprice").value;
    const te=document.getElementById("pcat").value;
    const elem=
    {
      id:iid,
      name:ta,
      description:tb,
      image:tc,
      price:td,
      category:te

    }   
    console.log(elem.id);  
   this.props.onedit1(elem);
  }

    render()
    {
        return <div className="container-fluid col-md-6" id="d112">
        <p className="formhead1">PRODUCTS</p>
        <div className="form-group"> 
          <label id="ilabel1"><b>Name</b></label>
          <input type="text" className="form-control" id="pname"  defaultValue={this.props.editplace.name}/>
        </div> 
        <div className="form-group"> 
        <label id="ilabel1"><b>Description</b></label>
        <input type="text" className="form-control" id="pdes"  defaultValue={this.props.editplace.description}/>
        </div> 
        <div className="form-group">
        <label id="ilabel1"><b>Images</b></label>
        <input type="text" className="form-control" id="pimages" defaultValue={this.props.editplace.image}/>
        </div>
        <div className="form-group">
        <label id="ilabel1"><b>Price</b></label>
        <input type="text" className="form-control" id="pprice" defaultValue={this.props.editplace.price}/>
        </div>
        <div className="form-group">
        <label id="ilabel1"><b>Category</b></label>
        <input type="text" className="form-control" id="pcat" defaultValue={this.props.editplace.category}/>
        </div>
        <button  className="hvr-shutter-out-horizontal" onClick={(e) => this.fun1(e,this.props.editplace._id)} id="submitbut1" >SUBMIT</button>
        </div>
        
    }
}
export default Editproduct;