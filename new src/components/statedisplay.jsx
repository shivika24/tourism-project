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
            <Nav1 datanav={this.props.location.state.datapass}/>
    <center><h1 className="stateheading">{this.props.location.state.datapass.name}</h1>
    <h3>CAPITAL-{this.props.location.state.datapass.capital}</h3></center>
    <div id="statediv"> 
        <Gallery images={this.props.location.state.datapass.img} history={this.props.location.state.datapass.history} about={this.props.location.state.datapass.about}/>
        <br/>
    </div>
    <div>

    <div className="row mr-0">
    <div className="col-4">
    
    <div className="card">
    <img className="card-img-top" src={this.props.location.state.datapass.products[0].image} style={{height:"10vw"}}alt="Card image cap"/>
    <div className="card-body">
      <h5 className="card-title">Famous Products</h5>
      <Link to={{
        pathname: "/Displayproducts",
        state: {
        products: this.props.location.state.datapass.products
        }
        }} className="btn btn-primary w-100">Buy</Link>
    </div>
  </div>

    </div>
    
    <div className="col-8" id="climatediv" style={{paddingRight:0,paddingLeft:0}}>
    <br/>
    <section className="section section-light" id="climatee">
    <div className="container">
    <div className="row mr-0">
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
