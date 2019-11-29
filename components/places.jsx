import React, { Component } from "react";
import '../stylesheet.css';
import {Link} from 'react-router-dom';
class Places extends Component
{
  state={
    datastate:''
  }
   render() {
    return (
      <div>
        <div className="font-small mdb-color lighten-3 pt-4" id="page">
          <div className="container">
            <div className="row" >
              <div className="col-lg-2 col-md-12 mb-4">
                <div className="view overlay z-depth-1-half"> 

                {this.props.statespass.map(i=>{
                  return <Link to={{
                   pathname: "/statedisplay",
                   state: {
                   datapass: i
                   }
                   }} >
                   <img
                   src={i.img[1]}
                   className="img-fluid"
                   alt=""
                   />
                   </Link>                              
                   }
                   )}                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Places;
