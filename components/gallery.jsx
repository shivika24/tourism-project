import React,{ Component } from 'react';
import './gallery.css';
import 'hover.css/css/hover-min.css';
class Gallery extends Component
{
    constructor()
    {
        super();
        this.change=this.change.bind(this);
        this.change1=this.change1.bind(this);
        this.change2=this.change2.bind(this);
        this.change3=this.change3.bind(this);
        this.change4=this.change4.bind(this);
        this.change5=this.change5.bind(this);
    }
    change(x)
    {
        document.getElementById("mainimg").src=x;
        document.getElementById("iii1").style.opacity=1;
        document.getElementById("iii2").style.opacity=0.5;
        document.getElementById("iii3").style.opacity=0.5;
        document.getElementById("iii4").style.opacity=0.5;
        document.getElementById("iii5").style.opacity=0.5;
        document.getElementById("iii6").style.opacity=0.5;
    }
    change1(x)
    {
        document.getElementById("mainimg").src=x;
        document.getElementById("iii2").style.opacity=1;
        document.getElementById("iii1").style.opacity=0.5;
        document.getElementById("iii3").style.opacity=0.5;
        document.getElementById("iii4").style.opacity=0.5;
        document.getElementById("iii5").style.opacity=0.5;
        document.getElementById("iii6").style.opacity=0.5;
    }
    change2(x)
    {
        document.getElementById("mainimg").src=x;
        document.getElementById("iii3").style.opacity=1;
        document.getElementById("iii1").style.opacity=0.5;
        document.getElementById("iii2").style.opacity=0.5;
        document.getElementById("iii4").style.opacity=0.5;
        document.getElementById("iii5").style.opacity=0.5;
        document.getElementById("iii6").style.opacity=0.5;
    }
    change3(x)
    {
        document.getElementById("mainimg").src=x;
        document.getElementById("iii4").style.opacity=1;
        document.getElementById("iii1").style.opacity=0.5;
        document.getElementById("iii3").style.opacity=0.5;
        document.getElementById("iii2").style.opacity=0.5;
        document.getElementById("iii5").style.opacity=0.5;
        document.getElementById("iii6").style.opacity=0.5;
    }
    change4(x)
    {
        document.getElementById("mainimg").src=x;
        document.getElementById("iii5").style.opacity=1;
        document.getElementById("iii1").style.opacity=0.5;
        document.getElementById("iii3").style.opacity=0.5;
        document.getElementById("iii4").style.opacity=0.5;
        document.getElementById("iii2").style.opacity=0.5;
        document.getElementById("iii6").style.opacity=0.5;
    }
    change5(x)
    {
        document.getElementById("mainimg").src=x;
        document.getElementById("iii6").style.opacity=1;
        document.getElementById("iii1").style.opacity=0.5;
        document.getElementById("iii3").style.opacity=0.5;
        document.getElementById("iii4").style.opacity=0.5;
        document.getElementById("iii5").style.opacity=0.5;
        document.getElementById("iii2").style.opacity=0.5;
    }
    render()
    {
        return ( <div>
            <div className="row">
            <div className="col-xl-3 col-xl-3 col-lg-12">
            <div className="containergal" style={{width: "22vw",height:"25vw"}}>
            <img className="image" src="https://www.99bestquoteswishes.com/wp-content/uploads/2015/12/protecting-your-reputation-About-Us1.jpg" style={{marginLeft:"10px"}} alt="Card image cap"/>
            <div className="middle">
            <div className="textabout" style={{marginLeft:"19px"}}>{this.props.about}</div>
            </div>
           </div>
           </div>         


            <div className="col-xl-6 col-xl-6 col-lg-12" style={{marginTop:"1vw",marginBottom:"1vw"}}>
            <center><img src={this.props.images[0]} id="mainimg" className="img-fluid"/></center>
            </div>

            <div className="col-xl-3 col-lg-3 col-sm-12">
            <div className="containergal" style={{width: "22vw",height:"25vw"}}>
            <img className="image" src="https://carlisletheacarlisletheatre.org/images/history-channel-logo-transparent-5.jpg" alt="Card image cap"/>
                       
            <div className="middle">
            <div className="textabout">{this.props.history}</div>
            </div>
           </div>
           </div>
           </div>
  

            <div className="row">
            <div className="col-2">
            <a className="hvr-ripple-out">
            <img src={this.props.images[0]}  id="iii1" className=" hvr-ripple-out img-thumbnail" style={{opacity:1}} onClick={() => this.change(this.props.images[0])}/></a>
            </div>
            <div className="col-2">
            <a className="hvr-ripple-out">
            <img src={this.props.images[1]} id="iii2" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change1(this.props.images[1])}/></a>
            </div>
            <div className="col-2">
            <a className="hvr-ripple-out">
            <img src={this.props.images[2]} id="iii3" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change2(this.props.images[2])}/></a>
            </div>
            <div className="col-2">
            <a className="hvr-ripple-out">
            <img src={this.props.images[3]} id="iii4" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change3(this.props.images[3])}/></a>
            </div>
            <div className="col-2">
            <a className="hvr-ripple-out">
            <img src={this.props.images[4]} id="iii5" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change4(this.props.images[4])}/></a>
            </div>
            <div className="col-2">
            <a className="hvr-ripple-out">
            <img src={this.props.images[5]} id="iii6" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change5(this.props.images[5])}/></a>
            </div>
            </div>
            {console.log(this.props.images[0])}
            </div>
            
            )
    }
}
export default Gallery;