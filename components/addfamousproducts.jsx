import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './addfamousproducts.css';
import 'hover.css/css/hover-min.css';
class AddFamousProducts extends Component
{
  constructor()
  {
    super();
    this.function1=this.function1.bind(this);
    this.function2=this.function2.bind(this);
    this.state={
      arr1:[]
    }
  }
  function1(e)
  {
    e.preventDefault();
    const fa=document.getElementById("pname").value;
    const fb=document.getElementById("pdesc").value
    const fc=document.getElementById("pimage").value;
    const elem1=
    {
      name:fa,
      description:fb,
      image:fc,
    }     
    this.state.arr1.push(elem1);
    alert(`Product Name ${elem1.name} succesfully added`);
    this.setState({arr1:this.state.arr1});
    document.getElementById("pname").value='';
    document.getElementById("pdesc").value='';
    document.getElementById("pimage").value='';
  }
  function2(e)
  {
    e.preventDefault();
    console.log(this.state.arr1);
    this.props.ondata1(this.state.arr1);
  }
    render()
    {
        return <div className="container-fluid col-md-6" id="d113">
        <p className="formhead2">FAMOUS PRODUCTS</p>
        <div class="form-group"> 
          <label id="ilabel"><b>Product Name</b></label>
          <input type="text" class="form-control" id="pname" placeholder="Product Name"/>
        </div> 
        <div class="form-group">
        <label id="ilabel"><b>Product Description</b></label>
        <textarea class="form-control" id="pdesc" placeholder="Product Description"/>
        </div>
        <div class="form-group">
        <label id="ilabel"><b>Product Image</b></label>
        <input type="text" class="form-control" id="pimage" placeholder="images"/>
        </div>
        <button  className="hvr-shutter-out-horizontal" id="submitbut2" onClick={(e) => this.function1(e)}>ADD</button>
        <button className="hvr-shutter-out-horizontal" id="submitbut2" onClick={(e) => this.function2(e)}><Link to="/Tourism" style={{color:"white",textDecoration:"none"}}>SUBMIT</Link></button>
        </div>
        
    }
}
export default AddFamousProducts;
/*
        <div class="form-group">
        <label id="ilabel"><b>Product Price</b></label>
        <input type="text" class="form-control" id="pprice" placeholder="Product Price"/>
        </div>
        <div class="form-group">
        <label id="ilabel"><b>Seller Information</b></label>
        <textarea class="form-control" id="pseller" placeholder="Seller Information"/>
        </div>
*/