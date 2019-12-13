import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Productnav from './productnav';
import './productdesc.css';
import cart from '../images/cart1.png';
import wishlist from '../images/wishlist.png';
class Productdesc extends Component
{
    render()
    {
        return (
            <div>
            <Productnav datanav={this.props.location.state.info}/>
            <div className="row mr-0">
            <div className="col-md-4 col-6" style={{padding:0}} id="z2">
            <img src={this.props.location.state.info.image} id="pimage"/>
            </div>
            <div className="col-md-8 col-6" style={{padding:0}} id="z3">
            
            <h2 id="pppp">{this.props.location.state.info.name}</h2>
            <p id="pricee">(Rs. {this.props.location.state.info.price})</p>
            <center>      
            <button className="productb productb1"><img src={cart}/>ADD TO CART</button>          
            <button className="productb productb1"><img src={wishlist}/>ADD TO WISHLIST</button>
            </center>       
            <div id="z4">
            <p><b>Product Description:-</b>{this.props.location.state.info.description}</p>
                      
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Productdesc;