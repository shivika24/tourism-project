import React, { Component } from "react";
import Aboutpage from "./aboutpage";
import Smallnav from "./smallnav";
class Overview extends Component{
    state={
        openstate:this.props.location.state.statedatapass
    }
    render(){
       return(
           <div>
            <Smallnav navstatedata={this.state.openstate}/>
            <Aboutpage  aboutdata={this.state.openstate}/>
            </div>
       );
    }
}
export default Overview;