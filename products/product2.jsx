import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Productnav from './productnav';
import heart from '../images/heart.png';
import cart from '../images/cart1.png';
import eye from '../images/eye1.png';
import './product2.css';
class Product2 extends Component
{
    state={
        info:''
    }
    render()
    {
        return (
            <div>
            <Productnav datanav={this.props.location.state.data2}/>

            <div class="dropdown" style={{marginLeft:"1050px"}}>
            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
             Sort By:Recommended
             </button>
             <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
             <button class="dropdown-item" type="button">Sort By: Price , high to low</button>
            <button class="dropdown-item" type="button">Sort By: Price , low to high</button>
             <button class="dropdown-item" type="button">Sort By: What's New</button>
             <button class="dropdown-item" type="button">Sort By: Alphabetically,A-Z</button>
             <button class="dropdown-item" type="button">Sort By: Alphabetically,Z-A</button>
            </div>
            </div>
                <div className="row m-0 p-0" style={{padding:0}} id="z1">
                {this.props.location.state.data1.map((index)=>{
                return <div className="col-md-3" id="productcartid" style={{margin:0}}>
                <div class="card" id="productcard" style={{width:"18rem"}}>
                <img class="card-img-top" src={index.image} alt="Card image cap" id="productcartimage"/>
                <div>
                <p id="m100">{index.name}<br/>
                Rs. {index.price}</p>
                </div>
                <div className="row" id="middle1">
                <div className="col-4">
                <img src={heart}/>
                </div>
                <div className="col-4">
                <Link to={{
                    pathname: "/productdesc",
                    state: {
                    info:index
                    }
                    }} >                
                <img src={eye}/>
                </Link>
                </div>
                <div className="col-4">
                <img src={cart}/>
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