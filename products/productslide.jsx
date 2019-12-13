import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import p1 from '../products/p1.jpg';
import p2 from '../products/p2.jpg';
import p3 from '../products/p3.jpg';
import p4 from '../products/p4.jpg';
import p5 from '../products/p5.jpg';
import './productslide.css';
class Productslide extends Component
{
    render()
    {
        return (
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img class="d-block w-100" src={p1} alt="First slide" id="pslide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={p2} alt="Second slide" id="pslide"/>
              </div>
              <div class="carousel-item">
                <img class="d-block w-100" src={p3} alt="Third slide" id="pslide"/>
              </div>
              <div class="carousel-item">
              <img class="d-block w-100" src={p4} alt="Third slide" id="pslide"/>
              </div>
              <div class="carousel-item">
              <img class="d-block w-100" src={p5} alt="Third slide" id="pslide"/>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        )
    }
}
export default Productslide;