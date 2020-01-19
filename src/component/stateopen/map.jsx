import React, { Component } from "react";
import Smallnav from "./smallnav";
class Map extends Component {
 
  render() {
    return (
     <div id="map">
     <Smallnav navstatedata={this.props.location.state.statedatapass}/>
     map here
     </div>
    );
  }
}
export default Map;
