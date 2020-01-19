import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import '../tourism_department/stylesheets/tourismform.css';
import Display from './displaydata';

// import './tourismform.css';
let count=1;
let max=6;
let res=1;
let counter=2;
class Addstate extends Component
{
    
    constructor()
    {
      super();   
      this.func=this.func.bind(this);
    }
    func(cat,a)
    {
    var x=document.getElementById("myeditttt").value;
    if(cat=="name")
    {
    const elem={
    name:x
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    else if(cat=="capital")
    {
    var y=document.getElementById("myeditttt").value;
    const elem={
    capital:y
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    else if(cat=="about")
    {
    var z=document.getElementById("myeditttt").value;
    const elem={
    about:z
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    else if(cat=="climate")
    {
    var a=document.getElementById("myeditttt").value;
    const elem={
    climate:a
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    else if(cat=="history")
    {
    var b=document.getElementById("myeditttt").value;
    const elem={
    history:b
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    else if(cat=="time")
    {
    var cc=document.getElementById("myeditttt").value;
    const elem={
    time:cc
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    else if(cat=="food")
    {
    var d=document.getElementById("myeditttt").value;
    const elem={
    food:d
    }
    this.props.oneditn(elem,this.props.nameid);
    }
    }
    render()
    {
        return <div>
        {console.log(this.props.nameid)}
        <div className="container-fluid col-md-6" id="d111">
        <p className="formhead">DETAILS</p>
        <form>       
        <div className="form-group">
          <label><b>{this.props.cat}</b></label>
          <textarea className="form-control" id="myeditttt" defaultValue={this.props.val}/>
        </div>    
        <center><button onClick={() => this.func(this.props.cat,this.props.val)}>SUBMIT</button></center>
        </form>    
        </div>
        </div>
    }
}
export default Addstate;