import React,{ Component } from 'react';
class Modaldisp extends Component
{
    constructor()
    {
        super();
        this.f1=this.f1.bind(this);
    }
    f1(name,image,info)
    {
      document.getElementById("i1").src=image;
      document.getElementById("i3").innerHTML=info;
      document.getElementById("i2").innerHTML=name;
    }
    render()
    {
        return (
            <div className="col-2"><button className="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter" onClick={()=>this.f1(this.props.name,this.props.image,this.props.info)}>See More</button></div>
        )
    }  
}
export default Modaldisp;