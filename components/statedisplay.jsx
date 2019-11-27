import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Gallery from './gallery';
import './statedisplay.css';
import Card from './touristplacescard';
import image from '../images/navpic.jpeg';
import Displayproducts from './displayproducts';
import Nav1 from './nav1';

class Statedisplay extends Component{

        state={
            products:''
            }
    render(){
        return(
            <div>
    <center><h1 className="stateheading">{this.props.location.state.datapass.name}</h1></center>
    <h3 style={{marginLeft: "56vw"}}>CAPITAL-{this.props.location.state.datapass.capital}</h3>
    <div id="marqueediv">
        <marquee><b>{this.props.location.state.datapass.time}</b></marquee>
    </div>
    <div id="statediv"> 
        <Gallery images={this.props.location.state.datapass.img} history={this.props.location.state.datapass.history} about={this.props.location.state.datapass.about}/>
        <br/>
    </div>
    <div>
    <div className="row">
    <div className="col-2">
    
    <div class="card" style={{width: "15.6vw"}}>
    <img class="card-img-top" src={this.props.location.state.datapass.products[0].image} style={{height:"10vw"}}alt="Card image cap"/>
    <div class="card-body">
      <h5 class="card-title">Famous Products</h5>
      <Link to={{
        pathname: "/Displayproducts",
        state: {
        products: this.props.location.state.datapass.products
        }
        }} class="btn btn-primary">Buy</Link>
    </div>
  </div>

    </div>
    
    <div className="col-10" id="climatediv" style={{paddingRight:0,paddingLeft:0}}>
    <br/>
    <section className="section section-light" id="climatee">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <center><h2 id="climatehead">CLIMATE AND GEOGRAPHY</h2></center>
    <p id="clipara">{this.props.location.state.datapass.climate}</p>
    </div>
    </div>    
    </div>
    </section>
    </div>
    

    </div>
    </div>    


    <div id="statecards">
        <center>
            <h2>TOURIST ATTRACTIONS</h2></center>
        <Card arr={this.props.location.state.datapass.tourist}/>
    </div>
</div>

              )
    }
}
export default Statedisplay;
/*
<div  id="climatediv">
    <br/>
    <div className="container">
    <section className="section section-light" id="climatee">
    <div className="container">
    <div className="row">
    <div className="col-md-12">
    <center><h2 id="climatehead">CLIMATE AND GEOGRAPHY</h2></center>
    <p id="clipara">{this.props.location.state.datapass.climate}</p>
    </div>
    </div>    
    </div>
    </section>
    </div>
        </div>
*/