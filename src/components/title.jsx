import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import '../bg.css';
class Title extends Component
{
    render()
    {
        return (
            <h1 className="mainHeading">{this.props.name}</h1>
        )
    }
}
export default Title;