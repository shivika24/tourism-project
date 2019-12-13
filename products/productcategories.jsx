import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import grocery from '../products/grocery.png';
import jewellery from '../products/jewellery.jpg';
import clothing from '../products/clothing.jpg';
import homedecor from '../products/homedecor.jpg';
import './productcategories.css';
class Productcategories extends Component
{
    state={
        data1:'',
        data2:''
    }
    render()
    {
        return (
        <div id="prodcat">
        <div className="row mr-0">
        <div className="col-12">
        <p id="prodhead">CATEGORIES</p>
        </div>
        </div>
        <div className="row mr-0">
        <div className="col-md-3 col-12 hvr-grow" id="cccc">
        <div class="card" id="catt">
        <Link to={{
            pathname: "/product2",
            state: {
            data1: this.props.arr.products.filter(i=>{return i.category==="Jewellery"}),
            data2: this.props.arr               
            }
            }} >
        <img class="card-img-top" src={jewellery} alt="Card image cap" id="cattimg"/>
        </Link>
        {console.log(this.state.data1)}
        <div class="card-body">
        <p class="card-text" id="cccctext">JEWELLERY</p>
        </div>
        </div>
        </div>

        <div className="col-md-3 col-12 hvr-grow" id="cccc">
        <div class="card" id="catt">
        <Link to={{
            pathname: "/product2",
            state: {
            data1: this.props.arr.products.filter(i=>{return i.category==="Home-Decor"}),
            data2: this.props.arr               
            }
            }} >
        <img class="card-img-top" src={homedecor} alt="Card image cap" id="cattimg"/>
        </Link>
        <div class="card-body">
        <p class="card-text" id="cccctext">HOME-DECOR</p>
        </div>
        </div>
        </div>

        <div className="col-md-3 col-12 hvr-grow" id="cccc">
        <div class="card" id="catt">
        <Link to={{
            pathname: "/product2",
            state: {
            data1: this.props.arr.products.filter(i=>{return i.category==="Grocery"}),
            data2: this.props.arr            
            }
            }} >
        <img class="card-img-top" src={grocery} alt="Card image cap" id="cattimg"/>
        </Link>
        <div class="card-body">
        <p class="card-text" id="cccctext">GROCERY</p>
        </div>
        </div>
        </div>

        <div className="col-md-3 col-12 hvr-grow" id="cccc">
        <div class="card" id="catt">
        <Link to={{
            pathname: "/product2",
            state: {
            data1: this.props.arr.products.filter(i=>{return i.category==="Clothing & Accessories"}),
            data2: this.props.arr           
            }
            }} >
        <img class="card-img-top" src={clothing} alt="Card image cap" id="cattimg"/>
        </Link>
        <div class="card-body">
        <p class="card-text" id="cccctext">CLOTHING & ACCESSORIES</p>
        </div>
        </div>
        </div>
        </div>
        </div>
        )
    }
}
export default Productcategories;
//jewellery,grocery,home-decor,Clothing & Accessories