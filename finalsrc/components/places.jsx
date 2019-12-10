import React, { Component } from "react";
import '../stylesheet.css';
import {Link} from 'react-router-dom';
import './places.css';
class Places extends Component
{
  state={
    datapass1:''
  }
   render() {
    return (
      <div>
        <div className="font-small mdb-color lighten-3 pt-4" id="page">
          <div>
            <div className="row"  id="mydiv" style={{marginRight:0}}>
                {this.props.statespass.map(i=>{
                  return <div className="col-lg-2 col-md-4 col-sm-12 hvr-grow" style={{marginBottom:10}}><Link to={{
                   pathname: "/overview",
                   state: {
                   datapass1: i
                   }
                   }} >
                   <img
                   src={i.img[0]}
                   className="img-fluid"
                   id="homeimg"
                   alt=""
                   />
                   </Link></div>                            
                   }
                   )}                   
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Places;
