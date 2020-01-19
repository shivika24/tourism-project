import React,{Component} from 'react';
import Carousel from './carousel'
import Trending from './mainpage/trending';
import About from './mainpage/about';
import Statescard from './mainpage/statescard';
import './stylesheets/mainpage.css'

// import './App.css';

class Mainpage extends Component{
    state={
        mainpagedata:this.props.statedatapass
    }
    render(){
        return(
            <div>

               <div className="parallax">
               </div>
 
                <div className="row" div id="dd" style={{marginTop:"10px"}}>
                    <div className="col-12">
                    <Carousel imagesdata={this.state.mainpagedata}/>
                    </div>
                </div>
                <div className="row" style={{marginTop:"10px"}}>
                    <div className="col-sm-12 col-lg-4">
                    <Trending  Trendingstate={this.state.mainpagedata}/>
                    </div>
                    <div className="col-sm-12  col-lg-8">
                    <About imagesdata={this.state.mainpagedata}/>
                    </div>
                </div>

                <div className="parallax1">
                </div>

                <div className="row" style={{marginTop:"10px"}}>
                    <div className="col-12">
                        <Statescard statesplace={this.state.mainpagedata}/>
                    </div>
                </div>
                <div className="parallax2">
               </div>
            </div>
        )
    }
}
export default Mainpage;