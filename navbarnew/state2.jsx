import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Nav1 from './nav1';
import Card from './touristplacescard';
import './state2.css';
class State2 extends Component
{
    render()
    {
        return (
        <div>
        <Nav1/>
        <div id="statecards">
        <center>
            <h2>TOURIST ATTRACTIONS</h2></center>
            
    </div>
        </div>
        )
    }
}
export default State2;