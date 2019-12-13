import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './displayproducts.css';
import 'hover.css/css/hover-min.css';
import Productnav from './productnav';
import Productslide from './productslide';
import Productcategories from './productcategories';
import bike from '../products/bike.png';
import statue from '../products/statue.png';
import Nav1 from './nav1';
import './products1.css';
class Product1 extends Component
{
    render()
    {
        return (
            <div>
            <Productnav datanav={this.props.location.state.datapass4} statedata={this.props.location.state.statedata}/>
            {console.log(this.props.location.state.datapass4.products)}
            <marquee id="marp">
            <img src={bike} id="mimg"/>
            <img src={statue} id="mimg"/>
            <img src={statue} id="mimg"/>
            <img src={statue} id="mimg"/>
            <img src={statue} id="mimg"/>
            <img src={statue} id="mimg"/>
            <img src={statue} id="mimg"/>
            </marquee>
            <Productslide/>
            <Productcategories arr={this.props.location.state.datapass4}/>        
            </div>
        )
    }
}
export default Product1;
//<Nav1 datanav={this.props.location.state.datapass4}/>