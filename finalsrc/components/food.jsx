import React,{ Component } from 'react';
import Nav1 from './nav1';
import './food.css';
class Food extends Component{
    render(){
        return(
        <div>
            <Nav1 datanav={this.props.location.state.datapass3} />
            <div className="row mr-0">
            <div className="col-md-6 col-12" style={{padding:0}}>
            <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
            <div class="carousel-inner">
            <div class="carousel-item active">
            <img src="https://www.medicalnewstoday.com/content/images/articles/324/324956/close-up-of-a-plate-of-food.jpg" class="d-block w-100" alt="..." id="foodslide"/>
            </div>
            <div class="carousel-item">
            <img src="https://static.toiimg.com/photo/68283907.cms" class="d-block w-100" alt="..." id="foodslide"/>
            </div>
            <div class="carousel-item">
            <img src="https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/foodnavigator.com/article/2017/12/06/why-sugar-and-why-so-much-who-investigates-the-food-industry-s-sweet-tooth/7624387-1-eng-GB/Why-sugar-and-why-so-much-WHO-investigates-the-food-industry-s-sweet-tooth_wrbm_large.jpg" class="d-block w-100" id="foodslide" alt="..."/>
            </div>
            </div>
            </div>
            </div>
            <div className="col-md-6 col-12" style={{padding:0}}>
            <div className="fdiv">
            <center><h2>FOOD</h2></center>
            <div className="container">
            <center><div className="f1div">
            <p style={{fontSize:"1.2vw"}}>{this.props.location.state.datapass3.food}</p>
            </div></center>
            </div>
            </div> 
            </div>
            </div>       
        </div>
        )
    }
}
export default Food;
