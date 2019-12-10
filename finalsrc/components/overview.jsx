import React,{ Component } from 'react';
import Nav1 from './nav1';
import Gallery from './gallery';
import './overview.css';

class Placetovisit extends Component{
    render(){
        return(
        <div>
            <Nav1 datanav={this.props.location.state.datapass1} />
            <center><h1 className="stateheading">{this.props.location.state.datapass1.name}</h1>
            <h3>CAPITAL-{this.props.location.state.datapass1.capital}</h3></center>
            <div id="statediv"> 
            <Gallery images={this.props.location.state.datapass1.img} history={this.props.location.state.datapass1.history} about={this.props.location.state.datapass1.about}/>
            <br/>
            </div>
            {console.log(this.props.location.state.datapass1)}
        </div>
        )
    }
}
export default Placetovisit;
