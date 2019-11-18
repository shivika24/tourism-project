import React,{ Component } from 'react';
import Gallery from './gallery';
import './statedisplay.css';
import Card from './touristplacescard';
import image from '../images/navpic.jpeg';

class Statedisplay extends Component{
    render(){
    console.log(this.props.location.state.datapass.img)
        return(
            <div>
    <center>
        <h1 className="stateheading">{this.props.location.state.datapass.name}</h1></center>
    <h3 style={{marginLeft: "56vw"}}>CAPITAL-{this.props.location.state.datapass.capital}</h3>
    <div id="marqueediv">
        <marquee><b>{this.props.location.state.datapass.time}</b></marquee>
    </div>
    <div id="statediv">
        <Gallery images={this.props.location.state.datapass.img} history={this.props.location.state.datapass.history} about={this.props.location.state.datapass.about}/>
        <br/>
        </div>

    <div id="statecards">
        <center>
            <h2>TOURIST ATTRACTIONS</h2></center>
        <Card arr={this.props.location.state.datapass.tourist}/>
    </div>
</div>
              )
    }
}
export default Statedisplay;