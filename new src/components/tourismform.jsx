import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Addtourist from './addtourist';
import Addproducts from './addfamousproducts';
import './tourismform.css';
import 'hover.css/css/hover-min.css';
let count=1;
let max=6;
let res=1;
let counter=2;
class Tourismform extends Component
{
    constructor()
    {
      super();
      this.f1=this.f1.bind(this);
      this.addImages=this.addImages.bind(this);
      this.state={
        image:[],
        imagearr:[]
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
      const i=document.getElementById("food").value;
      while(res<=max)
      {
      if(document.getElementById("img"+res).value!='')
      {
      this.state.imagearr.push(document.getElementById("img"+res).value);
      this.setState({imgarr:this.state.imagearr}); 
      res=res+1;
      }
      }      
      const prop={
        id:a,
        name:b,
        capital:c,
        about:d,
        climate:e,
        history:f,
        time:g,
        food:i,
        img:this.state.imagearr,
        products:this.props.data1,
        tourist:this.props.data        
      }
      console.log(prop.products)
      /*console.log(prop.id)
      console.log(prop.name)
      console.log(prop.capital)
      console.log(prop.about)
      console.log(prop.climate)
      console.log(prop.history)
      console.log(prop.time)
      console.log(prop.tourist)
      console.log(prop.img)*/
      this.props.onadd(prop);     
      alert(`State:-${prop.name} successfully added.`);
      document.getElementById("iid").value='';
      document.getElementById("state").value='';
      document.getElementById("capital").value='';
      document.getElementById("about").value='';
      document.getElementById("climate").value='';
      document.getElementById("history").value='';
      document.getElementById("food").value='';
      document.getElementById("time").value='';
      document.getElementById("img1").value='';
      document.getElementById("img2").value='';
      document.getElementById("img3").value='';
      document.getElementById("img4").value='';
      document.getElementById("img5").value='';
      document.getElementById("img6").value='';

    }
    addImages(e)
    {
      e.preventDefault();
      if(count<max)
      {
      count=count+1;  
      const x=document.getElementById("imagediv");
      const y=document.createElement("div");
      const xx=document.createElement("INPUT");
      xx.setAttribute("type","text");
      xx.setAttribute("class","form-control");
      xx.setAttribute("placeholder","Images Link");
      xx.setAttribute("id","img"+counter);  
      x.appendChild(xx);
      counter=counter+1;        
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
        <div className="form-group">
          <label><b>Id</b></label>
          <input type="text" className="form-control" id="iid" value={this.props.tour.length+1} readOnly/>
        </div> 
        <div className="form-group">
        <label><b>State</b></label>
        <input type="text" className="form-control" id="state" placeholder="State"/>
        </div>
        <div className="form-group">
          <label><b>Capital</b></label>
          <input type="text" className="form-control" id="capital" placeholder="capital"/>
        </div>
        <div className="form-group">
          <label><b>About</b></label>
          <textarea className="form-control" id="about" placeholder="About"/>
        </div>
        <div className="form-group">
        <label><b>Climate & Geography </b></label>
        <textarea className="form-control" id="climate" placeholder="Climate & Geography"/>
        </div>
        <div className="form-group">
        <label><b>History</b></label>
        <textarea className="form-control" id="history" placeholder="History"/>
        </div>
        <div className="form-group">
        <label><b>Best Time To Visit</b></label>
        <textarea className="form-control" id="time" placeholder="Best Time To Visit"/>
        </div>
        <div className="form-group">
        <label><b>Food</b></label>
        <textarea className="form-control" id="food" placeholder="Famous Food"/>
        </div>

        <div className="form-group">
        <label><b>Images</b></label>
        <div className="row">
        <div className="col-9" id="imagediv">
        <input type="text" className="form-control" id="img1" placeholder="Images Link"/>
        </div>
        <div className="col-3">
        <button id="addbutton" style={{marginTop:"15px",width:"75px"}} onClick={(e) => this.addImages(e)}>Add</button>
        </div>
        </div>
        </div>

        <button className="btn hvr-rectangle-out" id="addbutton"><Link to="/Addtourist" style={{color:"white",textDecoration:"none"}}>Add Tourist Places</Link></button> <br/><br/>
        <button className="btn hvr-rectangle-out" id="addbutton"><Link to="/Addproducts" style={{color:"white",textDecoration:"none"}}>Add Famous Products</Link></button> <br/><br/>

        <center><button  className="hvr-shutter-out-vertical" id="submitbut"  onClick={(e) => this.f1(e)}>Submit</button></center> 
        </form>    
        </div>
        </div>
    }
}
export default Tourismform;