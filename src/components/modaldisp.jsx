import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'hover.css/css/hover-min.css';
class Modaldisp extends Component
{
    constructor()
    {
        super();
        this.f1=this.f1.bind(this);
    }
    f1(name,image,info,loc)
    {
      document.getElementById("i1").src=image;
      document.getElementById("i3").innerHTML=info;
      document.getElementById("i2").innerHTML=name;
      document.getElementById("i4").href=loc;
    }
    render()
    {
        return (
            <div className="col-2"><button className="hvr-float-shadow btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>this.f1(this.props.name,this.props.image,this.props.info,this.props.location)}>See More</button></div>
        )
    }  
}
export default Modaldisp;