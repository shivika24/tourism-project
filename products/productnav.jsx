import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './productnav.css';
import cart from '../images/cart1.png';
import wishlist from '../images/wishlist.png';
import profile from '../images/profile.png';
class Productnav extends Component
{
    state={
        datapass1:this.props.datanav,
        datapass2:this.props.datanav,
        datapass3:this.props.datanav,
        datapass4:this.props.datanav,
        datapass5:this.props.datanav,
        datapass6:this.props.datanav,
      }
    render() 
    {
        return (
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
           
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <Link class="nav-link" to={{
                  pathname: "/overview",
                  state: {
                  datapass1: this.state.datapass1,
                  statedata:this.props.statedata             
                  }
                  }}>Overview <span class="sr-only">(current)</span></Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={{
                  pathname: "/placetovisit",
                  state: {
                  datapass2: this.state.datapass2,
                  statedata:this.props.statedata     
                  }
                  }}>Places To Visit</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to={{
                  pathname: "/food",
                  state: {
                  datapass3: this.state.datapass3,
                  statedata:this.props.statedata     
                  }
                  }}>Food</Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to={{
                pathname: "/products",
                state: {
                datapass4: this.state.datapass4,
                statedata:this.props.statedata     
                }
                }}>Shopping</Link>
            </li> 
              <li class="nav-item">
              <Link class="nav-link" to={{
                pathname: "/besttime",
                state: {
                datapass5: this.state.datapass5,
                statedata:this.props.statedata     
                }
                }}>Climate & Geography</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link">Map View</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link" to={{
              pathname: "/besttime",
              state: {
              datapass5: this.state.datapass5,
              statedata:this.props.statedata     
              }
              }}>Best Time To Visit</Link>
          </li>
            </ul>
          </div>
          <a class="navbar-brand" href="#">
          <img src={profile} className="my-2 my-sm-0 cart" alt=""/>
          </a>
          <a class="navbar-brand" href="#">
          <img src={wishlist} className="my-2 my-sm-0 cart" alt=""/>
          </a>
          <a class="navbar-brand" href="#">
         <img src={cart} className="my-2 my-sm-0 cart" alt=""/>
         </a>
         
          </nav>                 

        )
    }
}
export default Productnav;


