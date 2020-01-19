import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import './productnav.css';
import Search from './search';
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
        // var currentLocation = this.props.routes[this.props.routes.length - 1];
        // console.log(currentLocation);
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          <a className="navbar-brand" href="#">
          <i className="fas fa-user-alt"></i>
          </a>
          <a className="navbar-brand" href="#">
          <i className="far fa-bookmark"></i>
          </a>
          <a className="navbar-brand" href="#">
          <i className="fas fa-shopping-cart"></i>
         </a>
         
          </nav>                 

        )
    }
}
export default Productnav;


