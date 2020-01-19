import React,{Component} from 'react';
import Carousel from './carousel'

class Trending extends Component{
    state={
        mainpagedata:this.props.Trendingstate
    }
    render(){
        return(
            <div>
                <Carousel imagesdata={this.state.mainpagedata}/>
            </div>
        )
    }
}
export default Trending;