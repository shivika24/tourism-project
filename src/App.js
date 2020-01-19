import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Navbar from "./component/navbar";
import Footer from "./component/footer";
import Mainpage from "./component/mainpage";

import Registeration from "./component/tourism_department/registerationform";
import Tourismdataform from "./component/tourism_department/tourismdataform";
import Addtourist from "./component/tourism_department/tourismdataform/addtourist";
import Addproducts from "./component/tourism_department/tourismdataform/addfamousproducts";

import Overview from "./component/stateopen/overview";
import Aboutpage from "./component/stateopen/aboutpage";
import BestTime from "./component/stateopen/besttime";
import Map from "./component/stateopen/map";
import Famousfood from "./component/stateopen/famousfood";
import Placestovisit from "./component/stateopen/placestovisit";

import Displayproducts from "./component/stateopen/product/products1";
import Product2 from "./component/stateopen/product/product2";
import Productdesc from './component/stateopen/product/productdesc';

import First from './component/adminportal/first';
import Form from './component/adminportal/addstate';
import Displaydata from './component/adminportal/displaydata';
import Edittourist from './component/adminportal/edittourist';
import Editproduct from './component/adminportal/editproduct';
import Displaytourist from "./component/adminportal/displaytourist";
import Displayproduct from './component/adminportal/displayproduct';
var i,cat,val,idd;
class App extends Component {
  state = {
    loading: false,
    statedata: null
  };

  constructor() {
    super();
    this.state = {
      tour: [],
      loading: false,
      arr1: [],
      arr2: [],
      myarr:[],
      myarr1:[],
      myarr2:[]
    };
    this.add = this.add.bind(this);
    this.data = this.data.bind(this);
    this.data1 = this.data1.bind(this);
    this.selected=this.selected.bind(this);
    this.selected1=this.selected1.bind(this);
    this.data11=this.data11.bind(this);
    this.edit=this.edit.bind(this);
    this.delete=this.delete.bind(this);
    this.editn=this.editn.bind(this);
    this.nameedit=this.nameedit.bind(this);
  }
  data11(a)
  {
    this.setState({myarr1:a});
  }
  selected(a,iid)
  {
    console.log(iid)
      this.setState({myarr:a});
      i=iid;
  }
  selected1(a)
  {
    this.setState({myarr2:a});
    console.log(a)
  }
  editn(a,b,c)
  {
    cat=a;
    val=b;
    idd=c;
    console.log(idd)
  }
  delete(x)
  {
    console.log(i);
    console.log(x._id);
    fetch(`http://localhost:8081/state/deletetouristplace/${x._id}/${i}`,{
      method: "DELETE",
      headers: {
      "Content-Type":"application/json",
      }
    })
    .then(res => {
      if (res.ok) {
          console.log(`${x} is deleted`);
      }
      })
    .then(res => {
      alert(`TOURIST PLACE:${x} DELETED SUCCESFULLY!!`);
    })
  }
  nameedit(x,nid)
  {
    fetch(`http://localhost:8081/state/stateupdate/${nid}`,{
      method: "PUT",
      headers: {
      "Content-Type":"application/json",
      },
      body: JSON.stringify(x)
    })
    .then(res => {      
      if(res.ok) {
      return res.json();
      }
    })
    .then(res => {
      alert(`STATE:${JSON.stringify(res)} EDITED SUCCESFULLY!!`);
    })
  }
  edit(x)
  {
    fetch(`http://localhost:8081/state/update/${x.id}`,{
      method: "PUT",
      headers: {
      "Content-Type":"application/json",
      },
      body: JSON.stringify(x)
    })
    .then(res => {      
      if(res.ok) {
      return res.json();
      }
    })
    .then(res => {
      alert(`STATE:${JSON.stringify(res)} EDITED SUCCESFULLY!!`);
    })    
  }
  edit1(x)
  {
    fetch(`http://localhost:8081/state/update1/${x.id}`,{
      method: "PUT",
      headers: {
      "Content-Type":"application/json",
      },
      body: JSON.stringify(x)
    })
    .then(res => {      
      if(res.ok) {
      return res.json();
      }
    })
    .then(res => {
      alert(`STATE:${JSON.stringify(res)} EDITED SUCCESFULLY!!`);
    })    
  }
    
  add(prop) {
    console.log(prop)
    let t = {
      id: prop.id,
      name: prop.name,
      capital: prop.capital,
      about: prop.about,
      climate: prop.climate,
      history: prop.history,
      time: prop.time,
      food: prop.food,
      img: prop.img,
      tourist:prop.tourist,  
      products:prop.products     
      
    };
    console.log(t.tourist);
    console.log(t.products);
    fetch("http://localhost:8081/state/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(t)
    })
      .then(res => res.json())
      .then(res => {
        alert(`NEW STATE:${JSON.stringify(res)} ADDED SUCCESFULLY!!`);
        console.log("done");
      });
  }
  data(arr) {
    this.setState({ arr1: arr });
  }
  data1(ar) {
    this.setState({ arr2: ar });
  }

  async componentDidMount() {
    const url = "http://localhost:8081/state";
    const response = await fetch(url);
    const jsondata = await response.json();
    var stringdata = JSON.stringify(jsondata);
    this.setState({ statedata: jsondata, loading: true });
  }
  render() {
    return (     
      <BrowserRouter>
        <div>
          {this.state.loding || !this.state.statedata ? (
            <div>{console.log("loding")}</div>
          ) : (
            <div>
              <div>{console.log("loding done")}</div>
              {console.log(this.state.arr1)}
              <Navbar statedatapass={this.state.statedata} />
              <Switch>
                <Route
                  path="/"
                  exact
                  render={() => (
                    <Mainpage statedatapass={this.state.statedata} />
                  )}
                />
                <Route
                  path="/Home"
                  render={() => (
                    <Mainpage statedatapass={this.state.statedata} />
                  )}
                />

                {/* tourism_department */}
                <Route path="/Registeration" component={Registeration} />

                <Route
                  path="/Tourismdataform"
                  render={() => (
                    <Tourismdataform
                      tour={this.state.statedata}
                      onadd={this.add} 
                      tt={this.state.arr1}
                      prod={this.state.arr2}
                    />
                  )}
                />
                <Route
                  path="/Addtourist"
                  render={() => (
                    <Addtourist
                      tour={this.state.statedata}
                      ondata={this.data}
                    />
                  )}
                />
                <Route
                  path="/Addproducts"
                  render={() => (
                    <Addproducts
                      tour={this.state.statedata}
                      ondata1={this.data1}
                    />
                  )}
                />

                <Route path="/overview" component={Overview} />
                <Route path="/Aboutpage" component={Aboutpage} />
                <Route path="/BestTime" component={BestTime} />
                <Route path="/map" component={Map} />
                <Route path="/Placestovisit" component={Placestovisit} />
                <Route path="/FamousFood" component={Famousfood} />
                <Route path="/product2" component={Product2} />
                
                
                <Route path="/Products" component={Displayproducts} />
                <Route path="/productdesc" component={Productdesc} />
                {console.log(this.state.arr2)}
                <Route path="/admin" render={() => (
                  <First
                    tour={this.state.statedata}
                    data={this.state.arr1}
                    data1={this.state.arr2}
                    ondata11={this.data11}
                  />
                )} />

                <Route
                path="/add"
                render={() => (
                  <Form
                  cat={cat}
                  val={val}
                  nameid={idd}
                  oneditn={this.nameedit}
                  />
                )}              
              />
              <Route path="/display" render={() => (
                <Displaydata
                ondata={this.selected}
                data={this.state.myarr1}
                oneditn={this.editn}
                />
              )}/>
              <Route path="/displayplaces"
              render={() => (
                <Displaytourist
                ondatat={this.selected1}
                places={this.state.myarr}
                ondelete={this.delete}
                />
              )}/>
              <Route path="/displayproduct"
              render={() => (
                <Displayproduct
                ondatat={this.selected1}
                places={this.state.myarr}
                ondelete={this.delete}
                />
              )}/>
              <Route path="/edittouristform"
              render={() => (
                <Edittourist
                editplace={this.state.myarr2}
                onedit={this.edit}
                />
              )}/>
              <Route path="/editproductform"
              render={() => (
                <Editproduct
                editplace={this.state.myarr2}
                onedit1={this.edit1}
                />
              )}/>
              </Switch>
              <Footer />
            </div>
          )}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
