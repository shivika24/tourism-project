import React, { Component } from "react";
import './stylesheets/aboutpage.css'
import historylogo from '../../images/historylogo.jpg'
import aboutlogo from '../../images/aboutlogo.jpg'


class Aboutpage extends Component {
  state={   
    openstate: this.props.aboutdata  
};

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
  
  render() {
    console.log("about page");
    return (
      <div>
        <div className="row">
          <div className="col-12">
            <center>
              <h3>{this.state.openstate.name}</h3>
            </center>
            <center>
              <h3>{this.state.openstate.capital}</h3>
            </center>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-3" id="borderimg1">
            <figure className="imghvr-hinge-left" >
              <img
                src={aboutlogo}
                style={{ height: "550px" }}
                alt="example-image"
              />
              <figcaption>
                <p>{this.state.openstate.about}</p>
              </figcaption>
            </figure>
          </div>
          <div className=" col-12 col-md-6" id="borderimg1">
          <center><img src={this.state.openstate.img[0]} id="mainimg" className="img-fluid"/></center>
          </div>


          <div className="col-12 col-md-3"  id="borderimg1">
            <figure className="imghvr-hinge-left">
              <img
                src={historylogo}
                style={{ height: "550px" }}
                alt="example-image"
              />
              <figcaption>
                <p>{this.state.openstate.history}</p>
              </figcaption>
            </figure>
          </div>
          </div>
          <center>
            <div className="row container d-lg-flex d-md-none  d-sm0-none  d-none" style={{margin:0}}>
                
            <div className="col-lg-2 col-sm-4 col-4">
            <a className="hvr-ripple-out">
            <img src={this.state.openstate.img[0]}  id="iii1" className=" hvr-ripple-out img-thumbnail" style={{opacity:1}} onClick={() => this.change(this.state.openstate.img[0])}/></a>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
            <a className="hvr-ripple-out">
            <img src={this.state.openstate.img[1]} id="iii2" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change1(this.state.openstate.img[1])}/></a>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
            <a className="hvr-ripple-out">
            <img src={this.state.openstate.img[2]} id="iii3" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change2(this.state.openstate.img[2])}/></a>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
            <a className="hvr-ripple-out">
            <img src={this.state.openstate.img[3]} id="iii4" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change3(this.state.openstate.img[3])}/></a>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
            <a className="hvr-ripple-out">
            <img src={this.state.openstate.img[4]} id="iii5" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change4(this.state.openstate.img[4])}/></a>
            </div>
            <div className="col-lg-2 col-sm-4 col-4">
            <a className="hvr-ripple-out">
            <img src={this.state.openstate.img[5]} id="iii6" className="hvr-ripple-out img-thumbnail" style={{opacity:0.5}} onClick={() => this.change5(this.state.openstate.img[5])}/></a>
            </div>
            </div>
            {console.log(this.state.openstate.img[0])}
            </center>
          
        </div>
      
    );
  }
}
export default Aboutpage;
