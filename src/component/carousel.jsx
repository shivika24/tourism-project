import React,{Component} from 'react';
import {Link} from 'react-router-dom';
// import './App.css';

class Carousel extends Component{
    state={
        images:this.props.imagesdata
    }
    render(){
        console.log(this.state.images)
        return(
            <div>
                
<div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
    <Link to={{
      pathname: "/overview",
      state: {
      statedatapass: this.state.images[0]
      }
      }} >
      <img className="d-block w-100" style={{height:"60vh"}} src={this.state.images[0].img[0]} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h5>{this.state.images[0].name}</h5>
      <p>Indian archipelago in the Bay of Bengal</p>
      </div>
      </Link>   
      </div>
    <div className="carousel-item">
    <Link to={{
      pathname: "/overview",
      state: {
      statedatapass: this.state.images[1]
      }
      }} >
      <img className="d-block w-100" style={{height:"60vh"}} src={this.state.images[1].img[1]}  alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h5>{this.state.images[1].name}</h5>
      <p> State bordering Pakistan, is the heart of India’s Sikh community.</p>
      </div>
      </Link>
      </div>
    <div className="carousel-item">
    <Link to={{
      pathname: "/overview",
      state: {
      statedatapass: this.state.images[2]
      }
      }} >
      <img className="d-block w-100" style={{height:"60vh"}} src={this.state.images[2].img[2]} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h5>{this.state.images[2].name}</h5>
      <p>Rajasthan is located on the northwestern side of India, where it comprises most of the wide and inhospitable Thar Desert</p>
      </div>
      </Link>
      </div>
    <div className="carousel-item">
    <Link to={{
      pathname: "/overview",
      state: {
      statedatapass: this.state.images[3]
      }
      }} >
      <img className="d-block w-100" style={{height:"60vh"}} src={this.state.images[3].img[2]} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h5>{this.state.images[3].name}</h5>
      <p>It's known for its palm-lined beaches and backwaters, a network of canals.</p>
      </div>
      </Link>
      </div>
    <div className="carousel-item">
    <Link to={{
      pathname: "/overview",
      state: {
      statedatapass: this.state.images[4]
      }
      }} >
      <img className="d-block w-100" style={{height:"60vh"}} src={this.state.images[4].img[2]} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block">
      <h5>{this.state.images[4].name}</h5>
      <p>Maharashtra, a state spanning west-central India, is best known for its fast-paced capital, Mumbai</p>
      </div>
      </Link>
      </div>


  </div>
  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            </div>
        )
    }
}
export default Carousel;