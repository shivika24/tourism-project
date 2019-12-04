import React,{ Component } from 'react';
import Nav1 from './nav1';
import './besttime.css';


class Besttime extends Component{
    constructor()
    {
        super();
        this.state={
            cli:[],
            lat:'',
            long:'',
            loading:true
        }
        this.fun1=this.fun1.bind(this);
    }
    componentDidMount() {
        fetch('http://localhost:3004/loc') 
        .then(res =>{return res.json()})  
        .then(res =>{
            
            for(let i=0;i<res.length;i++)
            {
             //console.log(res[i].state)
            if(res[i].state==this.props.location.state.datapass6.name)
            {
                this.state.lat=res[i].lat;
                this.state.long=res[i].long;
                break;
            }
           }
          this.fun1(this.state.lat,this.state.long);
        })
      }
      async fun1(a,b)
      {
        const data=await fetch('https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/c4c85d231b9981e2cfee8e119c2e8352/'+a+','+b) 
        const newd=await data.json();
        console.log(newd)
        this.setState({cli:newd,loading:false})
        //console.log(this.state.cli)
      }
    render(){
        return(
            <div>
            {this.state.loading||! this.state.cli ? (
                <div>{console.log('loading')}</div> ):(
                    <div>
                    {console.log(this.state.cli.currently)}
                        <Nav1 datanav={this.props.location.state.datapass6}/>
                        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
                        <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img src={this.props.location.state.datapass6.img[0]} class="d-block w-100" alt="..." id="bbest"/>
                        </div>
                       <div class="carousel-item">
                       <img src={this.props.location.state.datapass6.img[1]} class="d-block w-100" alt="..." id="bbest"/>
                       </div>
                       <div class="carousel-item">
                       <img src={this.props.location.state.datapass6.img[2]} class="d-block w-100" alt="..." id="bbest"/>
                       </div>
                       <div class="carousel-item">
                       <img src={this.props.location.state.datapass6.img[3]} class="d-block w-100" alt="..." id="bbest"/>
                       </div>
                       <div class="carousel-item">
                       <img src={this.props.location.state.datapass6.img[4]} class="d-block w-100" alt="..." id="bbest"/>
                       </div>
                       <div class="carousel-item">
                       <img src={this.props.location.state.datapass6.img[5]} class="d-block w-100" alt="..." id="bbest"/>
                       </div>
                       </div>
                       </div>
                       <div className="row mr-0">
                       <div className="col-md-8 col-12" style={{padding:0}}>
                       <div className="bbest1">
                       <br/>
                       <br/>
                       <div className="container">
                       <div className="bbestinfo">
                       <center><h2>CLIMATE</h2></center>
                       <p className="bbestp">{this.props.location.state.datapass6.climate}</p> 
                       <center><h2>BEST TIME TO VISIT</h2></center>
                       <p className="bbestp">{this.props.location.state.datapass6.time}</p>
                       </div>
                       </div>
                       <br/>          
                       </div>
                       </div>
                       <div className="col-md-4 col-12" style={{padding:0}}>
                       <div class="card" style={{height:"100%"}}>
                       <div class="card-header">
                       <center>WEATHER</center>
                       </div>
                       <div class="card-body">
                       <div>
            
                       </div>
                       </div>
                       </div>
                       </div>
                       </div>
                       
                    </div>
                )
            }
            </div>
           
       
        )
    }
}
export default Besttime;
