import React, { Component } from "react";
import { Link } from "react-router-dom";
import './stylesheets/smallnavbar.css'
export default class Smallnav extends Component {
  state = {
    navstatedata: this.props.navstatedata
  };

  render() {
    console.log(this.state.navstatedata);
    return (
      <div  style={{color:"black", fontSize:"20px"}}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="smallnavbar" >
          <div  id="navbarSupportedContent">
            <ul>
                <Link
                  className="nav-item nav-link active hvr-underline-from-left"
                  to={{
                    pathname: "/overview",
                    state:{
                      statedatapass:this.state.navstatedata
                    }
                    }}
                >
                  overview
                </Link>
                <Link
                  className="nav-item nav-link hvr-underline-from-left"
                  to={{
                    pathname: "/Placestovisit",
                    state:{
                      statedatapass:this.state.navstatedata
                    }
                    }}
                >
                  Places To Visit
                </Link>
                <Link
                  className="nav-item nav-link hvr-underline-from-left"
                  to={{
                    pathname: "/Products",
                    state:{
                      statedatapass:this.state.navstatedata
                    }
                    }}
                >
                  Product
                </Link>
                <Link
                  className="nav-item nav-link hvr-underline-from-left"
                  to={{
                    pathname: "/FamousFood",
                    state:{
                      statedatapass:this.state.navstatedata
                    }
                    }}
                >
                  Food
                </Link>
                <Link
                  className="nav-item nav-link hvr-underline-from-left"
                  to={{
                    pathname: "/BestTime",
                    state:{
                      statedatapass:this.state.navstatedata
                    }
                    }}
                >
                  BestTime
                </Link>
                <Link
                  className="nav-item nav-link hvr-underline-from-left"
                  to={{
                    pathname: "/map",
                    state:{
                      statedatapass:this.state.navstatedata
                    }
                    }}
                >
                  Map
                </Link>
              {/* <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  States
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown" id="nav1">
                  {this.linksmake}

                  <div className="dropdown-divider"></div>
                  <a className="dropdown-item" href="#">
                    Something else here
                  </a>
                </div>
              </li> */}
            </ul>
          </div>
        </nav>
        </div>
       );

  }
}
