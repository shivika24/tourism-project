import React,{ Component } from 'react';
import Nav1 from './nav1';
import './besttime.css';


class Besttime extends Component{
    render(){
        return(
        <div>
            <Nav1 datanav={this.props.location.state.datapass6}/>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src={this.props.location.state.datapass6.img[0]} class="d-block w-100" alt="..." id="bbest"/>
            </div>
           <div class="carousel-item">
           <img src={this.props.location.state.datapass6.img[1]} class="d-block w-100" alt="..." id="bbest"/>
           </div>
           <div class="carousel-item">
           <img src={this.props.location.state.datapass6.img[2]} class="d-block w-100" alt="..." id="bbest"/>
           </div>
           <div class="carousel-item">
           <img src={this.props.location.state.datapass6.img[3]} class="d-block w-100" alt="..." id="bbest"/>
           </div>
           <div class="carousel-item">
           <img src={this.props.location.state.datapass6.img[4]} class="d-block w-100" alt="..." id="bbest"/>
           </div>
           <div class="carousel-item">
           <img src={this.props.location.state.datapass6.img[5]} class="d-block w-100" alt="..." id="bbest"/>
           </div>
           </div>
           </div>
           <div className="bbest1">
           <br/>
           <br/>
           <div className="container">
           <div className="bbestinfo">
           <center><h2>CLIMATE</h2></center>
           <p className="bbestp">{this.props.location.state.datapass6.climate}</p>
           <center><h2>BEST TIME TO VISIT</h2></center>
           <p className="bbestp">{this.props.location.state.datapass6.time}</p>
           </div>
           </div>
           <br/>
          
           </div>
        </div>
        )
    }
}
export default Besttime;
