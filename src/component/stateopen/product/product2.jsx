import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Productnav from './productnav';
import './product2.css';
class Product2 extends Component
{
    state={
        info:'',
        arr1:this.props.location.state.data1,
        
    }
   
    funct1(e,ar)
    {
        e.preventDefault();
        var ar = [...ar];
        ar.sort((a,b) => a.price-b.price);
        ar.map((i)=>console.log(i.price))
        this.setState({arr1:ar});
    }
    funct2(e,ar)
    {
        e.preventDefault();
        var ar = [...ar];
        ar.sort((a,b) => a.price-b.price);
        this.setState({arr1:ar.reverse()});
    }
    funct3(e,ar)
    {
        e.preventDefault();
        var ar = [...ar];
        ar.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
           })
        ar.map((i)=>console.log(i.name))
        this.setState({arr1:ar});
    }
    funct4(e,ar)
    {
        e.preventDefault();
        var ar = [...ar];
        ar.sort(function(a, b) {
            if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            return 0;
           })
        ar.map((i)=>console.log(i.name))
        this.setState({arr1:ar.reverse()});
    }
  
    myFunction1=()=> {
        var input, filter, ul, li, a, i, txtValue;
        input = document.getElementById("myInput");
        filter = input.value.toUpperCase();
        ul = document.getElementById("z1");
        li = ul.getElementsByTagName("li");
        var divis = document.getElementsByClassName("forsearch");
        
        
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                divis[i].style.display = "";
            } else {
                divis[i].style.display = "none";
            }
        }
      }

    render()
    {
        return (
            <div>
                
            <Productnav datanav={this.props.location.state.data2}/>
            
            <div>

            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Sort By:Recommended
             </button>
             <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
             <button className="dropdown-item" type="button" onClick={(e) => this.funct2(e,this.props.location.state.data1)}>Sort By: Price , high to low</button>
             <button className="dropdown-item" type="button" onClick={(e) => this.funct1(e,this.props.location.state.data1)}>Sort By: Price , low to high</button>
             <button className="dropdown-item" type="button">Sort By: What's New</button>
             <button className="dropdown-item" type="button" onClick={(e) => this.funct3(e,this.props.location.state.data1)}>Sort By: Alphabetically,A-Z</button>
             <button className="dropdown-item" type="button" onClick={(e) => this.funct4(e,this.props.location.state.data1)}>Sort By: Alphabetically,Z-A</button>
            </div>
            <input type="text" className="btn" id="myInput" onKeyUp={()=>this.myFunction1()} placeholder="Search for names.." title="Type in a name"/>

            </div>
            <div id="d99">
            </div>
            <div className="row m-0 p-0" style={{padding:0}} id="z1">

            {this.state.arr1.map((index)=>{
            return <div className="col-md-3 col-12 forsearch" id="productcartid" style={{margin:0}}>
            <div className="card" id="productcard" style={{width:"18rem"}}>
            <img className="card-img-top" src={index.image} alt="Card image cap" id="productcartimage"/>
            <div>
            <p id="m100"> 
            <li style={{listStyle:"none"}}>
                <a>{index.name}</a>
            </li><br/>
            Rs. {index.price}</p>
            </div>
            <div className="row" id="middle1" style={{marginTop:"-30px",marginLeft:"-8px"}}>
            <div className="col-4">
            <i className="far fa-heart" style={{fontSize:"30px"}}></i>
            </div>
            <div className="col-4">
            <Link to={{
                pathname: "/productdesc",
                state: {
                info:index
                }
                }} >                
            <i className="fas fa-eye" style={{fontSize:"30px"}}></i>
            </Link>
            </div>
            <div className="col-4">
            <i className="fas fa-shopping-cart" style={{fontSize:"30px"}}></i>
            </div>                
            </div>                
            </div>
            </div>
        })}
        </div>
        </div>
        
        )
    }
}
export default Product2;