import React, { Component } from "react";
import Smallnav from "./smallnav";
class Placestovisit extends Component {
  state={
    placedata:this.props.location.state.statedatapass
  }
  funcshow=(place)=>{
    document.getElementById('placename').innerHTML=place.name;
    document.getElementById('placeimg').src=place.images;
    document.getElementById('placeimg').alt=place.name;
    document.getElementById('placeinfo').innerHTML=place.info;
    document.getElementById('placelocation').href=place.location;
  }
  render() {
    console.log(this.state.placedata.tourist[0]);

    return (
      <div>
     <div id="besttime">
     <Smallnav navstatedata={this.props.location.state.statedatapass}/>
     </div>
     <div className="row" style={{marginTop:"15px"}}>
       <div className="col-12 col-md-4">
       <div className="card">
  <img className="card-img-top" src={this.state.placedata.tourist[0].images} alt={this.state.placedata.tourist[0].name} id="placeimg"/>
  <div className="card-body">
    <h5 className="card-title" id="placename">{this.state.placedata.tourist[0].name}</h5>
    <p className="card-text" id="placeinfo">{this.state.placedata.tourist[0].info}</p>
  </div>
  <div className="card-body">
    <a href={this.state.placedata.tourist[0].location} className="card-link" id="placelocation">Location</a>
  </div>
</div>
       </div>
       <div className="col-12 col-md-8" style={{ height:"80vh",overflow: "scroll"}}>
         {
           this.state.placedata.tourist.map((data,index)=>{
           
             return <div onClick={()=>this.funcshow(data)} key={index} style={{width:"20vw" ,minWidth: "300px", float:"left", minHeight:"320px"}}>
               <img src={data.images} alt={data.name} className="img-thumbnail" style={{minHeight:"320px"}} ></img>
               <h4>{data.name}</h4>
             </div>

           })
         }
       </div>
     </div>
     </div>
      
    );
  }
}
export default Placestovisit;
