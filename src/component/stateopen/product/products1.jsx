import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './displayproducts.css';
import 'hover.css/css/hover-min.css';
import Productnav from './productnav';
import Productslide from './productslide';
import Productcategories from './productcategories';
import './products1.css';
class Product1 extends Component
{
    
    render()
    {
        return (
            <div>
            <Productnav datanav={this.props.location.state.statedatapass} statedata={this.props.location.state.statedatapass}/>

            {console.log(this.props.location.state.statedatapass.products)}
            <marquee id="marp">
            <img src="images/products/bike.png" id="mimg"/>
            <img src="images/products/statue.png" id="mimg"/>
            <img src="images/products/statue.png" id="mimg"/>
            <img src="images/products/statue.png" id="mimg"/>
            <img src="images/products/statue.png" id="mimg"/>
            <img src="images/products/statue.png" id="mimg"/>
            <img src="images/products/statue.png" id="mimg"/>
            </marquee>
            
            
            <Productslide/>
            <Productcategories arr={this.props.location.state.statedatapass}/>        
            </div>
        )
    }
}
export default Product1;
//<Nav1 datanav={this.props.location.state.datapass4}/>