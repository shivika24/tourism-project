import React,{Component} from 'react';


class Carousel extends Component{
    state={
        images:this.props.imagesdata
    }
    render(){
        console.log(this.state.images)
        return(
            <div>
                
<div id="mycarouselIndicators" className="carousel slide" data-ride="carousel">
  <ol className="carousel-indicators">
    <li data-target="#mycarouselIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#mycarouselIndicators" data-slide-to="1"></li>
    <li data-target="#mycarouselIndicators" data-slide-to="2"></li>
    <li data-target="#mycarouselIndicators" data-slide-to="3"></li>
    <li data-target="#mycarouselIndicators" data-slide-to="4"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active">    
      <img className="d-block w-100" style={{height:"300px"}} src={this.state.images[0].img[4]}  alt="First slide"/>
      </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:"300px"}} src={this.state.images[1].img[4]}  alt="Second slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:"300px"}} src={this.state.images[2].img[4]} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:"300px"}} src={this.state.images[3].img[4]} alt="Third slide"/>
    </div>
    <div className="carousel-item">
      <img className="d-block w-100" style={{height:"300px"}} src={this.state.images[4].img[4]} alt="Third slide"/>
    </div>


  </div>
  <a className="carousel-control-prev" href="#mycarouselIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#mycarouselIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
  </a>
</div>

            </div>
        )
    }
}
export default Carousel;