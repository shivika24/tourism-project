import React,{ Component } from 'react';
import image1 from '.././images/i1.jpg';
import image2 from '.././images/i2.jpg';
import image3 from '.././images/i3.jpg';
import image4 from '.././images/kerela1.jpg';
import image5 from '.././images/i5.jpg';
import image6 from '.././images/kerela.jpg';
import image7 from '.././images/i7.jpg';
import image8 from '.././images/i8.jpg';
import image9 from '.././images/i9.jpeg';
import {Link} from 'react-router-dom';
import '../stylesheet.css';
class Slide extends Component
{
    render()
    {
        return (<div>
    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100" src={image1} alt="First slide" id="slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={image2} alt="Second slide" id="slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" src={image3} alt="Third slide" id="slide"/>
    </div>
    <div className="carousel-item">
    <img className="d-block w-100" src={image9} alt="fourth slide" id="slide"/>
    </div> 
    <div className="carousel-item">
    <img className="d-block w-100" src={image4} alt="fifth slide" id="slide"/>
  </div>
  <div className="carousel-item">
  <img className="d-block w-100" src={image5} alt="sisth slide" id="slide"/>
  </div>
   <div className="carousel-item">
   <img className="d-block w-100" src={image6} alt="seventh slide" id="slide"/>
   </div>
   <div className="carousel-item">
   <img className="d-block w-100" src={image7} alt="eight slide" id="slide"/>
   </div>  
   <div className="carousel-item">
   <img className="d-block w-100" src={image8} alt="eight slide" id="slide"/>
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
export default Slide;