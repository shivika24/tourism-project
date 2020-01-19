import React, { Component } from "react";
import {Link} from 'react-router-dom';
import './stylesheets/statescard.css';
class Statescard extends Component
{
  state={
    placedata:this.props.statesplace
  }
   render() {
       console.log(this.state.placedata);
    return (
      <div id="carddivmain">
        <div className="font-small mdb-color lighten-3 pt-4 container" id="page" >
          <div>
           <center> <h1 >Most Popular Destinations</h1></center>
            <div className="row"  id="mydiv" style={{marginRight:0}}>
                {this.state.placedata.map((place,index)=>{
                  return <div className="col-lg-3 col-md-4 col-sm-12 hvr-grow " key={index} style={{marginBottom:10}}><Link to={{
                   pathname: "/overview",
                   state: {
                   statedatapass: place
                   }
                   }} >
                   <img
                   src={place.img[0]}
                   className="img-fluid"
                   id="homeimg"
                   alt=""
                   />
                   </Link></div>                            
                   }
                   )}                   
            </div>
          </div>
          <br/>
        <br/>
        </div>
        
      </div>
    );
  }
}

export default Statescard;
