import React,{ Component } from 'react';
import Slide from './slide';
import Trending from './trending';
import Places from './places';
import About from './about';
import '../stylesheet.css';

class Home extends Component
{
    render()
    {
       
        return (
        <div>
        <Slide/>
        <div className="row">
        <div className="col-xl-3 col-lg-3 col-sm-12">
        <Trending/>
        </div>
        <div className="col-xl-9 col-lg-9 col-sm-12">
        <About/>
        </div>
        </div>
        <Places statespass={this.props.tour}/>        
        </div>
        )
    }
}
export default Home;