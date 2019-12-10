import React,{ Component } from 'react';
import Slide1 from './slide1';
import {Link} from 'react-router-dom';
import './trending.css';
class Trending extends Component
{
    render()
    {
        return (
            <div className="card bg-light" id="trend">                      
            <div className="card-body">
            <p><center><b>WHAT'S TRENDING</b></center></p>
            <Slide1/>
            </div>
            </div>
        )
    }
}
export default Trending;