import React, { Component } from "react";
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom';
import Nav1 from './nav1';
import Statedisplay from "./statedisplay";
class Newc extends Component
{
    render()
    {
        return (
        <BrowserRouter>
        <Nav1 arr={this.props.location.state.arr}/>
        </BrowserRouter>
        )
    }
}
export default Newc;