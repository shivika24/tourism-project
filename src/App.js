import React,{Component} from 'react';
import Form from './components/registerationform';
import Home from './components/home';
import Navbar from './components/navbar';
import {BrowserRouter,Route} from 'react-router-dom';
import Tourism from './components/tourismform';
import Add from './components/addtourist';
import Footer from './components/footer';
import States from './components/states';
import Statedisplay from './components/statedisplay';
import Gallery from './components/gallery';

class App extends Component
{
  state={
    tour:[],
    loading: false
    }
    async componentDidMount() {
      const url = 'http://localhost:3004/state';
      const response = await fetch(url);
      const data = await response.json();
      this.setState({tour:data,loading:true});
    }
  render()
  {
    return (
     <BrowserRouter>
     <Navbar/>

     <switch>
     <Route path="/" exact render={() => <Home tour={this.state.tour}/>}/>
     <Route path="/Home" render={() => <Home tour={this.state.tour}/>}/>
     <Route path="/Form" component={Form}/>
     <Route path="/Tourism" component={Tourism}/>
     <Route path="/Addtourist" component={Add}/>
     <Route path="/state" render={() => <States tour={this.state.tour}/>}/>
     <Route path="/statedisplay" component={Statedisplay}/>
     <Route path="/gallery" component={Gallery}/>
     </switch>

     <Footer/>
     </BrowserRouter>      
    )
  }
}
export default App;
