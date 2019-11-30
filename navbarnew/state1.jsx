import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Nav1 from './nav1';
import Gallery from './gallery';
class State1 extends Component
{
    render()
    {
        return (
        <div>
        <Nav1/>
        <div  id="statediv">
        <Gallery images={this.props.location.state.datapass1.img} history={this.props.location.state.datapass1.history} about={this.props.location.state.datapass1.about}/>
        <br/>
        </div>
        </div>
        )
    }
}
export default State1;