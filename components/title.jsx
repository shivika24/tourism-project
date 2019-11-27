import React,{ Component } from 'react';
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