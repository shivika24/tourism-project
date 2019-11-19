import React,{Component} from 'react';
import Form from './components/registerationform';
import Home from './components/home';
import Navbar from './components/navbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Tourism from './components/tourismform';
import Addtourist from './components/addtourist';
import Footer from './components/footer';
import States from './components/states';
import Statedisplay from './components/statedisplay';
import Gallery from './components/gallery';
import Addproducts from './components/addfamousproducts';

class App extends Component
{
  constructor()
  {
  super();
  this.state={
    tour:[],
    loading: false,
    arr1:[]
    }
    this.add=this.add.bind(this);
    this.data=this.data.bind(this);
  }
  add(prop)
  {

  }
     componentDidMount() {
      /*const url = 'http://localhost:3004/state';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({tour:data,loading:true});*/
      fetch('http://localhost:3004/state') 
      .then(res =>{return res.json()})  
      .then(res =>{
        setTimeout(()=>{ 
         this.setState({tour:res});
        },1)
      })
    }
    data(arr)
    {
      this.setState({arr1:arr});
      /*  const e={
        name:elem.name,
        info:elem.info,
        images:elem.images,
        location:elem.location
      }
      this.state.arr.push(e);
      this.setState({
        arr:this.state.arr})*/
    }
  render()
  {
    return (
     <BrowserRouter>
     <Navbar tour1={this.state.tour}/>
     <Switch>
     <Route path="/" exact render={() => <Home tour={this.state.tour}/>}/>
     <Route path="/Home" render={() => <Home tour={this.state.tour}/>}/>
     <Route path="/Form" component={Form}/>
     {console.log(this.state.arr1)}
     <Route path="/Tourism" render={() => <Tourism tour={this.state.tour} onadd={this.add} data={this.state.arr1}/>}/>
     <Route path="/Addtourist" render={() => <Addtourist tour={this.state.tour} ondata={this.data}/>}/>
     <Route path="/state" render={() => <States tour={this.state.tour}/>}/>
     <Route path="/statedisplay" component={Statedisplay}/>
     <Route path="/gallery" component={Gallery}/>
     <Route path="/Addproducts" component={Addproducts}/>
     </Switch>

     <Footer/>
     </BrowserRouter>      
    )
  }
}
export default App;
