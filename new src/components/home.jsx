import React,{ Component } from 'react';
import Slide from './slide';
import Search from './search';
import Trending from './trending';
import Places from './places';
import About from './about';
import '../stylesheet.css';
import './home.css';

class Home extends Component
{
    constructor()
    {
        super();
        this.state={
            data:''
        }
        this.f1=this.f1.bind(this);
    }
    f1(e)
    {
        e.preventDefault();
        this.setState({data:e.target.value})
    }
    render()
    {
        let city=this.props.tour.filter((event,index)=>{
            return (
                event.name.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1
            )
        })
        return (
        <div>
       <div>
       <Slide/>
       
       <input className="glyphicon glyphicon-search"  type="text"  id="ssearch" placeholder="Search by state name" name="Search" value={this.state.data} onChange={(e)=>this.f1(e)}/>
       
       </div>
        <div className="row" style={{marginRight:0}}  statespass={this.props.tour}>
        <div className="col-xl-3 col-lg-3 col-sm-12" style={{padding:0}}>
        <Trending/>
        </div>
        <div className="col-xl-9 col-lg-9 col-sm-12" style={{padding:0}}>
        <About/>
        </div>
        </div>
        <Places statespass={city}/>  
        </div>
        )
    }
}
export default Home;