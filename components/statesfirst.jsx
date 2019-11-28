import React,{ Component } from 'react';
import Stateslide from './stateslide';
import Title from './title';
import '../bg.css';
class Statesfirst extends Component
{
    render()
    {
        return (
            <div>
            <Title name={this.props.tour.name}/>
            <Stateslide img={this.props.tour.img}/>
            <p>{this.props.tour.history}</p>                      
            </div>
        )
    }
}
export default Statesfirst;