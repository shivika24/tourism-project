import React,{ Component } from 'react';
import Nav1 from './nav1';
import Card from './touristplacescard';
import './placestovisit.css';
class Placetovisit extends Component{
    render(){
        return(
        <div>
            <Nav1 datanav={this.props.location.state.datapass2}/>
            <div id="statecards">
            <center>
                <h2>TOURIST ATTRACTIONS</h2></center>
                <Card arr={this.props.location.state.datapass2.tourist}/>
            </div>
            {console.log(this.props.location.state.datapass2)}
        </div>
        )
    }
}
export default Placetovisit;