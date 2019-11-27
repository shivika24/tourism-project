import React,{Component} from 'react';
import Registeration from './components/registerationform';
import Login from './components/loginform';
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
import Displayproducts from './components/displayproducts';
import nav1 from './components/nav1';
import Newc from './components/newc';
import Climate from './components/climate';

class App extends Component
{
  constructor()
  {
  super();
  this.state={
    tour:[],
    loading: false,
    arr1:[],
    arr2:[]
    }
    this.add=this.add.bind(this);
    this.data=this.data.bind(this);
    this.data1=this.data1.bind(this);
  }
  add(prop)
  {
    let t={id:prop.id,name:prop.name,capital:prop.capital,about:prop.about,climate:prop.climate,history:prop.history,time:prop.time,img:prop.img,products:prop.products,tourist:prop.tourist,food:prop.food};
    //this.state.books.push(t);
    //this.setState({t});  
     fetch('http://localhost:3004/state',{
      method: "POST",
      headers: {
      "Content-Type":"application/json",
      },
      body: JSON.stringify(t)
    })
    .then(res => {
      if(res.ok) {
      return res.json();
      }
    })
    .then(res => {
      alert(`NEW STATE:${JSON.stringify(res)} ADDED SUCCESFULLY!!`);
    })
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
    }
    data1(ar)
    {
      this.setState({arr2:ar});
    }
  render()
  {     
     return (
     <BrowserRouter>
     <Navbar tour1={this.state.tour}/>
     <Switch>
     <Route path="/" exact render={() => <Home tour={this.state.tour}/>}/>
     
     <Route path="/Home" render={() => <Home tour={this.state.tour}/>}/>
     <Route path="/Registeration" component={Registeration}/>
     {console.log(this.state.arr1)}
     {console.log(this.state.arr2)}
     <Route path="/Tourism" render={() => <Tourism tour={this.state.tour} onadd={this.add} data={this.state.arr1} data1={this.state.arr2}/>}/>
     <Route path="/Addtourist" render={() => <Addtourist tour={this.state.tour} ondata={this.data}/>}/>
     <Route path="/state" render={() => <States tour={this.state.tour}/>}/>
     <Route path="/statedisplay" component={Statedisplay}/>
     <Route path="/gallery" component={Gallery}/>
     <Route path="/Addproducts" render={() => <Addproducts tour={this.state.tour} ondata1={this.data1}/>}/>
     <Route path="/Login" component={Login}/>
     <Route path="/Displayproducts" component={Displayproducts}/>
     <Route path="/nav1" component={nav1}/>
     <Route path="/newc" component={Newc}/>
     </Switch>

     <Footer/>
     </BrowserRouter>      
    )
  }
}
export default App;
