import React,{ Component } from 'react';
import i1 from '.././images/ii1.jpeg';
import i2 from '.././images/ii2.jpg';
import i3 from '.././images/ii3.jpg';
import i4 from '.././images/ii4.jpg';
import '../stylesheet.css';

class Slide1 extends Component
{
    render()
    {
        return ( 
            <div>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img class="d-block w-100" src={i1} alt="First slide" id="tt"/>
            <div class="carousel-caption d-none d-md-block">
            <p>India aims to promote Sikh Heritage tourism through visit Nepal 2020.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" src={i2} alt="Second slide" id="tt"/>
            <div class="carousel-caption d-none d-md-block">
            <p>Thailand pulling all stops to woo Indian tourists.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" id="tt" src={i3} alt="Third slide"/>
            <div class="carousel-caption d-none d-md-block">
            <p>Cruise tourism: India clocks four-fold jump in last two years.</p>
            </div>
            </div>
            <div class="carousel-item">
            <img class="d-block w-100" id="tt" src={i4} alt="fourth slide"/>
            <div class="carousel-caption d-none d-md-block">
            <p>Planning a Weekend Trip with the Family visit the Weekend Resorts Near Mumbai for Family</p>
            </div>
            </div>
            </div>
            </div>
            </div>
        )
    }
}
export default Slide1;